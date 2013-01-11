var fs = require('fs');
var games = [];

// Load any games in the directory
var files = fs.readdirSync(__dirname);
files.forEach(function(file) {
  if (file.indexOf(".js", file.length - 3) !== -1) {
    if (file !== "index.js") {
      games.push(require("./" + file));
    }
  }
});

module.exports = games;
