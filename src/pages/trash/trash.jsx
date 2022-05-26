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
          {noteArrayState.trash.length > 0 ? (
            noteArrayState.trash.map(
              ({ _id, title, text, tags, color, date, time }) => (
                <NoteContainer
                  key={_id}
                  _id={_id}
                  title={title}
                  text={text}
                  tags={tags}
                  color={color}
                  date={date}
                  time={time}
                />
              )
            )
          ) : (
            <h2 className="tags-empty">No trash notes with you yet</h2>
          )}
        </main>
      </section>
    </>
  );
};
