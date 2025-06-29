#!/bin/bash
# This script downloads a file from a router and saves it under the FromRouter/ directory, preserving directory structure.
# Usage: ./downloader.sh <router_ip> <path_from_root>
# Example: ./downloader.sh 192.168.0.1 js/global.js

set -e

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <router_ip> <path_from_root>"
    exit 1
fi

ROUTER_IP="$1"
PATH_FROM_ROOT="$2"
TARGET_PATH="FromRouter/${PATH_FROM_ROOT}"

# Create target directory if it doesn't exist
TARGET_DIR=$(dirname "$TARGET_PATH")
mkdir -p "$TARGET_DIR"

# Download the file using curl
curl -fsSL "http://${ROUTER_IP}/${PATH_FROM_ROOT}" -o "$TARGET_PATH"

echo "Downloaded to $TARGET_PATH"
