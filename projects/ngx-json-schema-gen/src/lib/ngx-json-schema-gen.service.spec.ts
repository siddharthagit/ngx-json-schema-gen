import { TestBed } from '@angular/core/testing';

import { NgxJsonSchemaGenService } from './ngx-json-schema-gen.service';

describe('NgxJsonSchemaGenService', () => {
  let service: NgxJsonSchemaGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxJsonSchemaGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
