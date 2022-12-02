import { Injectable } from '@angular/core';
import { JSONSchema, JSONSchemaArray, JSONSchemaObject, JSONSchemaProp } from './models';

@Injectable({
  providedIn: 'root'
})
export class NgxJsonSchemaGenService {

  constructor() { }

  public generateSchema(json: object): JSONSchema {
    let schema: JSONSchema = new JSONSchema();
    console.log("generateSchema " + json);
    this.parse(json, schema);
    return schema;
  }

  public generateSchemaStr(json: object): string {
    let schema: JSONSchema = new JSONSchema();
    console.log("generateSchema " + json);
    this.parse(json, schema);
    let result: string = JSON.stringify(schema);
    console.log("generateSchema result=" + result);
    return result;
  }


  private parse(json: any, schema: any) {
    console.log("parse json " + JSON.stringify(json));
    if (Array.isArray(json)) {
      this.processJSONArray(json, schema)
    } else if (this.isPlainObject(json)) {
      this.processJSONObject(json, schema)
    } else {
      schema.type = this.getType(json)
    }
  }


  private processJSONArray(arr: Array<object>, schema: any) {
    schema.type = 'array';
    var props = schema.items = new JSONSchemaArray(); 

    //only the first element of the array is fine
    this.parse(arr[0], props)
  }


  private processJSONObject(json: any, schema: any) {
    console.log("processJSONObject " + JSON.stringify(json));
    schema.type = 'object';
    schema.required = [];
    schema.properties = new JSONSchemaProp();
    for (var key in json) {
      var item = json[key];
      var currKeyProp = schema.properties[key] = {};
      if (key[0] === '*') {
        key = key.substring(1);
        schema.required.push(key);
      }
      this.parse(item, currKeyProp)
    }
  }

  private getType(type: object) {
    return typeof type;
  }

  private isPlainObject(obj: any) {
    return obj ? typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype : false;
  }

}
