import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BalanceRoutingModule } from './balance.routing';

import { BalanceAddMoneyComponent } from './balance-add-money/balance-add-money.component';


@NgModule({
  declarations: [
    BalanceAddMoneyComponent
  ],
  imports: [
    BrowserModule,
    BalanceRoutingModule
  ],
  providers: [],
})
export class BalanceModule { }
