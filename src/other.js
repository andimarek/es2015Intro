class MyClass {

  constructor() {
    this.someProp = '12';
  }

  myMethod() {
    return this.someProp;
  }

}


async function myAsyncFunction() {
  const value = await someAsynCall();
  return value;
}