import "../home/home.css";
import { Navbar, NoteContainer, Sidebar } from "components";

export const Trash = () => {
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
