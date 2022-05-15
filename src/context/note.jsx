import { useReducer, createContext, useContext } from "react";
import { noteArrayReducer } from "reducer";
import { getSortedNote } from "utils";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [noteArrayState, noteArrayDispatch] = useReducer(noteArrayReducer, {
    sortBy: "",
    archive: [],
    notes: [],
  });

  const sortedNote = getSortedNote(noteArrayState.notes, noteArrayState.sortBy);

  return (
    <NoteContext.Provider
      value={{ sortedNote, noteArrayState, noteArrayDispatch }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
