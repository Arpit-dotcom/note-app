import "../home/home.css";
import { NoteContainer, Sidebar } from "components";

export const Labels = () => {
  return (
    <>
      <section className="home">
        <Sidebar />
        <NoteContainer />
      </section>
    </>
  );
};
