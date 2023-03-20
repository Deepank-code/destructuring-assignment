const person = {
  name: "deepank",
  age: 21,
  address: {
    street: "B4 ,block amaba bhawan ",
    city: "pithoragarh",
    state: "Uttarakhnd",
  },
};
function obj_destructuring(obj) {
  let {
    name,
    address: { street },
  } = obj;
  return {
    name: name,
    address: {
      street: street,
    },
  };
}

console.log(obj_destructuring(person));
