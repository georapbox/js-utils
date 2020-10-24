var dasherize = require('./dasherize');

describe('String/dasherize', function () {
  it('should dasherize a string', function () {
    expect(dasherize('backgroundColor')).toEqual('background-color');

    expect(dasherize('MozBackgroundImage')).toEqual('-moz-background-image');

    expect(dasherize('-moz-background-image')).toEqual('-moz-background-image');

    expect(function () {
      return dasherize(['MozBackgroundImage']);
    }).toThrow();
  });
});
