var games = require('../games');

exports.listGames = function(req, res) {
  Array.size = function(object) {
    var size = 0, key;
    for (key in object) {
        if (object.hasOwnProperty(key)) size++;
    }
    return size;
  };
  arraySize = Array.size(games);
  console.log(arraySize)
  for(i=0; i<arraySize; i++){
  	console.log(games[i].name); //test
  	return res.send(games[i].name); //real life usage
  }
  
  console.log('GET /games');
};
