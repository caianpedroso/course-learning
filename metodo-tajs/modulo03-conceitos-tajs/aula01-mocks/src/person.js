class Person {
  static validate(person) {
    if(!person.name) throw new Error('name i required')
    if(!person.cpf) throw new Error('cpf i required')
  }
}