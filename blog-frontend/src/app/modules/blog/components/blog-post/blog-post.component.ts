import { Component, OnInit, Input, Output } from '@angular/core';
import { BlogModel } from '../../models/blog-model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() blogPost: BlogModel;
  @Output() tagChosen = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  viewTag(Tag) {
    this.tagChosen.emit(Tag);
  }

}
