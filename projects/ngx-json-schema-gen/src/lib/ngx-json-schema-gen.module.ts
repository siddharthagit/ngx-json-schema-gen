import { NgModule } from '@angular/core';
import { NgxJsonSchemaGenComponent } from './ngx-json-schema-gen.component';
import { NgxJsonSchemaGenService } from './ngx-json-schema-gen.service';


@NgModule({
  declarations: [
    NgxJsonSchemaGenComponent
  ],
  providers: [
    NgxJsonSchemaGenService 
  ],
  exports: [
    NgxJsonSchemaGenComponent
  ]
})
export class NgxJsonSchemaGenModule { }
