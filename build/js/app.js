(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/dino.js":1}]},{},[2]);
