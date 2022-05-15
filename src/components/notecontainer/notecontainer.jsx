import "./notecontainer.css";
import parse from "html-react-parser";
import { useAuth, useNote } from "context";
import axios from "axios";

export const NoteContainer = ({ title, text, color, date, time, id }) => {
  const note = { title, text, color, date, time, id };
  const { noteArrayDispatch } = useNote();
  const { token } = useAuth();

  const archiveHandler = async (note) => {
    const response = await axios.post(
      `/api/notes/archives/${id}`,
      { note },
      {
        headers: {
          authorization: token,
        },
      }
    );
    noteArrayDispatch({
      type: "ADD_TO_ARCHIVE",
      payload: response.data.archives,
    });
  };

  return (
    <section className="note-container">
      <div className="note-block" style={{ backgroundColor: color }}>
        <span className="note-title">{title}</span>
        <span className="note-text">​{parse(`${text}`)}</span>
        <div className="footer-data">
          <span className="text">
            <p>{date}</p>
            <p>{time}</p>
          </span>
          <span className="icons">
            <i className="cursor-pointer fas fa-tag"></i>
            <i
              className="cursor-pointer fas fa-archive"
              onClick={() => archiveHandler(note)}
            ></i>
            <i className="cursor-pointer fas fa-trash"></i>
          </span>
        </div>
      </div>
    </section>
  );
};
