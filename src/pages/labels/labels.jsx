import "../home/home.css";
import { NoteContainer, Sidebar } from "components";
import { useNote } from "context";
import { useState } from "react";

const tags = ["Office", "Personal", "Home", "Bills", "EMIs"];
export const Labels = () => {
  const { noteArrayState } = useNote();
  const [filterTags, setFilterTags] = useState([]);

  const getFilterByTags = (tag) => {
    console.log(tag);
    setFilterTags(
      noteArrayState.notes.filter((note) => note.tags.filter(noteTag => noteTag === tag))
    );
  };

  console.log(filterTags);

  return (
    <>
      <section className="home">
        <Sidebar />
        <main className="content">
          <ul className="tags-list">
            {tags.map((tag) => (
              <li
                className="cursor-pointer tags-item"
                onClick={() => getFilterByTags(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
          {filterTags.map(
            ({ _id, title, text, tags, color, date, time }, index) => (
              <NoteContainer
                key={index}
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
        </main>
      </section>
    </>
  );
};
