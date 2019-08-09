describe('String/truncate', function () {
  it('should truncate a string based on character count', function () {
    var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptas tempora nihil commodi laborum sit eum atque iusto temporibus, odit natus odio accusantium id, labore, possimus laboriosam. Eos, ducimus, blanditiis.';

    expect(truncate(str, 50, '...'))
    .toEqual('Lorem ipsum dolor sit amet, consectetur adipisicin...');

    expect(truncate(str, 30, '---'))
    .toEqual('Lorem ipsum dolor sit amet, co---');

    expect(truncate(str, 30))
    .toEqual('Lorem ipsum dolor sit amet, co');

    expect(truncate(str, -1)).toEqual(str);

    expect(truncate(str, 3.5)).toEqual('Lor');

    expect(truncate(str, 0)).toEqual('');

    expect(truncate(str, 0, '...')).toEqual('...');

    expect(truncate(str, 3.7)).toEqual('Lor');

    expect(truncate(str, NaN)).toEqual(str);

    expect(function () {
      return truncate({item: str}, 10);
    }).toThrow();

    expect(function () {
      return truncate(str, '10');
    }).toThrow();
  });
});
