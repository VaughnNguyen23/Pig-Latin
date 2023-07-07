function translatePigLatin(str) {
  let vowels = "aeiou".split(""); // Array of vowels

  for (let i = 0; i < str.length; i += 1) {
    let individualLetter = str[i]; // Get the current letter
    if (vowels.indexOf(individualLetter) != -1 && i === 0) {
      // If the letter is a vowel and the first letter of the word
      return str + "way"; // Append "way" and return the translation
    }
    if (vowels.indexOf(individualLetter) != -1) {
      // If the letter is a vowel (not the first letter)
      return str.slice(i) + str.slice(0, i) + "ay"; // Move consonants to the end and append "ay"
    }
  }
  return str + "ay"; // If no vowels found, simply append "ay" to the end
}

let result = translatePigLatin("apple"); // Translate the word "apple"
console.log(result); // Print the resulting Pig Latin translation

