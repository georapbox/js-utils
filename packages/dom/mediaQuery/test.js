var mediaQuery = require('./mediaQuery');

describe('dom/mediaQuery', function () {
  function mockMediaQueryList(testQuery) {
    window.matchMedia = jest.fn().mockImplementation(function (query) {
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

  var mediaQueryString = '(min-width: 480px) and (max-width: 768px)';
  var matchMediaListener, unsubscribeMediaQuery;

  beforeEach(function () {
    matchMediaListener = jest.fn().mockImplementation(function (matches) {
      return matches;
    });
  });

  afterEach(function () {
    unsubscribeMediaQuery();
  });

  it('test with immediate set to true', function () {
    mockMediaQueryList(mediaQueryString);

    unsubscribeMediaQuery = mediaQuery(mediaQueryString, matchMediaListener);

    expect(matchMediaListener).toHaveBeenCalledWith(true);
  });

  it('test with immediate set to false', function () {
    unsubscribeMediaQuery = mediaQuery(mediaQueryString, matchMediaListener, false);

    expect(matchMediaListener).not.toHaveBeenCalled();
  });

  it('test that it throws when wrong types of arguments passed', function () {
    expect(function () {
      return mediaQuery(null);
    }).toThrow(new TypeError('Expected a string for first argument'));

    expect(function () {
      return mediaQuery('(min-width: 480px) and (max-width: 768px)');
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
