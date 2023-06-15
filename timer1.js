const args = process.argv.slice(2);


const beeper = function(array) {
  if(array.length === 0) {
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== NaN && array[i] >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, array[i] * 1000);
    }
  }
}

beeper(args);