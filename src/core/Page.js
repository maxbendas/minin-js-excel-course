export class Page {
    constructor(params) {
        this.params = params
    }
    // возвращает корневой элемент, который можно заапендить в ноду
    getRoot(){
        throw new Error('Method "getRoot" should be implemented')
    }

    afterRender(){}

    destroy() {}
}