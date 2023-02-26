/*
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Alicia Guadalupe Cruz Pérez
 * @since Feb 02 2023
 * @desc The program that reads several numbers and prints the sum of the digits of each one.
 * @see {@link https://jutge.org/problems/P33839 }
 *
 */
'use strict';

/*
 * @desc Calcula la suma de los dígitos de un número
 * @param number {number} - Número del que se quiere sumar los dígitos
 * @returns {string} - Mensaje con el número y la suma de sus dígitos
 */
const sumDigits = (number: number): string => {
  const NUMBER_STRING: string = String(number);
  let sumDigits: number = 0;

  // Convierte en Number cada caracter del string y los va sumando
  for (let value of NUMBER_STRING) {
    sumDigits += Number(value);
  }

  const OUTPUT: string = `The sum of the digits of ${NUMBER_STRING} is ${sumDigits}. Fin`;
  return OUTPUT;
};

/*
 * @desc Comprueba si el mensaje es un número y lo devuelve, en caso contrario devuelve 0
 * @param message {string} - Mensaje a comprobar
 * @returns {number} - El número si es un número, 0 en caso contrario
 */
const inputNumber = (message: string): number => {
  const THE_NUMBER: number = Number(message);

  if (!Number.isNaN(THE_NUMBER)) { // It is a number
    return THE_NUMBER;
  }

  console.log('La entrada no era un número.');
  return 0;
};

/*
 * Almacena el valor devuelto por sumDigits(), pasánsole por parámetros el
 * valor leído en tiempo de ejecución e imprime la suma total de dígitos.
 */
function main() {
  const NUMBER: number = inputNumber(process.argv[2]);
  const SUMA: string = sumDigits(NUMBER);

  console.log(SUMA);
}

if (require.main === module) {
  main();
}