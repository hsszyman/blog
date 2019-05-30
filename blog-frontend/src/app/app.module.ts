import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownService } from 'ngx-markdown';
import { MarkedOptions } from 'ngx-markdown';
import { BlogModule } from './modules/blog/blog.module';
import { LayoutModule } from './modules/layout/layout.module';
import { RouterModule } from '@angular/router';
import { RollingBlogComponent } from './modules/blog/components/rolling-blog/rolling-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MarkdownModule,
    BlogModule,
    LayoutModule,
    RouterModule
  ],
  providers: [
    MarkdownService,
    MarkedOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
