import { Component, Input } from '@angular/core';
import { Upload } from 'src/app/model/upload';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-upload-property-component',
    template: '<div>'
        + ' <p style="color:white">Title</p>' + '<input [(ngModel)]="upload.title" />'
        + '<p style="color:white">Value</p>' + '<input [(ngModel)]="upload.value" />'
        + '</div>'
})
export class DynamicUploadPropertyComponent {
    @Input() upload: Upload;
}
