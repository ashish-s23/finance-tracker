import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaMoon,
  FaSignOutAlt,
  FaChartLine,
} from "react-icons/fa";

function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex justify-between items-center">

      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="bg-green-500 p-3 rounded-2xl">
          <FaChartLine
            size={24}
            className="text-white"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            FinTrack
          </h1>

          <p className="text-zinc-400 text-sm">
            Finance Dashboard
          </p>
        </div>
      </div>

      {/* User */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-xl">
          <FaUserCircle
            size={28}
            className="text-zinc-300"
          />

          <span className="text-white text-sm">
            {auth.currentUser?.email}
          </span>
        </div>

        <button className="bg-zinc-800 p-3 rounded-xl text-white">
          <FaMoon />
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 p-3 rounded-xl text-white"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}

export default Header;