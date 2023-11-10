import { Component } from '@angular/core';
declare const hbspt: any;
@Component({
  selector: 'app-ui-ux-banner',
  templateUrl: './ui-ux-banner.component.html',
  styleUrls: ['./ui-ux-banner.component.scss']
})
export class UiUxBannerComponent {
  ngAfterContentInit() {
    hbspt.forms.create({
      region: "na1",
      portalId: "7305468",
      formId: "fc33424c-4d8c-4208-a330-6850e4ed0eb6",
      target: "#hubspotForms"
    });
  }
}
