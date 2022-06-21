import {
  MobileSort,
  NoteContainer,
  NoteEditModal,
  NoteModal,
  Sidebar,
} from "components";
import "./home.css";
import { useReducer, useState } from "react";
import { useAuth, useNote } from "context";
import { noteReducer } from "reducer";

const tags = ["Office", "Personal", "Home", "Bills", "EMIs"];
export const Home = () => {
  const [showEditContainer, setShowEditContainer] = useState(false);
  const [noteId, setNoteId] = useState("");
  const [showTags, setShowTags] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const { sortedNote } = useNote();
  const { token } = useAuth();
  const [noteState, noteDispatch] = useReducer(noteReducer, {
    title: "",
    text: "",
    color: "",
    pinned: false,
    tags: [],
  });

  const pinnedArray = sortedNote.filter((note) => note.pinned);
  const unPinnedArray = sortedNote.filter((note) => !note.pinned);

  return (
    <>
      <section className="home">
        <Sidebar />
        <div
          className="sort-modal"
          onClick={() => setShowSort((prev) => !prev)}
        >
          Sort By Time
        </div>
        {showSort && <MobileSort setShowSort={setShowSort} />}

        <main className="content">
          {showEditContainer ? (
            <NoteEditModal
              noteState={noteState}
              noteDispatch={noteDispatch}
              noteId={noteId}
              showTags={showTags}
              setShowTags={setShowTags}
              tags={tags}
              setShowEditContainer={setShowEditContainer}
              token={token}
            />
          ) : (
            <NoteModal
              noteState={noteState}
              noteDispatch={noteDispatch}
              showTags={showTags}
              setShowTags={setShowTags}
              token={token}
            />
          )}

          <div className="display-note">
            {pinnedArray.length !== 0 && <h3>Pinned</h3>}
            {pinnedArray.map(
              ({ _id, title, text, tags, color, date, time }) => (
                <NoteContainer
                  key={_id}
                  _id={_id}
                  title={title}
                  text={text}
                  tags={tags}
                  color={color}
                  date={date}
                  time={time}
                  setShowEditContainer={setShowEditContainer}
                  setNoteId={setNoteId}
                />
              )
            )}
          </div>

          <div className="display-note">
            {unPinnedArray.length !== 0 && <h3>Unpinned</h3>}
            {unPinnedArray.map(
              ({ _id, title, text, tags, color, date, time }) => (
                <NoteContainer
                  key={_id}
                  _id={_id}
                  title={title}
                  text={text}
                  tags={tags}
                  color={color}
                  date={date}
                  time={time}
                  setShowEditContainer={setShowEditContainer}
                  setNoteId={setNoteId}
                />
              )
            )}
          </div>
        </main>
      </section>
    </>
  );
};
