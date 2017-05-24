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
