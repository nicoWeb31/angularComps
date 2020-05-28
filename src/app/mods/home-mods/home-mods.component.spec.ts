import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModsComponent } from './home-mods.component';

describe('HomeModsComponent', () => {
  let component: HomeModsComponent;
  let fixture: ComponentFixture<HomeModsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeModsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
