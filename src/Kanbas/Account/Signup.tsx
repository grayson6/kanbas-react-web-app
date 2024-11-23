import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      alert(err.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div id="wd-signup-screen" className="container mt-4">
      <h3>Sign up</h3>
      <input
        placeholder="username"
        className="form-control mb-2"
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        className="form-control mb-2"
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={signup}
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </button>
      <Link to="/Kanbas/Account/Signin" className="text-primary">
        Sign in
      </Link>
    </div>
  );
}



// // src/Kanbas/Account/Signup.tsx

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   return (
//     <div id="wd-signup-screen">
//       <h3>Sign up</h3>
//       <input placeholder="username" /> <br />
//       <input placeholder="password" type="password" /> <br />
//       <input placeholder="verify password" type="password" /> <br />
//       <Link to="Profile">Sign up</Link>
//       <br />
//       <Link to="Signin">Sign in</Link>
//     </div>
//   );
// }
