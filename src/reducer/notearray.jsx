
export const noteArrayReducer = (noteArrayState, noteArrayAction) => {
  switch (noteArrayAction.type) {
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
