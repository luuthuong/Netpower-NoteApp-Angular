import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalContentComponent } from './detal-content.component';

describe('DetalContentComponent', () => {
  let component: DetalContentComponent;
  let fixture: ComponentFixture<DetalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
