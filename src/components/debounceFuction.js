export const debounceFunction = (fn, delay) => {
  let time;
  return function () {
    const self = this;
    const args = arguments;
    clearTimeout(time);

    time = setTimeout(() => {
      fn.apply(self, args);
    }, delay);
  };
};
