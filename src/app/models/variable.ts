export interface Variable {
  id: string;
  name: string;
  isRequested: boolean;
  requestMsg?: string;
  description?: string;
  domain: string;
}

export class VariableValueMap {[uuid: string]: string}
