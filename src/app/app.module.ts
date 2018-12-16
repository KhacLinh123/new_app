import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { DynamicTextBoxComponent } from './dynamic/text-box/dynamic-text-box';
import { HandleEventDynamicGroupDirective } from './directive/handle-event-dynamic-group.directive';
import { DynamicTextBoxPropertyComponent } from './dynamic/text-box/dynamic-text-box-property';
import { DynamicGroupComponent } from './dynamic/group/dynamic-group';
import { DynamicGroupPropertyComponent } from './dynamic/group/dynamic-group-property';
import { HandleEventDynamicTextBoxDirective } from './directive/handle-event-dynamic-text-box.directive';
import { DynamicRadioComponent } from './dynamic/radio/dynamic-radio-box';
import { DynamicRadioPropertyComponent } from './dynamic/radio/dynamic-radio-property';
import { HandleEventDynamicRadioDirective } from './directive/handle-event-dynamic-radio.directive';
import { DynamicComboboxComponent } from './dynamic/combobox/dynamic-combobox';
import { DynamicComboboxPropertyComponent } from './dynamic/combobox/dynamic-combobox-property';
import { HandleEventDynamicComboboxDirective } from './directive/handle-event-dynamic-combobox.directive';
import { DynamicAttachComponent } from './dynamic/attach/dynamic-attach';
import { DynamicAttachPropertyComponent } from './dynamic/attach/dynamic-attach-property';
import { HandleEventDynamicAttachDirective } from './directive/handle-evevt-dynamic-attach.directive';
import { DynamicCheckboxComponent } from './dynamic/checkbox/dynamic-checkbox';
import { DynamicCheckboxPropertyComponent } from './dynamic/checkbox/dynamic-checkbox-property';
import { HandleEventDynamicCheckboxDirective } from './directive/handle-event-dynamic-checkbox.directive';
import { DynamicUploadComponent } from './dynamic/upload/dynamic-upload';
import { DynamicUploadPropertyComponent } from './dynamic/upload/dynamic-upload-property';
import { HandleEventDynamicUploadDirective } from './directive/handle-event-dynamic-upload.directives';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    DynamicTextBoxComponent,
    DynamicTextBoxPropertyComponent,
    DynamicGroupComponent,
    DynamicGroupPropertyComponent,
    DynamicRadioComponent,
    DynamicRadioPropertyComponent,
    DynamicComboboxComponent,
    DynamicComboboxPropertyComponent,
    DynamicCheckboxComponent,
    DynamicCheckboxPropertyComponent,
    DynamicAttachComponent,
    DynamicAttachPropertyComponent,
    DynamicUploadComponent,
    DynamicUploadPropertyComponent,
    HandleEventDynamicUploadDirective,
    HandleEventDynamicGroupDirective,
    HandleEventDynamicTextBoxDirective,
    HandleEventDynamicComboboxDirective,
    HandleEventDynamicCheckboxDirective,
    HandleEventDynamicRadioDirective,
    HandleEventDynamicAttachDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DynamicTextBoxComponent, 
    DynamicTextBoxPropertyComponent, 
    DynamicGroupComponent,
    DynamicGroupPropertyComponent, 
    DynamicRadioComponent, 
    DynamicRadioPropertyComponent,
    DynamicComboboxComponent,
    DynamicComboboxPropertyComponent,
    DynamicCheckboxComponent,
    DynamicCheckboxPropertyComponent,
    DynamicUploadComponent,
    DynamicUploadPropertyComponent,
    DynamicAttachComponent,
    DynamicAttachPropertyComponent,
  ]
})
export class AppModule { }
