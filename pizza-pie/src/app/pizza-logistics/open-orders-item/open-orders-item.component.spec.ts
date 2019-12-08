import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrdersItemComponent } from './open-orders-item.component';

describe('OpenOrderItemComponent', () => {
  let component: OpenOrdersItemComponent;
  let fixture: ComponentFixture<OpenOrdersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenOrdersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOrdersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
