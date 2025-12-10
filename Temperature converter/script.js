function convertTemperature() {

 
  let temp = document.getElementById("temperatureInput").value;

  
  let unit = document.getElementById("unit").value;

  
  let result = document.getElementById("result");

  
  if (temp === "") {
    result.textContent = "Please enter a number 🌡️";
    return;
  }

  
  if (unit === "celsius") {
    let fahrenheit = (temp * 9/5) + 32;
    result.textContent = temp + "°C = " + fahrenheit.toFixed(2) + "°F";
  } 
  else {
    let celsius = (temp - 32) * 5/9;
    result.textContent = temp + "°F = " + celsius.toFixed(2) + "°C";
  }

}
