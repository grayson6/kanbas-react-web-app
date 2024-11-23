import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentUser } from './reducer';
import { useDispatch } from 'react-redux';
import * as client from './client';

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) {
        alert('Invalid username or password');
        return;
      }
      dispatch(setCurrentUser(user));
      navigate('/Kanbas/Dashboard');
    } catch (err) {
      alert('Invalid username or password');
    }
  };

  return (
    <div id="wd-signin-screen" className="container mt-4">
      <h3 className="text-black">Sign in</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
        value={credentials.username || ''}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
        value={credentials.password || ''}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </button>
      <Link id="wd-signup-link" to="Signup" className="text-danger">
        Sign up
      </Link>
    </div>
  );
}

// absolute 

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { setCurrentUser } from "./reducer";
// import { useDispatch } from "react-redux";
// import * as db from "../Database";

// export default function Signin() {
//   const [credentials, setCredentials] = useState<any>({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const signin = () => {
//     const user = db.users.find(
//       (u: any) =>
//         u.username === credentials.username &&
//         u.password === credentials.password
//     );
//     if (!user) return;
//     dispatch(setCurrentUser(user));
//     navigate("/Kanbas/Dashboard");
//   };

//   return (
//     <div id="wd-signin-screen" className="container mt-4">
//       <h3 className="text-black">Sign in</h3>
//       <input
//         id="wd-username"
//         placeholder="username"
//         className="form-control mb-2"
//         value={credentials.username || ""}
//         onChange={(e) =>
//           setCredentials({ ...credentials, username: e.target.value })
//         }
//       />
//       <input
//         id="wd-password"
//         placeholder="password"
//         type="password"
//         className="form-control mb-2"
//         value={credentials.password || ""}
//         onChange={(e) =>
//           setCredentials({ ...credentials, password: e.target.value })
//         }
//       />
//       <button
//         onClick={signin}
//         id="wd-signin-btn"
//         className="btn btn-primary w-100 mb-2"
//       >
//         Sign in
//       </button>
//       <Link id="wd-signup-link" to="Signup" className="text-danger">
//         Sign up
//       </Link>
//     </div>
//   );
// }


// actually working 11/7

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Signin() {
//   return (
//     <div id="wd-signin-screen" className="container mt-4">
//       <h3 className="text-black">Sign in</h3>
//       <input
//         id="wd-username"
//         placeholder="username"
//         className="form-control mb-2"
//       />
//       <input
//         id="wd-password"
//         placeholder="password"
//         type="password"
//         className="form-control mb-2"
//       />
//       <Link
//         id="wd-signin-btn"
//         to="/Kanbas/Dashboard"
//         className="btn btn-primary w-100 mb-2"
//       >
//         Sign in
//       </Link>
//       <Link id="wd-signup-link" to="Signup" className="text-danger">
//         Sign up
//       </Link>
//     </div>
//   );
// }


// // src/Kanbas/Account/Signin.tsx

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h3>Sign in</h3>
//       <input id="wd-username" placeholder="username" /> <br />
//       <input id="wd-password" placeholder="password" type="password" /> <br />
//       <Link id="wd-signin-btn" to="/Kanbas/Dashboard">
//         Sign in
//       </Link>
//       <br />
//       <Link id="wd-signup-link" to="Signup">
//         Sign up
//       </Link>
//     </div>
//   );
// }
