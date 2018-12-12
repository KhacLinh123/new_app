import { Component, Input } from '@angular/core';
import { Group } from 'src/app/model/group';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-group-property-component',
    template: '<div>'
        + ' <p style="color:white">Name</p>' + '<input [(ngModel)]="group.name" />'
        + '</div>'
})
export class DynamicGroupPropertyComponent {
    @Input() group: Group;
}
