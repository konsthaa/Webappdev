let celsius = parseFloat(prompt("Enter temperature in Celsius:"));

let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

document.getElementById("output").innerHTML = `
    <p>${celsius}°C is equal to <strong>${fahrenheit.toFixed(2)}°F</strong> and <strong>${kelvin.toFixed(2)}K</strong>.</p>
`;