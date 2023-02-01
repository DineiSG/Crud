import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoCadComponent } from './sucesso-cad.component';

describe('SucessoCadComponent', () => {
  let component: SucessoCadComponent;
  let fixture: ComponentFixture<SucessoCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessoCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
