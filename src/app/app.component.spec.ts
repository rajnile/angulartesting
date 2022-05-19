import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LightswitchcompComponent } from './lightswitchcomp/lightswitchcomp.component';

describe('LightswitchcompComponent', () => {

  let component: LightswitchcompComponent;
  let fixture: ComponentFixture<LightswitchcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LightswitchcompComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("should return 'The light is off'", () => {
    expect(component.isOn).toBeFalsy();
    expect(component.message).toBe("The light is Off");
  })

  it("should return 'The light is On'", () => {
    component.clicked();
    expect(component.isOn).toBeTruthy();
    expect(component.message).toBe("The light is On");
  });

  it("should return 'The light is off'", () => {
    component.clicked();
    component.clicked();
    expect(component.message).toBe("The light is Off");
  })
});
