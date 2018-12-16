import { Directive, HostListener, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { Upload } from '../model/upload';

@Directive({
  selector: '[appHandleEventDynamicUpload]'
})
export class HandleEventDynamicUploadDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('objectDynamic') _objectDynamic: Upload;

  constructor(private service: DataService) { }

  @HostListener('click') onMouseClick() {
    this.service.addDynamicUploadPropertyComponent(this._objectDynamic);
  }
}
