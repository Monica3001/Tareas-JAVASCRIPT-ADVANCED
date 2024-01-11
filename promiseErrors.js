//Starting from the previous exercise,
// try to better handle all errors through the Error class and the catch method.
//Also add the finally method.

function firstPromise(isLogged) {
  try {
    return new Promise((resolve, reject) => {
      if ((isLogged = true)) {
        resolve(Math.random());
      } else {
        reject(console.log("error de firstPromise"));
      }
    });
  } catch (err) {
    return console.error(err);
  }
}

function secondPromise(number) {
  try {
    return new Promise((resolve, reject) => {
      let data = { name: "John", age: 24 };
      if (number > 0.5) {
        resolve(data);
      } else {
        reject(console.log("error de secondPromise"));
      }
    });
  } catch (err) {
    return console.error(err);
  }
}

firstPromise()
  .then(console.log(secondPromise(7)))
  .catch(() => console.error("something went wrong"))
  .finally(() => console.log("finally method"))
