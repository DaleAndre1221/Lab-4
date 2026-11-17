// Runs on every page. It uses the components from the components.js
// Now we ask what page are we on?
const page = document.body.dataset.page;
// Now that we have our what page ..  now we can add our metadata
const pageMeta = {
    home: {
        title: "HOME",
        description: "this is a description"
    },
    about: {
        title: "About",
        description: "this is about description"
    },
    contact: {
        title: "Contact",
        description: "this is a contact description"
    }
};
// Called to Action
const ctaContent = {
    home: {
        heading: "asdas",
        text: "asdas",
        buttonText: "sadada",
        link: "index.html"
    }, // Linked to components.js where it's called
    about: {
        heading: "fsdf",
        text: "sdfsdf",
        buttonText: "dfsdf",
        link: "about.html"
    },
        contact: {
        heading: "werwe",
        text: "werw",
        buttonText: "werwe",
        link: "contact.html"
    }
};
const favourites = [
    {title: "Espresso", text: "Expresso Text"},
    {title: "Cold Brew", text: "Cold Brew Text"},
    {title: "Croissant", text: "Croissant Text"}
];

//
// Now building our page
//
// metadata goes in the <head>
const meta = pageMeta[page];
renderHead(createMetadata(meta.tilte, meta.description, meta.robots));
// now fill 
render("#site-header", createHeader(page));
render("#site-footer", createFooter(siteName));
render("#cta", createCallToAction(ctaContent[page])); 
// turn every object in the array into a card
const cardHTML = favourites
.map((item) => createCard (item.title,  item.text))
.join("");
render("#cards", cardsHTML);


