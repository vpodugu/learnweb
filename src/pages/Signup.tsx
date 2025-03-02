import { useState } from "react";
import { PrimaryButton } from "../styles/Button";

const Signup = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup Data:", user); // ✅ TODO: Replace this with an API call

    // ✅ TODO: Call API Gateway `/signup` endpoint to store user in DynamoDB
    // ✅ TODO: Handle success (redirect to login) or show error message
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <PrimaryButton type="submit">Sign Up</PrimaryButton>
      </form>
    </div>
  );
};

export default Signup;
