import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales/sales.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ProductComponent } from './product/product.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '../store/store.module';


@NgModule({
   declarations: [
    SalesComponent,
    RechargeComponent,
    ProductComponent,
    AccessoriesComponent
  ],

  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule,
    StoreModule
  ],
  exports:[
    SalesComponent,
    AccessoriesComponent,
    RechargeComponent
    
  ]
})
export class SalesModule { }
