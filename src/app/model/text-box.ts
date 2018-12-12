let count = 0;
export class TextBox {
    constructor() {
        this.title = 'Text ' + count++;
        this.value = 'Value';
    }
    title: String;
    value: String;
}
