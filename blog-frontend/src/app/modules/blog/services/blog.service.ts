import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blog-model';
import { LocalBlogHelper } from '../helpers/localBlogGenerator';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: BlogModel[] = new Array<BlogModel>();
  localBlogs: BlogModel[] = new Array<BlogModel>();
  constructor() {
    this.blogs = new LocalBlogHelper().getBlogs();
  }
  getBlogs() {
    return this.blogs;
  }
}
