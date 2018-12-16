let count = 1;
export class Checkbox {
    constructor() {
        this.title = 'Checkbox ' + count++;
        this.value = 'Value';
        this.item = 'Item';
        this.button = 'button';
    }
    title: String;
    value: String;
    item: String;
    button: String;
}