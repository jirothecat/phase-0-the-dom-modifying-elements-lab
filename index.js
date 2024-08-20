// Write your code here!
const main = document.querySelector('#main');
main.remove();

const newHeader = document.createElement('h1');
// <h1></h1>
newHeader.setAttribute('id', 'victory');
// <h1 id='victory'></h1>

newHeader.textContent = "Stan is the champion!";
// <h1 id='victory> Stan is the champion </h1>
