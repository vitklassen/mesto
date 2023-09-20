export default class Section{
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addItem(element) {
        this._container.prepend(element);
    }
    render(cards) {
        for(let i = cards.length - 1; i >= 0; i--) {
            this._renderer(cards[i]);
        }
    }
}