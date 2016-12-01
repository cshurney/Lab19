var collection = ["Talk is cheap, show me the code." ,
                  "First, solve the problem. Then, write the code.",
                  "Java is to JavaScript what Car is to Carpet.",
                  "If today were the last day of life, would you want to do what you are about to do today."];

function randomPhrase (){
  var randomNum = [Math.floor(Math.random() * collection.length)];
  var randomPhrase = collection[randomNum];
  return randomPhrase;
}

//exports.randomPhrase = collection;
exports.collection = collection;
exports.randomPhrase = randomPhrase;
