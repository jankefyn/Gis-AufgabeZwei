"use strict";
var p2_3;
(function (p2_3) {
    p2_3.keyTypOben = 0;
    p2_3.keyTypUnten = 1;
    p2_3.keyTypMitte = 2;
    let buttonUnten = document.getElementById("buttonUnten");
    buttonUnten.addEventListener("click", openUnten);
    let buttonMitte = document.getElementById("buttonMitte");
    buttonMitte.addEventListener("click", openMitte);
    let buttonOben = document.getElementById("buttonOben");
    buttonOben.addEventListener("click", openOben);
    let buttonAll = document.getElementById("buttonAll");
    buttonAll.addEventListener("click", openAll);
    function openUnten() {
        window.open("AuswahlUnten.html", "_self");
    }
    function openMitte() {
        window.open("AuswahlMitte.html", "_self");
    }
    function openOben() {
        window.open("AuswahlOben.html", "_self");
    }
    function openAll() {
        window.open("Gesamtbild.html", "_self");
    }
    console.log("hallo");
})(p2_3 || (p2_3 = {}));
//# sourceMappingURL=script.js.map