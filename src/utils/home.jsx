export const isNewTag = (tagsArray, tag) => {
  return tagsArray.some((tags) => tags === tag);
};

export const getNote = (noteId,notes) => {
  return notes.find(note => note._id === noteId)
}