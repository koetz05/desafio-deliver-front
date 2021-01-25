import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBillComponent } from './components/add-bill/add-bill.component';
import { BillListComponent } from './components/bill-list/bill-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'bills', pathMatch: 'full' },
  { path: 'bills', component: BillListComponent },
/*  { path: 'tutorials/:id', component: TutorialDetailsComponent },*/
  { path: 'add', component: AddBillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
