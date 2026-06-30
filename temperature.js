function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(fahrenheit)
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(celsius)
}

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius }