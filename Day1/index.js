/* commonJS method of import export - refer to greetings.js and temperature.js for the export function 

---- these are imports -----
const { sayHello, sayHi } = require('./greetings.js')
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./temperature.js')
const { areaOfCircle, areaOfRectangle, areaOfTriangle } = require('./area.js')

--- calling the function ----
celsiusToFahrenheit(32);
fahrenheitToCelsius(64)
areaOfCircle(4);
areaOfRectangle(4, 5);
areaOfTriangle(3, 6);

*/


import { add, subtract, multiply, divide } from "./calculator.js"
import { toUpperCase, toLowerCase, reverseString } from "./stringUtils.js"

console.log(add(5, 6))
console.log(subtract(4, 2))
console.log(multiply(1, 2))
console.log(divide(4, 2))


let str = "abcd"

console.log(toUpperCase(str))
console.log(toLowerCase(str))
console.log(reverseString(str))
