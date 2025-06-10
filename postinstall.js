/* eslint-disable import/extensions, no-console */
const fs = require('fs');
const path = require('path');
const { dependencies, libraries } = require('./package.json');

// Define the libraries folder
const librariesDir = path.join('scripts', '__');

// Remove existing libraries folder
if (fs.existsSync(librariesDir)) {
  fs.rmSync(librariesDir, { recursive: true });
}

// Create scripts/__ directory if not exists
fs.mkdirSync(librariesDir, { recursive: true });

/**
 * Copies a library package to the libraries directory
 * @param {string} libraryName - The package name (e.g., '@dropins/storefront-cart')
 */
function copyLibrary(libraryName) {
  // Skip if package is not in package.json dependencies
  if (!dependencies[libraryName]) {
    console.warn(`⚠️  Library ${libraryName} not found in dependencies, skipping...`);
    return;
  }

  const packagePath = path.join('node_modules', libraryName);

  // Check if the package exists in node_modules
  if (!fs.existsSync(packagePath)) {
    console.warn(`⚠️  Package ${libraryName} not found in node_modules, skipping...`);
    return;
  }

  // Copy entire package directory to maintain full structure
  const targetPath = path.join(librariesDir, libraryName);
  fs.cpSync(packagePath, targetPath, {
    recursive: true,
    filter: (src) => (!src.endsWith('package.json')),
  });
  console.log(`✅ Copied ${libraryName} to ${targetPath}`);
}

// Process all libraries from configuration
if (libraries && Array.isArray(libraries)) {
  console.log('📦 Processing configured libraries...\n');
  libraries.forEach(copyLibrary);
} else {
  console.warn('⚠️  No libraries configuration found in package.json');
}

function checkPackageLockForArtifactory() {
  return new Promise((resolve, reject) => {
    fs.readFile('package-lock.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      try {
        const packageLock = JSON.parse(data);
        let found = false;
        Object.keys(packageLock.packages).forEach((packageName) => {
          const packageInfo = packageLock.packages[packageName];
          if (packageInfo.resolved && packageInfo.resolved.includes('artifactory')) {
            console.warn(`Warning: artifactory found in resolved property for package ${packageName}`);
            found = true;
          }
        });
        resolve(found);
      } catch (error) {
        reject(error);
      }
    });
  });
}

function checkSourceMaps() {
  const hlxIgnorePath = '.hlxignore';
  if (!fs.existsSync(hlxIgnorePath) || !fs.readFileSync(hlxIgnorePath, 'utf-8').includes('*.map')) {
    console.info('⚠️ Sourcemaps may be added to the repo. WARNING: Please remove the *.map files or add "*.map" to .hlxignore before going live!\n');
  }
}

checkSourceMaps();

checkPackageLockForArtifactory()
  .then((found) => {
    if (!found) {
      console.info('🎉 Drop-ins installed successfully!', '\n');
      process.exit(0);
    } else {
      console.error('🚨 Fix artifactory references before committing! 🚨');
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
