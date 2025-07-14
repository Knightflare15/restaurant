import "./AboutStyle.css"
const body = document.querySelector("#content");
export function displayAbout() {
    const body = document.querySelector("#content");
    const homeContent = document.createElement("div");
    homeContent.classList.add("about-content");
    homeContent.innerHTML = "<h1>About Us</h1><p>Random stuff about us.</p>";
    body.appendChild(homeContent);
}
