function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction() {
  var str = "My name is Trevor!";
  var n = str.length;
  document.getElementById("demo").innerHTML = n;
}

function array_function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the car is " +
        Cat_Picture[2] + ".";
}

