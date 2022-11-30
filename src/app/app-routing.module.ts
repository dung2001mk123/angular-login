import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {
    path:"home-page",
    component: HomePageComponent
  },
  {
    path:"",
    component: AppComponent
  }
]

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
