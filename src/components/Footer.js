import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <h4 className="flex flex-col bg-orange-400 text-center min-h-0 sticky bottom-0">
      Developed by {user.name} - {user.email}
    </h4>
  );
};

export default Footer;
