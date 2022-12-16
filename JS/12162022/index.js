// Document Object Model

// getElementById() 
const banner = document.getElementById("banner");
// console.log(banner);
// console.dir(banner);

// getElementsByTagName()
const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// getElementsByClassName()
const children = document.getElementsByClassName("child");
// console.log(children);

// querySelector()
const bannerQuery = document.querySelector( "#banner" );
// console.log(bannerQuery);

// querySelectorAll()
const childrenQuery = document.querySelectorAll( "div.child" );
// console.log(childrenQuery);

// Text
const heading = document.querySelector("h1");
// element.textContent
heading.textContent = "DOM";

const container = document.querySelector(".container");
// element.innerText
// console.log( container.textContent );
// console.log( container.innerText );
// container.innerText = "This is my sample text";


// element.innerHTML
// console.log( container.innerHTML );
container.innerHTML += "<h2>The new text</h2>";

// Attributes
const link1 = document.querySelector("ul li a");
// element.getAttribute(attributeName);
console.log( link1.getAttribute("href") );
// element.setAttribute(attributeName, value);
link1.setAttribute("href", "https://google.com");
link1.setAttribute("class", "link");


const links = document.querySelectorAll("ul li a");
links[1].setAttribute("href", "https://yahoo.com");

for(let link of links) {
    link.innerText = "I AM A LINK!!!";
}







