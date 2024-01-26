#!/bin/bash

# Array of files to copy
declare -a files_to_copy=(
  "@dropins"
)

# Remove existing dropins folder
rm -rf scripts/__vendors__

# Create scripts/__vendors__ directory if not exists
mkdir -p scripts/__vendors__

# Copy specified files from node_modules/@dropins to scripts/__vendors__/dropins
for file in "${files_to_copy[@]}"; do
  cp -R "node_modules/$file" "scripts/__vendors__/."
done

# Remove package.json files inside dropins
find scripts/__vendors__ -type f -name "package.json" -exec rm {} \;

echo "🫡 Vendors installed successfully!"