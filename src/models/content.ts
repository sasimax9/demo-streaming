export default interface Content {
    total: number;
    entries: Entry[];
}

interface Entry {
    title: string;
    description: string;
    programType: "series" | "movie";
    images: {
        posterArt: {
            url: string;
            width: number;
            height: number;
        };
    };
    releaseYear: number;
}