import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkervaringComponent } from './werkervaring.component';

describe('WerkervaringComponent', () => {
  let component: WerkervaringComponent;
  let fixture: ComponentFixture<WerkervaringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkervaringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkervaringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
