function celcius() {
    let celcius = (document.getElementById("input").value - 32) / 1.8;
    celcius = Math.round(celcius);
    document.getElementById("output").innerHTML = input.value + " " + "Fahrenheit" + " is " + celcius + " " + "degrees Celsius";
}

function fahrenheit() {
    let fahrenheit = document.getElementById("input").value * 1.8 +32;
    fahrenheit = Math.round(fahrenheit);
    document.getElementById("output").innerHTML = input.value + " " + "degrees Celsius"+ " is " + fahrenheit + " " + "Fahrenheit";
}