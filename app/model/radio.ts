let count = 0;
export class Radio {
    constructor() {
        this.title = 'Radio ' + count++;
        this.value = 'Value';
    }
    title: String;
    value: String;
}
