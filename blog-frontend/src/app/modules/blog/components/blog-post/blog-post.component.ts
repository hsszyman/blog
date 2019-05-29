import { Component, OnInit, Input, Output, ElementRef, HostListener, AfterViewInit, Renderer2, ViewChild, DoCheck } from '@angular/core';
import { BlogModel } from '../../models/blog-model';
import { EventEmitter } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { isProceduralRenderer } from '@angular/core/src/render3/interfaces/renderer';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, AfterViewInit {
  @Input() blogPost: BlogModel;
  @Input() isPreview = false;
  @Output() tagChosen = new EventEmitter();
  @Output() height = new EventEmitter<number>();
  @ViewChild('preview') private preview: ElementRef;
  blogContent: string;
  blogService: BlogService;

  constructor(blogService: BlogService) {
    this.blogService = blogService;
  }

  ngOnInit() {
    this.blogContent = this.blogPost.Content;
    this.previewCalc();
  }

  viewTag(Tag) {
    this.tagChosen.emit(Tag);
  }

  ngAfterViewInit() {
    this.height.emit(this.preview.nativeElement.offsetHeight);
  }

  previewCalc() {
    if (this.isPreview) {
      this.blogContent = this.blogPost.Content.substr(0, 800);
    } else {
      this.blogContent  = this.blogPost.Content;
    }

  }

  togglePreview() {
    this.isPreview = !this.isPreview;
    this.previewCalc();
  }

  showPreview(): boolean {
    const largeHeight = this.preview.nativeElement.offsetHeight > this.blogService.blogPreviewHeight;
    const isPreview = this.isPreview;
    return (largeHeight && isPreview) || (!isPreview && !largeHeight);
  }


  showFull() {

  }
}
