import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Component } from '@angular/core/src/metadata/directives';
import { ParentComponent } from './parent-child/parent/parent.component';

const routes: Routes = [
  {
    path:'app',
    component: AppComponent,
    children: [
      {
        path: 'test/parent-child', component: ParentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
