import "./notecontainer.css";
import parse from "html-react-parser";
import { useAuth, useNote } from "context";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const NoteContainer = ({
  title,
  text,
  tags,
  color,
  date,
  time,
  _id,
}) => {
  const { pathname } = useLocation();
  const note = { title, text, tags, color, date, time, _id };
  const { noteArrayDispatch } = useNote();
  const { token } = useAuth();

  const addArchiveNote = async (note) => {
    try {
      const response = await axios.post(
        `/api/notes/archives/${_id}`,
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
      const response = await axios.delete(`/api/archives/delete/${_id}`, {
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
        `/api/archives/restore/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      noteArrayDispatch({
        type: "RESTORE_FROM_ARCHIVE",
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const addTrashNote = async () => {
    try {
      const response = await axios.post(
        `/api/notes/trash/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      noteArrayDispatch({ type: "ADD_TO_TRASH", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  const restoreTrashNote = async () => {
    try {
      const response = await axios.post(
        `/api/trash/restore/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      noteArrayDispatch({ type: "RESTORE_FROM_TRASH", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTrashNote = async () => {
    try {
      const response = await axios.delete(`/api/trash/delete/${_id}`, {
        headers: { authorization: token },
      });
      noteArrayDispatch({
        type: "DELETE_FROM_TRASH",
        payload: response.data.trash,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="note-container">
      <div className="note-block" style={{ backgroundColor: color }}>
        <span className="note-title">{title}</span>
        <span className="note-text">​{parse(`${text}`)}</span>
        <div className="note-tags">
          {tags?.map((tag, index) => (
            <span className="tags" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div className="footer-data">
          <span className="text">
            <p>{date}</p>
            <p>{time}</p>
          </span>
          <span className="icons">
            {pathname === "/home" && (
              <>
                <i
                  className="cursor-pointer fas fa-archive"
                  onClick={() => addArchiveNote(note)}
                  title="archive"
                ></i>
                <i
                  className="cursor-pointer fas fa-trash-alt"
                  title="trash"
                  onClick={() => addTrashNote()}
                ></i>
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
            {pathname === "/trash" && (
              <>
                <i
                  className="cursor-pointer fas fa-trash-restore"
                  title="restore"
                  onClick={() => restoreTrashNote()}
                ></i>
                <i
                  className="cursor-pointer fas fa-trash"
                  title="delete"
                  onClick={() => deleteTrashNote()}
                ></i>
              </>
            )}
          </span>
        </div>
      </div>
    </section>
  );
};
