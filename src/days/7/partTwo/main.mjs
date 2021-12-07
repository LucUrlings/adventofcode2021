import { input } from "../input.mjs";

const rangeArray = (start, end) => {
  let foo = [];
  for (let i = start; i <= end; i++) {
    foo.push(i);
  }
  return foo;
};

const main = (startingPositions) => {
  const min = Math.min(...startingPositions);
  const max = Math.max(...startingPositions);

  const destinationArray = rangeArray(min, max);
  const result = [];
  destinationArray.forEach(destinationNumber => {
    let fuelUsed = 0;
    startingPositions.forEach(startingNumber => {
      if (destinationNumber < startingNumber) {
        const toMove = startingNumber - destinationNumber
        fuelUsed += toMove * (toMove + 1) / 2;
      } else if (destinationNumber > startingNumber) {
        const toMove = destinationNumber - startingNumber
        fuelUsed += toMove * (toMove + 1) / 2;
      }
    });
    result.push({ destinationNumber, fuelUsed });
  });



  return result.reduce((prev, curr) => {
    return prev.fuelUsed < curr.fuelUsed ? prev : curr;
  });
};

console.log(main(input));