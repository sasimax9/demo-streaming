import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import Card from "../components/card";
import { Entry } from "../models/content";
import getContent from "../api";

async function gatherMovies(): Promise<Entry[]> {
    const content = await getContent();
    return content.entries
        .filter(
            entry => entry.programType === "series" && entry.releaseYear >= 2010
        )
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .splice(0, 21);
}

export default function SeriesPage(_props: RouteComponentProps) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [series, setSeries] = useState([] as Entry[]);

    useEffect(() => {
        gatherMovies()
            .then(series => {
                setSeries(series);
                setLoading(false);
                setError(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <div className="row text-center">
                {loading && "Loading content"}
                {error && "Something went wrong"}
                {!loading &&
                    !error &&
                    series.map((serie, index) => {
                        return <Card key={index} program={serie}></Card>;
                    })}
            </div>
        </div>
    );
}
