import { Component, OnInit, Input} from '@angular/core';
import { BlogService } from '../../services/blog.service';

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
  constructor(blogService: BlogService) {
    this.blogs = blogService.getBlogs();
    this.selectedBlogs = Object.assign([], {}, this.blogs);
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
