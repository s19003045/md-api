const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const cors = require("cors");
//
const { collectMdFile } = require("./utils");
const mdFileFolder = "content/md";
const directoryPath = path.join(__dirname, mdFileFolder);
let mdFiles = [];
const { ALLOWABLE_ORIGIN } = require("./config/");

collectMdFile(mdFiles, directoryPath).then((files) => {
    // console.log("mdFiles", mdFiles);
    mdFiles = files;
});
// console.log(mdFiles);

// cors
app.use(
    cors({
        origin: ALLOWABLE_ORIGIN,
    })
);

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/randomMD", (req, res) => {
    console.log(mdFiles);
    const fileName = mdFiles[Math.floor(Math.random() * mdFiles.length)];
    console.log("fileName", fileName);
    const absPath = path.join(__dirname, mdFileFolder, fileName);
    console.log(absPath);
    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

app.get("/*", (req, res) => {
    res.send("Not found");
});
app.listen(5000, () => {
    console.log("express app listen on port 5000");
});
