const fs = require("fs");
const path = require("path");

const baseDir = "./"; // Adjust this to your exported game folder
const outputFilePath = "./sw.js";

const ignoredFiles = ["sw.js", "generate-cache.js"]; // Add any files you want to exclude

function getFilesRecursively(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFilesRecursively(filePath));
        } else {
            if (!ignoredFiles.includes(file)) {
                results.push(filePath.replace(baseDir, "/").replace(/\\/g, "/"));
            }
        }
    });
    return results;
}

const filesToCache = getFilesRecursively(baseDir);

const swContent = `
const cacheName = "game-cache-v1";
const filesToCache = ${JSON.stringify(filesToCache, null, 2)};

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
`;

fs.writeFileSync(outputFilePath, swContent, "utf8");
console.log("Service worker generated with cache list!");
