const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

try {
    // Get latest commit info
    // %s: subject, %an: author name
    const log = execSync('git log -1 --pretty=format:"%s|%an"').toString().trim();
    const [message, author] = log.split('|');

    // Prevent infinite loop
    if (message.startsWith('docs: update changelog')) {
        process.exit(0);
    }

    const changelogPath = path.join(__dirname, '..', 'CHANGELOG.md');
    let content = fs.readFileSync(changelogPath, 'utf8');

    // Format the new entry
    const newEntry = `- ${message} (@${author})`;

    // Insert under ## [Unreleased]
    if (content.includes('## [Unreleased]')) {
        // Check if "### Added" exists under Unreleased to maintain structure, or just append generic list
        // For simplicity, we'll look for the first list item or "### Added" and prepend, 
        // or just append after "## [Unreleased]" if it's empty.

        // We will inject it immediately after "## [Unreleased]\n" 
        // to ensure it's at the top of the unreleased section.

        const unreleasedMarker = '## [Unreleased]';
        const splitContent = content.split(unreleasedMarker);

        // Check if there is already content after [Unreleased]
        // We want to insert it nicely.
        // If there is a "### Added" or similar, we could try to respect it, but linear log is safest for automation.

        content = content.replace(unreleasedMarker, `${unreleasedMarker}\n\n${newEntry}`);
    } else {
        // If [Unreleased] is missing, convert top section or add it
        content = content.replace('# Changelog', `# Changelog\n\n## [Unreleased]\n\n${newEntry}`);
    }

    fs.writeFileSync(changelogPath, content);

    // Commit the changes
    try {
        execSync('git add CHANGELOG.md');
        execSync('git commit -m "docs: update changelog [skip ci]"');
        console.log('Changelog updated and committed.');
    } catch (commitError) {
        // If nothing to commit (e.g. somehow same message), ignore
        console.log('No changes to commit for changelog.');
    }

} catch (error) {
    console.error('Failed to update changelog:', error);
    process.exit(1);
}
