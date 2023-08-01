// Add your code to this file
let background = document.querySelector("body");
background.style["background-color"] = "#00008F";

let heading = document.querySelector("h1");
heading.style["text-decoration"] = "underline";

let heading2 = document.querySelector("h2");
heading2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
heading2.style["text-align"] = "center";

let imageBorders = document.querySelectorAll("img");

for(let i = 0; i < imageBorders.length; i++)
{
    imageBorders[i].style["border"] = "5px dotted yellow";
}

let titles = document.querySelectorAll("h3");

for(let i = 0; i < titles.length; i++)
{
    titles[i].innerHTML += "!";
    titles[i].style["color"] = "yellow";
}

let bulbasaurBackground = document.getElementById("bulbasaur_container");
bulbasaurBackground.style["background-color"] = "darkcyan";

let footerText = document.querySelector("footer");
footerText.innerHTML = "All Star Code - Dom Project";
footerText.style["text-decoration"] = "overline underline";
footerText.style["font-size"] = "40px";
