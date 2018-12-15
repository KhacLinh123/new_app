import { Component, Input } from '@angular/core';
import { ComboBox } from 'src/app/model/comboBox';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-property-component',
    template: '<div>'
        + ' <p style="color:white">Title</p>' + '<input [(ngModel)]="combobox.title" />'
        + '<p style="color:white">Value</p>' + '<input [(ngModel)]="combobox.value" />'
        + '</div>'
})
export class DynamicComboboxPropertyComponent {
    @Input() combobox: ComboBox;
}
