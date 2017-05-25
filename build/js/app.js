(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "222397d9a3e996011d78537756eaf874"

},{}],2:[function(require,module,exports){
function Dino() {
}

Dino.prototype.getLoremIpsum = function(paragraphs, words, displayLoremIpsum) {
  $.get(`http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=${paragraphs}&words=${words}`)
    .then(function(response) {
      displayLoremIpsum(response);
    })
    .fail(function(error) {
      $('.output').text(error.responseJSON.message);
    });
};

Dino.prototype.getDino = function(text, displayDino) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1')
    .then(function(response) {
      var splitText = text.split(" ");
      var lastWord = splitText[(splitText.length - 2)];
      splitText.pop();
      splitText.pop();
      splitText.push(response + " ");
      newText = splitText.join(" ");
      displayDino(newText);
    })
    .fail(function(error) {
      $('.output').text(error.responseJSON.message);
    });
};

exports.dinoModule = Dino;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Word() {
}

Word.prototype.checkWord = function(word){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${word}`,
    "method": "GET",
    "headers": {
      "accept": "application/json",
      "app_id": "bdbe1ab6",
      "app_key": `${apiKey}`,
      "cache-control": "no-cache",
      "postman-token": "6a78149f-dcea-8941-c491-f1da8ea4e431"
    }
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
};

exports.wordModule = Word;

},{"./../.env":1}],4:[function(require,module,exports){
var Dino = require('./../js/dino.js').dinoModule;

var displayLoremIpsum = function(response) {
  $('.output').html('<h3>Your lorem ipsum:</h3><br><br>' + response);
};

var displayDino = function(dino) {
  $('#dino-text').val(dino);
};

$(function() {
  $('#generate-dino').click(function() {
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    var newDino = new Dino();
    newDino.getLoremIpsum(paragraphs, words, displayLoremIpsum);
  });

  $('#dino-text').keyup(function(e){
    var dinoWord = new Dino();
    if (e.which === 32){
      var text = $('#dino-text').val();
      dinoWord.getDino(text, displayDino);
    }
  });

});  //document ready close

var Word = require('./../js/word-check.js').wordModule;

$(function(){
  $('#word-test-button').click(function(){
    var word = $('#word-test').val();
    var newWord = new Word();
    newWord.checkWord(word);
  });
});

},{"./../js/dino.js":2,"./../js/word-check.js":3}]},{},[4]);
