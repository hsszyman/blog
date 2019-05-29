import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blog-model';
import { LocalBlogHelper } from '../helpers/localBlogGenerator';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: BlogModel[] = new Array<BlogModel>();
  localBlogs: BlogModel[] = new Array<BlogModel>();
  previewBlogs = new Array<BlogModel>();
  blogPreviewHeight = 500;
  constructor() {
    this.blogs = new LocalBlogHelper().getBlogs();
    const tmpBlogs = new LocalBlogHelper().getBlogs();
    tmpBlogs.forEach((blog) => {
      this.previewBlogs.push(
        //new BlogModel(blog.Tags, blog.CoolFactor, blog.Content.substring(0, 800))
      );

    });
  }

  getBlogs() {
    return this.blogs;
  }

  getBlogPreviews() {
    return this.previewBlogs;
  }
}
