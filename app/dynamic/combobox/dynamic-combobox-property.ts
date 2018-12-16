import { Component, Input } from '@angular/core';
import { ComboBox } from 'src/app/model/comboBox';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-property-component',
    template: '<div>'
        + ' <p style="color:white">Title</p>' + '<input style= "width: 90% " [(ngModel)]="combobox.title" />' 
        + '<p style="color:white">Value</p>' + '<input style= "width: 90% " [(ngModel)]="combobox.value" />' 
        + '<p style= "color: white">Item</p>' + '<input style= "width: 58% " [(ngModel)] = "combobox.item" />' 
        + '<button type="button" class="btn btn-dark" style= "width: 30%; margin-left: 3px; height: 32px " [(ngModel)] = "combobox.button">Add</button>'
        + '</div>'
})
export class DynamicComboboxPropertyComponent {
    @Input() combobox: ComboBox;
}
