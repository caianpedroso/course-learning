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

  static save(person) {
    if(!['cpf', 'name', 'lastName'].every(prop => person[prop])) {
      throw new Error(`cannot save invalid person: ${JSON.stringify(person)}`)
    }
    console.log('registrado com sucesso!', person)
  }
  

}

Person.prototype({
  nome: 'Zezin da Silva',
  cpf: '123.456.789-00',
})

export default Person;