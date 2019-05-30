import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"home", component:LoginComponent},
  {path:"login", component : ToolbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
