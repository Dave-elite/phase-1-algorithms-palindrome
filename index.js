function isPalindrome(word) {
  // Write your algorithm here

  ///fisrt we begin by splitting the string into array form and then reversing the array

  const reverseStr = word.split('').reverse().join('')

  //compare the reversed string with the original string 

  return word === reverseStr;


  
}
/* 
  Add your pseudocode here

  1. split the input word into an array of charcters
  2. reverse the array of characters
  3. join the reversed array back into a string
  4. compare the reversed with the original string
  5. Return true if they are the same, otherwise return false 
*/

/*
  Add written explanation of your solution here
  1. the function splits the input word into an array of characters, reverse that array. it then 
  compares the array with original string. if they are the same the function reutrns true indica
  ting true the word is a palindrome, otherwise return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
