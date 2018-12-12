import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Group } from 'src/app/model/group';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-group-component',
    templateUrl: './dynamic-group.component.html',
})
export class DynamicGroupComponent implements OnInit {
    @Input() group: Group;
    @ViewChild('dynamicGroup', { read: ViewContainerRef }) dynamicText: ViewContainerRef;
    public elementGroup: ViewContainerRef = null;
    ngOnInit(): void {
        this.elementGroup = this.dynamicText;
    }
}
