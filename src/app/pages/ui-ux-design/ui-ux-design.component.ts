import { Component, ElementRef, OnInit  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from 'src/app/config/config.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-ux-design',
  templateUrl: './ui-ux-design.component.html',
  styleUrls: ['./ui-ux-design.component.scss']
})
export class UiUxDesignComponent  implements OnInit {
  data: any;
  content: any;
  // ngAfterContentInit() {
  //   hbspt.forms.create({
  //     region: "na1",
  //     portalId: "7305468",
  //     formId: "fc33424c-4d8c-4208-a330-6850e4ed0eb6",
  //     target: "#hubspotForms"
  //   });
  // }
  activeElement: string = '';
  constructor(private user: ConfigService,private elementRef: ElementRef, public modalService: NgbModal) {}
  ngOnInit() {
    window.scrollTo(0, 0); // Add this line to scroll to the top of the page
  }
  scrollTo(target: string) {
    const targetElement = this.elementRef.nativeElement.querySelector(`#${target}`);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeElement = target;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
