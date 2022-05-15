import "../home/home.css";
import { NoteContainer, Sidebar } from "components";
import { useNote } from "context";

export const Archive = () => {
  const { noteArrayState } = useNote();
  return (
    <>
      <section className="home">
        <Sidebar />
        {noteArrayState.archive.map((note, index) => (
          <NoteContainer
            key={index}
            id={note._id}
            title={note.title}
            text={note.text}
            color={note.color}
            date={note.date}
            time={note.time}
          />
        ))}
      </section>
    </>
  );
};
