import React from "react";
import "./header.css";

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark static-top mb-5">
            <div className="container">
                <a className="navbar-brand" href="#">
                    DEMO Streaming
                </a>
                <a className="btn btn-primary" href="#">
                    Log in
                </a>
            </div>
        </nav>
    );
}
