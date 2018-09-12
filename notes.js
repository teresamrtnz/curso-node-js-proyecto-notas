console.log('cargado modulo de notas')

/*
module.exports.addNote = function () {
  console.log('Nueva nota')
  return 'Nueva nota'
}

module.exports.removeNote = function (id) {
  console.log(`Nota borrada con id=${id}`)
  return 'Nota borrada'
}
*/

const addNote = () => {
  console.log('Nueva nota')
  return 'Nueva nota'
}
const removeNote = id => {
  console.log(`Nota borrada con id: ${id}`)
  return 'Nota borrada'
}
module.exports = {
  addNote,
  removeNote
}
