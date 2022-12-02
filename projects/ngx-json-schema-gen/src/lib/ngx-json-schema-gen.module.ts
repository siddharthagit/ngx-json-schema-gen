import { NgModule } from '@angular/core';
import { NgxJsonSchemaGenComponent } from './ngx-json-schema-gen.component';
import { NgxJsonSchemaGenService } from './ngx-json-schema-gen.service';



@NgModule({
  declarations: [
    NgxJsonSchemaGenComponent
  ],
  imports: [
  ],
  exports: [
    NgxJsonSchemaGenComponent, NgxJsonSchemaGenService
  ]
})
export class NgxJsonSchemaGenModule { }
