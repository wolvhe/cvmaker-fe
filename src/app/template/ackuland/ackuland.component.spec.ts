import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AckulandComponent } from './ackuland.component';

describe('AckulandComponent', () => {
  let component: AckulandComponent;
  let fixture: ComponentFixture<AckulandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AckulandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AckulandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
