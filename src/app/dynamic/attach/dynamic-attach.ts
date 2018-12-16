import { Component, Input } from '@angular/core';
import { Attach } from 'src/app/model/attach';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-component',
    templateUrl: './dynamic-attach.component.html',
})
export class DynamicAttachComponent {
    @Input() attach: Attach;
}
