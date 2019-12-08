import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyForDeliveryComponent } from './ready-for-delivery.component';

describe('ReadyComponent', () => {
  let component: ReadyForDeliveryComponent;
  let fixture: ComponentFixture<ReadyForDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyForDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyForDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
