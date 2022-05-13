import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import {
  Archive,
  Home,
  Labels,
  LandingPage,
  Login,
  Logout,
  Signup,
  Trash,
} from "./pages";
import { RequiredAuth } from "./requiredauth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route
          path="/label"
          element={
            <RequiredAuth>
              <Labels />
            </RequiredAuth>
          }
        />
        <Route
          path="/archive"
          element={
            <RequiredAuth>
              <Archive />
            </RequiredAuth>
          }
        />
        <Route
          path="/trash"
          element={
            <RequiredAuth>
              <Trash />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
