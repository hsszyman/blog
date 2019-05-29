import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './services/blog.service';
import { RollingBlogComponent } from './components/rolling-blog/rolling-blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownService } from 'ngx-markdown';
import { MarkedOptions } from 'ngx-markdown';
import { MatCardModule } from '@angular/material';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BlogPostComponent,
    RollingBlogComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule,
    MatCardModule,
    RouterModule
  ],
  providers: [
    BlogService,
    MarkdownService,
    MarkedOptions,
    RouterModule
  ],
  exports: [
    RollingBlogComponent
  ]
})
export class BlogModule { }
