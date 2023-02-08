import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { ReviewProvider } from "./contexts/ReviewContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ReviewProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </ReviewProvider>
    </BrowserRouter>
);
