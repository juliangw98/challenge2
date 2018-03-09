window.onload = function () {
    startTime();
};

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    if (h >= 7 && h <= 9) {
        document.getElementById("flexContainer").style.backgroundColor = 'lightblue';
        document.getElementById("whatToDo").innerHTML = 'Good morning rise and shine';
    }
    else if (h >= 10 && h <= 12) {
        document.getElementById("flexContainer").style.backgroundColor = 'lightgreen';
        document.getElementById("whatToDo").innerHTML = 'you just gotta go to work work work work work';
    }
    else if (h >= 13 && h <= 14) {
        document.getElementById("flexContainer").style.backgroundColor = ' darkblue';
        document.getElementById("whatToDo").innerHTML = 'have a nice break';
    }
    else if (h >= 15 && h <= 18) {
        document.getElementById("flexContainer").style.backgroundColor = 'orange';
        document.getElementById("whatToDo").innerHTML = 'Work work work work work';
    }
    else if (h >= 19 && h <= 23) {
        document.getElementById("flexContainer").style.backgroundColor = 'purple';
        document.getElementById("whatToDo").innerHTML = 'Evening life ';
    }
    else {
        document.getElementById("flexContainer").style.backgroundColor = 'darkblue';
        document.getElementById("whatToDo").innerHTML = 'Good Night zzzzz';
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function changeBackground() {}