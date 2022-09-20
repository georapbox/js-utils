const mediaQuery = require('./mediaQuery');

describe('dom/mediaQuery', () => {
  function mockMediaQueryList(testQuery) {
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: query === testQuery,
        media: '(min-width: 480px) and (max-width: 768px)',
        onchange: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        __proto__: {
          addEventListener: jest.fn(),
          removeEventListener: jest.fn()
        }
      };
    });
  }

  const mediaQueryString = '(min-width: 480px) and (max-width: 768px)';
  let matchMediaListener, unsubscribeMediaQuery;

  beforeEach(() => {
    matchMediaListener = jest.fn().mockImplementation(matches => {
      return matches;
    });
  });

  afterEach(() => {
    unsubscribeMediaQuery();
  });

  it('test with immediate set to true', () => {
    mockMediaQueryList(mediaQueryString);

    unsubscribeMediaQuery = mediaQuery(mediaQueryString, matchMediaListener);

    expect(matchMediaListener).toHaveBeenCalledWith(true);
  });

  it('test with immediate set to false', () => {
    unsubscribeMediaQuery = mediaQuery(mediaQueryString, matchMediaListener, false);

    expect(matchMediaListener).not.toHaveBeenCalled();
  });

  it('test that it throws when wrong types of arguments passed', () => {
    expect(() => {
      return mediaQuery(null);
    }).toThrow(new TypeError('Expected a string for first argument'));

    expect(() => {
      return mediaQuery('(min-width: 480px) and (max-width: 768px)');
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
