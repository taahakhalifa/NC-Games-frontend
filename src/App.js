import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Reviews from "./components/Reviews";
import ReviewPage from "./components/ReviewPage";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route
                    path="/reviews/:review_id"
                    element={<ReviewPage />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
