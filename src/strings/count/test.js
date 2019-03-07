/* global count */

describe('String/count', function () {
  it('should count the occurrences of substring in a string', function () {
    var str = 'Lorem ipsum dolor sit | amet, consectetur - adipisicing elit. Aperiam inventore neque doloremque dolor ibus impedit ipsam, incidunt. Doloremque eveniet sit, illo, et incidunt, maiores sequi accusantium impedit aperiam officiis aspernatur nobis.';

    expect(count(str, 'dolor')).toEqual(3);

    expect(count(str, 'dolor', true)).toEqual(4);

    expect(count(str, '|')).toEqual(1);

    expect(count(str, ',')).toEqual(5);

    expect(count(str, '')).toEqual(245);

    expect(function () {
      return count(str, {});
    }).toThrow();

    expect(function () {
      return count({}, '|');
    }).toThrow();
  });
});
