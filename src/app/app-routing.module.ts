import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoDetailsComponent } from './pages/cargo-details/cargo-details.component';
import { CargoOrdersComponent } from './pages/cargo-orders/cargo-orders.component';

const routes: Routes = [
  {path: '', redirectTo: '/cargo-orders', pathMatch: 'full'},
  {path: 'cargo-orders', component: CargoOrdersComponent},
  {path: 'cargo-details/:order_number', component: CargoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
