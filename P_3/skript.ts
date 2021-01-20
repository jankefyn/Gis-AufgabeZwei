namespace P3_1 {
    let formData: FormData = new FormData(document.forms[0]);

    let btSend: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    btSend.addEventListener("click", submit);

    async function submit(): Promise<void> {
        let url: string = "https://gisaufgabedrei.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log("Answer:");
        console.log(text);
    }
}