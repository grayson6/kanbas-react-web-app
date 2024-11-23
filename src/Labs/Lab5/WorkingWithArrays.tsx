import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const API = `${REMOTE_SERVER}/lab5/todos`;

  const handleUpdateTodo = async (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const response = await fetch(`${API}/${path}`);
  };

  const handleDeleteTodo = async (e: React.MouseEvent) => {
    e.preventDefault();
    const response = await fetch(`${API}/${todo.id}/delete`);
  };

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary me-2" href={API}>
        Get Todos
      </a>
      <hr />

      <h4>Retrieving an Item from an Array by ID</h4>
      <div className="d-flex">
        <input
          id="wd-todo-id"
          className="form-control w-50 me-2"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <a
          id="wd-retrieve-todo-by-id"
          className="btn btn-primary"
          href={`${API}/${todo.id}`}
        >
          Get Todo by ID
        </a>
      </div>
      <hr />

      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      <h4>Creating new Items in an Array</h4>
      <a
        id="wd-create-todo"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />

      <h4>Deleting from an Array</h4>
      <div className="d-flex">
        <input
          id="wd-todo-id-to-delete"
          className="form-control w-50 me-2"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <a
          id="wd-delete-todo"
          className="btn btn-danger"
          href={`${API}/${todo.id}/delete`}
          onClick={handleDeleteTodo}
        >
          Delete Todo with ID = {todo.id}
        </a>
      </div>
      <hr />

      <h4>Updating an Item in an Array</h4>
      <div className="d-flex">
        <input
          id="wd-todo-id-to-update"
          className="form-control w-25 me-2"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <input
          id="wd-todo-title-to-update"
          className="form-control w-50 me-2"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <a
          id="wd-update-todo"
          className="btn btn-success"
          href={`${API}/${todo.id}/title/${todo.title}`}
          onClick={(e) => handleUpdateTodo(e, `${todo.id}/title/${todo.title}`)}
        >
          Update Todo
        </a>
      </div>
      <hr />

      <h4>Update Todo Properties</h4>
      <div className="mb-3">
        <label>Description:</label>
        <div className="d-flex mb-2">
          <input
            id="wd-todo-description"
            className="form-control w-75 me-2"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
          <a
            id="wd-update-todo-description"
            className="btn btn-success"
            href={`${API}/${todo.id}/description/${todo.description}`}
            onClick={(e) => handleUpdateTodo(e, `${todo.id}/description/${todo.description}`)}
          >
            Update Description
          </a>
        </div>

        <label>Completed:</label>
        <div className="d-flex align-items-center">
          <div className="me-2">
            <input
              id="wd-todo-completed"
              type="checkbox"
              className="form-check-input me-2"
              checked={todo.completed}
              onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
            />
          </div>
          <a
            id="wd-update-todo-completed"
            className="btn btn-success"
            href={`${API}/${todo.id}/completed/${todo.completed}`}
            onClick={(e) => handleUpdateTodo(e, `${todo.id}/completed/${todo.completed}`)}
          >
            Update Completed Status
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}