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

import fileSystem from './fileSystem.js';
import path from 'path'
import { fileURLToPath } from 'url';






