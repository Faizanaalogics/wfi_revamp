import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-our-graduates-saying',
  templateUrl: './our-graduates-saying.component.html',
  styleUrls: ['./our-graduates-saying.component.scss']
})
export class OurGraduatesSayingComponent implements OnInit, AfterViewInit{
  ngOnInit() {
    // Initialize the carousel in the ngOnInit lifecycle hook
    this.initCarousel();
  }

  ngAfterViewInit() {
    // If you encounter any issues initializing the carousel, try using ngAfterViewInit instead of ngOnInit.
    // this.initCarousel();
  }

  initCarousel() {
    // Initialize the Slick carousel
    $('.our_graduates__saying').slick({
      // Slick carousel options
      slidesToShow: 4, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at a time
      // Add other Slick options as needed
    });
    $('.graduates_testimonials  .avc').slick({
      // Slick carousel options
      slidesToShow: 3, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at a time
    });
  }
}
