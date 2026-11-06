import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { subscribeMediaQuery } from './subscribeMediaQuery.js';

describe('dom/subscribeMediaQuery', () => {
  const query = '(min-width: 480px) and (max-width: 768px)';

  let mqList;

  beforeEach(() => {
    mqList = {
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    };

    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => mqList)
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('evaluates the provided media query', () => {
    subscribeMediaQuery(query, vi.fn(), false);

    expect(window.matchMedia).toHaveBeenCalledExactlyOnceWith(query);
  });

  it('invokes the callback immediately with the current matching state by default', () => {
    const callback = vi.fn();

    subscribeMediaQuery(query, callback);

    expect(callback).toHaveBeenCalledExactlyOnceWith(true);
  });

  it('passes false when the media query does not match', () => {
    mqList.matches = false;

    const callback = vi.fn();

    subscribeMediaQuery(query, callback);

    expect(callback).toHaveBeenCalledExactlyOnceWith(false);
  });

  it('does not invoke the callback immediately when disabled', () => {
    const callback = vi.fn();

    subscribeMediaQuery(query, callback, false);

    expect(callback).not.toHaveBeenCalled();
  });

  it('registers a change event listener', () => {
    subscribeMediaQuery(query, vi.fn());

    expect(mqList.addEventListener).toHaveBeenCalledOnce();
    expect(mqList.addEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });

  it('invokes the callback when the matching state changes', () => {
    const callback = vi.fn();

    subscribeMediaQuery(query, callback, false);

    const onChange = mqList.addEventListener.mock.calls[0][1];

    onChange({ matches: true });
    onChange({ matches: false });

    expect(callback).toHaveBeenNthCalledWith(1, true);
    expect(callback).toHaveBeenNthCalledWith(2, false);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('receives the initial state and subsequent changes', () => {
    const callback = vi.fn();

    subscribeMediaQuery(query, callback);

    const onChange = mqList.addEventListener.mock.calls[0][1];

    onChange({ matches: false });

    expect(callback).toHaveBeenNthCalledWith(1, true);
    expect(callback).toHaveBeenNthCalledWith(2, false);
  });

  it('returns a function that removes the change listener', () => {
    const unsubscribe = subscribeMediaQuery(query, vi.fn());

    const onChange = mqList.addEventListener.mock.calls[0][1];

    expect(unsubscribe).toBeTypeOf('function');

    unsubscribe();

    expect(mqList.removeEventListener).toHaveBeenCalledExactlyOnceWith('change', onChange);
  });

  it('allows unsubscribing multiple times', () => {
    const unsubscribe = subscribeMediaQuery(query, vi.fn());

    expect(() => {
      unsubscribe();
      unsubscribe();
    }).not.toThrow();
  });

  it('does not register a listener when the immediate callback throws', () => {
    const callback = vi.fn(() => {
      throw new Error('Callback failed');
    });

    expect(() => subscribeMediaQuery(query, callback)).toThrow('Callback failed');
    expect(mqList.addEventListener).not.toHaveBeenCalled();
  });

  it('throws a TypeError when the media query is not a string', () => {
    for (const query of [undefined, null, 42, true, {}, []]) {
      expect(() => subscribeMediaQuery(query, vi.fn())).toThrow(new TypeError('Expected a string for first argument'));
    }
  });

  it('throws a TypeError when the callback is not a function', () => {
    for (const callback of [undefined, null, 42, 'callback', true, {}]) {
      expect(() => subscribeMediaQuery(query, callback)).toThrow(
        new TypeError('Expected a function for second argument')
      );
    }
  });
});
