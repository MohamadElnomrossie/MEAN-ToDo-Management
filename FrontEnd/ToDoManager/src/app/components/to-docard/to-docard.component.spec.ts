import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDOCardComponent } from './to-docard.component';

describe('ToDOCardComponent', () => {
  let component: ToDOCardComponent;
  let fixture: ComponentFixture<ToDOCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDOCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDOCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
