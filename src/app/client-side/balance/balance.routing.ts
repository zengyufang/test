import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceAddMoneyComponent } from './balance-add-money/balance-add-money.component';

const childRoutes: Routes = [
  {
    path: '',
    component: BalanceAddMoneyComponent   
  },
  {
    path: 'remain',
    component: BalanceAddMoneyComponent   
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BalanceRoutingModule{}
