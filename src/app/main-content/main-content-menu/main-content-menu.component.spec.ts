import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentMenuComponent } from './main-content-menu.component';

describe('MainContentMenuComponent', () => {
  let component: MainContentMenuComponent;
  let fixture: ComponentFixture<MainContentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
