import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqAnsComponent } from './req-ans.component';

describe('ReqAnsComponent', () => {
  let component: ReqAnsComponent;
  let fixture: ComponentFixture<ReqAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqAnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
