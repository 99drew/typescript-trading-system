import { tradingController } from "./controllers/trading-controller.js";
const controller = new tradingController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.addTrading();
});
