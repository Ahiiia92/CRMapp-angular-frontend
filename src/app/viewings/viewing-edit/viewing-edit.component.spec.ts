import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingEditComponent } from './viewing-edit.component';

describe('ViewingEditComponent', () => {
  let component: ViewingEditComponent;
  let fixture: ComponentFixture<ViewingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
