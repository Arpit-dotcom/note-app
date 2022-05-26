export const noteArrayReducer = (noteArrayState, {type, payload}) => {
  switch (type) {
    case "ADD_TO_NOTE":
      return { ...noteArrayState, notes: payload };
    case "SORT_BY_TIME":
      return { ...noteArrayState, sortBy: payload };
    case "ADD_TO_ARCHIVE":
      return {
        ...noteArrayState,
        notes: payload.notes,
        archives: payload.archives,
      };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...noteArrayState,
        archives: payload,
      };
    case "RESTORE_FROM_ARCHIVE":
      return {
        ...noteArrayState,
        notes: payload.notes,
        archives: payload.archives,
      };
    case "ADD_TO_TRASH":
      return {
        ...noteArrayState,
        notes: payload.notes,
        trash: payload.trash,
      };
    case "RESTORE_FROM_TRASH":
      return {
        ...noteArrayState,
        notes: payload.notes,
        trash: payload.trash,
      };
    case "DELETE_FROM_TRASH":
      return {
        ...noteArrayState,
        trash: payload,
      };
      case "UPDATE_NOTES":
        return {...noteArrayState,notes: payload}
    default:
      return noteArrayState;
  }
};
