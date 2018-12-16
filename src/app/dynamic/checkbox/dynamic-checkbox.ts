import { Component, Input } from '@angular/core';
import { Checkbox } from 'src/app/model/checkbox';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-component',
    templateUrl: './dynamic-checkbox.component.html',
})
export class DynamicCheckboxComponent {
    @Input() checkbox: Checkbox;
}
