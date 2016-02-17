angular.module('hobbyt.services').
factory('Hobbies', function() {
  var _hobbies = [{
    name: 'Football',
    tags :['indoor', 'outdoor', 'ball', 'competitive', 'sport'],
    id: 'h1'
  },
  {
    name: 'Basketball',
    tags :['indoor', 'outdoor', 'ball', 'competitive', 'sport'],
    id: 'h2'
  },
  {
    name: 'Basketball',
    tags :['indoor', 'outdoor', 'ball', 'competitive', 'sport'],
    id: 'h2'
  },
  {
    name: 'Ping Pong',
    tags :['indoor', 'ball', 'competitive', 'sport'],
    id: 'h4'
  },
  {
    name: 'Wrestling',
    tags :['fighting', 'competitive', 'sport'],
    id: 'h5'
  },
  {
    name: 'Karate',
    tags :['fighting', 'competitive', 'sport'],
    id: 'h6'
  },
  {
    name: 'League of Legends',
    tags :['indoor', 'competitive', 'sport', 'video-game', 'MOBA'],
    id: 'h7'
  },
  {
    name: 'World of Warcraft',
    tags :['indoor', 'competitive', 'video-game', 'MMORPG'],
    id: 'h8'
  },
  {
    name: 'Diablo 3',
    tags :['indoor', 'video game', 'RPG'],
    id: 'h9'
  }];

  return {
    all: function() {
      return _hobbies;
    },
    get: function(id) {
      for(var i = 0; i < _hobbies.length; i++) {
        if(_hobbies[i].id === id) {
          return _hobbies[i];
        }
      }
    }
  };
});
