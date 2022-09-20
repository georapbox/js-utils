const whichAnimationEnd = require('./whichAnimationEnd');

describe('dom/whichAnimationEnd', () => {
  it('returns the animation end event name', () => {
    const values = ['animationend', 'oAnimationEnd', 'webkitAnimationEnd', undefined];
    const exists = values.indexOf(whichAnimationEnd()) !== -1;

    expect(exists).toBe(true);
  });
});
