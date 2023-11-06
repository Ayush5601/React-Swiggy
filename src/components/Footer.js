import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <h4 className="flex flex-col min-h-screen bg-orange-400 text-center min-h-0">
      This site is developed by {user.name} - {user.email}
    </h4>
  );
};

export default Footer;
