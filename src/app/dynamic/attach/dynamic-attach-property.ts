import { Component, Input } from '@angular/core';
import { Attach } from 'src/app/model/attach';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-attach-property-component',
    template: '<div>'
        + ' <p style="color:white">Title</p>' + '<input [(ngModel)]="attach.title" />'
        + '<p style="color:white">Value</p>' + '<input [(ngModel)]="attach.value" />'
        + '</div>'
})
export class DynamicAttachPropertyComponent {
    @Input() attach: Attach;
}
