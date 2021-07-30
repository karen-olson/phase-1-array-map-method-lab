const testSentence = "i really like you";


// * cbfn1: Word Iterator: Iterates through the words in each entence

function wordIterator(sentence) {
  const arrayOfWords = sentence.split(" ");
  //console.log(arrayOfWords);

  const capitalizedWords = arrayOfWords.map(capitalize);
  //console.log(capitalizedWords);

  const stringOfCapitalizedWords = capitalizedWords.join(" ");
  //console.log(stringOfCapitalizedWords);

  return stringOfCapitalizedWords;
}

// Testing Word Iterator --> Working!

const testWordIterator = wordIterator(testSentence);
console.log(testWordIterator);


// * cbfn2: Capitalize : Capitalizes a word

function capitalize(word) {
  // Copy the word so the function is nondestructive.
  console.log(word);
  const newWord = word.slice();

  // Modify the first letter of the new word, setting it to uppercase. Return the new word.
  const capitalizedWord = newWord.replace(newWord[0], newWord[0].toUpperCase());
  return capitalizedWord;
}

// Test cbfn2: Capitalize --> Working!

const testWord = "bobby";
const capitalTestWord = capitalize(testWord);
console.log(capitalTestWord);
