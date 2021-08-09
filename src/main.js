
//Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
  .then(response => response.json())
  .then(json => json.items);
}


function displayItems(items) {
  const container = document.querySelector('.items');
  const html = items.map(item => createHTMLString(item));
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
};

function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__img">
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  
  
  if(key == null || value == null) {
    return;
  }

  const filtered = items.filter(item => item[key] === value);
  console.log(filtered);
  displayItems(filtered);
  
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.container');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}
// main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);