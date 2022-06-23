import { View } from "./view.js";
export class messageInfoView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
export class messageDangerView extends View {
    template(model) {
        return `
            <p class="alert alert-danger">${model}</p>
        `;
    }
}
