import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaModuleComponent } from './media-module.component';

describe('MediaModuleComponent', () => {
  let component: MediaModuleComponent;
  let fixture: ComponentFixture<MediaModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
