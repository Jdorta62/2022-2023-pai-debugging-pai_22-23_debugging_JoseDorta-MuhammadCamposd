/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Muhammad Campos Preira
 * @since Feb 15 2022
 * @desc  The program prints the length of the cycle(given by a SEQUENCE similar to collatz one),
 *        or the first number that strictly exceeds 10e6.
 */

'use strict';


/**
 * @desc the function calculates the length of the cycle, or the
 *       first number that strictly exceeds 10e6.
 * @param {Array} evenFactorNumber number that adds if n is even,
 * @param {Array} oddFactorNumber number that adds if n is not even,
 * @param {Array} intitialValue number to start the sequence
 * @return {Number} the length of the cycle or the first number that strictly exceeds 10e6
 */
const collatzCycleSize = function(evenFactorNumber, oddFactorNumber, intitialValue) {
  let elementPosition = 0;
  let nextElement = intitialValue;
  const sequenceElements = new Array(1000000).fill(0);
  sequenceElements[nextElement] = 0;
  while (nextElement <= 1000000) {
    if (nextElement % 2 === 0) {
      nextElement = nextElement / 2 + evenFactorNumber;
    } else {
      nextElement = 3 * nextElement + oddFactorNumber;
    }
    ++elementPosition;
    if (sequenceElements[nextElement]) {
      return elementPosition - sequenceElements[nextElement];
    }
    sequenceElements[nextElement] = elementPosition;
  }
  return nextElement;
};

/**
 * @desc Checks if the arguments are valid
 * @param {Array} argv - The arguments passed to the program
 * @return {Number} - 1 if the arguments are not valid, 0 otherwise
 *
 */
const checkArguments = function(argv) {
  if (argv.length === 0) {
    console.log('No arguments were passed');
    return 1;
  }
  if (argv.length > 3) {
    console.log('Too many arguments were passed');
    return 1;
  }
  return 0;
};


/**
 * @desc Main function
 */
function main() {
  const ARGV = process.argv.slice(2);
  if (checkArguments(ARGV)) {
    return;
  }
  console.log(collatzCycleSize(Number(ARGV[0]), Number(ARGV[1]), Number(ARGV[2])));
}

if (require.main === module) {
  main();
}
