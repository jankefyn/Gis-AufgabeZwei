"use strict";
var P3_1;
(function (P3_1) {
    let formData = new FormData(document.forms[0]);
    let submitbuttonHTML = document.getElementById("submitHTML");
    submitbuttonHTML.addEventListener("click", function () { submit("HTML"); });
    let submitJSON = document.getElementById("submitJSON");
    submitJSON.addEventListener("click", function () { submit("JSON"); });
    async function submit(_parameter) {
        let url = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        if (_parameter == "HTML") {
            url = url + "/html ";
        }
        let response = await fetch(url);
        let text = await response.text();
        console.log("Answer:");
        console.log(text);
    }
})(P3_1 || (P3_1 = {}));
//# sourceMappingURL=skript.js.map