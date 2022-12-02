import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { JSONSchema, JSONSchemaArray, JSONSchemaObject } from './models';
import { NgxJsonSchemaGenService } from './ngx-json-schema-gen.service';

@Component({
  selector: 'lib-ngx-json-schema-gen',
  template:'',
  styles: [
  ]
})
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
