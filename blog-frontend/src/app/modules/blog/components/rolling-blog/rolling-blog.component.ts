import { Component, OnInit, Input} from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-rolling-blog',
  templateUrl: './rolling-blog.component.html',
  styleUrls: ['./rolling-blog.component.scss']
})
export class RollingBlogComponent implements OnInit {
  @Input() sort = 0;
  @Input() filter = '';
  blogs;
  selectedBlogs;
  Object = Object;
  constructor(blogService: BlogService, private router: Router) {
    this.blogs = blogService.getBlogPreviews();
    this.selectedBlogs = Object.assign([], {}, this.blogs);
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && val.url === '/') {
        this.selectedBlogs = Object.assign([], {}, this.blogs);
      }
    });
  }

  ngOnInit() {
  }

  filterFunc(filter) {
    console.log(filter);
    let tmpBlog = Object.assign([], {}, this.blogs);
    tmpBlog = tmpBlog.filter((elem) => elem.Tags.includes(filter));
    this.selectedBlogs = tmpBlog;
  }

}
