const fs = require('fs');
const path = require('path');

function walkDir(currentDir) {
    fs.readdirSync(currentDir, { withFileTypes: true }).forEach(dirent => {
        const currentPath = path.join(currentDir, dirent.name);

        if (dirent.isDirectory()) {
            if (dirent.name === 'solution') {
                copyAllFilesToParent(currentPath, currentDir);
            } else {
                walkDir(currentPath);
            }
        }
    });
}

function copyAllFilesToParent(srcDir, destDir) {
    fs.readdirSync(srcDir, { withFileTypes: true }).forEach(dirent => {
        const srcPath = path.join(srcDir, dirent.name);

        if (dirent.isFile()) {
            const destPath = path.join(destDir, dirent.name);
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${srcPath} to ${destPath}`);
        } else if (dirent.isDirectory()) {
            copyAllFilesToParent(srcPath, destDir); // Recursive call for subdirectories
        }
    });
}

// Starting from the current directory.
walkDir(process.cwd());
console.log('Operation completed!');
