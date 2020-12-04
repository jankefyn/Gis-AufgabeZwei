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

    window.addEventListener("load", finishedloading);
    function finishedloading(): void {
        let ladeOben: Auswahl = JSON.parse(localStorage.getItem("" + keyTypOben));
        let ladeMitte: Auswahl = JSON.parse(localStorage.getItem("" + keyTypMitte));
        let ladeUnten: Auswahl = JSON.parse(localStorage.getItem("" + keyTypUnten));
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


    ladeBilderAusJSON("data.json");
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
 
    servercheck("gis - communication.herokuapp.com");
    async function servercheck(_url: string): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(<any>localStorage);

        _url = _url + "?" + query.toString();
        await fetch(_url);
        console.log(_url);
    }

}
