const isElement = require('./isElement');

describe('is/isElement', () => {
  it('checks if a value is DOM element', () => {
    expect(isElement(document.getElementsByTagName('head')[0])).toBe(true);

    expect(isElement('Lorem')).toBe(false);
  });
});
