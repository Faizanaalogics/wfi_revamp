import { Component } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-ui-ux-what-will-learn',
  templateUrl: './ui-ux-what-will-learn.component.html',
  styleUrls: ['./ui-ux-what-will-learn.component.scss']
})
export class UiUxWhatWillLearnComponent {
  ngAfterViewInit(): void {
    // Set the first tab and its content as active by default
    const firstTab = $('.nav-item:first-child');
    const firstTabContent = $('#' + firstTab.find('.tab-link').data('tab'));
    firstTab.addClass('active');
    firstTabContent.show();

    // Handle tab click events
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
