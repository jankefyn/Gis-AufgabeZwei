"use strict";
let buttonUnten = document.getElementById("buttonUnten");
buttonUnten.addEventListener("click", öffneUnten);
let buttonMitte = document.getElementById("buttonMitte");
buttonMitte.addEventListener("click", öffneMitte);
let buttonOben = document.getElementById("buttonOben");
buttonOben.addEventListener("click", öffneOben);
let buttonAll = document.getElementById("buttonAll");
buttonAll.addEventListener("click", öffneAll);
function öffneUnten() {
    window.open("AuswahlUnten.html");
}
function öffneMitte() {
    window.open("AuswahlMitte.html");
}
function öffneOben() {
    window.open("AuswahlOben.html");
}
function öffneAll() {
    window.open("Gesamtbild.html");
}
//# sourceMappingURL=script.js.map