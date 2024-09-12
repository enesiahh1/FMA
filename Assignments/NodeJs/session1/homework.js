const fs = require('fs');
const path = require('path');

// Define the directory to search in and the file name
const directoryPath = path.join(__dirname, 'path-to-your-directory'); // Replace with your directory path
const fileName = 'example.txt'; // Replace with your file name

// Build the full path to the file
const filePath = path.join(directoryPath, fileName);

// Check if the file exists and read its content
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`File ${fileName} does not exist in the directory ${directoryPath}`);
        return;
    }

    // Read the file content
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading the file: ${err.message}`);
            return;
        }

        // Output the file content to the console
        console.log(`File content of ${fileName}:\n${data}`);
    });
});
