import { createListItem, ItemElem } from './ListItemMod.js';
import icon from '../asset/resource/icons.svg';

const xlinkHref = [`${icon}#icon-check`, './asset/resource/icons.svg#icon-more-vert',
  './asset/resource/icons.svg#icon-trash-o'];

const itemClasses = (status = false) => {
  const classListIncomp = ['app-row', 'app-item'];
  const classListComp = ['app-row', 'app-item', 'completed'];
  const classBtn = 'item-chk';
  const classDivText = 'item';
  const classText = 'app-text';
  const classList = status ? classListComp : classListIncomp;
  const temp = [classList, classBtn, classDivText, classText];
  return temp;
};

/**
 * Class that creates and array to book class instances to be added to local storage
 * and added to DOM.
 * @param {string} localName name to be used to add bookbinding to local storage.
 * @returns {object} return instance of bookbiding class with an array of book class instances.
 */
class ItemList {
  constructor(localName) {
    this.itemArray = localStorage.getItem(`${localName}`) ? JSON.parse(localStorage.getItem(`${localName}`)) : [];
    this.localName = localName;
    this.length = this.itemArray.length;
  }

  /**
   * Method to remove item to local storage and class.
   * @param {string} descrip Description of item as input by user
   * @param {Array} xlink array of string with href for svg icons
   * @param {Array} classesSec Array of strings with class names for each part of the section.
   * Length 4.
   * @returns {void}
   */
  add(descrip, xlink) {
    let newChild = false;
    if (descrip.value.length) {
      const index = this.length + 1;
      const item = new ItemElem(descrip.value, index);
      this.itemArray = this.itemArray.concat(item);
      localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
      const classesSec = itemClasses();
      newChild = createListItem(index, xlink, descrip.value, ...classesSec);
      this.length += 1;
    }
    descrip.value = '';
    return newChild;
  }

  /**
 * Method to remove item from local storage and class.
 * @param {number} id Index of item to be removed
 * @returns {void}
 */
  removeitem(id) {
    this.itemArray = this.itemArray.filter((item) => item.index !== id);
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
    this.length -= 1;
  }

  /**
   * Method to update description of in local storage and class
   * @param {number} id Index of item
   * @param {string} description New description of item to be added
   * @returns {void} VOid
   */
  updateDescrip(id, description) {
    id -= 1;
    this.itemArray[id].descrip = description;
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  /**
   * Method to toggle completeness status of item in local storage and class
   * @param {number} id Index of item
   * @returns {void} void
   */
  toggleComplete(id) {
    id -= 1;
    this.itemArray[id].isCompleted = !this.itemArray[id].isCompleted;
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  /**
   * Method to update index of each item in class and update data-index in DOM
   * @param {string} itemClass Name of class of item elements in DOM
   * @returns {void} void
   */
  updateList(itemClass) {
    const itemsRender = document.querySelectorAll(itemClass);
    this.itemArray.forEach((listitem, i) => {
      const id = i + 1;
      listitem.index = id;
      itemsRender[i].dataset.index = id;
    });
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  updateIndex(oldPos, newPos) {
    oldPos -= 1;
    const currItem = JSON.parse(JSON.stringify(this.itemArray[oldPos]));
    const firstHalf = this.itemArray.slice(0, oldPos);
    const secondHalf = this.itemArray.slice(oldPos + 1, this.itemArray.length);
    this.itemArray = firstHalf.concat(secondHalf);
    this.itemArray.splice(newPos, 0, currItem);
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  /**
 * Static method of BookBiding. Updates Local Storate and re renders bookshelf section.
 * @param {HTMLElement} bookshelf HTML element where books are going to be added.
 * @param {string} localName name to be used to add bookbinding to local storage.
 * @param {string} bookDivName name of class to be used to add book to bookshelf.
 * @returns {void} Void
 */
  static renderList(ListContainer, localName, addDragEventListeners) {
    const itemList = localStorage.getItem(`${localName}`) ? JSON.parse(localStorage.getItem(`${localName}`)) : [];
    const ListFrag = document.createDocumentFragment();
    itemList.forEach((listitem) => {
      const { index, descrip, isCompleted } = listitem;
      const classesSec = itemClasses(isCompleted);
      const newChild = createListItem(index, xlinkHref, descrip, ...classesSec);
      ListFrag.appendChild(newChild);
    });
    const target = { ListContainer, element: undefined };
    // eslint-disable-next-line no-restricted-syntax
    for (const item of ListFrag.children) {
      addDragEventListeners(item, target);
    }
    ListContainer.innerHTML = '';
    ListContainer.appendChild(ListFrag);
    localStorage.setItem(`${localName}`, JSON.stringify(itemList));
  }
}

export {
  ItemList, xlinkHref,
};