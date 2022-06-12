// Unit Testing: Spies Challenge

/**
 * 1. Use a spy and get method getCodeName() fully
 * 2. You will need to use spyOn and toHaveBeenCalledWith()
 * 3. HINT: you will need to claim the spy
 * example: spyOn(object, 'key').and.returnValue(value)
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

  describe('say my name', () => {
    it('alerts the full name of user', () => {
      // arrange
      model.firstName = 'Dylan';
      model.lastName = 'Israel';
      spyOn(window, 'alert');

      // act
      model.sayMyName();

      // assert
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith(model.fullName);
    });
  });

  describe('get code name', () => {
    it('when confirmed is a coding / testing god', () => {
      // arrange
      spyOn(window, 'confirm').and.returnValue(true);

      // act
      const result = model.getCodeName();

      // assert
      expect(result).toBe('TESTING GOD!');
    });

    it('when not confirmed is just another scrub', () => {
      // arrange
      spyOn(window, 'confirm').and.returnValue(false);

      // act
      const result = model.getCodeName();

      // assert
      expect(result).toBe(`Scrub skipping tests in his best friend's ride!`);
    });
  });
});
