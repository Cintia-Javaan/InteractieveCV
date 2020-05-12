import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OpleidingComponent } from './opleiding/opleiding.component';
import { WerkervaringComponent } from './werkervaring/werkervaring.component';
import { HobbyComponent } from './hobby/hobby.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/opleiding', redirectTo:'/opleiding', pathMatch: 'full'},
  {path: 'home/werkervaring', redirectTo:'/werkervaring', pathMatch:"full"},
  {path: 'home/hobby', redirectTo:'/hobby', pathMatch:"full"},
  {path: 'opleiding', component: OpleidingComponent}, 
  {path: 'werkervaring', component: WerkervaringComponent}, 
  {path: 'hobby', component: HobbyComponent},
  {path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
