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
        document.getElementById("flexContainer").style.backgroundImage =  'url(images/' + 'morning' + '.jpeg)';
        document.getElementById("whatToDo").innerHTML = 'Good morning rise and shine';
        

    } else if (h >= 10 && h <= 12) {
        document.getElementById("flexContainer").style.backgroundImage =  'url(images/' + 'working1' + '.jpeg)';
        document.getElementById("whatToDo").innerHTML = 'Tijd voor werk';
        

    } else if (h >= 13 && h <= 14) {
        document.getElementById("flexContainer").style.backgroundImage =  'url(images/' + 'lunch' + '.jpeg)';
        document.getElementById("whatToDo").innerHTML = 'Even pauze';
       

    } else if (h >= 15 && h <= 18) {
        document.getElementById("flexContainer").style.backgroundImage =  'url(images/' + 'work2' + '.jpeg)';
        document.getElementById("whatToDo").innerHTML = 'En door';
       
    } else if (h >= 19 && h <= 23) {
        document.getElementById("flexContainer").style.backgroundImage =  'url(images/' + 'dinner' + '.jpeg)';
        document.getElementById("whatToDo").innerHTML = 'Tijd voor jezeld ';
        

    } else {
        document.getElementById("flexContainer").style.backgroundImage =  'url(images/' + 'uitgaan' + '.jpeg)';

        document.getElementById("whatToDo").innerHTML = 'Slaapzacht.. of niet';
        
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
        document.getElementById('Antwoord').innerHTML = 'neem een kop koffie en ontbijt!';
        TweenMax.to('#Antwoord',2,{
            top:500
        });
    } else if (h >= 10 && h <= 12) {
        document.getElementById('Antwoord').innerHTML = 'doe wat extra werk misschien krijg je wel opslag van je baas!';
        TweenMax.to('#Antwoord',2,{
                top:500
        })
    } else if (h >= 13 && h <= 14) {
        document.getElementById('Antwoord').innerHTML = 'even genoeg gedaan op werk kijk hoe het gaat met je laatste insta post';
        TweenMax.to('#Antwoord',2,{
            top:500
        })
    } else if (h >= 15 && h <= 18) {
                document.getElementById('Antwoord').innerHTML = 'nog even doorzeten h is bijna 6 uur';

                TweenMax.to('#Antwoord',2,{
            top:500
        })
    } else if (h >= 19 && h <= 23) {
        document.getElementById('Antwoord').innerHTML = 'kijk een film';
        TweenMax.to('#Antwoord',2,{
            top:500
        })
    } else {
        document.getElementById('Antwoord').innerHTML = 'Beste tijd om te gaan tukken. maar als je wakker blijft, het is happy hour bij de bar !Go Party!!!! ' ;
        TweenMax.to('#Antwoord',2,{
            top:500
        })
    }
}

