var Word = require('./../js/word-check.js').wordModule;

$(function(){
  $('#word-test-button').click(function(){
    var word = $('#word-test').val();
    var newWord = new Word();
    newWord.checkWord(word);
  });
});
