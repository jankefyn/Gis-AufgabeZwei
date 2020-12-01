
let buttonUnten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonUnten");
buttonUnten.addEventListener("click", öffneUnten);
let buttonMitte: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonMitte");
buttonMitte.addEventListener("click", öffneMitte);
let buttonOben: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonOben");
buttonOben.addEventListener("click", öffneOben);
let buttonAll: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonAll");
buttonAll.addEventListener("click", öffneAll);
function öffneUnten(): void {
    window.open("AuswahlUnten.html", "_blank");
}
function öffneMitte(): void {
    window.open("AuswahlMitte.html", "_blank");
}
function öffneOben(): void {
    window.open("AuswahlOben.html", "_blank");
}
function öffneAll(): void {
    window.open("Gesamtbild.html", "_blank");
}






