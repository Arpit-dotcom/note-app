import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "context";

export const useLogin = () => {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const { setIsLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: _email,
        password: _password,
      });
      setToken(response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || "/home", {
        replace: true,
      });
    } catch (e) {
      alert(e);
      alert("Enter correct details");
    }
  };

  const dummyHandler = (event) => {
    event.preventDefault();
    setEmail("arpitkumar@gmail.com");
    setPassword("arpit1234");
  };
  return {
    loginHandler,
    dummyHandler,
    _email,
    _password,
    setEmail,
    setPassword,
  };
};
