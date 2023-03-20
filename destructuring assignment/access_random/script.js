let my_arr = [34, 45, 3, 6, 47];

const access_elements = (arr) => {
  let [first, second, ...rest] = arr;
  let last = rest.pop();
  console.log(first, second, last);
};

access_elements(my_arr)