import { Component, AfterViewInit } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss']
})
export class ExploreCoursesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('.tab-link').on('click', function(this: HTMLElement) { // Add the type annotation
      const tabId = $(this).data('tab');
      $('.tab-content').hide();
      $('#' + tabId).show();
    });
  }
}