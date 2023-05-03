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
   * Method to remove book to local staorage, bookbiding and from DOM.
   * @param {string} descrip Description of item as input by user
   * @param {Array} xlink array of string with href for svg icons
   * @param {HTMLElement} itemContainer HTML element where list item are going to be added.
   * @param {Array} classesSec Array of strings with class names for each part of the section.
   * Length 4.
   * @returns {void}
   */
  add(descrip, xlink, ListContainer) {
    if (descrip.value.length) {
      const index = this.length;
      const item = new ItemElem(descrip.value, index);
      this.itemArray = this.itemArray.concat(item);
      localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
      const classesSec = itemClasses();
      ListContainer.appendChild(createListItem(index, xlink, descrip.value, ...classesSec));
    }
    descrip.value = '';
  }

  /**
   * Static method of BookBiding. Updates Local Storate and re renders bookshelf section.
   * @param {HTMLElement} bookshelf HTML element where books are going to be added.
   * @param {string} localName name to be used to add bookbinding to local storage.
   * @param {string} bookDivName name of class to be used to add book to bookshelf.
   * @returns {void} Void
   */
  static update(ListContainer, localName) {
    const itemList = localStorage.getItem(`${localName}`) ? JSON.parse(localStorage.getItem(`${localName}`)) : [];
    const ListFrag = document.createDocumentFragment();
    itemList.forEach((listitem, i) => {
      listitem.index = i;
      const { index, descrip, isCompleted } = listitem;
      const classesSec = itemClasses(isCompleted);
      ListFrag.appendChild(createListItem(index, xlinkHref, descrip, ...classesSec));
    });
    while (ListContainer.childNodes.length > 2) {
      ListContainer.removeChild(ListContainer.lastChild);
    }
    ListContainer.appendChild(ListFrag);
  }
}

export {
  ItemList, xlinkHref,
};