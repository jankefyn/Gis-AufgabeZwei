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
    window.open("AuswahlUnten.html", "_blank");
}
function öffneMitte() {
    window.open("AuswahlMitte.html", "_blank");
}
function öffneOben() {
    window.open("AuswahlOben.html", "_blank");
}
function öffneAll() {
    window.open("Gesamtbild.html", "_blank");
}
//# sourceMappingURL=script.js.map