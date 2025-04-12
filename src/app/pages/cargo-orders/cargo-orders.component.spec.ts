import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoOrdersComponent } from './cargo-orders.component';

describe('CargoOrdersComponent', () => {
  let component: CargoOrdersComponent;
  let fixture: ComponentFixture<CargoOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
