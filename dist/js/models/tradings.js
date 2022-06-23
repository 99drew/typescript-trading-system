export class Tradings {
    constructor() {
        this.tradings = [];
    }
    add(trading) {
        this.tradings.push(trading);
    }
    list() {
        return this.tradings;
    }
}
