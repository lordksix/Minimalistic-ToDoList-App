import { ListItem, createListItem } from './modules/ListItemMod.js';
import './index.css';
import svg from './asset/resource/icons.svg';

const item1 = new ListItem('Item1', 1);
const item2 = new ListItem('Item2', 2, true);
const item3 = new ListItem('Item3', 3);
const item4 = new ListItem('Item4', 4, true);
const item5 = new ListItem('Item5', 5);

const arrayItems = [item1, item2, item3, item4, item5];
const listUl = document.querySelector('#add-items');

const classListIncomp = ['app-row', 'app-item'];
const classListComp = ['app-row', 'app-item', 'completed'];
const classBtn = 'item-chk';
const classDivText = 'item';
const classText = 'app-text';
const xlinkHref = [`${svg}#icon-check`, './asset/resource/icons.svg#icon-more-vert',
  './asset/resource/icons.svg#icon-trash-o'];

const createItemLi = (item) => {
  const classList = item.isCompleted ? classListComp : classListIncomp;
  const element = createListItem(item.index, xlinkHref, item.descrip, classList,
    classBtn, classDivText, classText);
  return element;
};

arrayItems.forEach((item) => {
  listUl.appendChild(createItemLi(item));
});