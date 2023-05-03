import elemGen from './elementGeneratorMod.js';
import extraAtt from './elementExtraAttrMod.js';

const createLabel = (forAtr = false, classes = false, textContent = false, innerChild = false) => {
  const label = elemGen.createElementDefault('label', classes, textContent, innerChild);
  extraAtt.addAttributes(label, false, false, 'for', forAtr);
  return label;
};

export default {
  createLabel,
};