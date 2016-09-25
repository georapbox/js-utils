/* global stripHTML */

(function () {
  'use strict';

  describe('String/stripHTML', function () {
    it('should remove all HTML tags from a string', function () {
      var str = '<p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit.<br/> <span class="mollitia">Mollitia</span> quos dicta, doloremque veritatis.</p>';

      expect(stripHTML(str))
      .toEqual('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos dicta, doloremque veritatis.');

      expect(function () {
        return stripHTML({});
      }).toThrow();
    });
  });
}());
