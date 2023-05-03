import { ItemList, xlinkHref } from './modules/ItemList.js';
import './index.css';

/* const item1 = new ListItem('Item1', 1);
const item2 = new ListItem('Item2', 2, true);
const item3 = new ListItem('Item3', 3);
const item4 = new ListItem('Item4', 4, true);
const item5 = new ListItem('Item5', 5);

const arrayItems = [item1, item2, item3, item4, item5].sort((a, b) => a.index - b.index); */
const listUl = document.querySelector('#add-items');
const newItem = document.querySelector('#newitem');

const listSec = document.querySelector('.list');
const submitBtn = document.getElementById('sumbit-newitem');
const ListOfItems = new ItemList('itemlist');

const toggleCompleted = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('item-chk')) {
    const listItem = e.target.parentNode;
    listItem.classList.toggle('completed');
  } else if (e.target.classList.contains('icon-check')) {
    const listItem = e.target.parentNode.parentNode;
    listItem.classList.toggle('completed');
  } else if (e.target.classList.contains('icon-check-use')) {
    const listItem = e.target.parentNode.parentNode.parentNode;
    listItem.classList.toggle('completed');
  }
};

const addItem = (e) => {
  e.preventDefault();
  ListOfItems.add(newItem, xlinkHref, listUl);
};

listSec.addEventListener('click', toggleCompleted);
submitBtn.addEventListener('click', addItem);
ItemList.update(listUl, 'itemlist');