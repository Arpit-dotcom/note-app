import "../home/home.css";
import { Navbar, NoteContainer, Sidebar } from "../../components";

export const Archive = () => {
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
