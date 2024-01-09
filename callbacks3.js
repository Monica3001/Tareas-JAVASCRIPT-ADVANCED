//Starting from the previous exercise, 
//we want to add to our function repeatHello,
//a clearInterval after 5 seconds, could you do that?

//The callback function must be an arrow function, can you also explain why?

function repeatHello (callback) {
  
    let time = setInterval (callback, 5000);
     setTimeout(() => clearInterval(time), 5000); 
     
    }
   let callback = (() => console.log("hello"));
    
repeatHello(callback)





