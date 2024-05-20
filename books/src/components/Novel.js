import React from 'react'
import Home from './Home';
import Fiction from './Fiction';
import NonFiction from './NonFiction';
import Children from './Children';
import Recommended from './Recommended';
import './style.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Novel() {
  return (
    <Router>
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="a">
                            <div className="container-fluid" id="d">
                                <Link className="navbar-brand" to="Home" id="c">BookWorms</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="Fiction" id="c">Fiction</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="NonFiction" id="c">Non-Fiction</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="Children" id="c">Children</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="Recommended" id="c">Recommended</Link>
                                        </li>
                                    </ul>
                                    <form className="d-flex" action='https://books.google.co.in/?'>
                                        <button className="btn btn-outline-success" type="submit" id="e">Google Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav> 
                    </div>
                </div>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route exact path="/Home" element={<Home/>}/>
                    <Route exact path="/Fiction" element={<Fiction/>}/>
                    <Route exact path="/NonFiction" element={<NonFiction/>}/>
                    <Route exact path="/Children" element={<Children/>}/>
                    <Route exact path="/Recommended" element={<Recommended/>}/>
                </Routes>
            </div>
        </>
    </Router>
  )
}
