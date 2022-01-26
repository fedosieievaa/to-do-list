import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TopLine } from "./components/TopLine/TopLine";
import { Navigation } from "./components/Navigation/Navigation";
import { Groups } from "./components/Groups/Groups";
import { Tasks } from "./components/Tasks/Tasks";
import './App.css';

function App() {
    return ( 
        <div>
            <Router>
                <TopLine/>
                <div className="container">
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<Groups/>}/>
                        <Route path="/tasks" element={<Tasks/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;