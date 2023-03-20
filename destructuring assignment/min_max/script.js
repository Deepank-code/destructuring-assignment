let my_arr = [3, 2, 23, 346, 65, 6, 3, 46, 654, 4, 4565];

const max_min = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return {
    maximum_val: max,
    minimum_val: min,
  };
};

console.log(max_min(my_arr));
