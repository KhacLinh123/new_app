import { Directive, HostListener, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { ComboBox } from '../model/combobox';

@Directive({
  selector: '[appHandleEventDynamicCombobox]'
})
export class HandleEventDynamicComboboxDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('objectDynamic') _objectDynamic: ComboBox;

  constructor(private service: DataService) { }

  @HostListener('click') onMouseClick() {
    this.service.addDynamicComboboxPropertyComponent(this._objectDynamic);
  }
}
