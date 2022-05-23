import { NoteContainer, Sidebar } from "components";
import "./home.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth, useNote } from "context";
import { quillModules, color } from "staticdata";
import { noteReducer } from "reducer";
import { useState } from "react";
import { isNewTag } from "utils";
import { AiOutlineClose } from "react-icons/ai";

const tags = ["Office", "Personal", "Home", "Bills", "EMIs"];
export const Home = () => {
  let myCurrentDateTime = new Date();
  const [showTags, setShowTags] = useState(false);
  const { sortedNote, noteArrayDispatch } = useNote();
  const { token } = useAuth();
  const [noteState, noteDispatch] = useReducer(noteReducer, {
    title: "",
    text: "",
    color: "",
    pinned: false,
    tags: [],
  });

  useEffect(() => {
    document.title = "Note App | Home";
  }, []);

  const saveHandler = async (e) => {
    e.preventDefault();
    const note = {
      title: noteState.title,
      text: noteState.text,
      color: noteState.color,
      pinned: noteState.pinned,
      tags: noteState.tags,
      date: currentDate,
      time: currentTime,
    };
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
        {
          headers: {
            authorization: token,
          },
        }
      );
      noteArrayDispatch({ type: "ADD_TO_NOTE", payload: response.data.notes });
      noteDispatch({ type: "RESET" });
    } catch (e) {
      console.log(e);
    }
  };

  const tagsPopup = () => {
    setShowTags((prev) => !prev);
  };

  const addTag = (tag) => {
    const newTag = isNewTag(noteState.tags, tag);
    if (!newTag) {
      noteDispatch({
        type: "ADD_TAG",
        payload: tag,
      });
    } else {
      console.log("Tag is already present");
    }
  };

  const pinnedArray = sortedNote.filter((note) => note.pinned);
  const unPinnedArray = sortedNote.filter((note) => !note.pinned);
  let currentDate =
    myCurrentDateTime.getDate() +
    "/" +
    (myCurrentDateTime.getMonth() + 1) +
    "/" +
    myCurrentDateTime.getFullYear();

  let currentTime =
    myCurrentDateTime.getHours() +
    ":" +
    myCurrentDateTime.getMinutes() +
    ":" +
    myCurrentDateTime.getSeconds();

  return (
    <>
      <section className="home">
        <Sidebar />

        <main className="content">
          <form className="add-note">
            <i
              className="cursor-pointer fas fa-map-pin"
              title="pinned"
              onClick={() =>
                noteDispatch({ type: "PINNED", payload: noteState.pinned })
              }
            ></i>
            <input
              style={{ backgroundColor: noteState.color }}
              className="title"
              placeholder="Title"
              value={noteState.title}
              onChange={(event) =>
                noteDispatch({ type: "TITLE", payload: event.target.value })
              }
            />
            <ReactQuill
              style={{ backgroundColor: noteState.color }}
              placeholder="Take a note..."
              theme="snow"
              modules={quillModules}
              value={noteState.text}
              onChange={(event) =>
                noteDispatch({ type: "TEXT", payload: event })
              }
            />
            <div
              style={{ backgroundColor: noteState.color }}
              className="cursor-pointer tag-container"
              onClick={() => tagsPopup()}
            >
              {noteState.tags.length !== 0 ? (
                noteState.tags.map((tag, index) => (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                ))
              ) : (
                <span>Add tags</span>
              )}
            </div>
            {showTags && (
              <section name="tags" className="select">
                <AiOutlineClose className="cursor-pointer close" onClick={() => tagsPopup()} />
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="cursor-pointer options"
                    onClick={() => addTag(tag)}
                  >
                    {tag}
                  </div>
                ))}
              </section>
            )}
            <section className="color-pallete">
              {color.map((item, index) => (
                <div
                  className="cursor-pointer color-selector"
                  key={index}
                  onClick={() => noteDispatch({ type: "COLOR", payload: item })}
                  style={{ backgroundColor: item }}
                ></div>
              ))}
            </section>
            <button
              className="cursor-pointer save-note"
              onClick={(event) => saveHandler(event)}
            >
              Save note
            </button>
          </form>

          <div className="display-note">
            {pinnedArray.length !== 0 && <h3>Pinned</h3>}
            {pinnedArray.map(
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
          </div>

          <div className="display-note">
            {unPinnedArray.length !== 0 && <h3>Unpinned</h3>}
            {unPinnedArray.map(
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
          </div>
        </main>
      </section>
    </>
  );
};
