import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponentComponent } from './city-component/city-component.component';

const routes: Routes = [
  {path: '', redirectTo: '/dc', pathMatch: 'full'},
  {path: ':cityname', component: CityComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
