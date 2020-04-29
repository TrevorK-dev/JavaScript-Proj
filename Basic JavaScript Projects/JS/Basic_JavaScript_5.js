function Ride_Function() {
    var height, Can_Ride;
    height = document.getElementById("height").value;
    Can_Ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride. ";
}

function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}

function yes_Function() {
    document.getElementById("Yes").innerHTML = ! (5 > 10);
}
