class PersonService {
  getUserById(id) {
    return fetch(`https://jsonplaceholder.typicode/user/${id}`);
  }
}
