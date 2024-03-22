import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { ClientSelectionComponent } from './client-selection/client-selection.component';

@NgModule({
  declarations: [AppComponent, EmployeeFormComponent, FormWrapperComponent, ClientSelectionComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
