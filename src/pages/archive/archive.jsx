import "../home/home.css";
import { NoteContainer, Sidebar } from "components";
import { useNote } from "context";

export const Archive = () => {
  const { noteArrayState } = useNote();
  return (
    <>
      <section className="home">
        <Sidebar />
        <main className="content">
          {noteArrayState.archives.map((archive, index) => (
            <NoteContainer
              key={index}
              id={archive._id}
              title={archive.title}
              text={archive.text}
              color={archive.color}
              date={archive.date}
              time={archive.time}
            />
          ))}
        </main>
      </section>
    </>
  );
};
