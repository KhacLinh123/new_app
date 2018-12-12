import { Directive, HostListener, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { TextBox } from '../model/text-box';

@Directive({
  selector: '[appHandleEventDynamicTextBox]'
})
export class HandleEventDynamicTextBoxDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('objectDynamic') _objectDynamic: TextBox;

  constructor(private service: DataService) { }

  @HostListener('click') onMouseClick() {
    this.service.addDynamicTextPropertyComponent(this._objectDynamic);
  }

}
