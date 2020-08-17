import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BookVehicleComponent } from './booking/book-vehicle/book-vehicle.component';
import { AddVehicleComponent } from './user/add-vehicle/add-vehicle.component';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'book-vehicle',
    pathMatch:'full',
    component:BookVehicleComponent
  },
  {
    path:'add-vehicle',
    pathMatch:'full',
    component:AddVehicleComponent
  },
  {
    path:'admin-dashboard',
    pathMatch:'full',
    component:AdminDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
