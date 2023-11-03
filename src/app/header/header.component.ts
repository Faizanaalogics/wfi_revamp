import { Component, TemplateRef, ViewEncapsulation, HostListener } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  sticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 50) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  constructor(private offcanvasService: NgbOffcanvas){}

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
