import { tradingController } from "./controllers/trading-controller.js";
const controller = new tradingController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.addTrading();
    });
}
else {
    throw Error('Oops! Não foi possível iniciar a aplicação');
}
