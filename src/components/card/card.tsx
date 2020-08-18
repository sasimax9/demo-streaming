import React from "react";
import { Entry } from "../../models/content";

interface CardProps {
    program: Entry;
}

export default function Card({ program }: CardProps) {
    const { images, title } = program;

    return (
        <div className="col-6 col-lg-2 col-md-3 col-sm-4 col-xs-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <img src={images.posterArt.url} alt={`${title} Poster`} />
                    <p className="card-text"></p>
                </div>
                <div className="card-footer">{title}</div>
            </div>
        </div>
    );
}
