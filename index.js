function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord =  reverseString(word)
  if (word === reversedWord){
    return true;
  }else {
    return false;
  }
}

function reverseString(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord
}

/* 
  Add your pseudocode here
  reverse the word
  if the reversed word is the same as the actual  word return true
  if not return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //level === level
  //refer === refer
  //madam === madam
  //wow === wow
  //car ===rac*
  console,log("Expecting: true")
  console.log("=>", isPalindrome("level"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
