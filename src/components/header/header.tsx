import React from "react";
import "./header.css";

export default function Header() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark static-top ">
                <div className="container">
                    <span className="navbar-brand">DEMO Streaming</span>
                    <button type="button" className="btn btn-primary">
                        Log in
                    </button>
                </div>
            </nav>
            <nav className="navbar navbar-light bg-light static-top mb-5">
                <div className="container">
                    <span className="navbar-brand">DEMO Streaming</span>
                </div>
            </nav>
        </React.Fragment>
    );
}
