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
// console.log( link1.getAttribute("href") );
// element.setAttribute(attributeName, value);
link1.setAttribute("href", "https://google.com");
link1.setAttribute("class", "link");

const links = document.querySelectorAll("ul li a");
links[1].setAttribute("href", "https://yahoo.com");

for(let link of links) {
    link.innerText = "I AM A LINK!!!";
}


// Element style
const heading3 = document.querySelector("h3");
// console.dir(heading3);
// font-size
heading3.style.fontSize = "48px";
heading3.style.color = "#FF0000";
heading3.style.fontFamily = "Arial";

// console.log( window.getComputedStyle(link1).color );

// Classes
const demo = document.getElementById("demo");
// demo.setAttribute("class", "green");
// demo.setAttribute("class", "border");

// element.classList
// console.log( demo.classList );
demo.classList.add("green");
demo.classList.add("border");
demo.classList.remove("green");

// console.log( demo.classList.contains("green") );
// console.log( demo.classList.contains("border") );

demo.classList.toggle("green");
demo.classList.toggle("green");
demo.classList.toggle("green");

// if ( demo.classList.contains("green") ) {
//     demo.classList.remove("green");
// } else {
//     demo.classList.add("green");
// }

// Traversing Parent/Child/Sibling Elements
const listItem = link1.parentElement;
// console.log(listItem);

const list = listItem.parentElement;
// console.log( list.children );

// returns an element
// console.log( list.previousElementSibling );
// console.log( list.nextElementSibling );

// returns a Node
// console.log( list.previousSibling );
// console.log( list.nextSibling );


// Create a new Element
const menu = document.querySelector("#menu");

const item = document.createElement( "li" );
// creates a blank element <li></li>
// console.dir(item);
item.innerText = "I am a new li element";
item.classList.add("green");

menu.appendChild(item);





