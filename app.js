console.log('Aplicación de notas arrancada.')
const notes = require('./notes')
const notaAñadida = notes.addNote()
const notaEliminada = notes.removeNote(5)
