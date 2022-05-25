import "../home/home.css";
import { NoteContainer, Sidebar } from "components";
import { useNote } from "context";
import { useState } from "react";

const tags = ["Office", "Personal", "Home", "Bills", "EMIs"];
export const Labels = () => {
  const { noteArrayState } = useNote();
  const [filterTags, setFilterTags] = useState([]);

  const getFilterByTags = (tag) => {
    // console.log(tag);
    setFilterTags(
      noteArrayState.notes.filter(({ tags }) =>
        tags.some((item) => tag.includes(item))
      )
    );
  };

  // console.log(filterTags);

  return (
    <>
      <section className="home">
        <Sidebar />
        <main className="content">
          <ul className="tags-list">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="cursor-pointer tags-item"
                onClick={() => getFilterByTags(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
          {filterTags.length > 0 ? filterTags.map(
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
          ) : <h2 className="tags-empty">No notes with you yet</h2>}
        </main>
      </section>
    </>
  );
};
