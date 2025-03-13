import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostReactveComponent } from './add-post-reactive.component';

describe('AddPostReactveComponent', () => {
  let component: AddPostReactveComponent;
  let fixture: ComponentFixture<AddPostReactveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPostReactveComponent]
    });
    fixture = TestBed.createComponent(AddPostReactveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
