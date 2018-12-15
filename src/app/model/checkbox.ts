let count = 0;
export class Checkbox {
    constructor() {
        this.title = 'Checkbox ' + count++;
        this.value = 'Value';
    }
    title: String;
    value: String;
}