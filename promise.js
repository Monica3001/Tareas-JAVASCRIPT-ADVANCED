//Write a promise. If the variable called number is greater than 10,
// then it returns a resolve, otherwise it returns a reject.
//Then manage the promise with then and catch in case of any reject.


let promisefunction = new Promise ((resolve, reject) => {
    const number = 15;
    if (number > 10) {
        resolve (number);
    } else {
        reject("numero es menor a 15");
    }
})

promisefunction
.then ((resultado) => console.log(resultado))
.catch ((err) => console.error(err))

