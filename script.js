// Create base variables
var p = 0;
var ppc = 1;

// Production
var pencils = 0;
var phones = 0;
var calc1 = 0;
var calc2 = 0;
var calc3 = 0;
var desmos = 0;

// Upgrades
var boxMethod = false;
var pyth = false;
var quadratic = false;
var circle = false;
var cubic = false;

// Update the screen and start the autoclicking process
update();
setInterval(autoClick, 1000 / 30);

// Runs when the button is clicked
function buttonClick() {
    p += ppc;
    update();
}

// Updates the screen with all of the current variable information
function update() {
    // Handles displaying large numbers in scientific notation
    if (p < 10000) {
        document.getElementById("points").innerHTML = Math.round(p);
    } else {
        var scientificNotation = p / 10 ** (Math.round(p).toString().length - 1);
        document.getElementById("points").innerHTML = scientificNotation.toFixed(1) + "*10<sup>" + (Math.round(p).toString().length - 1) + "</sup>";
    }

    // Display amount of Production pieces
    document.getElementById("pencilNum").innerHTML = pencils;
    document.getElementById("phoneNum").innerHTML = phones;
    document.getElementById("calc1Num").innerHTML = calc1;
    document.getElementById("calc2Num").innerHTML = calc2;
    document.getElementById("calc3Num").innerHTML = calc3;
    document.getElementById("desmosNum").innerHTML = desmos;

    // Display production costs
    document.getElementById("pencilCost").innerHTML = "p = " + Math.round(16 * 1.5 ** pencils);
    document.getElementById("phoneCost").innerHTML = "p = " + Math.round(256 * 1.5 ** phones);
    document.getElementById("calc1Cost").innerHTML = "p = " + Math.round(2048 * 1.5 ** calc1);
    document.getElementById("calc2Cost").innerHTML = "p = " + Math.round(16384 * 1.5 ** calc2);
    document.getElementById("calc3Cost").innerHTML = "p = " + Math.round(131072 * 1.5 ** calc3);
    document.getElementById("desmosCost").innerHTML = "p = " + Math.round(2097152 * 1.5 ** desmos);

    // Handle transparency for production cards
    if (p >= Math.round(16 * 1.5 ** pencils)) {
        document.getElementById("pencilCard").classList.remove("transparent");
    } else {
        document.getElementById("pencilCard").classList.add("transparent");
    }
    if (p >= Math.round(256 * 1.5 ** phones)) {
        document.getElementById("phoneCard").classList.remove("transparent");
    } else {
        document.getElementById("phoneCard").classList.add("transparent");
    }
    if (p >= Math.round(2048 * 1.5 ** calc1)) {
        document.getElementById("calc1Card").classList.remove("transparent");
    } else {
        document.getElementById("calc1Card").classList.add("transparent");
    }
    if (p >= Math.round(16384 * 1.5 ** calc2)) {
        document.getElementById("calc2Card").classList.remove("transparent");
    } else {
        document.getElementById("calc2Card").classList.add("transparent");
    }
    if (p >= Math.round(131072 * 1.5 ** calc3)) {
        document.getElementById("calc3Card").classList.remove("transparent");
    } else {
        document.getElementById("calc3Card").classList.add("transparent");
    }
    if (p >= Math.round(2097152 * 1.5 ** desmos)) {
        document.getElementById("desmosCard").classList.remove("transparent");
    } else {
        document.getElementById("desmosCard").classList.add("transparent");
    }

    // Handle transparency for upgrade cards
    if (p >= 256 && boxMethod == false) {
        document.getElementById("boxUpg").classList.remove("transparent");
    } else {
        document.getElementById("boxUpg").classList.add("transparent");
    }
    if (p >= 2048 && pyth == false && boxMethod == true) {
        document.getElementById("pythUpg").classList.remove("transparent");
    } else {
        document.getElementById("pythUpg").classList.add("transparent");
    }
    if (p >= 32768 && quadratic == false && pyth == true) {
        document.getElementById("quadUpg").classList.remove("transparent");
    } else {
        document.getElementById("quadUpg").classList.add("transparent");
    }
    if (p >= 1048576 && circle == false && quadratic == true) {
        document.getElementById("circleUpg").classList.remove("transparent");
    } else {
        document.getElementById("circleUpg").classList.add("transparent");
    }
    if (p >= 2097152 && cubic == false && circle == true) {
        document.getElementById("cubicUpg").classList.remove("transparent");
    } else {
        document.getElementById("cubicUpg").classList.add("transparent");
    }

    // Display points per second
    document.getElementById("pointRate").innerHTML = "(" + (pencils + phones * 2 + calc1 * 16 + calc2 * 128 + calc3 * 1024 + desmos * 32768) + "/sec)";
}

// Change visibilities if production tab is clicked
function prodButton() {
    document.getElementById("prodTab").classList.add("selected");
    document.getElementById("upgTab").classList.remove("selected");
    document.getElementById("upgMenu").classList.add("invisible");
    document.getElementById("prodMenu").classList.remove("invisible");
}

// Change visibilities if upgrade tab is clicked
function upgButton() {
    document.getElementById("upgTab").classList.add("selected");
    document.getElementById("prodTab").classList.remove("selected");
    document.getElementById("prodMenu").classList.add("invisible");
    document.getElementById("upgMenu").classList.remove("invisible");
}

// Functions for purchasing production
function buyPencil() {
    if (p >= Math.round(16 * 1.5 ** pencils)) {
        p -= Math.round(16 * 1.5 ** pencils);
        pencils++;
        update();
    }
}

function buyPhone() {
    if (p >= Math.round(256 * 1.5 ** phones)) {
        p -= Math.round(256 * 1.5 ** phones);
        phones++;
        update();
    }
}

function buyCalc1() {
    if (p >= Math.round(2048 * 1.5 ** calc1)) {
        p -= Math.round(2048 * 1.5 ** calc1);
        calc1++;
        update();
    }
}

function buyCalc2() {
    if (p >= Math.round(16384 * 1.5 ** calc2)) {
        p -= Math.round(16384 * 1.5 ** calc2);
        calc2++;
        update();
    }
}

function buyCalc3() {
    if (p >= Math.round(131072 * 1.5 ** calc3)) {
        p -= Math.round(131072 * 1.5 ** calc3);
        calc3++;
        update();
    }
}

function buyDesmos() {
    if (p >= Math.round(2097152 * 1.5 ** desmos)) {
        p -= Math.round(2097152 * 1.5 ** desmos);
        desmos++;
        update();
    }
}

// Functions for purchasing upgrades
function buyBox() {
    if (p >= 256 && boxMethod == false) {
        p -= 256;
        boxMethod = true;
        ppc = 2;
        document.getElementById("boxUpg").classList.add("invisible");
        update();
        document.getElementById("buttonText").innerHTML = "$$&#8721;↙{n=0}↖&infin;" + ppc + "$$";
        jqMath.parseMath(document.body);
    }
}

function buyPyth() {
    if (p >= 2048 && boxMethod == true && pyth == false) {
        p -= 2048;
        pyth = true;
        ppc = 4;
        document.getElementById("pythUpg").classList.add("invisible");
        update();
        document.getElementById("buttonText").innerHTML = "$$&#8721;↙{n=0}↖&infin;" + ppc + "$$";
        jqMath.parseMath(document.body);
    }
}

function buyQuad() {
    if (p >= 32768 && pyth == true && quadratic == false) {
        p -= 32768;
        quadratic = true;
        ppc = 8;
        document.getElementById("quadUpg").classList.add("invisible");
        update();
        document.getElementById("buttonText").innerHTML = "$$&#8721;↙{n=0}↖&infin;" + ppc + "$$";
        jqMath.parseMath(document.body);
    }
}

function buyCircle() {
    if (p >= 1048576 && circle == false && quadratic == true) {
        p -= 1048576;
        circle = true;
        ppc = 16;
        document.getElementById("circleUpg").classList.add("invisible");
        update();
        document.getElementById("buttonText").innerHTML = "$$&#8721;↙{n=0}↖&infin;" + ppc + "$$";
        jqMath.parseMath(document.body);
    }
}

function buyCubic() {
    if (p >= 2097152 && cubic == false && circle == true) {
        p -= 2097152;
        cubic = true;
        ppc = 32;
        document.getElementById("cubicUpg").classList.add("invisible");
        update();
        document.getElementById("buttonText").innerHTML = "$$&#8721;↙{n=0}↖&infin;" + ppc + "$$";
        jqMath.parseMath(document.body);
    }
}

// Autoclicks 30 times per second
function autoClick() {
    p += (pencils) / 30 + (phones * 2) / 30 + (calc1 * 16) / 30 + (calc2 * 128) / 30 + (calc3 * 1024) / 30 + (desmos * 32768) / 30;
    update();
}