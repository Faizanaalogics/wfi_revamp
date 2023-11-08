import { Component } from '@angular/core';
declare const hbspt: any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  ngAfterContentInit() {
    hbspt.forms.create({
      region: "na1",
      portalId: "7305468",
      formId: "fc33424c-4d8c-4208-a330-6850e4ed0eb6",
      target: "#hubspotForms"
    });
  }
}
