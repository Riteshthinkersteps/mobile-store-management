import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing.module.ts.component.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreRoutingModule,
    SharedModule
  ],
  
})
export class StoreModule { }
