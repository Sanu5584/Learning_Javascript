// Immediately Invoked Function Expressions (IIFE)

(  function one(){
    // named IIFE
    console.log(`DB CONNECTED`);
  })();  // here semicolon is compulsory to end the iife function

// see this as a function syyntax only

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Sanidhya");
