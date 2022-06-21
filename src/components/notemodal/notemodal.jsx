import ReactQuill from "react-quill";
import axios from "axios";
import { quillModules, color } from "staticdata";
import "react-quill/dist/quill.snow.css";
import { isNewTag } from "utils";
import { AiOutlineClose } from "react-icons/ai";
import { useNote } from "context";
import { BsPinAngle, BsPin } from "react-icons/bs";
import { useState } from "react";
import { IoColorPalette } from "react-icons/io5";

const tags = ["Office", "Personal", "Home", "Bills", "EMIs"];
export const NoteModal = ({
  noteState,
  noteDispatch,
  showTags,
  setShowTags,
  token,
}) => {
  let myCurrentDateTime = new Date();
  const { noteArrayDispatch } = useNote();
  const [showColor, setShowColor] = useState(false);
  const [pin, setPin] = useState(false);

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
      noteArrayDispatch({
        type: "ADD_TO_NOTE",
        payload: response.data.notes,
      });
      noteDispatch({ type: "RESET" });
      setPin(false);
      setShowColor(false);
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

  const deleteTag = (tag) => {
    noteDispatch({
      type: "DELETE_TAG",
      payload: tag,
    });
  };

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
    <form className="add-note" onSubmit={(event) => saveHandler(event)}>
      {!pin ? (
        <BsPinAngle
          className="cursor-pointer fa-map-pin"
          title="pinned"
          onClick={() => {
            noteDispatch({ type: "PINNED", payload: noteState.pinned });
            setPin(true);
          }}
        />
      ) : (
        <BsPin
          className="cursor-pointer fa-map-pin"
          title="unpinned"
          onClick={() => {
            noteDispatch({ type: "UNPINNED", payload: noteState.pinned });
            setPin(false);
          }}
        />
      )}
      <input
        style={{ backgroundColor: noteState.color }}
        className="title"
        placeholder="Title"
        value={noteState.title}
        onChange={(event) =>
          noteDispatch({ type: "TITLE", payload: event.target.value })
        }
        required
      />
      <ReactQuill
        style={{ backgroundColor: noteState.color }}
        placeholder="Take a note..."
        theme="snow"
        modules={quillModules}
        value={noteState.text}
        onChange={(event) => noteDispatch({ type: "TEXT", payload: event })}
      />
      <div
        style={{ backgroundColor: noteState.color }}
        className="cursor-pointer tag-container"
        onClick={() => tagsPopup()}
      >
        {noteState.tags.length ? (
          noteState.tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
              <i className="fas fa-times" onClick={() => deleteTag(tag)}></i>
            </span>
          ))
        ) : (
          <span>Add tags</span>
        )}
      </div>
      {showTags && (
        <section name="tags" className="select">
          <AiOutlineClose
            className="cursor-pointer close"
            onClick={() => tagsPopup()}
          />
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
      <IoColorPalette
        className="color-pallete-icon"
        onClick={() => setShowColor((prev) => !prev)}
      />
      {showColor && (
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
      )}
      <button className="cursor-pointer save-note">Save note</button>
    </form>
  );
};
