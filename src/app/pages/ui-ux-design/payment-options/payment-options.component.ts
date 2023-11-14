import { Component } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent {
  data: any;
  content: any;

  constructor(private user: ConfigService) { }

  ngOnInit() {
    this.user.getUI_prices_payment().subscribe(response => {
      this.data = response;
      this.data.items.forEach((e: any) => {
        this.data = e;
      });
      this.content = this.data.content; 
    });
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
