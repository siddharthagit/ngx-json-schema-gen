import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { JSONSchema, JSONSchemaArray, JSONSchemaObject } from './models';
import { NgxJsonSchemaGenService } from './ngx-json-schema-gen.service';

@Component({
  selector: 'lib-ngx-json-schema-gen',
  template:'',
  styles: [
  ]
})
/**
 * Component to generate output JSON schema from the input JSON string.
 * It calls the NgxJsonSchemaGenService Service which takes care of generating JSON Schema
 */
export class NgxJsonSchemaGenComponent implements OnChanges  {

  @Input() jsonString:string | undefined;
  @Output() schemaOut = new EventEmitter<string>(); 
  
  constructor(private service:NgxJsonSchemaGenService) { }
 
  ngOnChanges(changes: SimpleChanges): void {
      
    if (this.jsonString != undefined) {
      this.schemaOut.emit(JSON.stringify(this.service.generateSchemaStr (JSON.parse(this.jsonString))));
    }
  
  }
}
