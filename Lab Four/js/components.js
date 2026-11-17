// In this file each component is a function that returns a string of HTML.
// Our shared data 
// A Cont holding text we want to reuse everywhere.
const siteName = "Bright Bean Coffee";
// An Array of objects: one per Nav Item
const navLinks = [
    {label: "Home", href: "index.html", page:"home"},
    {label: "About", href: "about.html", page:"about"},
    {label: "Contact", href: "contact.html", page:"contact"}
];
// our 1st components ... Metadata
// Small helper: MAkes text safe to sit inside an HTML attribute
function escapeAttribute(text){
    return String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;"); //DO NOT CHANGE
}
// title, description and robots: So every page can send in its own values.
function createMetadata(title, description, robots = "index, nofollow"){
    //Every page title end witb the site name for example "about | Bright Bean Coffee"
    const fullTitle = `${title} | ${siteName}`;
    return `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="${escapeAttribute(robots)}">
        <meta name="description" content="${escapeAttribute(description)}">
        <title> ${escapeAttribute(fullTitle)}</title>
        `;
}
//Header Components
function createHeader(currentPage){
    // Map turns every link object to a string of HTML
    // Join glues the string s together with nothing between them
    // Skip join and you get unwanted commas between the links
    const links = navLinks
    .map((link) => {
        // The ternary operation from part 1: if this link is the current page
        // add aria-current="page" otherwise nothing
        const current = link.page === currentPage ? 'aria-current="page"' : "";
        return`<li><a href="${link.href}" ${current}>${link.label}</a> </li>`;
    })
    .join("");
    return`
       <a class="logo" href="index.html"> ${siteName}</a>
       <nav>
        <menu>
            ${links}
        </menu>
       </nav> 
    `;
}

// footer
function createFooter(name, year = new Date().getFullYear()){
    return`
        <p>&copy; ${year} ${name}. All rights Reserved.</p>
        <p> 123 Some Address St, Here, BT </p>
    `;
}
//Call to action Components
function createCallToAction(content){
    //This Function takes one parameter and object holding all the content
    //Each Page can send in different content, but the layout will stay the same.
    return `
        <h2>${content.heading} </h2>
        <p> ${content.text}</p>
        <a class="button" href="${content.link}">${content.buttonText} </a>  
    `;                              // this is where it's linked ^^^^^^
}

// Card Component
function createCard(title, text){
    return`
        <article class="card">
            <h3> ${title} </h3>
            <p> ${text} </p>
        </article>
    `;
}

// HTML to page helper
// this function find the element that matches the selector and fills it with HTML
function render(selector, html){
   const element = document.querySelector(selector); 
   //if the page doesn't have that placeholder, querySelector gives a null
   if(element === null){
    console.log("Could not find " + selector + " on this page.");
    return;
   }
   element.innerHTML = html;
}
// Like Render(), but for the head. "Afterbegin" means that the very start of the head.. we are doing this so the metadata sits above the CSS and Js.
function renderHead(html){
    document.head.insertAdjacentHTML("afterbegin", html);
}

