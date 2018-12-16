// import { CdkDragDrop } from '@angular/cdk/drag-drop';
// import { Component, ElementRef, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// // tslint:disable-next-line:directive-class-suffix
// export class HomeComponent implements OnInit {

//   private name: string;
//   private value: string;
//   private title: string;
//   private data: string;
//   private namehidden = true;
//   private valuehidden = true;
//   private titlehidden = true;
//   private datahidden = true;
//   items = [
//     'Group',
//     'TextBox',
//     'Radio',
//     'CheckBox',
//     'ComboBox',
//     'UploadFile',
//     'AttachFile'
//   ];
//   private indexDiv = -1;
//   private elements = [];

//   constructor(
//     private element: ElementRef
//   ) { }

//   ngOnInit() {
//     this.elements = this.element.nativeElement.childNodes;
//   }

//   drop(event: CdkDragDrop<string[]>) {
//     const nodeElement = this.createHTMLForDrop(event.previousIndex);
//     if (nodeElement && this.indexDiv > -1) {
//       this.elements[1].childNodes[this.indexDiv].appendChild(nodeElement);
//     }
//   }
//   private createHTMLForDrop(index: number): HTMLDivElement {
//     switch (index) {
//       case 0:
//         this.createGroup();
//         return this.createItems(index);
//       default:
//         return this.createItems(index);
//     }
//   }

//   private clickCreateModel(index: number) {
//     this.name = this.items[index];
//     switch (index) {
//       case 0:
//         this.hiddenGroup();
//         this.title = 'name';
//         this.data = '';
//         this.value = '';
//         break;
//       case 1:
//         this.hiddenItem();
//         this.title = 'title';
//         this.data = 'value';
//         this.value = 'string';
//         break;
//       case 2:
//         this.hiddenItem();
//         this.title = 'title';
//         this.data = 'data';
//         this.value = '[{name: rd1; value: true}]';
//         break;
//       case 3:
//         this.hiddenItem();
//         this.title = 'title';
//         this.data = 'value';
//         this.value = 'true, false';
//         break;
//       case 4:
//         this.hiddenItem();
//         this.title = 'title';
//         this.data = 'data';
//         this.value = '[{name: rd1; value: true}]';
//         break;
//       case 5:
//         this.hiddenItem();
//         this.title = 'title';
//         this.data = 'pathfile';
//         this.value = 'file:///file.txt';
//         break;
//       case 6:
//         this.hiddenItem();
//         this.title = 'title';
//         this.data = 'pathfile';
//         this.value = 'file:///file.txt';
//         break;
//       default:
//         break;

//     }
//   }

//   private createItems(index: number): HTMLDivElement {
//     const nodeCheck = document.createElement('div');
//     nodeCheck.className = 'example-box';
//     nodeCheck.setAttribute('_ngcontent-c1', '');
//     nodeCheck.addEventListener('click', () => this.clickCreateModel(index));
//     const textnodeCheck = document.createTextNode(this.items[index]);
//     nodeCheck.appendChild(textnodeCheck);
//     return nodeCheck;
//   }

//   private createGroup() {
//     this.indexDiv += 1;
//     const nodeGroup1 = document.createElement('div');
//     nodeGroup1.setAttribute('_ngcontent-c1', '');
//     nodeGroup1.setAttributeNS('cdkdrag', 'cdkdrag', '');
//     nodeGroup1.setAttribute('class', 'cdk-drag');
//     nodeGroup1.setAttribute('style', 'margin-top: 20px;');
//     this.elements[1].appendChild(nodeGroup1);
//   }

//   private hiddenItem() {
//     this.namehidden = false;
//     this.valuehidden = false;
//     this.datahidden = false;
//     this.titlehidden = false;
//   }

//   private hiddenGroup() {
//     this.namehidden = false;
//     this.titlehidden = false;
//     this.datahidden = true;
//     this.valuehidden = true;
//   }
// }

// Hóa

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
    // const nodeElement = this.createHTMLForDrop(event.previousIndex);
    // this.elements[1].childNodes[1].appendChild(nodeElement);
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

