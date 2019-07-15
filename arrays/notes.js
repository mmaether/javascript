const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'Exercise. Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
  const index = notes.findIndex(function(note, index) {
    return note.title === noteTitle;
  })
  return notes[index];
}

const note = findNote(notes, 'Office modification');
console.log(note);

/*
console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function (note, index) {
  return note.title === 'Habits to work on'
});

console.log(index);
*/