// Use recursion to iterate over nested arrays

function deepIterator(target, callbackFn) {
  if (Array.isArray(target)) {
    for (const element of target) {
      console.log(element);
      deepIterator(element);
    }
  } else if (typeof target === "string") {
    console.log(target);
    const words = target.split(" ");
    console.log(words);
    return callbackFn(words); // apply callback function?
  }
}

// * Callback function: capitalize(word)
//      takes a word as an argument
//

function capitalize(word) {
  // Copy the word so the function is nondestructive.
  console.log(word);
  const newWord = word.slice();

  // Modify the first letter of the new word, setting it to uppercase. Return the new word.
  const capitalizedWord = newWord.replace(newWord[0], newWord[0].toUpperCase());
  return capitalizedWord;
}

const maybeTitleCased = deepIterator(tutorials, capitalize());

// Break the array up into sentences
// Returns an array of arrays, in which the nested arrays are sentences broken up into words.

const testSentences = getSentences(tutorials);
console.log(testSentences);

console.log(testSentences[0][0]);
const titleCaseMaybe = testSentences[0].map(capitalize);
console.log(titleCaseMaybe);

function getSentences(array) {
  const sentences = [];

  for (const element of array) {
    console.log(element);
    const sentence = element.split(" ");
    console.log(sentence);
    sentences.push(sentence);
  }
  return sentences;
}

// Break the sentence up into words.

const testWords = testSentences.split(" ");
console.log(testWords);

// Iterate through each word in the sentence array using .map and the capitalize callback fun
const testTitleCase = testSplit.map(capitalize);
console.log(testTitleCase);

// Capitalize callback function

//
//
//
//

const titleCased = (tutorials) => {
  const sentences = getSentences(tutorials);

  //const words = sentences.split();
  //console.log(words);
  return tutorials;
};

// iterate through each element in tutorials and copy it into its own array.

function getSentences(array) {
  // loop through each item in the array
  // save each element as its own array?
  const sentences = [];

  for (const element of array) {
    const sentence = element.split();
    sentences.push(sentence);
  }
  return sentences;
}

function getWords(sentence) {
  const words = [];

  for (const word of sentence) {
    const word = sentence.split();
    words.push(word);
  }
  return words;
}

const testSentences = getSentences(tutorials);
console.log(testSentences);

const testWords = testSentences.split();

const titledTutorials = titleCased(tutorials);

//
// Iterate through the arary. Break up each array element into words using str.split(). Use .map() and a callback function that splits each string.
// Create capitalize(word) to modify each word

// First .map() call and callback function: tutorials.map(capitalizeFn)

// Create the callback function: capitalize(word)
// Takes in a string as an argument
// Nondestructively modifies the [0] index of the string with .toUpperCase()

function capitalize(word) {
  // Copy the word so the function is nondestructive.
  const newWord = word.slice();

  // Modify the first letter of the new word, setting it to uppercase. Return the new word.
  const capitalizedWord = newWord.replace(newWord[0], newWord[0].toUpperCase());
  return capitalizedWord;
}

// Test the capitalize(word) callback function.
const testWord = "bobby";
const capitalizedTestWord = capitalize(testWord);
console.log(capitalizedTestWord);

//
