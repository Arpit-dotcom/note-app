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
          {noteArrayState.archives.length ? (
            <>
              <h1 className="archive-header">
                Archive ({noteArrayState.archives.length})
              </h1>
              {noteArrayState.archives.map(
                ({ _id, title, tags, text, color, date, time }) => (
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
              )}
            </>
          ) : (
            <h2 className="tags-empty">No archive notes with you yet</h2>
          )}
        </main>
      </section>
    </>
  );
};
