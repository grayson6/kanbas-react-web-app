import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [moduleObject, setModuleObject] = useState({
    id: "1",
    name: "Web Development",
    description: "Learn the basics of web development",
    course: "CS5610",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* Assignment Section */}
      <h4>Assignment</h4>

      <a
        id="wd-get-assignment"
        className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}`}
      >
        Get Assignment
      </a>

      <a
        id="wd-get-assignment-title"
        className="btn btn-secondary me-2"
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Assignment Title
      </a>

      <div className="my-3">
        <input
          className="form-control w-75 d-inline-block me-2"
          id="wd-assignment-score"
          type="number"
          value={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })
          }
        />
        <a
          id="wd-update-assignment-score"
          className="btn btn-success"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
      </div>

      <div className="my-3">
        <label className="me-2">
          Completed:
          <input
            type="checkbox"
            checked={assignment.completed}
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })
            }
          />
        </label>
        <a
          id="wd-update-assignment-completed"
          className="btn btn-success"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
      </div>

      {/* Module Section */}
      <h4>Module</h4>

      <a
        id="wd-get-module"
        className="btn btn-primary me-2"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>

      <a
        id="wd-get-module-name"
        className="btn btn-secondary me-2"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>

      <div className="my-3">
        <input
          className="form-control w-75 d-inline-block me-2"
          id="wd-module-name"
          value={moduleObject.name}
          onChange={(e) =>
            setModuleObject({ ...moduleObject, name: e.target.value })
          }
        />
        <a
          id="wd-update-module-name"
          className="btn btn-success"
          href={`${MODULE_API_URL}/name/${moduleObject.name}`}
        >
          Update Module Name
        </a>
      </div>

      <div className="my-3">
        <input
          className="form-control w-75 d-inline-block me-2"
          id="wd-module-description"
          value={moduleObject.description}
          onChange={(e) =>
            setModuleObject({ ...moduleObject, description: e.target.value })
          }
        />
        <a
          id="wd-update-module-description"
          className="btn btn-success"
          href={`${MODULE_API_URL}/description/${moduleObject.description}`}
        >
          Update Module Description
        </a>
      </div>

      <hr />
    </div>
  );
}