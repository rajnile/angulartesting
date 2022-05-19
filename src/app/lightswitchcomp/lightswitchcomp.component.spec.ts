import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchcompComponent } from './lightswitchcomp.component';

describe('LightswitchcompComponent', () => {
  let component: LightswitchcompComponent;
  let fixture: ComponentFixture<LightswitchcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightswitchcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
