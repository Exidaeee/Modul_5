const count = (function() {
  let sum = 0;
  return (arg) => {
    sum += arg;
    console.log(sum);
  };
})();

const createArray= (() => {
  let args = [];
  return (...newArgs) => {
    if (newArgs.length > 0) {
      args.push(...NewArgs);
    } else {
      args = [];
    }
    return args;
  };
})();