import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalasamComponent } from './dalasam.component';

describe('DalasamComponent', () => {
  let component: DalasamComponent;
  let fixture: ComponentFixture<DalasamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalasamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DalasamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
