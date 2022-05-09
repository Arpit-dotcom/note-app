import { Navbar, NoteContainer, Sidebar } from "../../components";
import "./home.css";

export const Home = () =>{
  return (
    <>
      <Navbar />
      <section className="home">
        <Sidebar />

        <main className="content">
          <form className="add-note">
            <input className="title" placeholder="Title" />
            <textarea
              className="text-area"
              rows="5"
              placeholder="Take a note..."
            ></textarea>
            <button className="save-note">Save note</button>
          </form>

          <div className="display-note">
            <h3>Pinned</h3>
            <NoteContainer />
          </div>

          <div className="display-note">
            <h3>Unpinned</h3>
            <NoteContainer />
          </div>
        </main>
      </section>
    </>
  );
}