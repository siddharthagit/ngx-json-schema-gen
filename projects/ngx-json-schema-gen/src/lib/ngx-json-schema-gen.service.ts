import { Injectable } from '@angular/core';
import { JSONSchema, JSONSchemaArray, JSONSchemaObject, JSONSchemaProp } from './models';



@Injectable({
  providedIn: 'root'
})

/**
 * Service which generates JSON Schema from a JSON object.
 */
export class NgxJsonSchemaGenService {

  requiredFieldMarker = "none"
  constructor() { }

  /**
   * 
   * @param json input json object
   * @param reqFieldFlag To control which fields should be marked as required in the generated Schema  
   * @returns Generated Schema as String
   */
  public generateSchemaStr(json: object, reqFieldFlag?:string): string {
    let result: string = JSON.stringify(this.generateSchema(json, reqFieldFlag));
    console.log("generateSchema result=" + result);
    return result;
  }

  public generateSchema(json: object, reqFieldFlag?:string): JSONSchema {
    this.requiredFieldMarker = reqFieldFlag == undefined? "none": reqFieldFlag;
    let schema: JSONSchema = new JSONSchema();
    console.log("generateSchema " + json);
    this.parse(json, schema);
    return schema;
  }


  private parse(json: any, schema: any) {
    console.log("parse json " + JSON.stringify(json));
    if (Array.isArray(json)) {
      this.processJSONArray(json, schema)
    } else if (this.isJSONObject(json)) {
      this.processJSONObject(json, schema)
    } else {
      schema.type = this.getDataTypeFromValue(json)
    }
  }

  /**
   * Method to process JSON Array
   * @param arr 
   * @param schema 
   */
  private processJSONArray(arr: Array<object>, schema: any) {
    schema.type = 'array';
    var props = schema.items = new JSONSchemaArray(); 
    //only the first element of the array is fine
    this.parse(arr[0], props)
  }

  /**
   * Method to process JSON object
   * @param json 
   * @param schema 
   */
  private processJSONObject(json: any, schema: any) {
    console.log("processJSONObject " + JSON.stringify(json));
    schema.type = 'object';
    schema.required = [];
    schema.properties = new JSONSchemaProp();
    for (var key in json) {
      var item = json[key];
      var currKeyProp = schema.properties[key] = {};
      if (this.requiredFieldMarker === "all") {
        key = key.substring(1);
        schema.required.push(key);
      }
      if (key[0] === this.requiredFieldMarker) {
        key = key.substring(1);
        schema.required.push(key);
      }
      this.parse(item, currKeyProp)
    }
  }

  /**
   * Get the type of JSON Object/Literal
   * @param type 
   * @returns 
   */
  private getDataTypeFromValue(type: object) {
    return typeof type;
  }

  private isJSONObject(obj: any) {
    let ret:boolean = obj ? typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype : false;

    console.log("isPlainObject " + JSON.stringify(obj) + " ::" + ret);
    return ret;
  }

}
