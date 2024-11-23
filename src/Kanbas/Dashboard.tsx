
// 11/22 funcionando dos

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface Course {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: () => Promise<void>;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={updateCourse}
        >
          Update
        </button>
      </h5>
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="wd-dashboard-course col"
            style={{ width: "300px" }}
          >
            <div className="card rounded-3 overflow-hidden">
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src={course.image}
                  width="100%"
                  height={160}
                  alt={`${course.name} course`}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {course.name}
                  </h5>
                  <p
                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
                  </p>
                  <button className="btn btn-primary">Go</button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-warning me-2 float-end"
                    id="wd-edit-course-click"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                    className="btn btn-danger float-end"
                    id="wd-delete-course-click"
                  >
                    Delete
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 11/22 funcionando

// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import * as db from "./Database";

// interface Course {
//   _id: string;
//   name: string;
//   description: string;
//   image?: string;
// }

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: Course[];
//   course: Course;
//   setCourse: (course: Course) => void;
//   addNewCourse: () => void;
//   deleteCourse: (courseId: string) => void;
//   updateCourse: () => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = db;

//   // Add this check
//   const userEnrollments = currentUser
//     ? enrollments.filter((enrollment: any) => enrollment.user === currentUser._id)
//     : [];

//   const userCourses = currentUser
//     ? courses.filter((course) =>
//         userEnrollments.some((enrollment: any) => enrollment.course === course._id)
//       )
//     : [];

//   return (
//     <div id="wd-dashboard" className="container">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h5>
//         New Course
//         <button
//           className="btn btn-primary float-end"
//           id="wd-add-new-course-click"
//           onClick={addNewCourse}
//         >
//           Add
//         </button>
//         <button
//           className="btn btn-warning float-end me-2"
//           id="wd-update-course-click"
//           onClick={updateCourse}
//         >
//           Update
//         </button>
//       </h5>
//       <br />
//       <input
//         value={course.name}
//         className="form-control mb-2"
//         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//       />
//       <textarea
//         value={course.description}
//         className="form-control"
//         onChange={(e) => setCourse({ ...course, description: e.target.value })}
//       />
//       <hr />
//       <h2 id="wd-dashboard-published">
//         Published Courses ({userCourses.length})
//       </h2>
//       <hr />
//       <div className="row row-cols-1 row-cols-md-5 g-4">
//         {userCourses.map((course) => (
//           <div
//             key={course._id}
//             className="wd-dashboard-course col"
//             style={{ width: "300px" }}
//           >
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 to={`/Kanbas/Courses/${course._id}/Home`}
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//               >
//                 <img
//                   src={course.image}
//                   width="100%"
//                   height={160}
//                   alt={`${course.name} course`}
//                 />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     {course.name}
//                   </h5>
//                   <p
//                     className="wd-dashboard-course-title card-text overflow-y-hidden"
//                     style={{ maxHeight: 100 }}
//                   >
//                     {course.description}
//                   </p>
//                   <button className="btn btn-primary">Go</button>
//                   <button
//                     onClick={(event) => {
//                       event.preventDefault();
//                       setCourse(course);
//                     }}
//                     className="btn btn-warning me-2 float-end"
//                     id="wd-edit-course-click"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={(event) => {
//                       event.preventDefault();
//                       deleteCourse(course._id);
//                     }}
//                     className="btn btn-danger float-end"
//                     id="wd-delete-course-click"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// actually working 11/7

// import React from "react";
// import { Link } from "react-router-dom";

// interface Course {
//   _id: string;
//   name: string;
//   description: string;
//   image?: string;
// }

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: Course[];
//   course: Course;
//   setCourse: (course: Course) => void;
//   addNewCourse: () => void;
//   deleteCourse: (courseId: string) => void;
//   updateCourse: () => void;
// }) {
//   return (
//     <div id="wd-dashboard" className="container">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h5>
//         New Course
//         <button
//           className="btn btn-primary float-end"
//           id="wd-add-new-course-click"
//           onClick={addNewCourse}
//         >
//           Add
//         </button>
//         <button
//           className="btn btn-warning float-end me-2"
//           id="wd-update-course-click"
//           onClick={updateCourse}
//         >
//           Update
//         </button>
//       </h5>
//       <br />
//       <input
//         value={course.name}
//         className="form-control mb-2"
//         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//       />
//       <textarea
//         value={course.description}
//         className="form-control"
//         onChange={(e) => setCourse({ ...course, description: e.target.value })}
//       />
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
//       <div className="row row-cols-1 row-cols-md-5 g-4">
//         {courses.map((course) => (
//           <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 to={`/Kanbas/Courses/${course._id}/Home`}
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//               >
//                 <img src={course.image} width="100%" height={160} alt={`${course.name} course`} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
//                   <p
//                     className="wd-dashboard-course-title card-text overflow-y-hidden"
//                     style={{ maxHeight: 100 }}
//                   >
//                     {course.description}
//                   </p>
//                   <button className="btn btn-primary">Go</button>
//                   <button
//                     onClick={(event) => {
//                       event.preventDefault();
//                       setCourse(course);
//                     }}
//                     className="btn btn-warning me-2 float-end"
//                     id="wd-edit-course-click"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={(event) => {
//                       event.preventDefault();
//                       deleteCourse(course._id);
//                     }}
//                     className="btn btn-danger float-end"
//                     id="wd-delete-course-click"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// working 11/6

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as db from "./Database";

// interface Course {
//   _id: string;
//   name: string;
//   description: string;
//   image?: string;
// }

// export default function Dashboard() {
//   const [courses, setCourses] = useState<Course[]>(db.courses);
//   const [course, setCourse] = useState<Course>({
//     _id: "0",
//     name: "New Course",
//     description: "New Description",
//     image: "/images/reactjs.jpg",
//   });

//   const addNewCourse = () => {
//     const newCourse = { ...course, _id: new Date().getTime().toString() };
//     setCourses([...courses, newCourse]);
//   };

//   const deleteCourse = (courseId: string) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => (c._id === course._id ? course : c))
//     );
//   };

//   return (
//     <div id="wd-dashboard" className="container">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h5>
//         New Course
//         <button
//           className="btn btn-primary float-end"
//           id="wd-add-new-course-click"
//           onClick={addNewCourse}
//         >
//           Add
//         </button>
//         <button
//           className="btn btn-warning float-end me-2"
//           id="wd-update-course-click"
//           onClick={updateCourse}
//         >
//           Update
//         </button>
//       </h5>
//       <br />
//       <input
//         value={course.name}
//         className="form-control mb-2"
//         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//       />
//       <textarea
//         value={course.description}
//         className="form-control"
//         onChange={(e) => setCourse({ ...course, description: e.target.value })}
//       />
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
//       <div className="row row-cols-1 row-cols-md-5 g-4">
//         {courses.map((course) => (
//           <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 to={`/Kanbas/Courses/${course._id}/Home`}
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//               >
//                 <img src={course.image} width="100%" height={160} alt={`${course.name} course`} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
//                   <p
//                     className="wd-dashboard-course-title card-text overflow-y-hidden"
//                     style={{ maxHeight: 100 }}
//                   >
//                     {course.description}
//                   </p>
//                   <button className="btn btn-primary">Go</button>
//                   <button
//                     onClick={(event) => {
//                       event.preventDefault();
//                       setCourse(course);
//                     }}
//                     className="btn btn-warning me-2 float-end"
//                     id="wd-edit-course-click"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={(event) => {
//                       event.preventDefault();
//                       deleteCourse(course._id);
//                     }}
//                     className="btn btn-danger float-end"
//                     id="wd-delete-course-click"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { Link } from "react-router-dom";
// import * as  db  from "./Database";

// export default function Dashboard() {
//   const courses = db.courses;
//   return (
//     <div id="wd-dashboard" className="container">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses (courses.length)</h2>
//       <hr />
//       <div className="row row-cols-1 row-cols-md-4 g-4">
//         <div className="col" style={{ width: "270px" }}>
//           <div className="card rounded-3 overflow-hidden">
//             <Link to="/Kanbas/Courses/1234/Home" className="text-decoration-none text-dark">
//               <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS course" style={{ height: "160px" }} />
//               <div className="card-body">
//                 <h5 className="card-title">CS1234 React JS</h5>
//                 <p className="card-text">Full Stack software developer</p>
//                 <button className="btn btn-primary">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="col" style={{ width: "270px" }}>
//           <div className="card rounded-3 overflow-hidden">
//             <Link to="/Kanbas/Courses/archery/Home" className="text-decoration-none text-dark">
//               <img src="/images/archery.jpg" className="card-img-top" alt="Archery course" style={{ height: "160px" }} />
//               <div className="card-body">
//                 <h5 className="card-title">Archery 101</h5>
//                 <p className="card-text">Learn the Art of Archery</p>
//                 <button className="btn btn-primary">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="col" style={{ width: "270px" }}>
//           <div className="card rounded-3 overflow-hidden">
//             <Link to="/Kanbas/Courses/5678/Home" className="text-decoration-none text-dark">
//               <img src="/images/chemistry.jpg" className="card-img-top" alt="Chemistry course" style={{ height: "160px" }} />
//               <div className="card-body">
//                 <h5 className="card-title">Chemistry 101</h5>
//                 <p className="card-text">Basics of Chemistry</p>
//                 <button className="btn btn-primary">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="col" style={{ width: "270px" }}>
//           <div className="card rounded-3 overflow-hidden">
//             <Link to="/Kanbas/Courses/herbology/Home" className="text-decoration-none text-dark">
//               <img src="/images/herbology.jpg" className="card-img-top" alt="Herbology course" style={{ height: "160px" }} />
//               <div className="card-body">
//                 <h5 className="card-title">Herbology 101</h5>
//                 <p className="card-text">Study of Plants</p>
//                 <button className="btn btn-primary">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="col" style={{ width: "270px" }}>
//           <div className="card rounded-3 overflow-hidden">
//             <Link to="/Kanbas/Courses/surfing/Home" className="text-decoration-none text-dark">
//               <img src="/images/surfing.jpg" className="card-img-top" alt="Surfing course" style={{ height: "160px" }} />
//               <div className="card-body">
//                 <h5 className="card-title">Surfing 101</h5>
//                 <p className="card-text">Basics of Surfing</p>
//                 <button className="btn btn-primary">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="col" style={{ width: "270px" }}>
//           <div className="card rounded-3 overflow-hidden">
//             <Link to="/Kanbas/Courses/mechanical/Home" className="text-decoration-none text-dark">
//               <img src="/images/mech.jpg" className="card-img-top" alt="Mechanical Engineering course" style={{ height: "160px" }} />
//               <div className="card-body">
//                 <h5 className="card-title">Mechanical Engineering 101</h5>
//                 <p className="card-text">Basics of Mechanical Engineering</p>
//                 <button className="btn btn-primary">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="col" style={{ width: "270px" }}>
//           <div className="card rounded-3 overflow-hidden">
//             <Link to="/Kanbas/Courses/accounting/Home" className="text-decoration-none text-dark">
//               <img src="/images/accounting.jpg" className="card-img-top" alt="Accounting course" style={{ height: "160px" }} />
//               <div className="card-body">
//                 <h5 className="card-title">Accounting 101</h5>
//                 <p className="card-text">Basics of Accounting</p>
//                 <button className="btn btn-primary">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }