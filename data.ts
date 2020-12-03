namespace p2_3 {
    export let keyTypOben: number = 0;
    export let keyTypUnten: number = 1;
    export let keyTypMitte: number = 2;
    export let arrayBilderOben: Bild[] = [];
    let bild1Oben: Bild = { link: "Bilder/bild1Oben.jpg", typ: keyTypOben };
    arrayBilderOben.push(bild1Oben);
    let bild2Oben: Bild = { link: "Bilder/bild2Oben.jpg", typ: keyTypOben };
    arrayBilderOben.push(bild2Oben);
    let bild3Oben: Bild = { link: "Bilder/bild3Oben.jpg", typ: keyTypOben };
    arrayBilderOben.push(bild3Oben);
    export let arrayBilderUnten: Bild[] = [];
    let bild1Unten: Bild = { link: "Bilder/Bild1Unten.jpg", typ: keyTypUnten };
    arrayBilderUnten.push(bild1Unten);
    let bild2Unten: Bild = { link: "Bilder/Bild2Unten.jpg", typ: keyTypUnten };
    arrayBilderUnten.push(bild2Unten);
    let bild3Unten: Bild = { link: "Bilder/Bild3Unten.jpg", typ: keyTypUnten };
    arrayBilderUnten.push(bild3Unten);
    export let arrayBilderMitte: Bild[] = [];
    let bild1Mitte: Bild = { link: "Bilder/Bild1Mitte.jpg", typ: keyTypMitte };
    arrayBilderMitte.push(bild1Mitte);
    let bild2Mitte: Bild = { link: "Bilder/Bild2Mitte.jpg", typ: keyTypMitte };
    arrayBilderMitte.push(bild2Mitte);
    let bild3Mitte: Bild = { link: "Bilder/Bild3Mitte.jpg", typ: keyTypMitte };
    arrayBilderMitte.push(bild3Mitte);

    export let auswahl: Auswahl = { oben: undefined, mitte: undefined, unten: undefined };
    bilderAusJSON(bilderZuJSON());

    function bilderZuJSON(): string {
        let arrayAlleBilder: JedesBild = { oben: arrayBilderOben, mitte: arrayBilderMitte, unten: arrayBilderUnten };
        let jsonAlleBilder: string = JSON.stringify(arrayAlleBilder);
        console.log(jsonAlleBilder);
        return jsonAlleBilder;
        
    }

    function bilderAusJSON(jsonStr: string): void {
        arrayBilderOben = [];
        arrayBilderMitte = [];
        arrayBilderUnten = [];
        let json: JedesBild = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "oben") {
                arrayBilderOben = json[key];
            } else if (key == "mitte") {
                arrayBilderMitte = json[key];
            } else if (key == "unten") {
                arrayBilderUnten = json[key];
            }
        });
    }
}