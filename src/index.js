/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const baseUrl ='https://platzi-avo.vercel.app/'
const url = `${baseUrl}api/avo`;

const appNode = document.querySelector('#app')

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style:'currency',
        currency:'USD'
    }).format(price)
    return newPrice
}
//web api
window.fetch(url)
.then(response => response.json())
.then(data => {
    let items = [];
    data.data.forEach(({name, price, image}) => {
        const img = document.createElement('img');
        const title = document.createElement('h2');
        const value = document.createElement('div')
        //price information
        value.textContent = formatPrice(price);
        //title information
        title.textContent = name;
        // title.style.fontSize = '3rem'//setting up style using style attribute
        title.className = 'text-2xl text-red-600'//setting up style  using classes from tailwind
        //image information
        img.src = `https://platzi-avo.vercel.app/${image}`;
        const mainDiv = document.createElement('div')
        mainDiv.append(title, img, value)
        items.push(mainDiv)
    });
    appNode.append(...items)
})
