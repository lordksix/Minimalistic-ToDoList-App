import {
  createLabel, createNS, createTextArea,
  createElementDefault, createButton,
} from './createElementMod.js';

const createListItem = (index, href, textContent, classList = false, classBtn = false,
  classDivText = false, classText = false) => {
  const docFrag = document.createDocumentFragment();
  const svgBtn = createNS(href[0]);
  const chkBtn = createButton('button', classBtn, 'Check Done', false, svgBtn);
  chkBtn.setAttribute('tabindex', '0');
  docFrag.appendChild(chkBtn);
  const labelTxt = createLabel(false, classText, textContent);
  labelTxt.setAttribute('tabindex', '0');
  const divText = createElementDefault('div', classDivText, false, labelTxt);
  const txtArea = createTextArea('255', classText, textContent);
  divText.appendChild(txtArea);
  docFrag.appendChild(divText);
  const svgMove = createNS(href[1]);
  docFrag.appendChild(svgMove);
  const svgRemove = createNS(href[2]);
  docFrag.appendChild(svgRemove);
  const listItem = createElementDefault('li', classList, false, docFrag);
  listItem.setAttribute('data-index', index);
  listItem.setAttribute('draggable', 'true');
  return listItem;
};

/**
 * Class of List Iteam to be instatiated with 3 properties
 * @param {string} descrip Description of List Item
 * @param {boolean} isCompleted Completion status of List Item
 * @param {number} index Position of List Iteam
 * @returns {object} New class with title and author properties
 */
class ItemElem {
  constructor(descrip, index, isCompleted = false) {
    this.descrip = descrip;
    this.isCompleted = isCompleted;
    this.index = index;
  }
}

export {
  createListItem,
  ItemElem,
};