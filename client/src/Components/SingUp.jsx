import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSingUp } from "../redux/action";
import { Link } from "react-router-dom";

const SingUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      password,
      phone,
    };
    dispatch(userSingUp(newUser));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">SingUp</button>
      </form>
      <Link to="/login" >
        <p >Login</p>
      </Link>
    </div>
  );
};

export default SingUp;
