export abstract class View<T> {
    
    protected element: HTMLElement;
    private scape = false;

    constructor(seletor: string, scape?: boolean) {
        this.element = document.querySelector(seletor);
        if(this.scape) {
            this.scape = scape;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        
        if(this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.element.innerHTML =  template;
    }

    protected abstract template(model: T): string;
}