import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { SalesTab } from './sales_enum';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {

  activeTabId: SalesTab | null = null;

  constructor(private location: Location,private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentUrl = event.urlAfterRedirects;
      const lastSegment = currentUrl.split('/').pop(); 
      this.activeTabId = lastSegment as SalesTab;
    });
  }

tabs = [
  { label: 'Recharge', path: 'recharge' },
  { label: 'Product', path: 'product' },
  { label: 'Accessories', path: 'accessories' }
];
showflag:boolean=false
bakflag:boolean=false
show(){
  
  this.showflag = !this.showflag
}
back(){
   switch (this.activeTabId) {
      case SalesTab.Sales:
       this.showflag = true;
        break;
      case SalesTab.Product:
        console.log('Product tab active');
        break;
      case SalesTab.Accessories:
         this.showflag = false;
        break;
      case SalesTab.ProductList:
        break;
      default:
        console.log('No tab active');
    }
  this.location.back();

}
}
