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

// Dino.prototype.getDino(paragraphs, words) {
//   $.get(`http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=${paragraphs}&words=${words}`, function(response) {
//     return response;
//   });
// }

exports.dinoModule = Dino;
