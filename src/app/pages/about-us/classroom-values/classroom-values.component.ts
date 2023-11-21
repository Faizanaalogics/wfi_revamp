import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-classroom-values',
  templateUrl: './classroom-values.component.html',
  styleUrls: ['./classroom-values.component.scss']
})
export class ClassroomValuesComponent implements OnInit, AfterViewInit{
  data: any;
  content: any;

  constructor(private user: ConfigService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // Initialize the carousel in the ngOnInit lifecycle hook
    // this.initCarousel();
    this.user.getRV_About_Classroom().subscribe(response => {
      this.data = response;
      this.data.items.forEach((e: any) => {
        this.data = e;
      });
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initCarousel();
    }, 100);
  }
  

  initCarousel() {
    // Initialize the Slick carousel
    $('.classroom_carousel').slick({
      // Slick carousel options
      slidesToShow: 1, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at a time
      // Add other Slick options as needed
    });
  }
}
