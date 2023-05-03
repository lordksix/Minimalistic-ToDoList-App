import elemGen from './elementGeneratorMod.js';
import extraAtt from './elementExtraAttrMod.js';

const createSvg = (href) => {
  const xlink = href.split('#');
  const use = elemGen.createElementDefault('use', false);
  extraAtt.addAttributes(use, false, false, 'xlink:href', href);
  const svg = elemGen.createElementDefault('svg', xlink[1], false, use);
  return svg;
};

export default {
  createSvg,
};
