



import { useState, useEffect } from "react";
import Button from "../../__atoms/Button/Button";
import SignUp from "../SignUp/SignUp";
import MovieList from "../../__organisms/MovieList/MovieList";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setFormData({ email: storedUser.email, password: "" });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    if (formData.email !== storedUser.email || formData.password !== storedUser.password) {
      setError("Invalid email or password");
      return;
    }

    setError("");
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleSignUpRedirect = () => {
    setShowSignUp(true);
  };

  if (isLoggedIn) {
    return <MovieList />
  }

  if (showSignUp) {
    return <SignUp />;
  }

  return (
    <div className="w-[400px] h-[300px] flex flex-col justify-evenly items-center bg-[#161D2F] p-5 rounded-lg ">
      <h1 className="text-2xl text-white">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="flex justify-center items-start p-2.5 border-b-[1px] w-[336px] h-[56px] text-white"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="flex justify-center items-start p-2.5 border-b-[1px] w-[336px] h-[56px] text-white"
          value={formData.password}
          onChange={handleChange}
        />
        <Button text="Login" onClick={handleSubmit} />
      </form>
      <div className=" flex justify-between items-center">
        <h1 className="text-white">Don't have an account?</h1>
        <button onClick={handleSignUpRedirect} className="text-[#FC4747]">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
