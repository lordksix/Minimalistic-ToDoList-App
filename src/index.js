import './index.css';
import { ItemList, xlinkHref } from './modules/ItemList.js';
import { createListItem } from './modules/ListItemMod.js';

const listUl = document.querySelector('#add-items');
const newItem = document.querySelector('#newitem');
const clearBtn = document.querySelector('.clr-btn');
const localName = 'itemlist';

const listSec = document.querySelector('.list');
const submitBtn = document.getElementById('sumbit-newitem');
const ListOfItems = new ItemList(localName);
let dragIndex = 0;

const changeDescrip = (div, label, textArea) => {
  label.textContent = textArea.value;
  const id = parseInt(div.dataset.index, 10);
  ListOfItems.updateDescrip(id, textArea.value);
};

/**
 * Function to handle the change of description of a single item.
 * Also updates index of all remaining items in class and data-index in DOM
 * @param {any} div
 * @returns {any}
 */
const updateDescription = (div) => {
  const label = div.querySelector('label');
  const textArea = div.querySelector('textarea');
  label.style.display = 'none';
  textArea.style.display = 'flex';
  textArea.focus();
  textArea.addEventListener('focusout', () => {
    changeDescrip(div, label, textArea);
    label.style.display = 'flex';
    textArea.style.display = 'none';
  });
  textArea.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      changeDescrip(div, label, textArea);
      label.style.display = 'flex';
      textArea.style.display = 'none';
    }
  });
  textArea.addEventListener('input', () => {
    changeDescrip(div, label, textArea);
  });
};

/**
 * Function to update (remove or change description) of item or items from class and DOM.
 * Also updates index of all remaining items in class and data-index in DOM
 * @param {any} e
 * @returns {any}
 */
const updateList = (e) => {
  e.preventDefault();
  let listItem;
  let itemsRender;
  switch (e.target.classList.value) {
    case 'item-chk':
      listItem = e.target.parentNode;
      listItem.classList.toggle('completed');
      ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
      break;
    case 'icon-check':
      listItem = e.target.parentNode.parentNode;
      listItem.classList.toggle('completed');
      ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
      break;
    case 'icon-check-use':
      listItem = e.target.parentNode.parentNode.parentNode;
      listItem.classList.toggle('completed');
      ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
      break;
    case 'app-text':
      updateDescription(e.target.parentNode.parentNode);
      break;
    case 'icon-trash-o':
      listItem = e.target.parentNode;
      ListOfItems.removeitem(parseInt(listItem.dataset.index, 10), listItem, listUl);
      listUl.removeChild(listItem);
      itemsRender = document.querySelectorAll('.app-item');
      ListOfItems.updateList(itemsRender);
      break;
    case 'icon-trash-o-use':
      listItem = e.target.parentNode.parentNode;
      ListOfItems.removeitem(parseInt(listItem.dataset.index, 10), listItem, listUl);
      listUl.removeChild(listItem);
      itemsRender = document.querySelectorAll('.app-item');
      ListOfItems.updateList(itemsRender);
      break;
    default:
      break;
  }
};

const compareOrder = (elem1, elem2) => {
  if (elem1.parentNode !== elem2.parentNode) {
    return null;
  }
  if (elem1 === elem2) return 0;

  // eslint-disable-next-line no-bitwise
  if (elem1.compareDocumentPosition(elem2) & Node.DOCUMENT_POSITION_FOLLOWING) {
    return -1;
  }
  return 1;
};

const addDragEventListeners = (elem, draggedTarget) => {
  elem.addEventListener('dragstart', () => {
    draggedTarget.element = elem;
    elem.classList.add('dragging');
    dragIndex = +draggedTarget.element.dataset.index;
  });

  elem.addEventListener('dragover', () => {
    const order = compareOrder(elem, draggedTarget.element);
    if (!order) return;
    const baseElement = order === -1 ? elem : elem.nextSlibing;
    draggedTarget.ListContainer.insertBefore(draggedTarget.element, baseElement);
  });
  elem.addEventListener('dragend', () => {
    elem.classList.remove('dragging');
    const newPost = Array.from(elem.parentNode.children).indexOf(elem);
    ListOfItems.updateIndex(dragIndex, newPost);
    const itemsRender = document.querySelectorAll('.app-item');
    ListOfItems.updateList(itemsRender);
  });
};

/**
 * Function to add items to class and DOM whenever a new item is sumbit
 * @param {event} e Event given by addEventListener
 * @returns {void} void
 */
const addItem = (e) => {
  e.preventDefault();
  const variable = ListOfItems.add(newItem, xlinkHref);
  if (variable) {
    const newChild = createListItem(...variable);
    listUl.appendChild(newChild);
    const target = { listUl, element: undefined };
    addDragEventListeners(newChild, target);
  }
};

/**
 * Function to remove all item with complete class from DOM and class.
 * Also updates index of all remaining items in class and data-index in DOM
 * @param {any} e Event given by addEventListener
 * @returns {void} void
 */
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
    const itemsRender = document.querySelectorAll('.app-item');
    ListOfItems.updateList(itemsRender);
  }
};

ItemList.renderList(listUl, localName, addDragEventListeners);

listSec.addEventListener('click', updateList);
submitBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', removeItems);