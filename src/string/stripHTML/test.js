import { describe, expect, it } from 'vitest';
import { stripHTML } from './stripHTML.js';

describe('String/stripHTML', () => {
  it('should remove all HTML tags from a string', () => {
    const str =
      '<p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit.<br/> <span class="mollitia">Mollitia</span> quos dicta, doloremque veritatis.</p>';

    expect(stripHTML(str)).toEqual(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos dicta, doloremque veritatis.'
    );

    expect(() => {
      return stripHTML({});
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
