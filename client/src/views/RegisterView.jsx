import React, { useState } from "react";

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

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handlSubmit}>
        <label>Email:</label>
        <input type="email"/>
        <label>Password:</label>
        <input type="password"/>
        <input type="submit" value="Register"/>
      </form>
    </>
  );
}