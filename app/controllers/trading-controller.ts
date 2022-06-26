import { Trading } from "../models/trading.js";
import { Tradings } from "../models/tradings.js";
import { TradingsView } from "../views/tradings-view.js";
import { messageDangerView, messageInfoView } from "../views/message-view.js";
import { DaysOfWeek } from "../enums/days-of-week.js";


export class tradingController {

    private inputDate: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private tradings = new Tradings();
    private tradingsView = new TradingsView('#tradingsView', true);
    private messageInfoView =  new messageInfoView('#messageInfoView');
    private messageDargerView =  new messageDangerView('#messageDangerView');


    constructor() {
        this.inputDate = document.querySelector('#input-date');
        this.inputAmount =  document.querySelector('#input-amount');
        this.inputValue = document.querySelector('#input-value');
        this.tradingsView.update(this.tradings);
    }

    public addTrading(): void {
        const trading = Trading.createFrom(
            this.inputDate.value,
            this.inputAmount.value,
            this.inputValue.value
        );

        if(!this.businessDay(trading.tDate)){
            this.messageDargerView.update('Apenas negociações em dias úteis são aceitas');
            return;
        } 
        
        this.tradings.add(trading);
        this.clearForm();
        this.updateView();
    }

    private clearForm(): void {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    private updateView(): void {
        this.tradingsView.update(this.tradings);
        this.messageInfoView.update('Negociação adicionada com sucesso!')
    }

    private businessDay(date: Date) {
        return date.getDay() > DaysOfWeek.SUNDAY 
        && date.getDay() < DaysOfWeek.SATURDAY;
    }
}