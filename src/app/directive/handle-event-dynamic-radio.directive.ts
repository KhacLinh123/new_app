import { Directive, HostListener, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { Radio } from '../model/radio';

@Directive({
  selector: '[appHandleEventDynamicRadio]'
})
export class HandleEventDynamicRadioDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('objectDynamic') _objectDynamic: Radio;

  constructor(private service: DataService) { }

  @HostListener('click') onMouseClick() {
    this.service.addDynamicRadioPropertyComponent(this._objectDynamic);
  }
}
