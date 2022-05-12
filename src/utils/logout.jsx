import { useNavigate } from "react-router-dom";
import { useAuth } from "context";

export const useLogout = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const notLogOutHandler = () => {
    navigate("/home");
  };

  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/home");
  };
  return { notLogOutHandler, logOutHandler };
};
