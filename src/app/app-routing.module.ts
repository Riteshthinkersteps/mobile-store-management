import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SalesComponent } from './features/sales/sales/sales.component';
import { PurchaseListComponent } from './features/stock/pages/purchase-list/purchase-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      // { path: 'sales', component: SalesComponent },
      { path: 'sales', loadChildren: () => import('./features/sales/sales.module').then(m => m.SalesModule) },
      // { path: 'purchase', loadChildren: () => import('./features/purchase/purchase.module').then(m => m.PurchaseModule) },
      // { path: 'inventory', loadChildren: () => import('./features/inventory/inventory.module').then(m => m.InventoryModule) },
      // { path: 'reports', loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule) },
      // { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  // { path: 'store', loadChildren: () => import('./features/store/store.module').then(m => m.StoreModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'payments', loadChildren: () => import('./features/payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'emi', loadChildren: () => import('./features/emi/emi.module').then(m => m.EmiModule) },
  { path: 'orders', loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'repairs', loadChildren: () => import('./features/repairs/repairs.module').then(m => m.RepairsModule) },
  { path: 'recharges', loadChildren: () => import('./features/recharges/recharges.module').then(m => m.RechargesModule) },
  { path: 'stock', loadChildren: () => import('./features/stock/stock.module').then(m => m.StockModule) },
  { path: 'reports', loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'notifications', loadChildren: () => import('./features/notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
