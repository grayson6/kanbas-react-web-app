import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from './reducer';
import * as client from './client';

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = () => {
    if (!currentUser) {
      navigate('/Kanbas/Account/Signin');
    } else {
      setProfile(currentUser);
    }
  };

  const updateProfile = async () => {
    try {
      const updatedUser = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedUser));
      alert('Profile updated successfully');
    } catch (err) {
      alert('Error updating profile');
    }
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate('/Kanbas/Account/Signin');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen" className="container mt-4">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input
            defaultValue={profile.username}
            id="wd-username"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            defaultValue={profile.password}
            id="wd-password"
            className="form-control mb-2"
            type="password"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <input
            defaultValue={profile.firstName}
            id="wd-firstname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            defaultValue={profile.lastName}
            id="wd-lastname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            defaultValue={profile.dob}
            id="wd-dob"
            className="form-control mb-2"
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            defaultValue={profile.email}
            id="wd-email"
            className="form-control mb-2"
            type="email"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            id="wd-role"
            className="form-select mb-2"
            defaultValue={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button
            onClick={updateProfile}
            className="btn btn-primary w-100 mb-2"
          >
            Update
          </button>
          <button
            onClick={signout}
            className="btn btn-danger w-100 mb-2"
            id="wd-signout-btn"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

// absolute 

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom'; // <-- Add this line
// import { setCurrentUser } from './reducer';

// export default function Profile() {
//   const dispatch = useDispatch();

//   const signout = () => {
//     dispatch(setCurrentUser(null));
//   };
//   return (
//     <div id="wd-profile-screen" className="container mt-4">
//       <h3>Profile</h3>
//       <input
//         id="wd-username"
//         value="alice"
//         placeholder="username"
//         className="form-control mb-2"
//       />
//       <input
//         id="wd-password"
//         value="123"
//         placeholder="password"
//         type="password"
//         className="form-control mb-2"
//       />
//       <input
//         id="wd-firstname"
//         value="Alice"
//         placeholder="First Name"
//         className="form-control mb-2"
//       />
//       <input
//         id="wd-lastname"
//         value="Wonderland"
//         placeholder="Last Name"
//         className="form-control mb-2"
//       />
//       <input
//         id="wd-dob"
//         value="2000-01-01"
//         type="date"
//         className="form-control mb-2"
//       />
//       <input
//         id="wd-email"
//         value="alice@wonderland"
//         type="email"
//         className="form-control mb-2"
//       />
//       <select id="wd-role" className="form-select mb-2">
//         <option value="USER">User</option>
//         <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>
//         <option value="STUDENT">Student</option>
//       </select>
//       <Link to="Signin" className="btn btn-danger w-100">
//         Sign out
//       </Link>
//       <button onClick={signout} className="btn btn-danger w-100">
//         Sign out
//       </button>
//     </div>
//   );
// }



// // src/Kanbas/Account/Profile.tsx

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <input id="wd-username" value="alice" placeholder="username" /> <br />
//       <input id="wd-password" value="123" placeholder="password" type="password" /> <br />
//       <input id="wd-firstname" value="Alice" placeholder="First Name" /> <br />
//       <input id="wd-lastname" value="Wonderland" placeholder="Last Name" /> <br />
//       <input id="wd-dob" value="2000-01-01" type="date" /> <br />
//       <input id="wd-email" value="alice@wonderland" type="email" /> <br />
//       <select id="wd-role">
//         <option value="USER">User</option>
//         <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>
//         <option value="STUDENT">Student</option>
//       </select>
//       <br />
//       <Link to="Signin">Sign out</Link>
//     </div>
//   );
// }
