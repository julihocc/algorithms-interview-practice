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
        exec(`jest ${file}`, (error, stdout, stderr) => {
            console.log(`Running tests in ${file}...`);
            if (error) {
                console.error(`Error running tests in ${file}:`, error.message);
                console.error(stderr);
                return;
            } else {
                console.log(`Tests in ${file} ran successfully!`);
            }
            if(!!stdout) {
                console.log(`stdout: ${stdout}`);
            }

        });
    }

});
