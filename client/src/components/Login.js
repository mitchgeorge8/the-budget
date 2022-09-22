import React from "react";

export default function Login() {
  return (
    <form>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" />
      </div>
      <div>
        <button>Create Account</button>
      </div>
    </form>
  );
}
