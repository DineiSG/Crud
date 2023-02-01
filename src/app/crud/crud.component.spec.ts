import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUmComponent } from './crud.component';

describe('PaginaUmComponent', () => {
  let component: PaginaUmComponent;
  let fixture: ComponentFixture<PaginaUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
