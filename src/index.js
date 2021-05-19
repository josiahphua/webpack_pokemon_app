import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.scss";
import data from "./data";

function printToPage(){
    let $container = document.createElement("div")
    $container.classList.add("container")

    let $row = document.createElement("div")
    $row.classList.add("row")

    data.forEach(el => {
        let $col = document.createElement("div")
        $col.classList.add("col-md-3", "col-6", "mb-5")
        //"col-md-3", "col-6", "mb-2"
        let $card = document.createElement("div")
        $card.classList.add("card")

        let $cardBody = document.createElement("div")
        $cardBody.classList.add("card-body")

        let $img = document.createElement("img")
        // $img.src = pokemonLogo

        let pokemonName = document.createTextNode(el.name)
        $cardBody.appendChild(pokemonName)
        $cardBody.appendChild($img)
        $card.appendChild($cardBody)
        $col.appendChild($card)
        $row.appendChild($col)
        $container.appendChild($row)
    })




    document.getElementById("root").appendChild($container)
}

printToPage()


