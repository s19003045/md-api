const faker = require("faker");
const fs = require("fs");
const path = require("path");

for (let i = 0; i < 50; i++) {
    generateMD();
}

function generateMD() {
    const fileName = faker.lorem.word() + "-" + faker.lorem.word();
    const fileContents = `---
title: "${faker.lorem.words()}"
layout: Page
---
${faker.lorem.paragraphs()}
`;
    const outputPath = path.join(__dirname, "../content/md", `${fileName}.md`);

    fs.writeFile(outputPath, fileContents, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(outputPath + " file generated");
    });
}
