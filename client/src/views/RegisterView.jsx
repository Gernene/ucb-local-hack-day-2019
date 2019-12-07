import React, { useState } from "react";
import axios from "axios";

export function RegisterView () {
  const [user, setUser] = useState({
    email: null,
    password: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) return;

    axios.post("http://localhost:3001/api/users/new", { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input onChange={handleInput} type="email"/>
        <label>Password:</label>
        <input conChange={handleInput} type="password"/>
        <input type="submit" value="Register"/>
      </form>
    </>
  );
}