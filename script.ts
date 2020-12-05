namespace p2_3 {
    export let keyTypOben: number = 0;
    export let keyTypUnten: number = 1;
    export let keyTypMitte: number = 2;
    export let auswahl: Auswahl = { oben: undefined, mitte: undefined, unten: undefined };
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
    interface Serverantwort {
        message: string;
        error: string;

    }
    //bei jedem neu laden wird die auswahl in das gespeichertebilderDiv übergeben 
    window.addEventListener("load", finishedloading);
    function finishedloading(): void {

        let ladeOben: Auswahl = JSON.parse(sessionStorage.getItem("" + keyTypOben));
        let ladeMitte: Auswahl = JSON.parse(sessionStorage.getItem("" + keyTypMitte));
        let ladeUnten: Auswahl = JSON.parse(sessionStorage.getItem("" + keyTypUnten));
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
    //den im html deklarierten knöpfen wird hier ein eventlistener gegeben der beim klicken die jeweilige function aufruft
    let buttonUnten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonUnten");
    buttonUnten.addEventListener("click", openUnten);
    let buttonMitte: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonMitte");
    buttonMitte.addEventListener("click", openMitte);
    let buttonOben: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonOben");
    buttonOben.addEventListener("click", openOben);
    let buttonAll: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonAll");
    buttonAll.addEventListener("click", openAll);

    //wenn diese funktionen aufgerufen werden wird die jeweilige seite geladen 
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


    ladeBilderAusJSON("data.json");
    //in dieser async funktion wird die beim aufrufen übergebene data json benutzt um die bilder auf ihre jeweilige seite zu bringen
    //außerdem bekommen die bilder einen eventlistener der beim mausklick die funktion select aufruft
    async function ladeBilderAusJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let json: string = JSON.stringify(await response.json());
        let objectJson: JedesBild = JSON.parse(json);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlOben.html") {
            let bilderDiv: HTMLElement = document.getElementById("bilder");

            for (let counter: number = 0; counter < objectJson.oben.length; counter++) {
                let meinbild: HTMLImageElement = document.createElement("img");
                meinbild.addEventListener("click", function (): void { select(objectJson.oben[counter]); });
                meinbild.src = objectJson.oben[counter].link;
                bilderDiv.appendChild(meinbild);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlUnten.html") {
            let bilderDiv: HTMLElement = document.getElementById("bilder");

            for (let counter: number = 0; counter < objectJson.unten.length; counter++) {
                let meinbild: HTMLImageElement = document.createElement("img");
                meinbild.addEventListener("click", function (): void { select(objectJson.unten[counter]); });
                meinbild.src = objectJson.unten[counter].link;
                bilderDiv.appendChild(meinbild);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "AuswahlMitte.html") {
            let bilderDiv: HTMLElement = document.getElementById("bilder");

            for (let counter: number = 0; counter < objectJson.mitte.length; counter++) {
                let meinbild: HTMLImageElement = document.createElement("img");
                meinbild.addEventListener("click", function (): void { select(objectJson.mitte[counter]); });
                meinbild.src = objectJson.mitte[counter].link;
                bilderDiv.appendChild(meinbild);
            }
        }
    }
    //in dieser funktion werden die angecklickten bilder in der auswahl abgespeichert und diese wiederum als string in den sessionstorage übergeben 
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
        sessionStorage.setItem("" + _bild.typ, auswahlJSONOben);
    }
// diese funktion erwartet die antwort der seite und gibt die jeweilige antwort an das entscprechende div weiter
    servercheck();
    async function servercheck(): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(<any>sessionStorage);
        let url: string = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let serverantwort: Response = await fetch(url);
        let rückmeldung: Serverantwort = await serverantwort.json();

        if (rückmeldung.error != undefined) {
            console.log(rückmeldung.error);
            let messagediv: HTMLElement = document.getElementById("messageerror");
            messagediv.appendChild(document.createTextNode("" + rückmeldung.error));
        }
        else if (rückmeldung.message != undefined) {
            console.log(rückmeldung.message);
            let messagediv: HTMLElement = document.getElementById("message");
            messagediv.appendChild(document.createTextNode("" + rückmeldung.message));
        }
    }
}
