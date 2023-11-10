import { Component, AfterViewInit } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss']
})
export class ExploreCoursesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('.tab-link').on('click', function(this: HTMLElement) {
      const tabId = $(this).data('tab');
      
      // Hide all tab contents and remove 'active' class from all nav items
      $('.tab-content').hide();
      $('.nav-item').removeClass('active');
      
      // Show the selected tab content
      $('#' + tabId).show();
      
      // Add 'active' class to the clicked nav item
      $(this).parent().addClass('active');
    });
}

}