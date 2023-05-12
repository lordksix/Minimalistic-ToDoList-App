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

const localStorageInteration = (nameKey, dataValue) => {
  localStorage.setItem(nameKey, JSON.stringify(dataValue));
};

export {
  xlinkHref, itemClasses, localStorageInteration,
};