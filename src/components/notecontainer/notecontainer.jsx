import "./notecontainer.css";
import parse from "html-react-parser";

export const NoteContainer = ({ title, text, color, date, time }) => {
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
            <i className="cursor-pointer fas fa-archive"></i>
            <i className="cursor-pointer fas fa-trash"></i>
          </span>
        </div>
      </div>
    </section>
  );
};
