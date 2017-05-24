var Dino = require('./../js/dino.js').dinoModule;

var displayLoremIpsum = function(response) {
  $('.output').html('<h3>Your lorem ipsum:</h3><br><br>' + response);
};

$(function() {
  $('#generate-dino').click(function() {
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    var newDino = new Dino();
    newDino.getLoremIpsum(paragraphs, words, displayLoremIpsum);
  });

  $('#dino-text').keyup(function(e){
    if (e.which === 32){
      var text = $('#dino-text').val();
      var splitText = text.split(" ");
      var lastWord = splitText[(splitText.length - 2)];
      splitText.pop();
      splitText.pop();
      splitText.push("dino ");
      newText = splitText.join(" ");
      dino = getDino("0","1");
      $('#dino-text').val(dino);
      console.log(dino);
    }
  });

});  //document ready close
