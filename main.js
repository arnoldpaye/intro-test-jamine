// Unit Testing: Our first test with it

/**
 * Test Suite
 */
describe(`${Person.name} Class`, () => {
  it('first name defaults to empty string', () => {
    // arrange
    const data = { firstName: null }

    // action
    const model = new Person(data);

    // assert
    expect(model.firstName).toBe('');
  });
});
