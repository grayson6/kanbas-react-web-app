
// dolphin 11/8

import accountReducer from './Account/reducer';
import modulesReducer from './Courses/Modules/reducer';
import assignmentsReducer from './Courses/Assignments/reducer';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    accountReducer,
    modulesReducer,
    assignmentsReducer,
  },
});

export default store;


// absolute 11/8
// import { configureStore } from "@reduxjs/toolkit";
// import modulesReducer from "./Courses/Modules/reducer";

// import accountReducer from "./Account/reducer";

// const store = configureStore({
//   reducer: {
//     modulesReducer,
//     accountReducer,
//   },
// });
// export default store;