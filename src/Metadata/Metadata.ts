import 'reflect-metadata';

const metadataKey = Symbol('metadata');

interface IAuthorAttribute {
  id: string;
  category?: string;
  displayName: string;
  description: string;
  isEditable?: boolean;
  isRequired: boolean;
}

export interface IMetadataAttribute extends IAuthorAttribute {
  defaultValue?: any;
  isSiteLevel?: boolean;
  disableModulePrefix?: boolean;
  maximum?: number;
  minimum?: number;
  valuePattern?: string;
  dependencies?: string[];
  localizationKey?: string;
  needsLocalization?: boolean;
}

export default function metadata(metadata: IMetadataAttribute) {
  return Reflect.metadata(metadataKey, metadata);
}

export function getMetadata(target: any, propertyKey: string) {
  console.log(target, propertyKey);
  return Reflect.getMetadata(metadataKey, target, propertyKey);
}
