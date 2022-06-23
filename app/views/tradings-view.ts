import { Trading } from "../models/trading.js";
import { Tradings } from "../models/tradings.js";
import { View } from "./view.js";

export class TradingsView extends View<Tradings> {

    protected template(model: Tradings): string {
        
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

    private formatDate(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}