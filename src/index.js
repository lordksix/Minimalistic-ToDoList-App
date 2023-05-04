import { ItemList, xlinkHref } from './modules/ItemList.js';
import './index.css';

const listUl = document.querySelector('#add-items');
const newItem = document.querySelector('#newitem');
const clearBtn = document.querySelector('.clr-btn');
const localName = 'itemlist';

const listSec = document.querySelector('.list');
const submitBtn = document.getElementById('sumbit-newitem');
const ListOfItems = new ItemList(localName);

const changeDescripEvent = (div, label, textArea, e) => {
  if (e.code === 'Enter') {
    e.preventDefault();
    label.textContent = textArea.value;
    label.style.display = 'flex';
    textArea.style.display = 'none';
    const id = parseInt(div.parentNode.dataset.index, 10);
    ListOfItems.updateDescrip(id, textArea.value);
  }
};

const updateDescription = (div) => {
  const label = div.querySelector('label');
  const textArea = div.querySelector('textarea');
  label.style.display = 'none';
  textArea.style.display = 'flex';
  textArea.focus();
  textArea.addEventListener('focusout', () => {
    label.textContent = textArea.value;
    label.style.display = 'flex';
    textArea.style.display = 'none';
  });
  textArea.addEventListener('keydown', (e) => changeDescripEvent(div, label, textArea, e));
};

const updateList = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('item-chk')) {
    const listItem = e.target.parentNode;
    listItem.classList.toggle('completed');
    ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
  } else if (e.target.classList.contains('icon-check')) {
    const listItem = e.target.parentNode.parentNode;
    listItem.classList.toggle('completed');
    ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
  } else if (e.target.classList.contains('icon-check-use')) {
    const listItem = e.target.parentNode.parentNode.parentNode;
    listItem.classList.toggle('completed');
    ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
  } else if ((e.target.classList.contains('app-text'))) {
    updateDescription(e.target.parentNode);
  }
};

const addItem = (e) => {
  e.preventDefault();
  ListOfItems.add(newItem, xlinkHref, listUl);
};

const removeItems = (e) => {
  e.preventDefault();
  const itemCompleted = document.querySelectorAll('.completed');
  if (itemCompleted.length > 0) {
    itemCompleted.forEach((delItem) => {
      ListOfItems.removeitem(parseInt(delItem.dataset.index, 10), delItem, listUl);
    });
    itemCompleted.forEach((delItem) => {
      listUl.removeChild(delItem);
    });
    ListOfItems.updateList('.app-item');
  }
};

ItemList.renderList(listUl, localName);

listSec.addEventListener('click', updateList);
submitBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', removeItems);