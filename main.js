// Unit Testing: It Test Challenge

/**
 * 1. Write a unit test for lastName and middleName
 * to test its default values.
 * 2. Group all 3 unit test with an appropiate describe.
 */

// Test Suite
describe(`${Person.name} Class`, () => {
  let model;

  beforeEach(() => {
    model = new Person();
    console.log('Before Each');
  });

  describe('default values', () => {
    it('first name defaults to empty string', () => {
      console.log(1);
      // assert
      expect(model.firstName).toBe('');
    });
  
    it('last name defaults to empty string', () => {
      console.log(2);
      // assert
      expect(model.lastName).toBe('');
    });
  
    it('middle name defaults to empty string', () => {
      console.log(3);
      // assert
      expect(model.middleName).toBe('');
    });
  })
});
