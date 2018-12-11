import { Component, Input } from '@angular/core';
import { TextBox } from '../../model/text-box';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-component',
    template: '<div [objectDynamic]="textBox" appHandleEventDynamicRadio>{{textBox.title}}</div>'
})
export class DynamicTextBoxComponent {
    @Input() textBox: TextBox;
}
