import { useState } from "react";
import { PrimaryButton } from "../styles/Button";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", user); // ✅ TODO: Replace this with an API call

    // ✅ TODO: Call API Gateway `/login` endpoint to verify user credentials
    // ✅ TODO: If valid, store token in localStorage & redirect to Dashboard
    // ✅ TODO: If invalid, show error message
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>
    </div>
  );
};

export default Login;
