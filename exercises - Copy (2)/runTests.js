const glob = require('glob');
const { exec } = require('child_process');


const testFilesPattern = '**/*.test.ts';

glob(testFilesPattern, (err, files) => {
    if (err) {
        console.error('Error finding test files:', err);
        return;
    }

    // Loop through each found test file and run it
    for (const file of files) {
        console.log(`Running tests in ${file}...`);

        exec(`npx jest ${file}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error running tests in ${file}:`, error.message);
                console.error(stderr);
                return;
            }

            console.log(stdout);
        });
    }
});
