
export const noteArrayReducer = (noteArrayState, noteArrayAction) => {
  switch (noteArrayAction.type) {
    case "ADD_TO_NOTE":
      return { ...noteArrayState, notes: noteArrayAction.payload}
    case "SORT_BY_TIME":
      return { ...noteArrayState, sortBy: noteArrayAction.payload };
    case "ADD_TO_ARCHIVE":
      return {
        ...noteArrayState,
        archive: noteArrayAction.payload,
      };
    default:
      return noteArrayState;
  }
};
