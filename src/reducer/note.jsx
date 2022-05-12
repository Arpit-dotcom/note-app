export const noteReducer = (noteState, noteAction) => {
  switch (noteAction.type) {
    case "TITLE":
      return { ...noteState, title: noteAction.payload };
    case "TEXT":
      return { ...noteState, text: noteAction.payload };
    case "COLOR":
      return { ...noteState, color: noteAction.payload };
    case "PINNED":
      return { ...noteState, pinned: !noteAction.payload };
    case "RESET":
      return {
        title: "",
        text: "",
        color: "",
        pinned: false,
      };
    default:
      noteState;
  }
};
