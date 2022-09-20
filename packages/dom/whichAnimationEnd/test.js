const whichAnimationEnd = require('./whichAnimationEnd');

describe('dom/whichAnimationEnd', function () {
  it('returns the animation end event name', function () {
    const values = ['animationend', 'oAnimationEnd', 'webkitAnimationEnd', undefined];
    const exists = values.indexOf(whichAnimationEnd()) !== -1;

    expect(exists).toBe(true);
  });
});
