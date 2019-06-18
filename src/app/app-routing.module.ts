import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {
    path:'formBuilder',component:FormBuilderComponent
  },
  {
    path:'resources',component:ResourcesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
