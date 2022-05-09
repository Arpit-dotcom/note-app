import "./landingpage.css";
import pic from "../../assets/landpage.svg";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="area">
        <section className="container">
          <img className="container-img" src={pic} alt="container-image" />

          <span className="sub-container">
            <h1 className="container-header">Notes App!!!!</h1>
            <p className="container-text">
              Manage your tasks and dialy efforts in a single app. An app where
              you will store different content access it in one click
            </p>
            <div className="link-btn">
              <a className="link link-primary" href="/documentation/docs.html">
                Get Started
              </a>
            </div>
          </span>
        </section>
      </div>
      <Footer />
    </>
  );
};
