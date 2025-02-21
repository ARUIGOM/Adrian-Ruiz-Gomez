import { MdSettings } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>⚙ Ajustes</span>
      <button className="settings-button">
        <MdSettings />
      </button>
    </div>
  );
};

export default Navbar;
