import "./MenuStyle.css"
const body = document.querySelector("#content");
export function displayMenu(){
    const body = document.querySelector("#content");
    const homeContent = document.createElement("div");
    homeContent.classList.add("menu-content");
    homeContent.innerHTML = "<h1>Our Menu</h1><p>You can add a list of food items here</p>";
    body.appendChild(homeContent);
}
