import { Trading } from "../models/trading.js";
import { Tradings } from "../models/tradings.js";
import { TradingsView } from "../views/tradings-view.js";
import { messageDangerView, messageInfoView } from "../views/message-view.js";
import { DaysOfWeek } from "../enums/days-of-week.js";
export class tradingController {
    constructor() {
        this.tradings = new Tradings();
        this.tradingsView = new TradingsView('#tradingsView', true);
        this.messageInfoView = new messageInfoView('#messageInfoView');
        this.messageDargerView = new messageDangerView('#messageDangerView');
        this.inputDate = document.querySelector('#input-date');
        this.inputAmount = document.querySelector('#input-amount');
        this.inputValue = document.querySelector('#input-value');
        this.tradingsView.update(this.tradings);
    }
    addTrading() {
        const trading = Trading.createFrom(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
        if (!this.businessDay(trading.tDate)) {
            this.messageDargerView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.tradings.add(trading);
        this.clearForm();
        this.updateView();
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.tradingsView.update(this.tradings);
        this.messageInfoView.update('Negociação adicionada com sucesso!');
    }
    businessDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY
            && date.getDay() < DaysOfWeek.SATURDAY;
    }
}
