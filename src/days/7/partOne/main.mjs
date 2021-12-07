import { input } from "../input.mjs";

const rangeArray = (start, end) => {
  let foo = [];
  for (let i = start; i <= end; i++) {
    foo.push(i);
  }
  return foo;
};

const main = (inputArray) => {
  const min = Math.min(...inputArray);
  const max = Math.max(...inputArray);

  const startingPositions = [...inputArray];

  const destinationArray = rangeArray(min, max);
  const result = [];
  destinationArray.forEach(destinationNumber => {
    let fuelUsed = 0;
    startingPositions.forEach(startingNumber => {
      if (destinationNumber < startingNumber) {
        fuelUsed += startingNumber - destinationNumber;
      } else if (destinationNumber > startingNumber) {
        fuelUsed += destinationNumber - startingNumber;
      }
    });
    result.push({ destinationNumber, fuelUsed });
  });



  return result.reduce((prev, curr) => {
    return prev.fuelUsed < curr.fuelUsed ? prev : curr;
  });
};

console.log(main(input));