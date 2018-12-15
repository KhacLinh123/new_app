import { Directive, HostListener, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { Attach } from '../model/attach';

@Directive({
  selector: '[appHandleEventDynamicAttach]'
})
export class HandleEventDynamicAttachDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('objectDynamic') _objectDynamic: Attach;

  constructor(private service: DataService) { }

  @HostListener('click') onMouseClick() {
    this.service.addDynamicAttachPropertyComponent(this._objectDynamic);
  }
}
