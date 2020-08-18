import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Card from "../components/card";
import getContent from "../api";
import { Entry } from "../models/content";

async function gatherMovies(): Promise<Entry[]> {
    const content = await getContent();
    return content.entries
        .filter(
            entry => entry.programType === "movie" && entry.releaseYear >= 2010
        )
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .splice(0, 21);
}

export default function MoviesPage(_props: RouteComponentProps) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([] as Entry[]);

    useEffect(() => {
        gatherMovies()
            .then(movies => {
                setMovies(movies);
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
                    movies.map((movie, index) => {
                        return <Card key={index} program={movie}></Card>;
                    })}
            </div>
        </div>
    );
}
