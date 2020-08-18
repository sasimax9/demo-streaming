import Content from "./models/content";
import data from "./store/content";

export default async function getContent(): Promise<Content> {
    if (Math.random() < 0.2) throw new Error("DemoError");
    else {
        await new Promise(r => setTimeout(r, 1000));
        return data;
    }
}
