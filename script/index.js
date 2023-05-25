function celcius() {
    let celcius = (document.getElementById("input").value - 32) / 1.8;
    celcius = Math.round(celcius);
    document.getElementById("output").innerHTML = input.value + " " + "°F" + " is " + celcius + " " + "°C";
    document.getElementById("header").innerText = "Your Temperature is :"
}

function fahrenheit() {
    let fahrenheit = document.getElementById("input").value * 1.8 +32;
    fahrenheit = Math.round(fahrenheit);
    document.getElementById("output").innerHTML = input.value + " " + "°C"+ " is " + fahrenheit + " " + "°F";
    document.getElementById("header").innerText = "Your Temperature is :"
}

function reload() {
    window.location.reload();
}