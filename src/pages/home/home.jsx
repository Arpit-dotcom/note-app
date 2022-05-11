import { NoteContainer, Sidebar } from "../../components";
import uuid from "react-uuid";
import "./home.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";

export const Home = () => {
  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "image", "video", "link"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [pinned, setPinned] = useState(false);

  const saveHandler = (e) => {
    e.preventDefault();
    (async () => {
      const response = await axios.post("/api/notes", {
        _id: uuid(),
        title: title,
        text: text,
        color: color,
        pinned: pinned,
      });
    })()
    setColor("");
    setTitle("");
    setText("");
    setPinned(false);
  };

  return (
    <>
      <section className="home">
        <Sidebar />

        <main className="content">
          <form className="add-note">
            <i
              className="cursor-pointer fas fa-map-pin"
              title="pinned"
              onClick={() => setPinned((prev) => !prev)}
            ></i>
            <input
              className="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ReactQuill
              placeholder="Take a note..."
              theme="snow"
              modules={quillModules}
              value={text}
              onChange={(e) => setText(e)}
            />
            <section className="color-pallete">
              <div
                className="color-selector"
                onClick={() => setColor("#f87171")}
                style={{ backgroundColor: "#f87171" }}
              ></div>
              <div
                className="color-selector"
                onClick={() => setColor("#fb923c")}
                style={{ backgroundColor: "#fb923c" }}
              ></div>
              <div
                className="color-selector"
                onClick={() => setColor("#facc15")}
                style={{ backgroundColor: "#facc15" }}
              ></div>
              <div
                className="color-selector"
                onClick={() => setColor("#a3e635")}
                style={{ backgroundColor: "#a3e635" }}
              ></div>
              <div
                className="color-selector"
                onClick={() => setColor("#5eead4")}
                style={{ backgroundColor: "#5eead4" }}
              ></div>
              <div
                className="color-selector"
                onClick={() => setColor("#8b5cf6")}
                style={{ backgroundColor: "#8b5cf6" }}
              ></div>
              <div
                className="color-selector"
                onClick={() => setColor("#ec4899")}
                style={{ backgroundColor: "#ec4899" }}
              ></div>
              <div
                className="color-selector"
                onClick={() => setColor("#f43f5e")}
                style={{ backgroundColor: "#f43f5e" }}
              ></div>
            </section>
            <button className="save-note" onClick={(e) => saveHandler(e)}>
              Save note
            </button>
          </form>

          <div className="display-note">
            <h3>Pinned</h3>
            <NoteContainer title={title} text={text} color={color} />
            <NoteContainer title={title} text={text} color={color} />
          </div>

          <div className="display-note">
            <h3>Unpinned</h3>
            <NoteContainer title={title} text={text} color={color} />
            <NoteContainer title={title} text={text} color={color} />
          </div>
        </main>
      </section>
    </>
  );
};
