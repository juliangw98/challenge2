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
        document.getElementById("flexContainer").style.backgroundColor = '#83EAE2';
        document.getElementById("whatToDo").innerHTML = 'Good morning rise and shine';
    }
    else if (h >= 10 && h <= 12) {
        document.getElementById("flexContainer").style.backgroundColor = '#30232F';
        document.getElementById("whatToDo").innerHTML = 'you just gotta go to work work work work work';
    }
    else if (h >= 13 && h <= 14) {
        document.getElementById("flexContainer").style.backgroundColor = ' #373B47';
        document.getElementById("whatToDo").innerHTML = 'have a nice break';
    }
    else if (h >= 15 && h <= 18) {
        document.getElementById("flexContainer").style.backgroundColor = '#59838C';
        document.getElementById("whatToDo").innerHTML = 'Work work work work work';
    }
    else if (h >= 19 && h <= 23) {
        document.getElementById("flexContainer").style.backgroundColor = '#71E5F4';
        document.getElementById("whatToDo").innerHTML = 'Night life ';
    }
    else {
        document.getElementById("flexContainer").style.backgroundColor = '#191323';
        document.getElementById("whatToDo").innerHTML = 'Good Night zzzzz';
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function doWhat() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    if (h >= 7 && h <= 9) {
        document.getElementById('Antwoord').innerHTML = 'neem een kop koffie en ontbijt!'
    }
    else if (h >= 10 && h <= 12) {
      document.getElementById('Antwoord').innerHTML = 'doe wat extra werk misschien krijg je wel opslag van je baas!'
    }
    else if (h >= 13 && h <= 14) {
      document.getElementById('Antwoord').innerHTML = 'even genoeg gedaan op werk kijk hoe het gaat met je laatste insta post'
    }
    else if (h >= 15 && h <= 18) {
       document.getElementById('Antwoord').innerHTML = 'werk moet maar bedenk alvast wat je wilt eten vanavond'
    }
    else if (h >= 19 && h <= 23) {
       document.getElementById('Antwoord').innerHTML = 'kijk een film'
    }
    else {
        document.getElementById('Antwoord').innerHTML = 'Beste tijd om te gaan tukken. maar als je wakker blijft, het is happy hour bij de bar ! Go Party!!!! '
    }
}