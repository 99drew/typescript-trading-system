import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negocioacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string {
        
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
                ${model.lista().map(negociacao => {
                    return `
                    <tr>
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao.qtd}</td>
                        <td>${negociacao.valor}</td>
                    </tr>`;
                }).join('')}
                </tbody>
            </table>
        `;
    }
}