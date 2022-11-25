import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsearchComponent } from './nsearch.component';

describe('NsearchComponent', () => {
  let component: NsearchComponent;
  let fixture: ComponentFixture<NsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
