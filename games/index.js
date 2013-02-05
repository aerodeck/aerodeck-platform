var fs = require('fs');
var games = [];

// Load any games in the directory
fs.readdirSync(__dirname).forEach(function(file) {
  if (file.indexOf(".js", file.length - 3) !== -1) {
    if (file !== "index.js") {
      games.push(require(__dirname + '/' + file));
    }
  }
});

module.exports = games;
