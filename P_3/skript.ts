
namespace P3_1 {
    let formData: FormData = new FormData(document.forms[0]);

    
    let submitbuttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submitHTML");
    submitbuttonHTML.addEventListener("click", function (): void { submit("HTML"); });
    let submitJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submitJSON");
    submitJSON.addEventListener("click", function (): void { submit("JSON"); });
   

    async function submit( _parameter: string): Promise<void> {
        let url: string = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        console.log(query.toString());
        if (_parameter == "HTML") { 
            url = url + "/html " ; 
        }
        else {
            url = url + "/json";
        }
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log("Answer:");
        console.log(text);
        console.log(url);
    }
}
//<button type="button" id="submitHTML">submit HTML</button>
//<button type="button" id="submitJSON">submit JSON</button>