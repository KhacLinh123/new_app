import { Directive, HostListener, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { DataService } from '../service/data.service';
import { Group } from '../model/group';
import { StorageGroupService } from '../service/storage-group.service';

@Directive({
  selector: '[appHandleEventDynamicGroup]'
})
export class HandleEventDynamicGroupDirective {


  /**
   * Setting Obj Group
   */
  // tslint:disable-next-line:no-input-rename
  @Input('objectDynamic') _objectDynamic: Group;

  /**
   * Setting elementref of Group
   */
  // tslint:disable-next-line:no-input-rename
  @Input('elementGroup') _elementGroup: ViewContainerRef;

  @Output() someEvent: EventEmitter<String> = new EventEmitter();

  /**
   * Function click to Render properties
   */
  @HostListener('click') onMouseClick() {
    this.service.addDynamicParenPropertyComponent(this._objectDynamic);
    this.serviceGroup.setElementGroup(this._elementGroup);
  }
  constructor(private service: DataService, private serviceGroup: StorageGroupService) { }
}
