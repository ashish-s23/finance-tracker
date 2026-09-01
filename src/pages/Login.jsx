import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { FaWallet } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-500 to-emerald-700 items-center justify-center">
        <div className="text-center text-white px-10">
          <FaWallet
            size={80}
            className="mx-auto mb-6"
          />

          <h1 className="text-5xl font-bold mb-4">
            Finance Tracker
          </h1>

          <p className="text-xl">
            Track your income, expenses and savings
            in one place.
          </p>
        </div>
      </div>

      {/* Right Section */}
     <div className="w-full md:w-1/2 flex items-center justify-center bg-white">

        <form
          onSubmit={handleLogin}
         className="bg-white border border-gray-200 p-8 rounded-3xl shadow-2xl w-full max-w-md"
        >
          <div className="flex justify-center mb-4">
            <FaWallet
              size={50}
              className="text-green-500"
            />
          </div>

          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
            Welcome Back
          </h2>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 mb-4 outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
           className="w-full p-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 mb-4 outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
           className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Login
          </button>

          <p className="text-center mt-5 text-gray-600 dark:text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
               className="text-blue-600 font-semibold"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;