import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../config/config.service';
export interface Post {
  post_id: number;
  identifier: string;
  category: string;
  author: string;
  // add other properties as needed
}
@Component({
  selector: 'app-post-detail-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.scss']
})
export class PostDetailPageComponent {
  blog: any;
  blogs: any;
  posts: any;
  constructor(private route: ActivatedRoute, private blogService: ConfigService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    const identifier = this.route.snapshot.paramMap.get('identifier');
    const category = this.route.snapshot.paramMap.get('cat');
    
    this.blogService.getBlogPage().subscribe((response: any[]) => {
      //console.log(identifier);
      const posts: Post[] = response[0];
      this.blog = posts.find((p: Post) => p.identifier  == identifier);
      //console.log(this.blog + "working");
    });
  
  }
}
