// script.js

document.addEventListener("click", function (event) {
  if (event.target.matches("#button1")) {
    window.location.href = "../TableSolat/Iftitah.html";
  } else if (event.target.matches("#button2")) {
    window.location.href = "../TableSolat/AlFatihah.html";
  } else if (event.target.matches("#button3")) {
    window.location.href = "../TableSolat/Rukuk.html";
  } else if (event.target.matches("#button4")) {
    window.location.href = "../TableSolat/Iktidal.html";
  } else if (event.target.matches("#button5")) {
    window.location.href = "../TableSolat/Sujud.html";
  } else if (event.target.matches("#button6")) {
    window.location.href = "../TableSolat/DudukAntara2Sujud.html";
  } else if (event.target.matches("#button7")) {
    window.location.href = "../TableSolat/TahiyyatAwal.html";
  } else if (event.target.matches("#button8")) {
    window.location.href = "../TableSolat/TahiyyatAkhir.html";
  } else if (event.target.matches("#button9")) {
    window.location.href = "../TableSolat/Qunut.html";
  } else if (event.target.matches("#button10")) {
    window.location.href = "../TableSolat/QunutNazilah.html";
  }
});
