import { Component, OnInit, Input, Output, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { BlogModel } from '../../models/blog-model';
import { EventEmitter } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, AfterViewInit{
  @Input() blogPost: BlogModel;
  @Input() isPreview = false;
  @Output() tagChosen = new EventEmitter();
  loaded = false;
  blogPostView: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    console.log(this.el.nativeElement);
  }

  viewTag(Tag) {
    this.tagChosen.emit(Tag);
  }

  ngAfterViewInit() {
    $('.card-body').each(function() {
      if ($(this).find('.preview').height() as number < 500) {
      $(this).find('.fadeout').hide();
      }

    });
  }
  @HostListener('window:resize', ['$event'])
  onresize(event) {
    $('.card-body').each(function() {
      if ($(this).find('.preview').height() as number < 500) {
      $(this).find('.fadeout').hide();
      }

    });
  }

}
