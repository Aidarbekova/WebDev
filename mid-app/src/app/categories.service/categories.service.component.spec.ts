import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categories.ServiceComponent } from './categories.service.component';

describe('Categories.ServiceComponent', () => {
  let component: Categories.ServiceComponent;
  let fixture: ComponentFixture<Categories.ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categories.ServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categories.ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
