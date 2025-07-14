import {displayHome} from "./Home.js"
import {displayMenu} from "./Menu.js"
import {displayAbout} from "./About.js"
import "./index.css"
const header=document.querySelector("header");

const body = document.querySelector("#content");
function clear(){
    while (body.hasChildNodes()){
        body.removeChild(body.firstChild);
    }
}
header.addEventListener("click",(event)=>{
    if (event.target.classList.contains("home")) {
        clear();
        displayHome();
    } else if (event.target.classList.contains("about")) {
        clear();
        displayAbout();
    } else if (event.target.classList.contains("menu")) {
        clear();
        displayMenu();
    }
})