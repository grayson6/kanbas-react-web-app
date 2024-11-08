
// dolphin 
import Modules from "./Modules";
import Home from "./Home";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import CoursesNavigation from "./Navigation";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa6";

interface Course {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

export default function Courses({ courses }: { courses: Course[] }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  const section = pathname.split("/")[4];

  return (
    <div id="wd-courses" className="d-flex">
      <CoursesNavigation />
      <div
        className="flex-grow-1"
        style={{ marginLeft: "110px", padding: "20px" }}
      >
        <h2 className="text-danger">
          <FaAlignJustify className="me-3 fs-4 mb-1" />
          {course && course.name} &gt; {section}
        </h2>
        <hr />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          <Route path="People" element={<PeopleTable />} />
        </Routes>
      </div>
    </div>
  );
}
// absolute newest 11/8

// import Modules from "./Modules";
// import Home from "./Home";
// import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/Editor";
// import CoursesNavigation from "./Navigation";
// import PeopleTable from "./People/Table";
// import { FaAlignJustify } from "react-icons/fa6";

// interface Course {
//   _id: string;
//   name: string;
//   description: string;
//   image?: string;
// }

// export default function Courses({ courses }: { courses: Course[] }) {
//   const { cid } = useParams();
//   const { pathname } = useLocation(); // Use useLocation to get pathname
//   const course = courses.find((course) => course._id === cid);
//   const section = pathname.split("/")[4]; 

//   return (
//     <div id="wd-courses" className="d-flex">
//       <CoursesNavigation />
//       <div className="flex-grow-1" style={{ marginLeft: "110px", padding: "20px" }}>
//         <h2 className="text-danger">
//           <FaAlignJustify className="me-3 fs-4 mb-1" />
//           {course && course.name} &gt; {section}
//         </h2>
//         <hr />
//         <Routes>
//           <Route path="/" element={<Navigate to="Home" />} />
//           <Route path="Home" element={<Home />} />
//           <Route path="Modules" element={<Modules />} />
//           <Route path="Assignments" element={<Assignments />} />
//           <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//           <Route path="People" element={<PeopleTable />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// working 11/6

// import Modules from "./Modules";
// import Home from "./Home";
// import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/Editor";
// import CoursesNavigation from "./Navigation";
// import PeopleTable from "./People/Table";
// import { courses } from "../Database";
// import { FaAlignJustify } from "react-icons/fa6";

// export default function Courses() {
//   const { cid } = useParams();
//   const { pathname } = useLocation();
//   const course = courses.find((course) => course._id === cid);
//   const section = pathname.split("/")[4]; 
  

//   return (
//     <div id="wd-courses" className="d-flex">
//       <CoursesNavigation />
//       <div className="flex-grow-1" style={{ marginLeft: "110px", padding: "20px" }}>
//         <h2 className="text-danger">
//           <FaAlignJustify className="me-3 fs-4 mb-1" />
//           {course && course.name} &gt; {section}
//         </h2>
//         <hr />
//         <Routes>
//           <Route path="/" element={<Navigate to="Home" />} />
//           <Route path="Home" element={<Home />} />
//           <Route path="Modules" element={<Modules />} />
//           <Route path="Assignments" element={<Assignments />} />
//           <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//           <Route path="People" element={<PeopleTable />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default function Courses() {
//   return (
//     <div id="wd-courses">
//       <h2>Course 1234</h2>
//       <hr />
//       <div>
//         <div>
//           <CoursesNavigation />
//         </div>
//         <div>
//           <Routes>
//             <Route path="/"
//                    element={<Navigate to="Home" />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Modules" element={<Modules />} />
//             <Route path="Assignments" element={<Assignments />} />
//             <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//             <Route path="People" element={<h3>People</h3>} />
//           </Routes>
//         </div>
//       </div>
//     </div>
// );}




// export default function Courses() {
//   return (
//     <div id="wd-courses">
//       <h2>Course 1234</h2>
//       <hr />
// <      <table>
//         <tr>
//           <td valign="top">>
//             <CoursesNavigation />
//           </td>
//           <td valign="top">
//             <Routes>
//               <Route path="/"
//                      element={<Navigate to="Home" />} />
//               <Route path="Home" element={<Home />} />
//               <Route path="Modules" element={<Modules />} />
//               <Route path="Assignments" element={<Assignments />} />
//               <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//               <Route path="People" element={<h3>People</h3>} />
//             </Routes>
//           </td>
//         </tr>
//       </table>
//     </div>

    
// );}
