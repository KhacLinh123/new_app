import { Component, Input } from '@angular/core';
import { Radio } from 'src/app/model/radio';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-property-component',
    template: '<div>'
        + ' <p style="color:white">Title</p>' + '<input [(ngModel)]="radio.title" />'
        + '<p style="color:white">Value</p>' + '<input [(ngModel)]="radio.value" />'
        + '</div>'
})
export class DynamicRadioPropertyComponent {
    @Input() radio: Radio;
}
