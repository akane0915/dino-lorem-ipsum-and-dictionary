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
