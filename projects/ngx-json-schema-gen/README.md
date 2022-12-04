# ngx-json-schema-gen

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Installing

Run `npm i ngx-json-schema-gen` to install the package

## Getting started

Use the NgxJsonSchemaGenService Service in your project:

```typescript
import { Component } from '@angular/core';
import { NgxJsonSchemaGenService } from 'ngx-json-schema-gen';

@Component({
  ...
})
export class AppComponent {
  constructor(private service: NgxJsonSchemaGenService) {}

  //Input JSON Object
  injson = {
    phone: {
      isd: 91,
      num: 123456,
      active: true,
    },
  };
 
  //Output JSON Schema as String
  outschemaStr = this.service.generateSchemaStr(this.injson, 'all');
  
}
``` 

## Demo
https://stackblitz.com/edit/angular-json-schema-gen?file=src/app/hello.component.ts

For a more detailed explanation of how to use this library, please refer to the [full documentation](https://alberthaff.dk/projects/ngx-papaparse/docs/v6). 
