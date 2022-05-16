import "./notecontainer.css";
import parse from "html-react-parser";
import { useAuth, useNote } from "context";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const NoteContainer = ({ title, text, color, date, time, id }) => {
  const { pathname } = useLocation();
  const note = { title, text, color, date, time, id };
  const { noteArrayDispatch } = useNote();
  const { token } = useAuth();

  const addArchiveNote = async (note) => {
    try {
      const response = await axios.post(
        `/api/notes/archives/${id}`,
        { note },
        { headers: { authorization: token } }
      );
      noteArrayDispatch({
        type: "ADD_TO_ARCHIVE",
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteArchiveNote = async () => {
    try {
      const response = await axios.delete(`/api/archives/delete/${id}`, {
        headers: { authorization: token },
      });
      noteArrayDispatch({
        type: "DELETE_FROM_ARCHIVE",
        payload: response.data.archives,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const removeArchiveNote = async () => {
    try {
      const response = await axios.post(
        `/api/archives/restore/${id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      console.log(response);
      noteArrayDispatch({ type: "UNARCHIVE", payload: response.data });
    } catch (e) {
      console.log(e);
    }
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
            {pathname === "/home" && (
              <>
                <i className="cursor-pointer fas fa-tag" title="label"></i>
                <i
                  className="cursor-pointer fas fa-archive"
                  onClick={() => addArchiveNote(note)}
                  title="archive"
                ></i>
                <i className="cursor-pointer fas fa-trash" title="delete"></i>
              </>
            )}
            {pathname === "/archive" && (
              <>
                <i
                  className="cursor-pointer fas fa-archive"
                  title="unarchive"
                  onClick={() => removeArchiveNote(note)}
                ></i>
                <i
                  className="cursor-pointer fas fa-trash"
                  title="delete"
                  onClick={() => deleteArchiveNote()}
                ></i>
              </>
            )}
          </span>
        </div>
      </div>
    </section>
  );
};
