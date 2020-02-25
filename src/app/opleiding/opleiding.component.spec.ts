import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpleidingComponent } from './opleiding.component';

describe('OpleidingComponent', () => {
  let component: OpleidingComponent;
  let fixture: ComponentFixture<OpleidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpleidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpleidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
