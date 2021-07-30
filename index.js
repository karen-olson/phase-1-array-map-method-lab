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

  const capitalizedWords = arrayOfWords.map(capitalize);

  const stringOfCapitalizedWords = capitalizedWords.join(" ");

  return stringOfCapitalizedWords;
}

function capitalize(word) {
  const newWord = word.slice();

  const capitalizedWord = newWord.replace(newWord[0], newWord[0].toUpperCase());
  return capitalizedWord;
}

const titleCased = () => {
  return tutorials.map(wordIterator);
};

const testResult = titleCased();
console.log(testResult);
