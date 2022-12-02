import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonSchemaGenComponent } from './ngx-json-schema-gen.component';

describe('NgxJsonSchemaGenComponent', () => {
  let component: NgxJsonSchemaGenComponent;
  let fixture: ComponentFixture<NgxJsonSchemaGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxJsonSchemaGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonSchemaGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
