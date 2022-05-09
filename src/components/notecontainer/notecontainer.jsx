import "./notecontainer.css";

export const NoteContainer = () =>{
    return (
      <section className="note-container">
        <div className="note-block">
          <p className="note-title">Pinned node</p>
          <p className="note-text">Hey it's a pinned note</p>
        </div>
      </section>
    );
}