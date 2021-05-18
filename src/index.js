import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.scss";
import data from "./data";

function printToPage(){
    document.getElementById("root")
        .innerHTML = `<h1>Pokemon - ${data[0].name}</h1>`
}

printToPage()


