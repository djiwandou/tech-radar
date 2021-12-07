//Create a new Browsersync instance
let bs = require('browser-sync').create();

//Initialize the browsersync instance
bs.init({
    server: {
        baseDir: "docs/",
        index: "index.html"
    },
    //Directories to watch for changes
    //The browser refreshes whenever a file in this directory is changed
    files: [
        'docs/'
    ]
});