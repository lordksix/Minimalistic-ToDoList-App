/**
 * @jest-environment jsdom
 */

import {
  createButton, addClass, createElementDefault,
  createNS,
} from '../src/modules/createElementMod.js';

describe('Button Generator Function', () => {
  const typeBtn = 'button';
  const classStr = 'clr-btn';
  const classArr = ['clr-btn', 'awesome'];
  const ariaLbl = 'Clear All';
  const textBtn = 'Clear All';
  const spanBtn = document.createElement('span');
  spanBtn.textContent = textBtn;
  const href = '#';

  test('Create button type with text content and one class', () => {
    const btn = document.createElement('button');
    btn.classList.add(classStr);
    btn.textContent = textBtn;
    btn.type = typeBtn;
    expect(createButton(typeBtn, classStr, ariaLbl, textBtn)).toEqual(btn);
  });

  test('Create button type with text content and multiple classes', () => {
    const btn = document.createElement('button');
    btn.classList.add(...classArr);
    btn.textContent = textBtn;
    btn.type = typeBtn;

    expect(createButton(typeBtn, classArr, ariaLbl, textBtn)).toEqual(btn);
  });

  test('Create button type with innerChild classes', () => {
    const btn = document.createElement('button');
    btn.classList.add(...classArr);
    const span = document.createElement('span');
    span.textContent = textBtn;
    btn.type = typeBtn;
    btn.appendChild(span);

    expect(createButton(typeBtn, classArr, ariaLbl, false, spanBtn)).toEqual(btn);
  });

  test('Create button type with text content and multiple classes and href', () => {
    const btn = document.createElement('button');
    btn.classList.add(...classArr);
    btn.textContent = textBtn;
    btn.type = typeBtn;
    btn.addEventListener('click', () => {
      window.location.href = href;
    });
    expect(createButton(typeBtn, classArr, ariaLbl, textBtn, false, href)).toEqual(btn);
  });
});

describe('Add Class Function', () => {
  const btn = document.createElement('button');
  const textBtn = 'Clear All';
  const typeBtn = 'button';
  btn.textContent = textBtn;
  btn.type = typeBtn;
  const classStr = 'clr-btn';
  const classStr2 = 'awesome';
  const classArr = ['clr-btn', 'awesome'];

  test('Add one class to HTML element', () => {
    const btnTest = document.createElement('button');
    btnTest.textContent = textBtn;
    btnTest.type = typeBtn;
    btn.classList.add(classStr);

    expect(addClass(btnTest, classStr)).toEqual(btn);
  });

  test('Add multiple class to HTML', () => {
    const btnTest = document.createElement('button');
    btnTest.textContent = textBtn;
    btnTest.type = typeBtn;
    btn.classList.add(classStr2);

    expect(addClass(btnTest, classArr)).toEqual(btn);
  });
});

describe('Create Element Function', () => {
  const div = document.createElement('div');
  const textBtn = 'Clear All';
  div.textContent = textBtn;
  const classStr = 'clr-btn';
  const classStr2 = 'awesome';
  const classArr = ['clr-btn', 'awesome'];

  test('Add one class to HTML element', () => {
    div.classList.add(classStr);

    expect(createElementDefault('div', classStr, textBtn)).toEqual(div);
  });

  test('Add multiple class to HTML', () => {
    div.classList.add(classStr2);
    expect(createElementDefault('div', classArr, textBtn)).toEqual(div);
  });
});

describe('Create Element Function', () => {
  const div = '<svg class="icon-more-vert"><use href="./asset/resource/icons.svg#icon-more-vert" class="icon-more-vert-use"></use></svg>';

  test('Add one class to HTML element', () => {
    const temp = document.createElement('div');
    temp.appendChild(createNS('./asset/resource/icons.svg#icon-more-vert'));

    expect(temp.innerHTML).toEqual(div);
  });
});