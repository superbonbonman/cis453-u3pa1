import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import './Main.css';
import Home from "../Content/Home";
import Puns from "../Content/Puns";
import KnockKnocks from "../Content/KnockKnocks";
import Story from "../Content/Story";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/puns">Puns</NavLink></li>
                    <li><NavLink to="/knockknocks">Knock Knock Jokes</NavLink></li>
                    <li><NavLink to="/story">Story</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/puns" element={<Puns />}/>
                    <Route path="/knockknocks" element={<KnockKnocks />}/>
                    <Route path="/story" element={<Story />}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;