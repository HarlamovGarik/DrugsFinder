import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoouterMenuComponent } from './foouter-menu.component';

describe('FoouterMenuComponent', () => {
  let component: FoouterMenuComponent;
  let fixture: ComponentFixture<FoouterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoouterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoouterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
