/* global supplant */

describe('String/supplant', function () {
  it('should do variable substitution on a string', function () {
    var originalString = '' +
    '<p>My name is {{person.fName}} {{person.lName}} and my job is {{person.position}}.</p>' +
    '<p>' +
    'My hobbies are:' +
    '<ul>' +
    '<li>{{hobbies.0}}</li>' +
    '<li>{{hobbies.1}}</li>' +
    '<li>{{hobbies.2}}</li>' +
    '</ul>' +
    '</p>';

    var expectedString = '' +
    '<p>My name is John Doe and my job is Frontend Developer.</p>' +
    '<p>' +
    'My hobbies are:' +
    '<ul>' +
    '<li>coding</li>' +
    '<li>music</li>' +
    '<li>gaming</li>' +
    '</ul>' +
    '</p>';

    var data = {
      person: {
        fName: 'John',
        lName: 'Doe',
        position: 'Frontend Developer'
      },
      hobbies: ['coding', 'music', 'gaming']
    };

    var resultString = supplant(originalString, data);

    expect(resultString).toEqual(expectedString);

    expect(supplant(originalString)).toEqual(originalString);

    expect(supplant(originalString, 'John Doe')).toEqual(originalString);

    expect(function () {
      return supplant({}, data);
    }).toThrow();
  });
});
