import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import ManageTests from "./pages/ManageTests";
import ViewResults from "./pages/ViewResults";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <Router>
            <div className="d-flex">
                <Sidebar />
                <div className="w-100">
                    <Navbar />
                    <div className="container mt-4">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/manage-tests" element={<ManageTests />} />
                            <Route path="/view-results" element={<ViewResults />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
