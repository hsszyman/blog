import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './services/blog.service';
import { RollingBlogComponent } from './components/rolling-blog/rolling-blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownService } from 'ngx-markdown';
import { MarkedOptions } from 'ngx-markdown';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    BlogPostComponent,
    RollingBlogComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule,
    MatCardModule
  ],
  providers: [
    BlogService,
    MarkdownService,
    MarkedOptions
  ],
  exports: [
    RollingBlogComponent
  ]
})
export class BlogModule { }
