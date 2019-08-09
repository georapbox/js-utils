describe('dom/whichAnimationEnd', function () {
  it('returns the animation end event name', function () {
    var values = ['animationend', 'oAnimationEnd', 'webkitAnimationEnd', undefined];
    var exists = values.indexOf(whichAnimationEnd()) !== -1;

    expect(exists).toBe(true);
  });
});
