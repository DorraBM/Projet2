import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHotelComponent } from './detail-user.component';

describe('DetailHotelComponent', () => {
  let component: DetailHotelComponent;
  let fixture: ComponentFixture<DetailHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
