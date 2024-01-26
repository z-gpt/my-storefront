#!/bin/bash

# Array of files to copy
declare -a files_to_copy=(
  "@dropins"
)

# Remove existing dropins folder
rm -rf vendors/

# Create vendors directory if not exists
mkdir -p vendors/

# Copy specified files from node_modules/@dropins to vendors/dropins
for file in "${files_to_copy[@]}"; do
  cp -R "node_modules/$file" "vendors/."
done

# Remove package.json files inside dropins
find vendors -type f -name "package.json" -exec rm {} \;

echo "🫡 Vendors installed successfully!"