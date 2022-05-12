export const getSortedNote = (noteData, sortBy) => {
  if (sortBy === "Latest") {
    return [...noteData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .sort((a, b) => {
        return b.time.localeCompare(a.time);
      });
  }
  if (sortBy === "Old") {
    return [...noteData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .sort((a, b) => {
        return a.time.localeCompare(b.time);
      });
  }
  return noteData;
};