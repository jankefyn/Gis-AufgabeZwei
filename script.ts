
let buttonUnten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonUnten");
buttonUnten.addEventListener("click", öffneUnten);
let buttonMitte: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonMitte");
buttonMitte.addEventListener("click", öffneMitte);
let buttonOben: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonOben");
buttonOben.addEventListener("click", öffneOben);
let buttonAll: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonAll");
buttonAll.addEventListener("click", öffneAll);
function öffneUnten(): void {
    window.open("AuswahlOben.html");
}
function öffneMitte(): void {
    window.open("AuswahlOben.html");
}
function öffneOben(): void {
    window.open("AuswahlOben.html");
}
function öffneAll(): void {
    window.open("AuswahlOben.html");
}






