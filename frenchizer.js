function toFrench(english) {
  if (typeof(english) !== 'string') {
    throw new Error("Invalid input. Please use string!");
  }

  // How to translate any sentence in French.
  // 1. Add "uh" at the beginning
  // 2. Change all the "th" into "z" if the "th" is followed by a vowel
  // 3. Change the p
  // 4. Change all the "r" into "R"
  // 5. Add "sacrebleu" at the end while managing punctuation properly

  result = "Uh "
  result += english.replace(/th(?=a|e|i|o|u)/gi,'z')
    .replace(/th(?!=a|e|i|o|u)/gi,'s')
    .replace(/r/g,'R')
  if (result[result.length-1] === '.' | result[result.length-1] === '!' | result[result.length-1] === '?') {
    result = result.substring(0, result.length-1) + " sacrebleu" + result[result.length-1];
  } else {
    result += " sacrebleu";
  }
  return result;
}

module.exports = { toFrench }
