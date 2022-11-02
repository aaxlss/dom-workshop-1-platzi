/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const url = "https://platzi-avo.vercel.app/api/avo";

//web api
window.fetch(url)
.then(response => response.json())
.then(data => {
    let items = [];
    data.data.forEach(({name, price, image}) => {
        const img = document.createElement('img');
        const title = document.createElement('h2');
        const value = document.createElement('div')
        const mainDiv = document.createElement('div')
        mainDiv.append(title, img, value)
        items.push(mainDiv)
    });
    document.body.append(...items)
})
