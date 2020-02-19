function hello_there2() {
    var part_1 = "I have...";
    var part_2 = "wait for it....";
    var part_3 = "diabetes.";
    var whole_sentance = part_1.concat(part_2, part_3);
    document.getElementById("hello_there").innerHTML = whole_sentance;
}

function slice_Method() {
    var Sentance = "All work and no play makes Johny a dull boy.";
    var Section = Sentance.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function precision_Method() {
    var X = 12938.30129475;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}