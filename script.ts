namespace p2_3 {
    window.addEventListener("load", finishedloading);
    function finishedloading(): void {
        let ladeOben: Auswahl = JSON.parse(localStorage.getItem("" + keyTypOben));
        let ladeMitte: Auswahl = JSON.parse(localStorage.getItem("" + keyTypMitte));
        let ladeUnten: Auswahl = JSON.parse(localStorage.getItem("" + keyTypUnten));
        console.log(ladeOben);
        console.log(ladeMitte);
        console.log(ladeUnten);
        let gespeicherteBilderDiv: HTMLElement = document.getElementById("gespeicherteBilder");
        let vorschauOben: HTMLImageElement = document.createElement("img");
        vorschauOben.src = ladeOben.oben.link;
        let vorschauMitte: HTMLImageElement = document.createElement("img");
        vorschauMitte.src = ladeMitte.mitte.link;
        let vorschauUnten: HTMLImageElement = document.createElement("img");
        vorschauUnten.src = ladeUnten.unten.link;
        gespeicherteBilderDiv.appendChild(vorschauOben);
        gespeicherteBilderDiv.appendChild(vorschauMitte);
        gespeicherteBilderDiv.appendChild(vorschauUnten); 
    }

    let buttonUnten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonUnten");
    buttonUnten.addEventListener("click", openUnten);
    let buttonMitte: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonMitte");
    buttonMitte.addEventListener("click", openMitte);
    let buttonOben: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonOben");
    buttonOben.addEventListener("click", openOben);
    let buttonAll: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonAll");
    buttonAll.addEventListener("click", openAll);
    function openUnten(): void {
        window.open("AuswahlUnten.html", "_self");
    }
    function openMitte(): void {
        window.open("AuswahlMitte.html", "_self");
    }
    function openOben(): void {
        window.open("AuswahlOben.html", "_self");
    }
    function openAll(): void {
        window.open("Gesamtbild.html", "_self");
    }

  
    export interface JedesBild {
        oben: Bild[];
        mitte: Bild[];
        unten: Bild[];
    }

    export interface Bild {
        link: string;
        typ: number;
    }
    export interface Auswahl {
        oben: Bild;
        mitte: Bild;
        unten: Bild;
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlOben.html") {
        let bilderDiv: HTMLElement = document.getElementById("bilder");

        for (let counter: number = 0; counter < arrayBilderOben.length; counter++) {
            let meinbild: HTMLImageElement = document.createElement("img");
            meinbild.addEventListener("click", function (): void { select(arrayBilderOben[counter]); });
            meinbild.src = arrayBilderOben[counter].link;
            bilderDiv.appendChild(meinbild);
        }

    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlUnten.html") {
        let bilderDiv: HTMLElement = document.getElementById("bilder");

        for (let counter: number = 0; counter < arrayBilderUnten.length; counter++) {
            let meinbild: HTMLImageElement = document.createElement("img");
            meinbild.addEventListener("click", function (): void { select(arrayBilderUnten[counter]); });
            meinbild.src = arrayBilderUnten[counter].link;
            bilderDiv.appendChild(meinbild);
        }

    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlMitte.html") {
        let bilderDiv: HTMLElement = document.getElementById("bilder");

        for (let counter: number = 0; counter < arrayBilderMitte.length; counter++) {
            let meinbild: HTMLImageElement = document.createElement("img");
            meinbild.addEventListener("click", function (): void {
                select(arrayBilderMitte[counter]);
            });
            meinbild.src = arrayBilderMitte[counter].link;
            bilderDiv.appendChild(meinbild);
        }

    }
    function select(_bild: Bild): void {
        if (_bild.typ == keyTypOben) {
            auswahl.oben = _bild;
        }
        if (_bild.typ == keyTypUnten) {
            auswahl.unten = _bild;
        }
        if (_bild.typ == keyTypMitte) {
            auswahl.mitte = _bild;
        }
        let auswahlJSONOben: string = JSON.stringify(auswahl);
        localStorage.setItem("" + _bild.typ, auswahlJSONOben);

    }





}
