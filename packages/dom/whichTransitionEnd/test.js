const whichTransitionEnd = require('./whichTransitionEnd');

describe('dom/whichTransitionEnd', () => {
  it('returns the transition end event name', () => {
    const values = ['transitionend', 'oTransitionEnd', 'webkitTransitionEnd', undefined];
    const exists = values.indexOf(whichTransitionEnd()) !== -1;

    expect(exists).toBe(true);
  });
});
