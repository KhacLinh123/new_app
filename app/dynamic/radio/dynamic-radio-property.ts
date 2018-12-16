import { Component, Input } from '@angular/core';
import { Radio } from 'src/app/model/radio';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-radio-property-component',
    template: '<div>'
    + ' <p style="color:white">Title</p>' + '<input style= "width: 90% " [(ngModel)]="radio.title" />' 
    + '<p style="color:white">Value</p>' + '<input style= "width: 90% " [(ngModel)]="radio.value" />' 
    + '<p style= "color: white">Item</p>' + '<input style= "width: 58% " [(ngModel)] = "radio.item" />' 
    + '<button type="button" class="btn btn-dark" style= "width: 30%; margin-left: 3px; height: 32px " [(ngModel)] = "radio.button">Add</button>'
    + '</div>'
})
export class DynamicRadioPropertyComponent {
    @Input() radio: Radio;
}
