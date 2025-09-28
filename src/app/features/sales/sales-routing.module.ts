import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ProductComponent } from './product/product.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ProductDetailsComponent } from '../store/pages/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent,  
    //  path: '', redirectTo: 'sales', pathMatch: 'full',
    children: [
      { path: 'recharge', component: RechargeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'accessories', component: AccessoriesComponent },
      {path:'productdetails',component:ProductDetailsComponent},
      {
        path: 'productlist', loadChildren: () => import('../store/store.module').then(m => m.StoreModule)
      },

    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
