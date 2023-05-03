import elemGen from './elementGeneratorMod.js';
import extraAtt from './elementExtraAttrMod.js';
import btn from './buttonGeneratorMod.js';
import svg from './createSvg.js';
import text from './createTextArea.js';
import label from './createLabel.js';

const createListItem = (index, href, textContent, classList = false, classBtn = false,
  classDivText = false, classText = false) => {
  const docFrag = document.createDocumentFragment();
  const svgBtn = svg.createSvg(href[0]);
  const chkBtn = btn.createButton('button', classBtn, 'Check Done', false, svgBtn);
  extraAtt.addAttributes(chkBtn, 'index', index, 'tabindex', '0');
  docFrag.appendChild(chkBtn);
  const labelTxt = label.createLabel(false, classText, textContent);
  extraAtt.addAttributes(labelTxt, false, false, 'tabindex', '0');
  const divText = elemGen.createElementDefault('div', classDivText, false, labelTxt);
  const txtArea = text.createTextArea('255', classText, textContent);
  divText.appendChild(txtArea);
  docFrag.appendChild(divText);
  const svgMove = svg.createSvg(href[1]);
  docFrag.appendChild(svgMove);
  const svgRemove = svg.createSvg(href[2]);
  docFrag.appendChild(svgRemove);
  const listItem = elemGen.createElementDefault('li', classList, false, docFrag);
  return listItem;
};

/**
 * Class of List Iteam to be instatiated with 3 properties
 * @param {string} descrip Description of List Item
 * @param {boolean} isCompleted Completion status of List Item
 * @param {number} index Position of List Iteam
 * @returns {object} New class with title and author properties
 */
class ListItem {
  constructor(descrip, index, isCompleted = false) {
    this.descrip = descrip;
    this.isCompleted = isCompleted;
    this.index = index;
  }
}

export {
  createListItem,
  ListItem,
};