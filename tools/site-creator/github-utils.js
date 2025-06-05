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

export async function createGitHubRepo(githubToken, setStatus) {
  let _newlyCreatedRepo = false;
  let user;
  let defaultRepoName;

  try {
    const octokit = createOctokit(githubToken);

    // Get user info to determine default repo name
    const { data: userData } = await octokit.request('GET /user');
    user = userData;
    defaultRepoName = `${user.login}-commerce`;

    // Check if repo already exists
    try {
      await octokit.request('GET /repos/{owner}/{repo}', {
        owner: user.login,
        repo: defaultRepoName,
        request: { retries: 0 }, // Don't retry this check
      });
      // If we get here, repo exists - don't mark as newly created
      _newlyCreatedRepo = false;
    } catch (error) {
      if (error.status === 404) {
        // Repo doesn't exist, we'll create it
        _newlyCreatedRepo = true;
      } else {
        throw error;
      }
    }

    // Create fork of template repository
    const { data: forkData } = await octokit.request('POST /repos/{owner}/{repo}/forks', {
      owner: TEMPLATE_REPO.split('/')[0],
      repo: TEMPLATE_REPO.split('/')[1],
      name: defaultRepoName,
      default_branch_only: true,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    // Add a small delay to allow fork to complete
    await new Promise((resolve) => { setTimeout(resolve, 2000); });

    // Get default branch
    const { data: repoData } = await octokit.request('GET /repos/{owner}/{repo}', {
      owner: forkData.owner.login,
      repo: defaultRepoName,
    });
    const defaultBranch = repoData.default_branch;

    // Update fstab.yaml with retries
    const { data: fstabData } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: defaultRepoName,
      path: 'default-fstab.yaml',
      request: { retries: 5, retryAfter: 2 }, // Override retry settings for this specific request
    });

    const fstabContent = atob(fstabData.content);
    const updatedFstab = fstabContent
      .replace(/{org}/g, forkData.owner.login)
      .replace(/{site}/g, defaultRepoName);

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: defaultRepoName,
      path: 'fstab.yaml',
      message: 'Update fstab.yaml with new repository path',
      content: btoa(updatedFstab),
      branch: defaultBranch,
    });

    // Update config.json with retries
    const { data: configData } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: defaultRepoName,
      path: 'demo-config.json',
      request: { retries: 5, retryAfter: 2 }, // Override retry settings for this specific request
    });

    const configContent = atob(configData.content);
    const updatedConfig = configContent.replace(/hlxsites\/aem-boilerplate-commerce/g, `${forkData.owner.login}/${defaultRepoName}`);

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: defaultRepoName,
      path: 'config.json',
      message: 'Update config.json with new repository path',
      content: btoa(updatedConfig),
      branch: defaultBranch,
    });

    // Update sidekick config with retries
    const { data: sidekickData } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: defaultRepoName,
      path: 'demo-sidekick.json',
      request: { retries: 5, retryAfter: 2 }, // Override retry settings for this specific request
    });
    const sidekickContent = atob(sidekickData.content);
    const updatedSidekick = sidekickContent.replace(/hlxsites\/aem-boilerplate-commerce/g, `${forkData.owner.login}/${defaultRepoName}`);

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: forkData.owner.login,
      repo: defaultRepoName,
      path: 'tools/sidekick/config.json',
      message: 'Update sidekick config with new repository path',
      content: btoa(updatedSidekick),
      branch: defaultBranch,
    });

    return {
      repoCreated: true,
      newlyCreatedRepo: _newlyCreatedRepo,
      owner: forkData.owner.login,
      repo: defaultRepoName,
    };
  } catch (error) {
    setStatus({ type: 'error', message: `Failed to create GitHub repository: ${error.message}` });
    throw error;
  }
}

export { createOctokit, TEMPLATE_REPO };
