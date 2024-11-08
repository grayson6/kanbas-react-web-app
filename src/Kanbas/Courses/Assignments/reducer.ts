
// dolphin

import { createSlice } from "@reduxjs/toolkit";
import assignmentsData from "../../Database/assignments.json";

type Assignment = {
  _id: string;
  course: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableDate?: string;
  availableUntilDate?: string;
};

const initialState = {
  assignments: assignmentsData as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;



// absolute newest 11/8

// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

// const initialState = {
//   assignments: assignments,
// };

// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment = {
//         _id: new Date().getTime().toString(),
//         ...assignment,
//       };
//       state.assignments = [...state.assignments, newAssignment];
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (assignment: any) => assignment._id !== assignmentId
//       );
//     },
//     updateAssignment: (state, { payload: updatedAssignment }) => {
//       state.assignments = state.assignments.map((assignment: any) =>
//         assignment._id === updatedAssignment._id ? updatedAssignment : assignment
//       );
//     },

//   },
// });

// export const { addAssignment, deleteAssignment, updateAssignment } =
//   assignmentsSlice.actions;

// export default assignmentsSlice.reducer;