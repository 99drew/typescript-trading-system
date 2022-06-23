import { View } from "./view.js";
export class TradingsView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                ${model.list().map(trading => {
            return `
                    <tr>
                        <td>${this.formatDate(trading.tDate)}</td>
                        <td>${trading.amount}</td>
                        <td>${trading.value}</td>
                    </tr>`;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    formatDate(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
