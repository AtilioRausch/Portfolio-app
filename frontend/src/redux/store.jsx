// Corrected import statement
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer.jsx";
// Import other reducers here...

const rootReducer = combineReducers({
  theme: themeReducer,
  // Other reducers here...
});

const store = configureStore({
  reducer: rootReducer,
  // Optional: middleware, devTools, preloadedState, enhancers
});

export default store;
