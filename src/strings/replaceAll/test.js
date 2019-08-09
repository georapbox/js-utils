describe('String/replaceAll', function () {
  it('should replace all occurrences of a string with a given substring', function () {
    var str = 'Lorem ispum 5 dolor sit amet.';

    expect(replaceAll(str, ' ', '_'))
    .toEqual('Lorem_ispum_5_dolor_sit_amet.');

    expect(replaceAll(str, '', '-'))
    .toEqual('L-o-r-e-m- -i-s-p-u-m- -5- -d-o-l-o-r- -s-i-t- -a-m-e-t-.');

    expect(replaceAll(str, 'Lorem', '***'))
    .toEqual('*** ispum 5 dolor sit amet.');

    expect(replaceAll(str, 'LOREM', '_lorem_', true))
    .toEqual('_lorem_ ispum 5 dolor sit amet.');

    expect(function () {
      return replaceAll(str, {}, '*');
    }).toThrow();

    expect(function () {
      return replaceAll(str, 'Lorem', {});
    }).toThrow();

    expect(function () {
      return replaceAll({}, 'Lorem', '*');
    }).toThrow();
  });
});
