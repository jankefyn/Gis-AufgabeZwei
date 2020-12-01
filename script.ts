namespace p2_3 {
    export let keyTypOben: number = 0;
    export let keyTypUnten: number = 1;
    export let keyTypMitte: number = 2;
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
    console.log("hallo");

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
            meinbild.src = arrayBilderOben[counter].link;
            bilderDiv.appendChild(meinbild);
        
    }
}
 }
