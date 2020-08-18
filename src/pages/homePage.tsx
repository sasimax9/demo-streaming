import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import placeholder from "../assets/placeholder.png";
import "./pages.css";

export default function HomePage(_props: RouteComponentProps) {
    return (
        <div className="container">
            <div className="row text-center d-flex justify-content-center">
                <div className="col-6 col-lg-2 col-md-3 col-sm-4 col-xs-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">Series</h4>
                            <img src={placeholder}></img>
                            <p className="card-text">Lorem ipsum</p>
                        </div>
                        <div className="card-footer">
                            <Link
                                to="series"
                                className="btn btn-primary btn-sm"
                            >
                                Populer Series
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-2 col-md-3 col-sm-4 col-xs-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">Movies</h4>
                            <img src={placeholder}></img>
                            <p className="card-text">Lorem ipsum</p>
                        </div>
                        <div className="card-footer">
                            <Link
                                to="movies"
                                className="btn btn-primary btn-sm"
                            >
                                Populer Movies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
