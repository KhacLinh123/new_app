import { Component, Input } from '@angular/core';
import { Checkbox } from 'src/app/model/checkbox';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-checkbox-property-component',
    template: '<div>'
    + ' <p style="color:white">Title</p>' + '<input style= "width: 90% " [(ngModel)]="checkbox.title" />' 
    + '<p style="color:white">Value</p>' + '<input style= "width: 90% " [(ngModel)]="checkbox.value" />' 
    + '<p style= "color: white">Item</p>' + '<input style= "width: 58% " [(ngModel)] = "checkbox.item" />' 
    + '<button type="button" class="btn btn-dark" style= "width: 30%; margin-left: 3px; height: 32px " [(ngModel)] = "checkbox.button">Add</button>'
    + '</div>'
})
export class DynamicCheckboxPropertyComponent {
    @Input() checkbox: Checkbox;
}
