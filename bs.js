//Create a new Browsersync instance
let bs = require('browser-sync').create();

//Initialize the browsersync instance
bs.init({
    port: 8080,
    watch: true,
    proxy: "0.0.0.0:8080",
    // server: {
    //     baseDir: "docs/",
    //     index: "index.html"
    // },
    //Directories to watch for changes
    //The browser refreshes whenever a file in this directory is changed
    files: [
        'docs/'
    ]
});