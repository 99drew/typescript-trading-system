import { Trading } from "./trading.js";

export class Tradings {
    private tradings: Array<Trading> = [];

    public add(trading: Trading) {
        this.tradings.push(trading);
    }

    public list(): ReadonlyArray<Trading> {
        return this.tradings;
    }
}

