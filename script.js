"use strict";
var p2_3;
(function (p2_3) {
    window.addEventListener("load", finishedloading);
    function finishedloading() {
        let laden = JSON.parse(localStorage.getItem("storageAuswahl"));
        console.log(laden);
    }
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
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlOben.html") {
        let bilderDiv = document.getElementById("bilder");
        for (let counter = 0; counter < p2_3.arrayBilderOben.length; counter++) {
            let meinbild = document.createElement("img");
            meinbild.addEventListener("click", function () { select(p2_3.arrayBilderOben[counter]); });
            meinbild.src = p2_3.arrayBilderOben[counter].link;
            bilderDiv.appendChild(meinbild);
        }
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlUnten.html") {
        let bilderDiv = document.getElementById("bilder");
        for (let counter = 0; counter < p2_3.arrayBilderUnten.length; counter++) {
            let meinbild = document.createElement("img");
            meinbild.addEventListener("click", function () { select(p2_3.arrayBilderUnten[counter]); });
            meinbild.src = p2_3.arrayBilderUnten[counter].link;
            bilderDiv.appendChild(meinbild);
        }
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlMitte.html") {
        let bilderDiv = document.getElementById("bilder");
        for (let counter = 0; counter < p2_3.arrayBilderMitte.length; counter++) {
            let meinbild = document.createElement("img");
            meinbild.addEventListener("click", function () {
                select(p2_3.arrayBilderMitte[counter]);
            });
            meinbild.src = p2_3.arrayBilderMitte[counter].link;
            bilderDiv.appendChild(meinbild);
        }
    }
    function select(_bild) {
        if (_bild.typ == p2_3.keyTypOben) {
            p2_3.auswahl.oben = _bild;
        }
        if (_bild.typ == p2_3.keyTypUnten) {
            p2_3.auswahl.unten = _bild;
        }
        if (_bild.typ == p2_3.keyTypMitte) {
            p2_3.auswahl.mitte = _bild;
        }
        let auswahlJSON = JSON.stringify(p2_3.auswahl);
        localStorage.setItem("storageAuswahl", auswahlJSON);
    }
})(p2_3 || (p2_3 = {}));
//# sourceMappingURL=script.js.map