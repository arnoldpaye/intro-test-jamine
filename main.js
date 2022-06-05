// Unit Testing: It Test Challenge

/**
 * 1. Write a unit test for lastName and middleName
 * to test its default values.
 * 2. Group all 3 unit test with an appropiate describe.
 */

// Test Suite
describe(`${Person.name} Class`, () => {
  describe('default values', () => {
    it('first name defaults to empty string', () => {
      // arrange
      const data = { firstName: null }
  
      // action
      const model = new Person(data);
  
      // assert
      expect(model.firstName).toBe('');
    });
  
    it('last name defaults to empty string', () => {
      // arrange
      const data = { lastName: null }
  
      // action
      const model = new Person(data);
  
      // assert
      expect(model.lastName).toBe('');
    });
  
    it('middle name defaults to empty string', () => {
      // arrange
      const data = { middleName: null }
  
      // action
      const model = new Person(data);
  
      // assert
      expect(model.middleName).toBe('');
    });
  })
});
