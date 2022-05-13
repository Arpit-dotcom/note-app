export const noteArrayReducer = (noteArrayState, noteArrayAction) => {
  switch (noteArrayAction.type) {
    case "LATEST":
      return { ...noteArrayState, sortBy: "Latest" };
    case "OLD":
      return { ...noteArrayState, sortBy: "Old" };
    default:
      return noteArrayState;
  }
};
