# Client Code
This directory contains the code for the front-end, single-page angular app that gets shipped by the server to a client.

### lib

Bower components installed via `bower install --save <pkg name>` as listed in `bower.json`

### modules

### other files

| File Name | Description |
| --------- | ----------- |
| index.hbs | The angular app skeleton - a [handlebars](http://handlebarsjs.com) version of `index.html` rendered by the server via`server/main/index.js` |
| unsupported.hbs | The html rendered when a browser is unsupported. |
| styles.css | Compiled CSS stylesheet for html files. |
| favicon.ico | Icon that displays on a browser tab. |
| humans.txt | A file for humans to read. |
| robots.txt | A file for robots to read. |
