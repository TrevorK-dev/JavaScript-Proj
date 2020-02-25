function Ride_Function() {
    var height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Heigth < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride. ";
}

function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}

function yes_Function() {
    document.getElementById("Yes").innerHTML = ! (5 > 10);
}
