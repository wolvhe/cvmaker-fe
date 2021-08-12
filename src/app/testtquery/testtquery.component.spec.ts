import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttqueryComponent } from './testtquery.component';

describe('TesttqueryComponent', () => {
  let component: TesttqueryComponent;
  let fixture: ComponentFixture<TesttqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesttqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
