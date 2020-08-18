import React, { useContext } from "react";
import { RouteComponentProps } from "@reach/router";
import { ContentContext } from "../app";

export default function SeriesPage(_props: RouteComponentProps) {
    const context = useContext(ContentContext);
    const filteredSeries = context.entries.filter(entry => {
        return entry.programType == "series" && entry.releaseYear >= 2010;
    });
    const series = filteredSeries
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .slice(0, 21);

    return (
        <div className="container">
            <div className="row text-center">
                {series.map((serie, index) => {
                    return (
                        <div
                            key={index}
                            className="col-6 col-lg-2 col-md-3 col-sm-4 col-xs-4 mb-4"
                        >
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={serie.images.posterArt.url}></img>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">{serie.title}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
