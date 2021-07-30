const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function wordIterator(sentence) {
  const arrayOfWords = sentence.split(" ");
  //console.log(arrayOfWords);

  const capitalizedWords = arrayOfWords.map(capitalize);
  //console.log(capitalizedWords);

  const stringOfCapitalizedWords = capitalizedWords.join(" ");
  //console.log(stringOfCapitalizedWords);

  return stringOfCapitalizedWords;
}

function capitalize(word) {
  // Copy the word so the function is nondestructive.
  //console.log(word);
  const newWord = word.slice();

  // Modify the first letter of the new word, setting it to uppercase. Return the new word.
  const capitalizedWord = newWord.replace(newWord[0], newWord[0].toUpperCase());
  return capitalizedWord;
}

/*
function titleCased() {
  return tutorials.map(wordIterator);
}
*/

const titleCased = () => {
  return tutorials.map(wordIterator);
};

const testResult = titleCased();
console.log(testResult);
