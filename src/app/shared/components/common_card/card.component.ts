import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
   constructor(private router: Router) {}
   @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() price?: string;
  @Input() image?: string;
  @Input() route?:string;
  


  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}

