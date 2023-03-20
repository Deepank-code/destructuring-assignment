const func = (a, b) => {
  [a, b] = [b, a];
  return [a, b];
};
func(34, 54);
