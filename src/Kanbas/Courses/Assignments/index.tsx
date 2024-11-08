import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FaSearch,
  FaPlus,
  FaGripVertical,
  FaCheckCircle,
  FaEllipsisV,
  FaTrash,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAssignment } from './reducer';
import { Modal, Button } from 'react-bootstrap';

type Assignment = {
  _id: string;
  course: string;
  title: string;
};

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector((state: any) =>
    state.assignmentsReducer.assignments.filter(
      (assignment: Assignment) => assignment.course === cid
    )
  );


  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);


  const handleDeleteClick = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setShowConfirm(true);
  };


  const confirmDelete = () => {
    if (selectedAssignment) {
      dispatch(deleteAssignment(selectedAssignment._id));
    }
    setShowConfirm(false);
    setSelectedAssignment(null);
  };


  const cancelDelete = () => {
    setShowConfirm(false);
    setSelectedAssignment(null);
  };

  return (
    <div id="wd-assignments" className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: '300px' }}>
          <span className="input-group-text bg-white">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() => {

            }}
          >
            <FaPlus /> Group
          </button>
          <button
            className="btn btn-danger"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>


      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <FaGripVertical className="me-2" /> ASSIGNMENTS
          </div>
          <div className="d-flex align-items-center">
            <span className="me-3">{assignments.length} Assignments</span>
            <FaPlus className="text-muted me-3" />
            <FaEllipsisV className="text-muted" />
          </div>
        </div>
        <ul id="wd-assignment-list" className="list-group list-group-flush">
          {assignments.map((assignment: Assignment) => (
            <li
              key={assignment._id}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{ borderLeft: '5px solid green' }}
            >
              <div>
                <Link
                  className="wd-assignment-link fw-bold"
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <div className="text-muted">

                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-3" />
                <FaTrash
                  className="text-danger"
                  onClick={() => handleDeleteClick(assignment)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Modal show={showConfirm} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the assignment "
          {selectedAssignment?.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}



// // 10/17 prev below

// // import { Link } from "react-router-dom";
// // import { FaPlus, FaSearch, FaCheckCircle, FaEllipsisV, FaGripVertical } from "react-icons/fa";

// // export default function Assignments() {
// //   return (
// //     <div id="wd-assignments" className="container mt-4">
// //       <div className="d-flex justify-content-between align-items-center mb-3">
// //         <div className="input-group" style={{ width: "300px" }}>
// //           <span className="input-group-text bg-white">
// //             <FaSearch />
// //           </span>
// //           <input
// //             id="wd-search-assignment"
// //             className="form-control"
// //             placeholder="Search..."
// //           />
// //         </div>
// //         <div>
// //           <button className="btn btn-success me-2">
// //             <FaPlus /> Group
// //           </button>
// //           <button className="btn btn-danger">
// //             <FaPlus /> Assignment
// //           </button>
// //         </div>
// //       </div>
// //       <div className="card">
// //         <div className="card-header d-flex justify-content-between align-items-center">
// //           <div>
// //             <FaGripVertical className="me-2" /> ASSIGNMENTS
// //           </div>
// //           <div className="d-flex align-items-center">
// //             <span className="me-3">40% of Total</span>
// //             <FaPlus className="text-muted me-3" />
// //             <FaEllipsisV className="text-muted" />
// //           </div>
// //         </div>
// //         <ul id="wd-assignment-list" className="list-group list-group-flush">
// //           {["A1", "A2", "A3"].map((assignment, index) => (
// //             <li
// //               key={index}
// //               className="list-group-item d-flex justify-content-between align-items-center"
// //               style={{ borderLeft: "5px solid green" }}
// //             >
// //               <div>
// //                 <Link className="wd-assignment-link fw-bold" to={`/Kanbas/Courses/1234/Assignments/${index + 1}`}>
// //                   {assignment}
// //                 </Link>
// //                 <div className="text-muted">
// //                   Multiple Modules | Not available until May 6 at 12:00am
// //                   <br />
// //                   Due May 13 at 11:59pm | 100 pts
// //                 </div>
// //               </div>
// //               <div className="d-flex align-items-center">
// //                 <FaCheckCircle className="text-success me-3" />
// //                 <FaEllipsisV />
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }




// // import { Link } from "react-router-dom";

// // export default function Assignments() {
// //   return (
// //     <div id="wd-assignments">
// //       <input id="wd-search-assignment"
// //              placeholder="Search for Assignments" />
// //       <button id="wd-add-assignment-group">+ Group</button>
// //       <button id="wd-add-assignment">+ Assignment</button>
// //       <h3 id="wd-assignments-title">
// //         ASSIGNMENTS 40% of Total <button>+</button>
// //       </h3>
// //       <ul id="wd-assignment-list">
// //         <li className="wd-assignment-list-item">
// //           <Link className="wd-assignment-link"
// //                 to="/Kanbas/Courses/1234/Assignments/1">
// //             A1 - ENV + HTML
// //           </Link>
// //         </li>
// //         <li className="wd-assignment-list-item">
// //           <Link className="wd-assignment-link"
// //                 to="/Kanbas/Courses/1234/Assignments/2">
// //             A2 - CSS + Box Model
// //           </Link>
// //         </li>
// //         <li className="wd-assignment-list-item">
// //           <Link className="wd-assignment-link"
// //                 to="/Kanbas/Courses/1234/Assignments/3">
// //             A3 - JavaScript Basics
// //           </Link>
// //         </li>

// //       </ul>
// //     </div>
// //   );
// // }
