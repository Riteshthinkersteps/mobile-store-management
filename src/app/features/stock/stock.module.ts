import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseListComponent } from './pages/purchase-list/purchase-list.component';
import { StockListComponent } from './pages/stock-list/stock-list.component';
import { SalesModule } from '../sales/sales.module';



@NgModule({
  declarations: [
    PurchaseListComponent,
    StockListComponent
  ],
  imports: [
    CommonModule,
    SalesModule
  ]
})
export class StockModule { }
