import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { MyblogComponent } from './myblog/myblog.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { BindingassignmentComponent } from './bindingassignment/bindingassignment.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    MyblogComponent,
    DatabindingComponent,
    BindingassignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
