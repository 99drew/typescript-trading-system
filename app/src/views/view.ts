import { logRuntime } from "../decorators/log-runtime.js";
export abstract class View<T> {
    
    protected element: HTMLElement;
    private scape = false;

    constructor(seletor: string, scape?: boolean) {
        const element = document.querySelector(seletor);
       
        if(element){
                this.element = element as HTMLElement;   
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM`)
        }

        if(this.scape) {
            this.scape = scape as boolean;
        }
    }

    @logRuntime()
    public update(model: T): void {
        let template = this.template(model);
        
        if(this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.element.innerHTML =  template;
    }

    protected abstract template(model: T): string;
}