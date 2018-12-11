import { Component, Input } from '@angular/core';
import { TextBox } from '../../model/text-box';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-property-component',
    template: '<div>'
        + ' <p style="color:white">Title</p>' + '<input [(ngModel)]="textBox.title" />'
        + '<p style="color:white">Value</p>' + '<input [(ngModel)]="textBox.value" />'
        + '</div>'
})
export class DynamicTextBoxPropertyComponent {
    @Input() textBox: TextBox;
}
