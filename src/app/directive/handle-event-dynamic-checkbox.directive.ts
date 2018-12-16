import { Directive, HostListener, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { Checkbox } from '../model/checkbox';

@Directive({
  selector: '[appHandleEventDynamicCheckbox]'
})
export class HandleEventDynamicCheckboxDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('objectDynamic') _objectDynamic: Checkbox;

  constructor(private service: DataService) { }

  @HostListener('click') onMouseClick() {
    this.service.addDynamicCheckboxPropertyComponent(this._objectDynamic);
  }
}
