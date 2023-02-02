import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMegamixComponent } from './page-megamix.component';

describe('PageMegamixComponent', () => {
  let component: PageMegamixComponent;
  let fixture: ComponentFixture<PageMegamixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMegamixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMegamixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
