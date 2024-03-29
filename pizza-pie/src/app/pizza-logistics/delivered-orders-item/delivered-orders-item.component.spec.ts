import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredOrdersItemComponent } from './delivered-orders-item.component';

describe('DeliveredOrdersItemComponent', () => {
  let component: DeliveredOrdersItemComponent;
  let fixture: ComponentFixture<DeliveredOrdersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredOrdersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredOrdersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
