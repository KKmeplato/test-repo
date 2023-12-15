#!/usr/bin/env bash
# --------------------------------------------------------
# Script to automatically update and push
# a new package version, based on CI inputs.
# --------------------------------------------------------
# FROM CI ENV = { BUMP_LEVEL, INPUT_VERSION}

export CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "CURRENT_VERSION=${CURRENT_VERSION}" >>$GITHUB_ENV
echo "Input version is: $INPUT_VERSION"

# ci dropdown allows: "minor", "patch" or "semver"
echo "Bump level is: $BUMP_LEVEL"
echo "Current version is: $CURRENT_VERSION"

# Check if bumpLevel is default and semver is empty
if [ "$BUMP_LEVEL" == "semver" ] && [ -z "$INPUT_VERSION" ]; then
    echo "Bump level is semver, but semver is empty!"
    exit 1
fi

# Check if semVer is actually > currentVersion -> Compare versions using semver library
if [ -n "$INPUT_VERSION" ] && [ "$(node -e "console.log(require('semver').gt('$INPUT_VERSION', '$CURRENT_VERSION'))")" == "false" ]; then
    echo "Provided version is not greater than the current version."
    exit 1
fi

# Check if semVer is a valid semantic version
SEMVER_PATTERN="^(v?2)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?$"
if [ -n "$INPUT_VERSION" ] && ! echo "$INPUT_VERSION" | grep -E -q "$SEMVER_PATTERN"; then
    echo "Invalid semantic version. Please provide a version that matches the pattern."
    exit 1
fi

# Check if bumpLevel and semver are specified
if [ -n "$BUMP_LEVEL" ] && [ -n "$INPUT_VERSION" ]; then
    echo "Both bumpLevel and semver input version are specified."
fi

# Extract major, minor, and patch versions from the current version
IFS='.' read -r -a VERSION_PARTS <<< "$CURRENT_VERSION"
MAJOR="${VERSION_PARTS[0]}"
MINOR="${VERSION_PARTS[1]}"
PATCH="${VERSION_PARTS[2]}"

# Calculate the expected version based on bump level
if [ "$BUMP_LEVEL" == "minor" ] && [ -n "$INPUT_VERSION" ]; then
    EXPECTED_VERSION="$MAJOR.$((MINOR + 1)).$PATCH"
elif [ "$BUMP_LEVEL" == "patch" ] && [ -n "$INPUT_VERSION" ]; then
    EXPECTED_VERSION="$MAJOR.$MINOR.$((PATCH + 1))"
fi

echo "EXPECTED version is ${EXPECTED_VERSION}"

# ######## Update and create tag of semantic version ########

# Check if bumpLevel and input are specified
if [ -n "$BUMP_LEVEL" ] && [ -n "$INPUT_VERSION" ]; then
    # For non-semver bumps, compare with the expected version
    if [ "$BUMP_LEVEL" != "semver" ]; then
        if [ "$INPUT_VERSION" == "$EXPECTED_VERSION" ]; then
            # Check if bumplevel is minor/patch and Input version matches with expected output,Create a tag and push to branch.
            echo "Creating tag for specified version ($INPUT_VERSION)..."
            git tag -a "$INPUT_VERSION" -m "Release Version"
            git push origin v2 --follow-tags
        else
            echo "Error: Specified bump-level ($BUMP_LEVEL) does not match expected version ($EXPECTED_VERSION). CI fails because instructions are unclear"
            exit 1  # Exit with an error code
        fi
    fi
fi

# Use the specified version and bump level to input version
if [ "$BUMP_LEVEL" == "semver" ]; then
    npm --no-git-tag-version version $INPUT_VERSION
    # Commit the changes
    git add package.json package-lock.json
    git commit -m "Bump version to new semantic version"
    git tag -a ${INPUT_VERSION} -m "Release Version"
    git push origin v2 --follow-tags
fi
               
# Check if bumpLevel is minor/patch AND semver is empty, then use it for bumping
if [[ "${BUMP_LEVEL}" == "minor" || "${BUMP_LEVEL}" == "patch" ]] && [ -z "$INPUT_VERSION" ]; then
    echo "Using default bump level for versioning."

    # Perform version bumping using npm
    if [ "${BUMP_LEVEL}" == "minor" ]; then
        echo "Bumping version with 'minor' level."
        npm --no-git-tag-version version minor
    elif [ "${BUMP_LEVEL}" == "patch" ]; then
        echo "Bumping version with 'patch' level."
        npm --no-git-tag-version version patch
    fi

    COMMIT_TAG="$(node -p "require('./package.json').version")"
    
    git add package.json package-lock.json
    git commit -m "Bump version to ${COMMIT_TAG}"
    git tag -a "${COMMIT_TAG}" -m "Release Version"
    git push origin v2 --follow-tags
fi
