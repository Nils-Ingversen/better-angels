import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/base/imports.css";

// Import CSS files
import "./assets/styles/base/imports.css";

// Import vendors
import "./vendors/lenis.js";
import "./vendors/mouse-follower.js";
import { Scroller } from "./vendors/scroller.js";

// Initialise the Scroller class
const scroller = new Scroller();
scroller.init();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
