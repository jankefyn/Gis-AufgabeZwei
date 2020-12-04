"use strict";
var p2_3;
(function (p2_3) {
    p2_3.keyTypOben = 0;
    p2_3.keyTypUnten = 1;
    p2_3.keyTypMitte = 2;
    p2_3.auswahl = { oben: undefined, mitte: undefined, unten: undefined };
    window.addEventListener("load", finishedloading);
    function finishedloading() {
        let ladeOben = JSON.parse(localStorage.getItem("" + p2_3.keyTypOben));
        let ladeMitte = JSON.parse(localStorage.getItem("" + p2_3.keyTypMitte));
        let ladeUnten = JSON.parse(localStorage.getItem("" + p2_3.keyTypUnten));
        let gespeicherteBilderDiv = document.getElementById("gespeicherteBilder");
        let vorschauOben = document.createElement("img");
        vorschauOben.src = ladeOben.oben.link;
        let vorschauMitte = document.createElement("img");
        vorschauMitte.src = ladeMitte.mitte.link;
        let vorschauUnten = document.createElement("img");
        vorschauUnten.src = ladeUnten.unten.link;
        gespeicherteBilderDiv.appendChild(vorschauOben);
        gespeicherteBilderDiv.appendChild(vorschauMitte);
        gespeicherteBilderDiv.appendChild(vorschauUnten);
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
    ladeBilderAusJSON("data.json");
    async function ladeBilderAusJSON(_url) {
        let response = await fetch(_url);
        let json = JSON.stringify(await response.json());
        let objectJson = JSON.parse(json);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlOben.html") {
            let bilderDiv = document.getElementById("bilder");
            for (let counter = 0; counter < objectJson.oben.length; counter++) {
                let meinbild = document.createElement("img");
                meinbild.addEventListener("click", function () { select(objectJson.oben[counter]); });
                meinbild.src = objectJson.oben[counter].link;
                bilderDiv.appendChild(meinbild);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlUnten.html") {
            let bilderDiv = document.getElementById("bilder");
            for (let counter = 0; counter < objectJson.unten.length; counter++) {
                let meinbild = document.createElement("img");
                meinbild.addEventListener("click", function () { select(objectJson.unten[counter]); });
                meinbild.src = objectJson.unten[counter].link;
                bilderDiv.appendChild(meinbild);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlMitte.html") {
            let bilderDiv = document.getElementById("bilder");
            for (let counter = 0; counter < objectJson.mitte.length; counter++) {
                let meinbild = document.createElement("img");
                meinbild.addEventListener("click", function () { select(objectJson.mitte[counter]); });
                meinbild.src = objectJson.mitte[counter].link;
                bilderDiv.appendChild(meinbild);
            }
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
        let auswahlJSONOben = JSON.stringify(p2_3.auswahl);
        localStorage.setItem("" + _bild.typ, auswahlJSONOben);
    }
    servercheck("gis - communication.herokuapp.com");
    async function servercheck(_url) {
        let query = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        await fetch(_url);
        console.log(_url);
    }
})(p2_3 || (p2_3 = {}));
//# sourceMappingURL=script.js.map