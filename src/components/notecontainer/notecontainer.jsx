import "./notecontainer.css";
import parse from "html-react-parser";

export const NoteContainer = ({ title, text, color }) => {
  return (
    <section className="note-container">
      <div className="note-block" style={{ backgroundColor: color }}>
        <span className="note-title">{title}</span>
        <span className="note-text">​{parse(`${text}`)}</span>
      </div>
    </section>
  );
};
