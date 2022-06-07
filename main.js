// Unit Testing: Skipping and Focusing Challenge

/**
 * 1. Listen and hear the importance of what I am about to say.
 * 2. Raise your right hand and say,
 *    'I will be a quality developer that protects the code and my sanity.'
 * 3. Type out below:
 *    'I understand the value testing brings and will help to educate those about it.'
 */

/**
 * Challenge Prompt Here
 * ----------------------
 * I understand the value testing brings and will help to educate those about it.
 */

// Test Suite
describe(`${Person.name} Class`, () => {
  let model;

  beforeEach(() => {
    model = new Person();
  });

  describe('default values', () => {
    it('first name defaults to empty string', () => {
      // assert
      expect(model.firstName).toBe('');
    });
  
    it('last name defaults to empty string', () => {
      // assert
      expect(model.lastName).toBe('');
    });
  
    it('middle name defaults to empty string', () => {
      // assert
      expect(model.middleName).toBe('');
    });
  });

  describe('full name', () => {
    beforeEach(() => {
      model = new Person({
        firstName: 'Dylan',
        lastName: 'Israel'
      });
    });

    it('middle initial when middle name is defined with first and last', () => {
      // arrange
      model.middleName = 'Christopher';

      // act
      const result = model.fullName;

      // audit
      const { firstName: fn, lastName: ln, middleName: mn } = model;

      // assert
      expect(result).toBe(`${fn} ${mn[0]}. ${ln}`);
    });

    it('when NO middle name returns just first and last', () => {
      // arrange
      model.middleName = '';

      // act
      const result = model.fullName;

      // audit
      const { firstName: fn, lastName: ln } = model;

      // assert
      expect(result).toBe(`${fn} ${ln}`);
    });
  });
});
