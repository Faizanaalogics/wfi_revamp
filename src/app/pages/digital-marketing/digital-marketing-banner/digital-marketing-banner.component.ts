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
      formId: "bc70e03c-6473-4d8f-bacc-8123b6239683",
      target: "#hubspotForms"
    });
  }
}
