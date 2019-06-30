# jonas.re

This is the Git repository of my website where I publish articles (rarely). Basically it is just a playground for me
trying out new things and share my knowledge with others.

If you find a bug or there is something to improve, feel free to create an issue or open a Pull Request. <3

### Run locally

    npm start

This starts a local web server (which injects CSS changes and reloads the site automatically),
builds the site and starts a watch task for the following file types:

* SCSS
* JS
* HTML
* Markdown

If you just want to start a local web server without building the site and waiting for changes,
run the following command:

    gulp browser-sync
    
To build the site without running a local web server, run the following command:

    npm run build
