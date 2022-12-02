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


  it('should be equal', () => {
    let json = {
      "phone": {
          "isd": 91,
          "num": 123456
      }
    }

    let schema2 = {
      "type": "object",
      "required": [],
      "properties": {
          "type": "object",
          "required": [],
          "properties": {},
          "phone": {
              "properties": {
                  "type": "object",
                  "required": [],
                  "properties": {},
                  "isd": {
                      "properties": {},
                      "type": "number"
                  },
                  "num": {
                      "properties": {},
                      "type": "number"
                  }
              },
              "type": "object",
              "required": []
          }
      }
  }

  let schema = {
    "type": "object",
    "required": [],
    "properties": {
      "phone": {
        "type": "object",
        "required": [],
        "properties": {
          "isd": {
            "type": "number"
          },
          "num": {
            "type": "number"
          }
        }
      }
    }
  }
    
    expect(schema).toEqual(JSON.parse(service.generateSchemaStr(json)));
  });


});
