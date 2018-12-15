import { Component, Input } from '@angular/core';
import { ComboBox } from 'src/app/model/comboBox';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-component',
    templateUrl: './dynamic-combobox.component.html',
})
export class DynamicComboboxComponent {
    @Input() combobox: ComboBox;
}
