import "../home/home.css";
import { NoteContainer, Sidebar } from "components";

export const Trash = () => {
  return (
    <>
      <section className="home">
        <Sidebar />
        <NoteContainer />
      </section>
    </>
  );
};
