/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
const whisper = (str) => {
  let strLower = str.toLowerCase();
  if (strLower.endsWith("!")) {
    strLower = strLower.slice(0, -1);
  }

  return `shh... ${strLower}`;
};

console.log(whisper("The KITTENS are SLEEPING!"));
// expected "shh... the kittens are sleeping"
console.log(whisper("PLEASE STOP SHOUTING."));
// expected "shh... please stop shouting"
console.log(whisper("MA'AM, this is a Wendy's!"));
// expected "shh... ma'am, this is a wendy's"
