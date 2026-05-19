/*
           <h1>Temperature Converter:</h1> 
           <input type="number" id="textBox" value="0"><br>

           <input type="radio" id="toFahrenheit" name="unit">
           <label for="toFahrenheit">Celcius ➡ Fahrenheit</label><br>

           <input type="radio" id="toCelcius" name="unit">
           <label for="toCelcius"> Fahrenheit ➡ Celcius</label><br>

           <button type="button" onclick="convert()">submit</button>
           <p id="result"></p>
*/


const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
        // We GOT THIS BY using the Command Alt + 0176
    }
    else if (toCelcius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "Select a unit";
    }
}