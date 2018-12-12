import { Component, Input } from '@angular/core';
import { Radio } from 'src/app/model/radio';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-component',
    template: '<div [objectDynamic]="radio" appHandleEventDynamicTextBox>{{radio.title}}</div>'
})
export class DynamicRadioComponent {
    @Input() radio: Radio;
}
