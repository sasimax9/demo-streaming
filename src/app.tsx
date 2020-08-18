import React from "react";
import { LocationProvider, Router } from "@reach/router";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import SeriesPage from "./pages/seriesPage";
import MoviesPage from "./pages/moviesPage";
import Footer from "./components/footer";

export default function App() {
    return (
        <LocationProvider>
            <Header />
            <Router>
                <HomePage path="/" />
                <SeriesPage path="/series" />
                <MoviesPage path="/movies" />
            </Router>
            <Footer />
        </LocationProvider>
    );
}
