import elemGen from './elementGeneratorMod.js';
import extraAtt from './elementExtraAttrMod.js';

const createSvg = (href) => {
  const xlink = href.split('#');
  const use = elemGen.createElementDefault('use', false);
  extraAtt.addAttributes(use, false, false, 'href', `${href}`);
  const svg = elemGen.createElementDefault('svg', xlink[1], false, use);
  return svg;
};

const createNS = (href) => {
  const xlink = href.split('#');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  extraAtt.addAttributes(use, false, false, 'href', `${href}`);
  use.classList.add(`${xlink[1]}-use`);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.appendChild(use);
  svg.classList.add(xlink[1]);
  return svg;
};

export {
  createSvg,
  createNS,
};
