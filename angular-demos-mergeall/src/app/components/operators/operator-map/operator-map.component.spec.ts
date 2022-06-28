import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorMapComponent } from './operator-map.component';

describe('OperatorMapComponent', () => {
  let component: OperatorMapComponent;
  let fixture: ComponentFixture<OperatorMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
