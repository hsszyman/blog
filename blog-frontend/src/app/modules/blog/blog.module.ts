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
import { LayoutModule } from '@angular/cdk/layout';
import { SideBarComponent } from '../layout/side-bar/side-bar.component';

@NgModule({
  declarations: [
    BlogPostComponent,
    RollingBlogComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule,
    MatCardModule,
    RouterModule,
    LayoutModule
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
