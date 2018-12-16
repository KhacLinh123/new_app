import { Component, Input } from '@angular/core';
import { Upload } from 'src/app/model/upload';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-component',
    templateUrl: './dynamic-upload.component.html',
})
export class DynamicUploadComponent {
    @Input() upload: Upload;
}
