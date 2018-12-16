import { Component, Input } from '@angular/core';
import { TextBox } from '../../model/text-box';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-component',
    templateUrl: './dynamic-text-box.component.html',
    styleUrls: ['./dynamic-text-box.component.scss'],

})
export class DynamicTextBoxComponent {
    @Input() textBox: TextBox;
}
