import { Component, Input } from '@angular/core';
import { Checkbox } from 'src/app/model/checkbox';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-checkbox-property-component',
    template: '<div>'
        + ' <p style="color:white">Title</p>' + '<input [(ngModel)]="checkbox.title" />'
        + '<p style="color:white">Value</p>' + '<input [(ngModel)]="checkbox.value" />'
        + '</div>'
})
export class DynamicCheckboxPropertyComponent {
    @Input() checkbox: Checkbox;
}
