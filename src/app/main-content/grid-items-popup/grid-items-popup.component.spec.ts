import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridItemsPopupComponent } from './grid-items-popup.component';

describe('GridItemsPopupComponent', () => {
  let component: GridItemsPopupComponent;
  let fixture: ComponentFixture<GridItemsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridItemsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItemsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
