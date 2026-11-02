import { describe, expect, it } from 'vitest';
import { isElement } from './isElement.js';

describe('is/isElement', () => {
  it('checks if a value is a DOM element', () => {
    expect(isElement(document.body)).toBe(true);
    expect(isElement(document.createElement('div'))).toBe(true);
    expect(isElement(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))).toBe(true);

    expect(isElement(document)).toBe(false);
    expect(isElement(document.createTextNode('Hello'))).toBe(false);
    expect(isElement(document.createDocumentFragment())).toBe(false);

    expect(isElement('Lorem')).toBe(false);
    expect(isElement({})).toBe(false);
    expect(isElement(null)).toBe(false);
    expect(isElement(undefined)).toBe(false);
    expect(isElement(0)).toBe(false);
  });
});
