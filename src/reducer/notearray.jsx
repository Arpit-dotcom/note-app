export const noteArrayReducer = (noteArrayState, noteArrayAction) => {
  switch (noteArrayAction.type) {
    case "ADD_TO_NOTE":
      return { ...noteArrayState, notes: noteArrayAction.payload };
    case "SORT_BY_TIME":
      return { ...noteArrayState, sortBy: noteArrayAction.payload };
    case "ADD_TO_ARCHIVE":
      return {
        ...noteArrayState,
        notes: noteArrayAction.payload.notes,
        archives: noteArrayAction.payload.archives,
      };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...noteArrayState,
        archives: noteArrayAction.payload,
      };
    case "UNARCHIVE":
      return {
        ...noteArrayState,
        notes: noteArrayAction.payload.notes,
        archives: noteArrayAction.payload.archives,
      };
    default:
      return noteArrayState;
  }
};
