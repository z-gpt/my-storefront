/* eslint-disable no-underscore-dangle, import/no-unresolved */

import { Octokit } from 'https://esm.sh/@octokit/core';
import { retry } from 'https://esm.sh/@octokit/plugin-retry';

// Create custom Octokit with retry plugin
const MyOctokit = Octokit.plugin(retry);
const createOctokit = (token) => new MyOctokit({
  auth: token,
  retry: {
    doNotRetry: [400, 401, 403, 404, 410, 422, 451], // Default doNotRetry list
  },
  request: {
    retries: 3, // Number of retries
    retryAfter: 1, // Delay between retries in seconds
  },
});

const TEMPLATE_REPO = 'hlxsites/aem-boilerplate-commerce';

async function checkExistingFork(octokit, user) {
  try {
    const { data: forks } = await octokit.request('GET /repos/{owner}/{repo}/forks', {
      owner: TEMPLATE_REPO.split('/')[0],
      repo: TEMPLATE_REPO.split('/')[1],
      per_page: 100,
    });

    return forks.find((fork) => fork.owner.login === user.login);
  } catch (error) {
    console.error('Error checking for existing forks:', error);
    return null;
  }
}

export async function createGitHubRepo(githubToken, setStatus, siteName) {
  let user;
  let repoName;

  try {
    const octokit = createOctokit(githubToken);

    // Get user info
    const { data: userData } = await octokit.request('GET /user');
    user = userData;
    repoName = siteName;

    // Check for existing fork
    const existingFork = await checkExistingFork(octokit, user);
    if (existingFork) {
      const error = new Error('EXISTING_FORK');
      error.forkUrl = existingFork.html_url;
      error.forkName = existingFork.name;
      throw error;
    }

    // Check if repo already exists
    try {
      await octokit.request('GET /repos/{owner}/{repo}', {
        owner: user.login,
        repo: repoName,
        request: { retries: 0 }, // Don't retry this check
      });
    } catch (error) {
      if (error.status === 404) {
        // Repo doesn't exist, we'll create it
      } else {
        throw error;
      }
    }

    // Create fork of template repository. hlxsites currently disallows templating via OAuth.
    const { data: forkData } = await octokit.request('POST /repos/{owner}/{repo}/forks', {
      owner: TEMPLATE_REPO.split('/')[0],
      repo: TEMPLATE_REPO.split('/')[1],
      name: repoName,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    // Add a small delay to allow fork to complete
    await new Promise((resolve) => { setTimeout(resolve, 2000); });

    // Get default branch
    const { data: repoData } = await octokit.request('GET /repos/{owner}/{repo}', {
      owner: forkData.owner.login,
      repo: repoName,
    });
    const defaultBranch = repoData.default_branch;

    // Update fstab.yaml with retries
    const { data: fstabData } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: repoName,
      path: 'default-fstab.yaml',
      request: { retries: 5, retryAfter: 2 }, // Override retry settings for this specific request
    });

    const fstabContent = atob(fstabData.content);
    const updatedFstab = fstabContent
      .replace(/{org}/g, forkData.owner.login)
      .replace(/{site}/g, repoName);

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: repoName,
      path: 'fstab.yaml',
      message: 'Update fstab.yaml with new repository path',
      content: btoa(updatedFstab),
      branch: defaultBranch,
    });

    // Update config.json with retries
    const { data: configData } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: repoName,
      path: 'demo-config.json',
      request: { retries: 5, retryAfter: 2 }, // Override retry settings for this specific request
    });

    const configContent = atob(configData.content);
    const updatedConfig = configContent.replace(/hlxsites\/aem-boilerplate-commerce/g, `${forkData.owner.login}/${repoName}`);

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: repoName,
      path: 'config.json',
      message: 'Update config.json with new repository path',
      content: btoa(updatedConfig),
      branch: defaultBranch,
    });

    // Update sidekick config with retries
    const { data: sidekickData } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: repoName,
      path: 'demo-sidekick.json',
      request: { retries: 5, retryAfter: 2 }, // Override retry settings for this specific request
    });
    const sidekickContent = atob(sidekickData.content);
    const updatedSidekick = sidekickContent.replace(/hlxsites\/aem-boilerplate-commerce/g, `${forkData.owner.login}/${repoName}`);

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: repoName,
      path: 'tools/sidekick/config.json',
      message: 'Update sidekick config with new repository path',
      content: btoa(updatedSidekick),
      branch: defaultBranch,
    });

    return {
      repoCreated: true,
      owner: forkData.owner.login,
      repo: repoName,
    };
  } catch (error) {
    setStatus({ type: 'error', message: `Failed to create GitHub repository: ${error.message}` });
    throw error;
  }
}

export { createOctokit, TEMPLATE_REPO };
