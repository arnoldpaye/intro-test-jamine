/**
 * Unit Testing - Grouping with Describe Challenge
 * 
 * Is there a more reliable way to identify our grouping name?
 */

class Person {
  firstName;
  lastName;
  middleName;

  constructor(data = {}) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.middleName = data.middleName;
  }
}
/**
 * Test Suite
 */
describe(`${Person.name} Class`, () => {

});
