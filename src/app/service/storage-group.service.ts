import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageGroupService {

  private elementGroup: ViewContainerRef;

  public setElementGroup(view: ViewContainerRef): void {
    this.elementGroup = view;
  }

  public getElementGroup(): ViewContainerRef {
    return this.elementGroup;
  }
}
