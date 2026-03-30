import React from 'react';
 function Login() {
  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" style={{ width: "100%", margin: "5px 0" }} />
      <input type="password" placeholder="Password" style={{ width: "100%", margin: "5px 0" }} />
      <button style={{ width: "100%", marginTop: "10px" }}>Login</button>
    </div>
  );
 }

 export default Login;