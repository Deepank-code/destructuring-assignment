let large_string =
  "this is my large string of words joyss soft heated this is my string yo honey bling coder async life event loop is are the large string of numbers";

function count_words(string) {
  let arr_string = string.split(" ");
  let word_count = new Map();

  for (let i = 0; i < arr_string.length; i++) {
    if (word_count.has(arr_string[i])) {
      word_count.set(arr_string[i], word_count.get(arr_string[i]) + 1);
    } else {
      word_count.set(arr_string[i], 1);
    }
  }
  return word_count;
}
console.log(count_words(large_string))

;
