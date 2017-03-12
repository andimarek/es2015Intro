const someFunction = (arg, arg2) => {
  return arg * arg2;
}

const noArg = () => 'returned value';

const withOneArgument = arg => arg * 2; 

const withOneArgumentAndBody = arg => {
  return arg * 2; 
}

function preservedContext() {
  this.someValue = 10;
  setTimeout( () => {
    console.log(this.someValue);
  }, 1000);
}