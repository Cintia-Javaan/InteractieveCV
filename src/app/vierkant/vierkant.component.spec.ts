import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VierkantComponent } from './vierkant.component';

describe('VierkantComponent', () => {
  let component: VierkantComponent;
  let fixture: ComponentFixture<VierkantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VierkantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VierkantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
