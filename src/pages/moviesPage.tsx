import React, { useContext } from "react";
import { RouteComponentProps } from "@reach/router";
import { ContentContext } from "../app";

export default function MoviesPage(_props: RouteComponentProps) {
    const context = useContext(ContentContext);
    const filteredMovies = context.entries.filter(entry => {
        return entry.programType == "movie" && entry.releaseYear >= 2010;
    });

    const movies = filteredMovies
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .splice(0, 21);

    return (
        <div className="container">
            <div className="row text-center">
                {movies.map((movie, index) => {
                    return (
                        <div
                            key={index}
                            className="col-6 col-lg-2 col-md-3 col-sm-4 col-xs-4 mb-4"
                        >
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={movie.images.posterArt.url}></img>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">{movie.title}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
