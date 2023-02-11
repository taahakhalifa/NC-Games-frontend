import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { ReviewProvider } from "./contexts/ReviewContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <CategoriesProvider>
            <ReviewProvider>
                <UserProvider>
                    <App />
                </UserProvider>
            </ReviewProvider>
        </CategoriesProvider>
    </BrowserRouter>
);
