import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingBlogComponent } from './rolling-blog.component';

describe('RollingBlogComponent', () => {
  let component: RollingBlogComponent;
  let fixture: ComponentFixture<RollingBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
