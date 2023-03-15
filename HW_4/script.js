const count = (function() {
  let sum = 0;
  return (arg) => {
    sum += arg;
    console.log(sum);
  };
})();

  function createArray(...args) {
    if (args.length === 0) {
      return [];
    } else {
      return args;
    }
  }