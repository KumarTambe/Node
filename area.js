function areaOfCircle(radius) {
    console.log(Math.PI * radius * radius)
}

function areaOfRectangle(length, breadth) {
    console.log(length * breadth)
}

function areaOfTriangle(base, height) {
    console.log(0.5 * base * height)
}

module.exports = { areaOfCircle, areaOfRectangle, areaOfTriangle }