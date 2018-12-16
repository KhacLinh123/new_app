import { Component, Input } from '@angular/core';
import { Group } from 'src/app/model/group';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-group-property-component',
    template: '<div>'
        + ' <p style="color:white; padding-bottom: -5px">Name</p>' + '<input style= "width: 90%; color: black" [(ngModel)]="group.name" />'
        + '</div>'
})
export class DynamicGroupPropertyComponent {
    @Input() group: Group;
}
