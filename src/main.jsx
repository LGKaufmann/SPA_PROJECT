import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import axios2 from "../utils/axios.ts";
import axios from "axios";

// axios.defaults.baseURL = "https://spa-project-back.onrender.com/";
// axios2.defaults.baseURL = "https://spa-project-back.onrender.com/";
axios.defaults.baseURL = "http://localhost:3001/";
axios2.defaults.baseURL = "http://localhost:3001/";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StrictMode>
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>
);
