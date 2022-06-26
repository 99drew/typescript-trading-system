export class View {
    constructor(seletor, scape) {
        this.scape = false;
        this.element = document.querySelector(seletor);
        if (this.scape) {
            this.scape = scape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
