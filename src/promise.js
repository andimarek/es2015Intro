
const newPromise = new Promise((resolve, reject) => {
  if (someError) {
    reject('error');
  } else {
    resolve('resolved value');
  }

});

newPromise.then((value) => {
  console.log('resolved value: ', value);
})