import { useNavigate } from "react-router-dom";
import { useAuth } from "context";

export const useLogout = () => {
  const { setIsLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();

  const notLogOutHandler = () => {
    navigate("/home");
  };

  const logOutHandler = () => {
    setToken("");
    setIsLoggedIn(false);
    navigate("/home");
  };
  return { notLogOutHandler, logOutHandler };
};
