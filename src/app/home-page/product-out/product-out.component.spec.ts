import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOutComponent } from './product-out.component';

describe('ProductOutComponent', () => {
  let component: ProductOutComponent;
  let fixture: ComponentFixture<ProductOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
