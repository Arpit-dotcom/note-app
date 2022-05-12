import "../home/home.css";
import { Navbar, NoteContainer, Sidebar } from "components";

export const Labels = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <Sidebar />
        <NoteContainer />
      </section>
    </>
  );
};
