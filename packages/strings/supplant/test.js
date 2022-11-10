const supplant = require('./supplant');

describe('String/supplant', () => {
  it('should do variable substitution on a string', () => {
    const originalString = /* html */`
      <p>My name is {{person.fName}} {{person.lName}} and my job is {{person.position}}.</p>
      <p>
        My hobbies are:
        <ul>
          <li>{{hobbies.0}}</li>
          <li>{{hobbies.1}}</li>
          <li>{{hobbies.2}}</li>
        </ul>
      </p>
    `;

    const expectedString = /* html */`
      <p>My name is John Doe and my job is Frontend Developer.</p>
      <p>
        My hobbies are:
        <ul>
          <li>coding</li>
          <li>music</li>
          <li>gaming</li>
        </ul>
      </p>
    `;

    const data = {
      person: {
        fName: 'John',
        lName: 'Doe',
        position: 'Frontend Developer'
      },
      hobbies: ['coding', 'music', 'gaming']
    };

    const resultString = supplant(originalString, data);

    expect(resultString).toEqual(expectedString);

    expect(supplant(originalString)).toEqual(originalString);

    expect(supplant(originalString, 'John Doe')).toEqual(originalString);

    expect(() => {
      return supplant({}, data);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
