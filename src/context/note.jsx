import axios from "axios";
import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { noteArrayReducer } from "reducer";
import { getSortedNote } from "utils";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [noteData, setNoteData] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      try {
        const response = await axios.get("/api/notes", {
          headers: {
            authorization: token,
          },
        });
        const noteData = response.data.notes;
        setNoteData(noteData);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const [noteArrayState, noteArrayDispatch] = useReducer(noteArrayReducer, {
    sortBy: "",
    archive: [],
  });

  const sortedNote = getSortedNote(noteData, noteArrayState.sortBy);

  return (
    <NoteContext.Provider
      value={{ sortedNote, setNoteData,noteArrayState, noteArrayDispatch }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
