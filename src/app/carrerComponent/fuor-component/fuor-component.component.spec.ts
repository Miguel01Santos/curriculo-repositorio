import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuorComponentComponent } from './fuor-component.component';

describe('FuorComponentComponent', () => {
  let component: FuorComponentComponent;
  let fixture: ComponentFixture<FuorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
