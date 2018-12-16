import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DataService } from '../service/data.service';
import { Tree } from '../model/tree';
import { StorageGroupService } from '../service/storage-group.service';
import { TextBox } from '../model/text-box';
import { Radio } from '../model/radio';
import { ComboBox } from '../model/comboBox';
import { Attach } from '../model/attach';
import { Checkbox } from '../model/checkbox';
import { Upload } from '../model/upload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('dynamic', { read: ViewContainerRef }) dynamicText: ViewContainerRef;
  @ViewChild('dynamicproperty', { read: ViewContainerRef }) dynamicTextProperty: ViewContainerRef;
  private lstTree: Tree[] = [];
  public todo = [
    'Text box'
  ];
  private listGroup: String[] = [];
  constructor(private service: DataService, private serviceGroup: StorageGroupService) { }

  ngOnInit() {
    // Details element HTML
  }

  public drop(event: CdkDragDrop<string[]>) {
    switch (event.previousIndex) {
      case 0:
        this.createNodeParent();
        break;
      case 1:
        this.createNodeChildTextBox();
        break;
      case 2:
        this.createNodeChildRadio();
        break;
      case 3:
        this.createNodeChildCheckbox();
        break;
      case 4:
        this.createNodeChildCombobox();
        break;
      case 5:
        this.createNodeChildUpload();
        break;
      case 6:
        this.createNodeChildAttach();
        break;
      default:
        // TO DO
        break;
    }
  }

  private createNodeParent() {
    this.service.setRootViewContainerRef(this.dynamicText, this.dynamicTextProperty);
    const tree = new Tree();
    this.lstTree.push(tree);
    this.service.addDynamicParentComponent(this.lstTree[this.lstTree.length - 1].Parent);
  }

  private createNodeChildTextBox() {
    const elementGroup = this.serviceGroup.getElementGroup();
    if (elementGroup !== undefined) {
      this.service.setRootViewContainerRef(elementGroup, this.dynamicTextProperty);
      const text = new TextBox();
      this.service.addDynamicTextComponent(text);
    }
  }

  private createNodeChildRadio() {
    const elementGroup: ViewContainerRef = this.serviceGroup.getElementGroup();
    if (elementGroup !== undefined) {
      this.service.setRootViewContainerRef(elementGroup, this.dynamicTextProperty);
      const radio = new Radio();
      this.service.addDynamicRadioComponent(radio);
    }
  }

  private createNodeChildCombobox() {
    const elementGroup: ViewContainerRef = this.serviceGroup.getElementGroup();
    if (elementGroup != undefined) {
      this.service.setRootViewContainerRef(elementGroup, this.dynamicTextProperty);
      const comboBox  = new ComboBox();
      this.service.addDynamicComboboxComponent(comboBox);

    }
  }

  private createNodeChildCheckbox() {
    const elementGroup: ViewContainerRef = this.serviceGroup.getElementGroup();
    if (elementGroup != undefined) {
      this.service.setRootViewContainerRef(elementGroup, this.dynamicTextProperty);
      const checkbox  = new Checkbox();
      this.service.addDynamicCheckboxComponent(checkbox);
    }
  }

  private createNodeChildAttach() {
    const elementGroup: ViewContainerRef = this.serviceGroup.getElementGroup();
    if (elementGroup != undefined) {
      this.service.setRootViewContainerRef(elementGroup, this.dynamicTextProperty);
      const attach  = new Attach();
      this.service.addDynamicAttachComponent(attach);
    }
  }

  private createNodeChildUpload() {
    const elementGroup: ViewContainerRef = this.serviceGroup.getElementGroup();
    if (elementGroup != undefined) {
      this.service.setRootViewContainerRef(elementGroup, this.dynamicTextProperty);
      const upload  = new Upload();
      this.service.addDynamicUploadComponent(upload);
    }
  }
}

