import { Group } from './group';

export class Tree {
    constructor() {
        this.Parent = new Group();
        this.Child = [];
    }
    Parent: Group;
    Child: [];
}
