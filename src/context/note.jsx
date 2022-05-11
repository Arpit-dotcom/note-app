import { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [noteData, setNoteData] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/notes");
        console.log(response);
        // noteData=response;
        // setNoteData(noteData);
      } catch (e) {
        console.log(e);
      }
    })();
  },[]);
  return <NoteContext.Provider value={{}}>{children}</NoteContext.Provider>;
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
