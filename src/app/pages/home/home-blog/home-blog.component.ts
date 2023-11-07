import { Component,HostListener  } from '@angular/core';
import { ConfigService } from '../../../config/config.service';
@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent {
  blogs: any;
  posts: any;
  shouldShowSection: boolean = false;

  constructor(private user: ConfigService) { }

  ngOnInit() {
    this.user.getBlogs().subscribe(response => {
      this.blogs = response[0];
      this.posts = this.blogs.posts;
    });
  }

  getBlogSlice(): any[] {
    if (this.blogs) {
      return this.blogs.slice(0, 3);
    } else {
      return [];
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Set the visibility based on scroll position
    this.shouldShowSection = scrollPosition > 0;
  }
}
