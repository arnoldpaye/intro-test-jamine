// Unit Testing: Additional Matchers

// Test Suite
describe(`${Person.name} Class`, () => {
  it('exists', () => {
    // assert
    expect(Person).toBeDefined();
  });

  let model;
  let mockPersonService;

  beforeEach(() => {
    const data = { id: 1 };
    mockPersonService = {
      lastId: null,
      user: {},
      getUserById(id) {
        this.lastId = id;

        return this.user;
      }
    };
    model = new Person(data, mockPersonService);
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

  describe('getMyFullUserData', () => {
    it('gets user data by id', async () => {
      // arrange
      mockPersonService.lastId = null;
      mockPersonService.user = {
        firstname: 'Dylan',
        middleName: 'Christopher',
        lastName: 'Israel',
        id: 1
      };

      // act
      const result = await model.getMyFullUserData();

      // assert
      expect(mockPersonService.lastId).toBe(1);
    });
  });

  describe('additional matchers examples', () => {
    it('gets full name pieces', () => {
      // arrange
      const firstName = 'Dylan';
      const middleName = 'Christopher';
      const lastName = 'Israel';

      // act
      model = new Person({firstName, middleName, lastName});

      // assert
      expect(model.fullNamePieces).toEqual([firstName, middleName, lastName]);
    });
  });
});
