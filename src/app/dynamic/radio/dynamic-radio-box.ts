import { Component, Input } from '@angular/core';
import { Radio } from 'src/app/model/radio';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-radio-component',
    templateUrl: './dynamic-radio.component.html',
})
export class DynamicRadioComponent {
    @Input() radio: Radio;
}
