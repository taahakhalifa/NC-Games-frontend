import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import ReviewPage from "./components/ReviewPage";
import ErrorPage from "./components/ErrorPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route path="/categories" element={<Categories />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
                <Route
                    path="/reviews/:review_id"
                    element={<ReviewPage />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
