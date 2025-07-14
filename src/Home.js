import "./HomeStyle.css"
export function displayHome() {
    const body = document.querySelector("#content");
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    homeContent.innerHTML = "<h1>Welcome to Home</h1><p>Home section content goes here.</p>";
    body.appendChild(homeContent);
}
