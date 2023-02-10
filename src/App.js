import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import SingleCategory from "./components/SingleCategory";
import ReviewPage from "./components/ReviewPage";
import HeaderNav from "./components/HeaderNav";

function App() {
    return (
        <div className="App">
            <Header />
            <HeaderNav />
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route path="/categories" element={<Categories />}></Route>
                <Route path="/categories/:slug" element={<SingleCategory />} />
                <Route
                    path="/reviews/:review_id"
                    element={<ReviewPage />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
