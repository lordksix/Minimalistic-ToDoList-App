import elemGen from './elementGeneratorMod.js';
import extraAtt from './elementExtraAttrMod.js';

const createTextArea = (length = false, classes = false,
  textContent = false, innerChild = false) => {
  const textArea = elemGen.createElementDefault('textarea', classes, textContent, innerChild);
  if (length) extraAtt.addAttributes(textArea, false, false, 'maxlength', length);
  textArea.setAttribute('spellcheck', 'true');
  return textArea;
};

export default {
  createTextArea,
};