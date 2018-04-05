import data from './db.json';

function get(id) {
  return data.notes.find(note => note.id == id);
}
function getAll() {
  return data.notes;
}

export default { get, getAll };