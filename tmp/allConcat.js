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
