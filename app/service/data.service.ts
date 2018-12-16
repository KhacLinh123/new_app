import { Injectable, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Man } from '../model/man';
import { TextBox } from '../model/text-box';
import { DynamicTextBoxComponent } from '../dynamic/text-box/dynamic-text-box';
import { DynamicTextBoxPropertyComponent } from '../dynamic/text-box/dynamic-text-box-property';
import { Group } from '../model/group';
import { DynamicGroupComponent } from '../dynamic/group/dynamic-group';
import { DynamicGroupPropertyComponent } from '../dynamic/group/dynamic-group-property';
import { Radio } from '../model/radio';
import { DynamicRadioPropertyComponent } from '../dynamic/radio/dynamic-radio-property';
import { DynamicRadioComponent } from '../dynamic/radio/dynamic-radio-box';
import { ComboBox } from '../model/comboBox';
import { DynamicComboboxPropertyComponent } from '../dynamic/combobox/dynamic-combobox-property';
import { DynamicComboboxComponent } from '../dynamic/combobox/dynamic-combobox';
import { Attach } from '../model/attach';
import { DynamicAttachComponent } from '../dynamic/attach/dynamic-attach';
import { DynamicAttachPropertyComponent } from '../dynamic/attach/dynamic-attach-property';
import { DynamicCheckboxComponent } from '../dynamic/checkbox/dynamic-checkbox';
import { Checkbox } from '../model/checkbox';
import { DynamicCheckboxPropertyComponent } from '../dynamic/checkbox/dynamic-checkbox-property';
import { DynamicUploadComponent } from '../dynamic/upload/dynamic-upload';
import { Upload } from '../model/upload';
import { DynamicUploadPropertyComponent } from '../dynamic/upload/dynamic-upload-property';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private factoryResolver;
  private dynamicViewContainer: ViewContainerRef;
  private dynamicPropertyViewContainer: ViewContainerRef;
  constructor(private http: HttpClient, @Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  /**
   * Setting view root
   * @param dynamicContainerRef ViewContainerRef
   * @param dynamicPropertyContainerRef ViewContainerRef
   */
  setRootViewContainerRef(dynamicContainerRef: ViewContainerRef, dynamicPropertyContainerRef: ViewContainerRef) {
    this.dynamicViewContainer = dynamicContainerRef;
    this.dynamicPropertyViewContainer = dynamicPropertyContainerRef;
  }

  /**
   * Add text box component
   * @param textBox TextBox
   */
  addDynamicParentComponent(group: Group) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicGroupComponent);
    const component = factory
      .create(this.dynamicViewContainer.parentInjector);
    component.instance['group'] = group;
    this.dynamicViewContainer.insert(component.hostView);
  }

  /**
   * Add property of text box
   * @param textBox TextBox
   */
  addDynamicParenPropertyComponent(group: Group) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicGroupPropertyComponent);
    const component = factory
      .create(this.dynamicPropertyViewContainer.parentInjector);
    component.instance['group'] = group;
    this.dynamicPropertyViewContainer.clear();
    this.dynamicPropertyViewContainer.insert(component.hostView);
  }

  /**
   * Add text box component
   * @param textBox TextBox
   */
  addDynamicTextComponent(textBox: TextBox) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicTextBoxComponent);
    const component = factory
      .create(this.dynamicViewContainer.parentInjector);
    component.instance['textBox'] = textBox;
    this.dynamicViewContainer.insert(component.hostView);
  }

  /**
   * Add property of text box
   * @param textBox TextBox
   */
  addDynamicTextPropertyComponent(textBox: TextBox) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicTextBoxPropertyComponent);
    const component = factory
      .create(this.dynamicPropertyViewContainer.parentInjector);
    component.instance['textBox'] = textBox;
    this.dynamicPropertyViewContainer.clear();
    this.dynamicPropertyViewContainer.insert(component.hostView);
  }


    /**
   * Add Radio component
   * @param radio Radio
   */
  addDynamicRadioComponent(radio: Radio) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicRadioComponent);
    const component = factory
      .create(this.dynamicViewContainer.parentInjector);
    component.instance['radio'] = radio;
    this.dynamicViewContainer.insert(component.hostView);
  }

  /**
   * Add property of Radio
   * @param radio Radio
   */
  addDynamicRadioPropertyComponent(radio: Radio) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicRadioPropertyComponent);
    const component = factory
      .create(this.dynamicPropertyViewContainer.parentInjector);
    component.instance['radio'] = radio;
    this.dynamicPropertyViewContainer.clear();
    this.dynamicPropertyViewContainer.insert(component.hostView);
  }

  /**
   * Add Radio component
   * @param radio Radio
   */
  addDynamicComboboxComponent(combobox: ComboBox) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicComboboxComponent);
    const component = factory
      .create(this.dynamicViewContainer.parentInjector);
    component.instance['combobox'] = combobox;
    this.dynamicViewContainer.insert(component.hostView);
  }

  /**
   * Add property of Radio
   * @param radio Radio
   */
  addDynamicComboboxPropertyComponent(combobox: ComboBox) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicComboboxPropertyComponent);
    const component = factory
      .create(this.dynamicPropertyViewContainer.parentInjector);
    component.instance['combobox'] = combobox;
    this.dynamicPropertyViewContainer.clear();
    this.dynamicPropertyViewContainer.insert(component.hostView);
  }

  /**
   * Add Checkbox component
   * @param checkbox  Checkbox
   */
  addDynamicCheckboxComponent(checkbox: Checkbox) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicCheckboxComponent);
    const component = factory
      .create(this.dynamicViewContainer.parentInjector);
    component.instance['checkbox'] = checkbox;
    this.dynamicViewContainer.insert(component.hostView);
  }

  /**
   * Add property of Radio
   * @param radio Radio
   */
  addDynamicCheckboxPropertyComponent(checkbox: Checkbox) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicCheckboxPropertyComponent);
    const component = factory
      .create(this.dynamicPropertyViewContainer.parentInjector);
    component.instance['checkbox'] = checkbox;
    this.dynamicPropertyViewContainer.clear();
    this.dynamicPropertyViewContainer.insert(component.hostView);
  }

  /**
   * Add Radio component
   * @param radio Radio
   */
  addDynamicUploadComponent(attach: Attach) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicUploadComponent);
    const component = factory
      .create(this.dynamicViewContainer.parentInjector);
    component.instance['upload'] = attach;
    this.dynamicViewContainer.insert(component.hostView);
  }

  /**
   * Add property of Radio
   * @param radio Radio
   */
  addDynamicUploadPropertyComponent(upload: Upload) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicUploadPropertyComponent);
    const component = factory
      .create(this.dynamicPropertyViewContainer.parentInjector);
    component.instance['upload'] = upload;
    this.dynamicPropertyViewContainer.clear();
    this.dynamicPropertyViewContainer.insert(component.hostView);
  }

  /**
   * Add Radio component
   * @param radio Radio
   */
  addDynamicAttachComponent(attach: Attach) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicAttachComponent);
    const component = factory
      .create(this.dynamicViewContainer.parentInjector);
    component.instance['attach'] = attach;
    this.dynamicViewContainer.insert(component.hostView);
  }

  /**
   * Add property of Radio
   * @param radio Radio
   */
  addDynamicAttachPropertyComponent(attach: Attach) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicAttachPropertyComponent);
    const component = factory
      .create(this.dynamicPropertyViewContainer.parentInjector);
    component.instance['attach'] = attach;
    this.dynamicPropertyViewContainer.clear();
    this.dynamicPropertyViewContainer.insert(component.hostView);
  }
}
