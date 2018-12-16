let count = 0;
export class ComboBox {
    constructor() {
        this.title = 'Combobox ' + count++;
        this.value = 'Value';
        this.item = 'Item';
        this.button = 'button';
    }
    title: String;
    value: String;
    item: String;
    button: String;
}
