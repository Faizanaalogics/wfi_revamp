import { Component } from '@angular/core';
declare const hbspt: any;

@Component({
  selector: 'app-digital-marketing-banner',
  templateUrl: './digital-marketing-banner.component.html',
  styleUrls: ['./digital-marketing-banner.component.scss']
})
export class DigitalMarketingBannerComponent {
  ngAfterContentInit() {
    hbspt.forms.create({
      region: "na1",
      portalId: "7305468",
      formId: "fc33424c-4d8c-4208-a330-6850e4ed0eb6",
      target: "#hubspotForms"
    });
  }
}
