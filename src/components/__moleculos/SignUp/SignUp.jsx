

import { useState } from "react";
import Login from "../Login/Login";
import Button from "../../__atoms/Button/Button";

function SignUp() {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      email: !formData.email,
      password: !formData.password,
      repeatPassword: !formData.repeatPassword,
    };

    if (newErrors.email || newErrors.password || newErrors.repeatPassword) {
      setErrors(newErrors);
      setErrorMessage("All fields are required");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Invalid email format");
      setErrors({ ...errors, email: true });
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number."
      );
      setErrors({ ...errors, password: true });
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      setErrorMessage("Passwords do not match");
      setErrors({ ...errors, repeatPassword: true });
      return;
    }

    
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: formData.email,
        password: formData.password,
      })
    );

    setErrorMessage("");
    setIsRegistered(true);
  };

  if (isRegistered) {
    return <Login />;
  }

  if (showLogin) {
    return <Login />;
  }

  return (
    <div className="w-[400px] h-[480px] flex flex-col justify-evenly items-center bg-[#161D2F] p-5 rounded-lg">
      <h1 className="text-2xl text-white">Sign Up</h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className={`flex justify-center items-start p-2.5 border-b w-[336px] h-[56px] bg-transparent outline-none ${
            errors.email
              ? "text-red-500 placeholder-red-500 border-red-500"
              : "text-white"
          }`}
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={`flex justify-center items-start p-2.5 border-b w-[336px] h-[56px] bg-transparent outline-none ${
            errors.password
              ? "text-red-500 placeholder-red-500 border-red-500"
              : "text-white"
          }`}
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat password"
          className={`flex justify-center items-start p-2.5 border-b w-[336px] h-[56px] bg-transparent outline-none ${
            errors.repeatPassword
              ? "text-red-500 placeholder-red-500 border-red-500"
              : "text-white"
          }`}
          value={formData.repeatPassword}
          onChange={handleChange}
        />
        <Button text="Create an account" onClick={handleSubmit} />
      </form>
      <div className=" flex justify-between items-center">
        <h1 className="text-white">Already have an account?</h1>
        <button onClick={() => setShowLogin(true)} className="text-[#FC4747]">
          Login
        </button>
      </div>
    </div>
  );
}

export default SignUp;
