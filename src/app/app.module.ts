import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormioModule, FormioAppConfig } from 'angular-formio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AppConfig } from './config';
import { ResourcesComponent } from './resources/resources.component';
//import './modals/Base';

import './components/Date';
import './modals/Date.form';
import './components/Header';
import './components/Label';
import './modals/Base.form';
import './modals/nested/Nested.form';
import './modals/tabs/Tabs.form';

import './modals/textField/TextField.form';
import './modals/textField/TextField';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormManagerConfig } from './interfaces/form-manager.config';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [    {provide: FormioAppConfig, useValue: AppConfig},FormManagerConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
