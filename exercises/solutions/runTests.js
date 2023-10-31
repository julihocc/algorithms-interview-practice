const glob = require('glob');
const { exec } = require('child_process');


const testFilesPattern = '**/*.test.ts';

glob(testFilesPattern, (err, files) => {
    if (err) {
        console.error('Error finding test files:', err);
        return;
    }

    
    for (const file of files) {
        exec(`jest ${file}`, (error, stdout, stderr) => {
            ;
            if (error) {
                console.error(`Error running tests in ${file}:`, error.message);
                console.error(stderr);
                return;
            } else {
                ;
            }
            if(!!stdout) {
                ;
            }

        });
    }

});
