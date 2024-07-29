class Person {
  static validate(person) {
    if(!person.name) throw new Error('name i required')
    if(!person.cpf) throw new Error('cpf i required')
  }
  static format(person) {
    const [name, ...lastName] = person.name.split(' ')
    return {
      cpf: person.cpf.replace(/\D/g, ''),
      name,
      lastName: lastName.join(' ')
    }
  }
}