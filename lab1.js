/*jslint browser */
alert("Yeganeh's changes");

var formIn = document.forms[0];
var logIn = document.getElementById("login__btn");
var displayName = document.getElementById("display__user");
var displayPw = document.getElementById("display__pw");

function submitGo() {
    "use strict";
    var userName = document.getElementById("login__user").value;
    var passWord = document.getElementById("login__pw").value;
    displayName.innerHTML = userName;
    displayPw.innerHTML = passWord;
    return false;
}

formIn.onsubmit = submitGo;









