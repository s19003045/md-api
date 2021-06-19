const fs = require("fs");

const collectMdFile = (mdFiles = [], directoryPath) => {
    // const mdFiles = [];
    return new Promise((resolve, reject) => {
        return fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                // return console.log("Unable to scan directory: " + err);
                reject(err);
            }
            //listing all files using forEach
            files.forEach(function (file) {
                // Do whatever you want to do with the file
                // console.log(file);
                mdFiles.push(file);
            });
            // console.log(mdFiles);
            resolve(mdFiles);
        });
    });
};

module.exports = {
    collectMdFile,
};
