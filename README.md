# About

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

This angular library generates JSON schema from a given JSON String.

## Installation
You can install the library with [npm](https://npmjs.com).
npm i ngx-json-schema-gen --save
    

## Sample Use
Use the NgxJsonSchemaGenService Service in your project:

```typescript
import { Component, VERSION } from '@angular/core';
import { NgxJsonSchemaGenService } from 'ngx-json-schema-gen';

@Component({
  selector: 'hello',
  template: `<lib-ngx-json-schema-gen
     [jsonString]="injsonstr"
     (schemaOut)="(schemaOutHandler)">
  </lib-ngx-json-schema-gen>
  print schema
  {{ outschema }}`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  constructor(private service: NgxJsonSchemaGenService) {
    //input JSON
    injson = {
        phone: {
        isd: 1,
        num: 123456,
        active: true,
        },
    };

    //Output JSON Schema String
    outschema = this.service.generateSchemaStr(this.injson, 'all');;
  }
}

``` 

For a more detailed explanation of how to use this library, please refer to the [full documentation](https://siddharthagit.github.io/ngx-json-schema-gen/). 


## Demo
https://stackblitz.com/edit/angular-json-schema-gen?file=src/app/hello.component.ts
