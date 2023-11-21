import { Component } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss']
})
export class AboutContentComponent {
  data: any;
  content: any;

  constructor(private user: ConfigService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.user.getRV_About().subscribe(response => {
      this.data = response;
      this.data.items.forEach((e: any) => {
        this.data = e;
      });
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
    });
  }
}
