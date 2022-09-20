const move = require('./move');

describe('Array/move', () => {
  it('moves an array element to a different position', () => {
    const array = ['A', 'B', 'C', 'D', 'E'];

    expect(move(array, 0, 1)).toEqual(['B', 'A', 'C', 'D', 'E']);

    expect(move(array, 0, array.length - 1)).toEqual(['B', 'C', 'D', 'E', 'A']);

    expect(move(array, -1, 3)).toEqual(['A', 'B', 'C', 'E', 'D']);

    expect(move(array, -1, -3)).toEqual(['A', 'B', 'E', 'C', 'D']);

    expect(move(array, NaN, 1)).toEqual(['A', 'B', 'C', 'D', 'E']);

    expect(move(array, 0, NaN)).toEqual(['A', 'B', 'C', 'D', 'E']);

    expect(move(array, NaN, NaN)).toEqual(['A', 'B', 'C', 'D', 'E']);

    expect(move(array, 0, 0)).toEqual(['A', 'B', 'C', 'D', 'E']);

    expect(move([], 0, 1)).toEqual([]);

    expect(() => {
      return move(null, 0, 1);
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(() => {
      return move(array, '0', 1);
    }).toThrow(new TypeError('Expected a number for second and third arguments'));

    expect(() => {
      return move(array, 0, '1');
    }).toThrow(new TypeError('Expected a number for second and third arguments'));
  });
});
