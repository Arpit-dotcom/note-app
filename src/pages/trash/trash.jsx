import "../home/home.css";
import { NoteContainer, Sidebar } from "components";
import { useNote } from "context";

export const Trash = () => {
  const { noteArrayState } = useNote();
  return (
    <>
      <section className="home">
        <Sidebar />
        <main className="content">
          {noteArrayState.trash.map(
            ({ _id, title, text, color, date, time }, index) => (
              <NoteContainer
                key={index}
                _id={_id}
                title={title}
                text={text}
                color={color}
                date={date}
                time={time}
              />
            )
          )}
        </main>
      </section>
    </>
  );
};
