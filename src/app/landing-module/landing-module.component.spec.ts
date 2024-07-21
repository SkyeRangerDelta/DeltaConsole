import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingModuleComponent } from './landing-module.component';

describe('LandingModuleComponent', () => {
  let component: LandingModuleComponent;
  let fixture: ComponentFixture<LandingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
