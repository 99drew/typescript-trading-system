import { View } from "./view.js";

export class messageInfoView extends View<string> {

    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}

export class messageDangerView extends View<string> {

    protected template(model: string): string {
        return `
            <p class="alert alert-danger">${model}</p>
        `;
    }
}