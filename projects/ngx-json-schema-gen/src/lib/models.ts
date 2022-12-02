export class JSONSchema {
    type: string = "";
    required: string[] = [];
    properties: { [key: string]: JSONSchemaSimple | JSONSchemaObject | JSONSchemaArray } = {};
}

export class JSONSchemaProp {
}
export class JSONSchemaInfo {
    type: string = "";
    required: string[] = [];
    properties: { [key: string]: any } = {};
}

export class JSONSchemaSimple {
    type: string = "string"; //default  
}

export class JSONSchemaObject {
    type: string = "object";
    required: string[] = [];
    properties: { [key: string]: any } = {};
}

export class JSONSchemaArray {
    type: string = "array";
    items: JSONSchemaInfo | undefined;
}
