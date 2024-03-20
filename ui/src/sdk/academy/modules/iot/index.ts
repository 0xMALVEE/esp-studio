/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IError, QueryFilterRequest, RemoveReply } from "../../core/common";

export const protobufPackage = "";

export interface ComparisonTypeCreateReply {
  data: ComparisonTypeEntity | undefined;
  error: IError | undefined;
}

export interface ComparisonTypeReply {
  data: ComparisonTypeEntity | undefined;
  error: IError | undefined;
}

export interface ComparisonTypeQueryReply {
  items: ComparisonTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ComparisonTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: ComparisonTypeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface ComparisonTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface DataNodeCreateReply {
  data: DataNodeEntity | undefined;
  error: IError | undefined;
}

export interface DataNodeReply {
  data: DataNodeEntity | undefined;
  error: IError | undefined;
}

export interface DataNodeQueryReply {
  items: DataNodeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface DataNodeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"value"  ) */
  value?: string | undefined;
  /** One 2 one to external entity */
  typeId?: string | undefined;
  /** @tag(gorm:"foreignKey:TypeId;references:UniqueId" json:"type" yaml:"type" fbtype:"one") */
  type: DataNodeTypeEntity | undefined;
  /** One 2 one to external entity */
  modeId?: string | undefined;
  /** @tag(gorm:"foreignKey:ModeId;references:UniqueId" json:"mode" yaml:"mode" fbtype:"one") */
  mode: DataNodeModeEntity | undefined;
  /** repeated DataNodeReadersEntity readers = 16; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"readers") */
  readers: DataNodeReadersEntity[];
  /** repeated DataNodeWritersEntity writers = 17; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"writers") */
  writers: DataNodeWritersEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface DataNodeReadersEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  readerId?: string | undefined;
  /** @tag(gorm:"foreignKey:ReaderId;references:UniqueId" json:"reader" yaml:"reader" fbtype:"one") */
  reader: NodeReaderEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface DataNodeWritersEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  writerId?: string | undefined;
  /** @tag(gorm:"foreignKey:WriterId;references:UniqueId" json:"writer" yaml:"writer" fbtype:"one") */
  writer: NodeWriterEntity | undefined;
  /** This is an object, another entity needs to be created for */
  mqttTopicConfig: DataNodeWritersMqttTopicConfigEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface DataNodeWritersMqttTopicConfigEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"topic"  ) */
  topic?: string | undefined;
  /** @tag(  yaml:"body"  ) */
  body?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface WriteDatumDto {
  uniqueId: string;
  valueInt64?: number | undefined;
  valueFloat64?: number | undefined;
  valueString?: string | undefined;
  valueBoolean?: boolean | undefined;
}

export interface DataNodeModeCreateReply {
  data: DataNodeModeEntity | undefined;
  error: IError | undefined;
}

export interface DataNodeModeReply {
  data: DataNodeModeEntity | undefined;
  error: IError | undefined;
}

export interface DataNodeModeQueryReply {
  items: DataNodeModeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface DataNodeModeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface DataNodeTypeCreateReply {
  data: DataNodeTypeEntity | undefined;
  error: IError | undefined;
}

export interface DataNodeTypeReply {
  data: DataNodeTypeEntity | undefined;
  error: IError | undefined;
}

export interface DataNodeTypeQueryReply {
  items: DataNodeTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface DataNodeTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface DeviceCreateReply {
  data: DeviceEntity | undefined;
  error: IError | undefined;
}

export interface DeviceReply {
  data: DeviceEntity | undefined;
  error: IError | undefined;
}

export interface DeviceQueryReply {
  items: DeviceEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface DeviceEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: DeviceEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"model"  ) */
  model?: string | undefined;
  /** @tag( validate:"ip" yaml:"ip"  ) */
  ip?: string | undefined;
  /** @tag(  yaml:"wifiUser"  ) */
  wifiUser?: string | undefined;
  /** @tag(  yaml:"wifiPassword"  ) */
  wifiPassword?: string | undefined;
  /** @tag(  yaml:"securityType"  ) */
  securityType?: string | undefined;
  /** One 2 one to external entity */
  typeId?: string | undefined;
  /** @tag(gorm:"foreignKey:TypeId;references:UniqueId" json:"type" yaml:"type" fbtype:"one") */
  type: DeviceTypeEntity | undefined;
  /** This is an object, another entity needs to be created for */
  deviceModbusConfig: DeviceDeviceModbusConfigEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
  /** @tag(gorm:"-" sql:"-") */
  children: DeviceEntity[];
}

/** Because it has translation field, we need a translation table for this */
export interface DeviceEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface DeviceDeviceModbusConfigEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  modeId?: string | undefined;
  /** @tag(gorm:"foreignKey:ModeId;references:UniqueId" json:"mode" yaml:"mode" fbtype:"one") */
  mode: ModbusTransmissionModeEntity | undefined;
  /** @tag(  yaml:"baudRate"  ) */
  baudRate?: number | undefined;
  /** @tag(  yaml:"dataBits"  ) */
  dataBits?: number | undefined;
  /** @tag(  yaml:"parity"  ) */
  parity?: number | undefined;
  /** @tag(  yaml:"stopBit"  ) */
  stopBit?: number | undefined;
  /** @tag(  yaml:"timeout"  ) */
  timeout?: number | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface DeviceTypeCreateReply {
  data: DeviceTypeEntity | undefined;
  error: IError | undefined;
}

export interface DeviceTypeReply {
  data: DeviceTypeEntity | undefined;
  error: IError | undefined;
}

export interface DeviceTypeQueryReply {
  items: DeviceTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface DeviceTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: DeviceTypeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface DeviceTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface GpioCreateReply {
  data: GpioEntity | undefined;
  error: IError | undefined;
}

export interface GpioReply {
  data: GpioEntity | undefined;
  error: IError | undefined;
}

export interface GpioQueryReply {
  items: GpioEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface GpioEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"index"  ) */
  index?: number | undefined;
  /** @tag(  yaml:"analogFunction"  ) */
  analogFunction?: string | undefined;
  /** @tag(  yaml:"rtcGpio"  ) */
  rtcGpio?: string | undefined;
  /** @tag(  yaml:"comments"  ) */
  comments?: string | undefined;
  /** One 2 one to external entity */
  modeId?: string | undefined;
  /** @tag(gorm:"foreignKey:ModeId;references:UniqueId" json:"mode" yaml:"mode" fbtype:"one") */
  mode: GpioModeEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface GpioModeCreateReply {
  data: GpioModeEntity | undefined;
  error: IError | undefined;
}

export interface GpioModeReply {
  data: GpioModeEntity | undefined;
  error: IError | undefined;
}

export interface GpioModeQueryReply {
  items: GpioModeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface GpioModeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: GpioModeEntityPolyglot[];
  /** @tag(  yaml:"key"  ) */
  key?: string | undefined;
  /** @tag(  yaml:"index"  ) */
  index?: number | undefined;
  /** @tag(translate:"true"  yaml:"description"  ) */
  description?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface GpioModeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"description" json:"description"); */
  description: string;
}

export interface GpioStateCreateReply {
  data: GpioStateEntity | undefined;
  error: IError | undefined;
}

export interface GpioStateReply {
  data: GpioStateEntity | undefined;
  error: IError | undefined;
}

export interface GpioStateQueryReply {
  items: GpioStateEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface GpioStateEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  gpioModeId?: string | undefined;
  /** @tag(gorm:"foreignKey:GpioModeId;references:UniqueId" json:"gpioMode" yaml:"gpioMode" fbtype:"one") */
  gpioMode: GpioModeEntity | undefined;
  /** @tag(  yaml:"gpioIndexSnapshot"  ) */
  gpioIndexSnapshot?: number | undefined;
  /** @tag(  yaml:"gpioModeSnapshot"  ) */
  gpioModeSnapshot?: number | undefined;
  /** @tag(  yaml:"gpioValueSnapshot"  ) */
  gpioValueSnapshot?: number | undefined;
  /** One 2 one to external entity */
  gpioId?: string | undefined;
  /** @tag(gorm:"foreignKey:GpioId;references:UniqueId" json:"gpio" yaml:"gpio" fbtype:"one") */
  gpio: GpioEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface IoWriterDto {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag( validate:"required" yaml:"content"  ) */
  content?: string | undefined;
  /** @tag( validate:"required" yaml:"type"  ) */
  type?: string | undefined;
  /** @tag( validate:"required" yaml:"host"  ) */
  host?: string | undefined;
  /** @tag(  yaml:"path"  ) */
  path?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface MemoryStatCreateReply {
  data: MemoryStatEntity | undefined;
  error: IError | undefined;
}

export interface MemoryStatReply {
  data: MemoryStatEntity | undefined;
  error: IError | undefined;
}

export interface MemoryStatQueryReply {
  items: MemoryStatEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface MemoryStatEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"heapSize"  ) */
  heapSize?: number | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ModbusConnectionTypeCreateReply {
  data: ModbusConnectionTypeEntity | undefined;
  error: IError | undefined;
}

export interface ModbusConnectionTypeReply {
  data: ModbusConnectionTypeEntity | undefined;
  error: IError | undefined;
}

export interface ModbusConnectionTypeQueryReply {
  items: ModbusConnectionTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ModbusConnectionTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: ModbusConnectionTypeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface ModbusConnectionTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ModbusFunctionCodeCreateReply {
  data: ModbusFunctionCodeEntity | undefined;
  error: IError | undefined;
}

export interface ModbusFunctionCodeReply {
  data: ModbusFunctionCodeEntity | undefined;
  error: IError | undefined;
}

export interface ModbusFunctionCodeQueryReply {
  items: ModbusFunctionCodeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ModbusFunctionCodeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: ModbusFunctionCodeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"code"  ) */
  code?: number | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface ModbusFunctionCodeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ModbusTaskCreateReply {
  data: ModbusTaskEntity | undefined;
  error: IError | undefined;
}

export interface ModbusTaskReply {
  data: ModbusTaskEntity | undefined;
  error: IError | undefined;
}

export interface ModbusTaskQueryReply {
  items: ModbusTaskEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ModbusTaskEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"modbusId"  ) */
  modbusId?: number | undefined;
  /** One 2 one to external entity */
  deviceId?: string | undefined;
  /** @tag(gorm:"foreignKey:DeviceId;references:UniqueId" json:"device" yaml:"device" fbtype:"one") */
  device: DeviceEntity | undefined;
  /** One 2 one to external entity */
  connectionTypeId?: string | undefined;
  /** @tag(gorm:"foreignKey:ConnectionTypeId;references:UniqueId" json:"connectionType" yaml:"connectionType" fbtype:"one") */
  connectionType: ModbusConnectionTypeEntity | undefined;
  /** One 2 one to external entity */
  functionCodeId?: string | undefined;
  /** @tag(gorm:"foreignKey:FunctionCodeId;references:UniqueId" json:"functionCode" yaml:"functionCode" fbtype:"one") */
  functionCode: ModbusFunctionCodeEntity | undefined;
  /** @tag(  yaml:"register"  ) */
  register?: number | undefined;
  /** @tag(  yaml:"writeInterval"  ) */
  writeInterval?: number | undefined;
  /** @tag(  yaml:"readInterval"  ) */
  readInterval?: number | undefined;
  /** @tag(  yaml:"range"  ) */
  range?: number | undefined;
  /** @tag(  yaml:"length"  ) */
  length?: number | undefined;
  /** One 2 one to external entity */
  variableTypeId?: string | undefined;
  /** @tag(gorm:"foreignKey:VariableTypeId;references:UniqueId" json:"variableType" yaml:"variableType" fbtype:"one") */
  variableType: ModbusVariableTypeEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ModbusTransmissionModeCreateReply {
  data: ModbusTransmissionModeEntity | undefined;
  error: IError | undefined;
}

export interface ModbusTransmissionModeReply {
  data: ModbusTransmissionModeEntity | undefined;
  error: IError | undefined;
}

export interface ModbusTransmissionModeQueryReply {
  items: ModbusTransmissionModeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ModbusTransmissionModeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: ModbusTransmissionModeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface ModbusTransmissionModeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ModbusVariableTypeCreateReply {
  data: ModbusVariableTypeEntity | undefined;
  error: IError | undefined;
}

export interface ModbusVariableTypeReply {
  data: ModbusVariableTypeEntity | undefined;
  error: IError | undefined;
}

export interface ModbusVariableTypeQueryReply {
  items: ModbusVariableTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ModbusVariableTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: ModbusVariableTypeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface ModbusVariableTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface MqttClientConnectDto {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"connect") */
  connect?: boolean | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface MqttClientConnectionDto {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"isConnected") */
  isConnected?: boolean | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface MqttConfigDto {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"ssl") */
  ssl?: boolean | undefined;
  /** @tag(  yaml:"autoReconnect") */
  autoReconnect?: boolean | undefined;
  /** @tag(  yaml:"cleanSession") */
  cleanSession?: boolean | undefined;
  /** @tag(  yaml:"lastWillRetain") */
  lastWillRetain?: boolean | undefined;
  /** @tag(  yaml:"port"  ) */
  port?: number | undefined;
  /** @tag(  yaml:"keepAlive"  ) */
  keepAlive?: number | undefined;
  /** @tag(  yaml:"connectTimeout"  ) */
  connectTimeout?: number | undefined;
  /** @tag(  yaml:"lastWillQos"  ) */
  lastWillQos?: number | undefined;
  /** @tag(  yaml:"clientId"  ) */
  clientId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"host"  ) */
  host?: string | undefined;
  /** @tag(  yaml:"username"  ) */
  username?: string | undefined;
  /** @tag(  yaml:"password"  ) */
  password?: string | undefined;
  /** One 2 one to external entity */
  mqttVersionId?: string | undefined;
  /** @tag(gorm:"foreignKey:MqttVersionId;references:UniqueId" json:"mqttVersion" yaml:"mqttVersion" fbtype:"one") */
  mqttVersion: MqttVersionEntity | undefined;
  /** @tag(  yaml:"lastWillTopic"  ) */
  lastWillTopic?: string | undefined;
  /** @tag(  yaml:"lastWillPayload"  ) */
  lastWillPayload?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface MqttVersionCreateReply {
  data: MqttVersionEntity | undefined;
  error: IError | undefined;
}

export interface MqttVersionReply {
  data: MqttVersionEntity | undefined;
  error: IError | undefined;
}

export interface MqttVersionQueryReply {
  items: MqttVersionEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface MqttVersionEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"version"  ) */
  version?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface NodeDatumCreateReply {
  data: NodeDatumEntity | undefined;
  error: IError | undefined;
}

export interface NodeDatumReply {
  data: NodeDatumEntity | undefined;
  error: IError | undefined;
}

export interface NodeDatumQueryReply {
  items: NodeDatumEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface NodeDatumEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  nodeId?: string | undefined;
  /** @tag(gorm:"foreignKey:NodeId;references:UniqueId" json:"node" yaml:"node" fbtype:"one") */
  node: DataNodeEntity | undefined;
  /** @tag(  yaml:"valueFloat64"  ) */
  valueFloat64?: number | undefined;
  /** @tag(  yaml:"valueInt64"  ) */
  valueInt64?: number | undefined;
  /** @tag(  yaml:"valueString"  ) */
  valueString?: string | undefined;
  /** @tag(  yaml:"valueBoolean") */
  valueBoolean?: boolean | undefined;
  ingestedAt: number;
  ingestedAtFormatted: string;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface NodeReaderCreateReply {
  data: NodeReaderEntity | undefined;
  error: IError | undefined;
}

export interface NodeReaderReply {
  data: NodeReaderEntity | undefined;
  error: IError | undefined;
}

export interface NodeReaderQueryReply {
  items: NodeReaderEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface NodeReaderEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"nativeFn"  ) */
  nativeFn?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface NodeWriterCreateReply {
  data: NodeWriterEntity | undefined;
  error: IError | undefined;
}

export interface NodeWriterReply {
  data: NodeWriterEntity | undefined;
  error: IError | undefined;
}

export interface NodeWriterQueryReply {
  items: NodeWriterEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface NodeWriterEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"nativeFn"  ) */
  nativeFn?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface OvioSetOutputDto {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag( validate:"required" yaml:"id"  ) */
  id?: string | undefined;
  /** @tag(  yaml:"type"  ) */
  type?: string | undefined;
  /** @tag(  yaml:"cmdid"  ) */
  cmdid?: string | undefined;
  /** This is an object, another entity needs to be created for */
  data: OvioSetOutputDataDto | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface OvioSetOutputDataDto {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"o1"  ) */
  o1?: number | undefined;
  /** @tag(  yaml:"o2"  ) */
  o2?: number | undefined;
  /** @tag(  yaml:"o3"  ) */
  o3?: number | undefined;
  /** @tag(  yaml:"o4"  ) */
  o4?: number | undefined;
  /** @tag(  yaml:"o5"  ) */
  o5?: number | undefined;
  /** @tag(  yaml:"o6"  ) */
  o6?: number | undefined;
  /** @tag(  yaml:"o7"  ) */
  o7?: number | undefined;
  /** @tag(  yaml:"o8"  ) */
  o8?: number | undefined;
  /** @tag(  yaml:"i1"  ) */
  i1?: number | undefined;
  /** @tag(  yaml:"i2"  ) */
  i2?: number | undefined;
  /** @tag(  yaml:"i3"  ) */
  i3?: number | undefined;
  /** @tag(  yaml:"i4"  ) */
  i4?: number | undefined;
  /** @tag(  yaml:"i5"  ) */
  i5?: number | undefined;
  /** @tag(  yaml:"i6"  ) */
  i6?: number | undefined;
  /** @tag(  yaml:"i7"  ) */
  i7?: number | undefined;
  /** @tag(  yaml:"i8"  ) */
  i8?: number | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface PhysicalSectionCreateReply {
  data: PhysicalSectionEntity | undefined;
  error: IError | undefined;
}

export interface PhysicalSectionReply {
  data: PhysicalSectionEntity | undefined;
  error: IError | undefined;
}

export interface PhysicalSectionQueryReply {
  items: PhysicalSectionEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface PhysicalSectionEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: PhysicalSectionEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface PhysicalSectionEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ScenarioCreateReply {
  data: ScenarioEntity | undefined;
  error: IError | undefined;
}

export interface ScenarioReply {
  data: ScenarioEntity | undefined;
  error: IError | undefined;
}

export interface ScenarioQueryReply {
  items: ScenarioEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ScenarioEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: ScenarioEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** This is an object, another entity needs to be created for */
  script: ScenarioScriptEntity | undefined;
  /** repeated ScenarioLammerSequenceEntity lammerSequences = 11; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"lammerSequences") */
  lammerSequences: ScenarioLammerSequenceEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface ScenarioEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ScenarioScriptEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"content"  ) */
  content?: string | undefined;
  /** One 2 one to external entity */
  scriptLanguageId?: string | undefined;
  /** @tag(gorm:"foreignKey:ScriptLanguageId;references:UniqueId" json:"scriptLanguage" yaml:"scriptLanguage" fbtype:"one") */
  scriptLanguage: ScenarioLanguageEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ScenarioLammerSequenceEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  operationTypeId?: string | undefined;
  /** @tag(gorm:"foreignKey:OperationTypeId;references:UniqueId" json:"operationType" yaml:"operationType" fbtype:"one") */
  operationType: ScenarioOperationTypeEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ScenarioLanguageCreateReply {
  data: ScenarioLanguageEntity | undefined;
  error: IError | undefined;
}

export interface ScenarioLanguageReply {
  data: ScenarioLanguageEntity | undefined;
  error: IError | undefined;
}

export interface ScenarioLanguageQueryReply {
  items: ScenarioLanguageEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ScenarioLanguageEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface ScenarioOperationTypeCreateReply {
  data: ScenarioOperationTypeEntity | undefined;
  error: IError | undefined;
}

export interface ScenarioOperationTypeReply {
  data: ScenarioOperationTypeEntity | undefined;
  error: IError | undefined;
}

export interface ScenarioOperationTypeQueryReply {
  items: ScenarioOperationTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ScenarioOperationTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: ScenarioOperationTypeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface ScenarioOperationTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface TriggerCreateReply {
  data: TriggerEntity | undefined;
  error: IError | undefined;
}

export interface TriggerReply {
  data: TriggerEntity | undefined;
  error: IError | undefined;
}

export interface TriggerQueryReply {
  items: TriggerEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface TriggerEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: TriggerEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** One 2 one to external entity */
  triggerTypeId?: string | undefined;
  /** @tag(gorm:"foreignKey:TriggerTypeId;references:UniqueId" json:"triggerType" yaml:"triggerType" fbtype:"one") */
  triggerType: TriggerTypeEntity | undefined;
  /** This is an object, another entity needs to be created for */
  triggerTypeCronjob: TriggerTriggerTypeCronjobEntity | undefined;
  /** This is an object, another entity needs to be created for */
  triggerTypeGpioValue: TriggerTriggerTypeGpioValueEntity | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface TriggerEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface TriggerTriggerTypeCronjobEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"expression"  ) */
  expression?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface TriggerTriggerTypeGpioValueEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  gpioId?: string | undefined;
  /** @tag(gorm:"foreignKey:GpioId;references:UniqueId" json:"gpio" yaml:"gpio" fbtype:"one") */
  gpio: GpioEntity | undefined;
  /** One 2 one to external entity */
  compareTypeId?: string | undefined;
  /** @tag(gorm:"foreignKey:CompareTypeId;references:UniqueId" json:"compareType" yaml:"compareType" fbtype:"one") */
  compareType: ComparisonTypeEntity | undefined;
  /** @tag(  yaml:"compareValueInt"  ) */
  compareValueInt?: number | undefined;
  /** @tag(  yaml:"compareValueString"  ) */
  compareValueString?: number | undefined;
  /** @tag(  yaml:"compareValueFloat"  ) */
  compareValueFloat?: number | undefined;
  /** @tag(  yaml:"thresholdPrecentage"  ) */
  thresholdPrecentage?: number | undefined;
  /** @tag(  yaml:"beginHour"  ) */
  beginHour?: number | undefined;
  /** @tag(  yaml:"endHour"  ) */
  endHour?: number | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

export interface TriggerTypeCreateReply {
  data: TriggerTypeEntity | undefined;
  error: IError | undefined;
}

export interface TriggerTypeReply {
  data: TriggerTypeEntity | undefined;
  error: IError | undefined;
}

export interface TriggerTypeQueryReply {
  items: TriggerTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface TriggerTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: TriggerTypeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface TriggerTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

function createBaseComparisonTypeCreateReply(): ComparisonTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const ComparisonTypeCreateReply = {
  encode(
    message: ComparisonTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ComparisonTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ComparisonTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComparisonTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ComparisonTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComparisonTypeCreateReply {
    return {
      data: isSet(object.data)
        ? ComparisonTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ComparisonTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ComparisonTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ComparisonTypeCreateReply>, I>>(
    base?: I
  ): ComparisonTypeCreateReply {
    return ComparisonTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ComparisonTypeCreateReply>, I>>(
    object: I
  ): ComparisonTypeCreateReply {
    const message = createBaseComparisonTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ComparisonTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseComparisonTypeReply(): ComparisonTypeReply {
  return { data: undefined, error: undefined };
}

export const ComparisonTypeReply = {
  encode(
    message: ComparisonTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ComparisonTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComparisonTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComparisonTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ComparisonTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComparisonTypeReply {
    return {
      data: isSet(object.data)
        ? ComparisonTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ComparisonTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ComparisonTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ComparisonTypeReply>, I>>(
    base?: I
  ): ComparisonTypeReply {
    return ComparisonTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ComparisonTypeReply>, I>>(
    object: I
  ): ComparisonTypeReply {
    const message = createBaseComparisonTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ComparisonTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseComparisonTypeQueryReply(): ComparisonTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ComparisonTypeQueryReply = {
  encode(
    message: ComparisonTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ComparisonTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ComparisonTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComparisonTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ComparisonTypeEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComparisonTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ComparisonTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ComparisonTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ComparisonTypeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ComparisonTypeQueryReply>, I>>(
    base?: I
  ): ComparisonTypeQueryReply {
    return ComparisonTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ComparisonTypeQueryReply>, I>>(
    object: I
  ): ComparisonTypeQueryReply {
    const message = createBaseComparisonTypeQueryReply();
    message.items =
      object.items?.map((e) => ComparisonTypeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseComparisonTypeEntity(): ComparisonTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ComparisonTypeEntity = {
  encode(
    message: ComparisonTypeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      ComparisonTypeEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ComparisonTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComparisonTypeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            ComparisonTypeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComparisonTypeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            ComparisonTypeEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ComparisonTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? ComparisonTypeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ComparisonTypeEntity>, I>>(
    base?: I
  ): ComparisonTypeEntity {
    return ComparisonTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ComparisonTypeEntity>, I>>(
    object: I
  ): ComparisonTypeEntity {
    const message = createBaseComparisonTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ComparisonTypeEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseComparisonTypeEntityPolyglot(): ComparisonTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ComparisonTypeEntityPolyglot = {
  encode(
    message: ComparisonTypeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ComparisonTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComparisonTypeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComparisonTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ComparisonTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ComparisonTypeEntityPolyglot>, I>>(
    base?: I
  ): ComparisonTypeEntityPolyglot {
    return ComparisonTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ComparisonTypeEntityPolyglot>, I>>(
    object: I
  ): ComparisonTypeEntityPolyglot {
    const message = createBaseComparisonTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDataNodeCreateReply(): DataNodeCreateReply {
  return { data: undefined, error: undefined };
}

export const DataNodeCreateReply = {
  encode(
    message: DataNodeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DataNodeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataNodeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DataNodeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeCreateReply {
    return {
      data: isSet(object.data)
        ? DataNodeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DataNodeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? DataNodeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeCreateReply>, I>>(
    base?: I
  ): DataNodeCreateReply {
    return DataNodeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeCreateReply>, I>>(
    object: I
  ): DataNodeCreateReply {
    const message = createBaseDataNodeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DataNodeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDataNodeReply(): DataNodeReply {
  return { data: undefined, error: undefined };
}

export const DataNodeReply = {
  encode(
    message: DataNodeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DataNodeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataNodeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DataNodeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeReply {
    return {
      data: isSet(object.data)
        ? DataNodeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DataNodeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? DataNodeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeReply>, I>>(
    base?: I
  ): DataNodeReply {
    return DataNodeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeReply>, I>>(
    object: I
  ): DataNodeReply {
    const message = createBaseDataNodeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DataNodeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDataNodeQueryReply(): DataNodeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const DataNodeQueryReply = {
  encode(
    message: DataNodeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      DataNodeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataNodeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(DataNodeEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => DataNodeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DataNodeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? DataNodeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeQueryReply>, I>>(
    base?: I
  ): DataNodeQueryReply {
    return DataNodeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeQueryReply>, I>>(
    object: I
  ): DataNodeQueryReply {
    const message = createBaseDataNodeQueryReply();
    message.items =
      object.items?.map((e) => DataNodeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDataNodeEntity(): DataNodeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    value: undefined,
    typeId: undefined,
    type: undefined,
    modeId: undefined,
    mode: undefined,
    readers: [],
    writers: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const DataNodeEntity = {
  encode(
    message: DataNodeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.value !== undefined) {
      writer.uint32(74).string(message.value);
    }
    if (message.typeId !== undefined) {
      writer.uint32(90).string(message.typeId);
    }
    if (message.type !== undefined) {
      DataNodeTypeEntity.encode(
        message.type,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.modeId !== undefined) {
      writer.uint32(114).string(message.modeId);
    }
    if (message.mode !== undefined) {
      DataNodeModeEntity.encode(
        message.mode,
        writer.uint32(122).fork()
      ).ldelim();
    }
    for (const v of message.readers) {
      DataNodeReadersEntity.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.writers) {
      DataNodeWritersEntity.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(144).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(152).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(160).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(170).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(178).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataNodeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.value = reader.string();
          break;
        case 11:
          message.typeId = reader.string();
          break;
        case 12:
          message.type = DataNodeTypeEntity.decode(reader, reader.uint32());
          break;
        case 14:
          message.modeId = reader.string();
          break;
        case 15:
          message.mode = DataNodeModeEntity.decode(reader, reader.uint32());
          break;
        case 16:
          message.readers.push(
            DataNodeReadersEntity.decode(reader, reader.uint32())
          );
          break;
        case 17:
          message.writers.push(
            DataNodeWritersEntity.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.createdFormatted = reader.string();
          break;
        case 22:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      value: isSet(object.value) ? String(object.value) : undefined,
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      type: isSet(object.type)
        ? DataNodeTypeEntity.fromJSON(object.type)
        : undefined,
      modeId: isSet(object.modeId) ? String(object.modeId) : undefined,
      mode: isSet(object.mode)
        ? DataNodeModeEntity.fromJSON(object.mode)
        : undefined,
      readers: Array.isArray(object?.readers)
        ? object.readers.map((e: any) => DataNodeReadersEntity.fromJSON(e))
        : [],
      writers: Array.isArray(object?.writers)
        ? object.writers.map((e: any) => DataNodeWritersEntity.fromJSON(e))
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: DataNodeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.type !== undefined &&
      (obj.type = message.type
        ? DataNodeTypeEntity.toJSON(message.type)
        : undefined);
    message.modeId !== undefined && (obj.modeId = message.modeId);
    message.mode !== undefined &&
      (obj.mode = message.mode
        ? DataNodeModeEntity.toJSON(message.mode)
        : undefined);
    if (message.readers) {
      obj.readers = message.readers.map((e) =>
        e ? DataNodeReadersEntity.toJSON(e) : undefined
      );
    } else {
      obj.readers = [];
    }
    if (message.writers) {
      obj.writers = message.writers.map((e) =>
        e ? DataNodeWritersEntity.toJSON(e) : undefined
      );
    } else {
      obj.writers = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeEntity>, I>>(
    base?: I
  ): DataNodeEntity {
    return DataNodeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeEntity>, I>>(
    object: I
  ): DataNodeEntity {
    const message = createBaseDataNodeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.value = object.value ?? undefined;
    message.typeId = object.typeId ?? undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? DataNodeTypeEntity.fromPartial(object.type)
        : undefined;
    message.modeId = object.modeId ?? undefined;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? DataNodeModeEntity.fromPartial(object.mode)
        : undefined;
    message.readers =
      object.readers?.map((e) => DataNodeReadersEntity.fromPartial(e)) || [];
    message.writers =
      object.writers?.map((e) => DataNodeWritersEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseDataNodeReadersEntity(): DataNodeReadersEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    readerId: undefined,
    reader: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const DataNodeReadersEntity = {
  encode(
    message: DataNodeReadersEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.readerId !== undefined) {
      writer.uint32(74).string(message.readerId);
    }
    if (message.reader !== undefined) {
      NodeReaderEntity.encode(
        message.reader,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(88).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(96).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(104).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(114).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(122).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DataNodeReadersEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeReadersEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.readerId = reader.string();
          break;
        case 10:
          message.reader = NodeReaderEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.createdFormatted = reader.string();
          break;
        case 15:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeReadersEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      readerId: isSet(object.readerId) ? String(object.readerId) : undefined,
      reader: isSet(object.reader)
        ? NodeReaderEntity.fromJSON(object.reader)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: DataNodeReadersEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.readerId !== undefined && (obj.readerId = message.readerId);
    message.reader !== undefined &&
      (obj.reader = message.reader
        ? NodeReaderEntity.toJSON(message.reader)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeReadersEntity>, I>>(
    base?: I
  ): DataNodeReadersEntity {
    return DataNodeReadersEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeReadersEntity>, I>>(
    object: I
  ): DataNodeReadersEntity {
    const message = createBaseDataNodeReadersEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.readerId = object.readerId ?? undefined;
    message.reader =
      object.reader !== undefined && object.reader !== null
        ? NodeReaderEntity.fromPartial(object.reader)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseDataNodeWritersEntity(): DataNodeWritersEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    writerId: undefined,
    writer: undefined,
    mqttTopicConfig: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const DataNodeWritersEntity = {
  encode(
    message: DataNodeWritersEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.writerId !== undefined) {
      writer.uint32(74).string(message.writerId);
    }
    if (message.writer !== undefined) {
      NodeWriterEntity.encode(
        message.writer,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.mqttTopicConfig !== undefined) {
      DataNodeWritersMqttTopicConfigEntity.encode(
        message.mqttTopicConfig,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DataNodeWritersEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeWritersEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.writerId = reader.string();
          break;
        case 10:
          message.writer = NodeWriterEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.mqttTopicConfig = DataNodeWritersMqttTopicConfigEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeWritersEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      writerId: isSet(object.writerId) ? String(object.writerId) : undefined,
      writer: isSet(object.writer)
        ? NodeWriterEntity.fromJSON(object.writer)
        : undefined,
      mqttTopicConfig: isSet(object.mqttTopicConfig)
        ? DataNodeWritersMqttTopicConfigEntity.fromJSON(object.mqttTopicConfig)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: DataNodeWritersEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.writerId !== undefined && (obj.writerId = message.writerId);
    message.writer !== undefined &&
      (obj.writer = message.writer
        ? NodeWriterEntity.toJSON(message.writer)
        : undefined);
    message.mqttTopicConfig !== undefined &&
      (obj.mqttTopicConfig = message.mqttTopicConfig
        ? DataNodeWritersMqttTopicConfigEntity.toJSON(message.mqttTopicConfig)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeWritersEntity>, I>>(
    base?: I
  ): DataNodeWritersEntity {
    return DataNodeWritersEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeWritersEntity>, I>>(
    object: I
  ): DataNodeWritersEntity {
    const message = createBaseDataNodeWritersEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.writerId = object.writerId ?? undefined;
    message.writer =
      object.writer !== undefined && object.writer !== null
        ? NodeWriterEntity.fromPartial(object.writer)
        : undefined;
    message.mqttTopicConfig =
      object.mqttTopicConfig !== undefined && object.mqttTopicConfig !== null
        ? DataNodeWritersMqttTopicConfigEntity.fromPartial(
            object.mqttTopicConfig
          )
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseDataNodeWritersMqttTopicConfigEntity(): DataNodeWritersMqttTopicConfigEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    topic: undefined,
    body: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const DataNodeWritersMqttTopicConfigEntity = {
  encode(
    message: DataNodeWritersMqttTopicConfigEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.topic !== undefined) {
      writer.uint32(66).string(message.topic);
    }
    if (message.body !== undefined) {
      writer.uint32(74).string(message.body);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DataNodeWritersMqttTopicConfigEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeWritersMqttTopicConfigEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.topic = reader.string();
          break;
        case 9:
          message.body = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeWritersMqttTopicConfigEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      topic: isSet(object.topic) ? String(object.topic) : undefined,
      body: isSet(object.body) ? String(object.body) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: DataNodeWritersMqttTopicConfigEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.body !== undefined && (obj.body = message.body);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeWritersMqttTopicConfigEntity>, I>>(
    base?: I
  ): DataNodeWritersMqttTopicConfigEntity {
    return DataNodeWritersMqttTopicConfigEntity.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<DataNodeWritersMqttTopicConfigEntity>, I>
  >(object: I): DataNodeWritersMqttTopicConfigEntity {
    const message = createBaseDataNodeWritersMqttTopicConfigEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.topic = object.topic ?? undefined;
    message.body = object.body ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseWriteDatumDto(): WriteDatumDto {
  return {
    uniqueId: "",
    valueInt64: undefined,
    valueFloat64: undefined,
    valueString: undefined,
    valueBoolean: undefined,
  };
}

export const WriteDatumDto = {
  encode(
    message: WriteDatumDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uniqueId !== "") {
      writer.uint32(10).string(message.uniqueId);
    }
    if (message.valueInt64 !== undefined) {
      writer.uint32(16).int64(message.valueInt64);
    }
    if (message.valueFloat64 !== undefined) {
      writer.uint32(25).double(message.valueFloat64);
    }
    if (message.valueString !== undefined) {
      writer.uint32(34).string(message.valueString);
    }
    if (message.valueBoolean !== undefined) {
      writer.uint32(40).bool(message.valueBoolean);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteDatumDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteDatumDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniqueId = reader.string();
          break;
        case 2:
          message.valueInt64 = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.valueFloat64 = reader.double();
          break;
        case 4:
          message.valueString = reader.string();
          break;
        case 5:
          message.valueBoolean = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WriteDatumDto {
    return {
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      valueInt64: isSet(object.valueInt64)
        ? Number(object.valueInt64)
        : undefined,
      valueFloat64: isSet(object.valueFloat64)
        ? Number(object.valueFloat64)
        : undefined,
      valueString: isSet(object.valueString)
        ? String(object.valueString)
        : undefined,
      valueBoolean: isSet(object.valueBoolean)
        ? Boolean(object.valueBoolean)
        : undefined,
    };
  },

  toJSON(message: WriteDatumDto): unknown {
    const obj: any = {};
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.valueInt64 !== undefined &&
      (obj.valueInt64 = Math.round(message.valueInt64));
    message.valueFloat64 !== undefined &&
      (obj.valueFloat64 = message.valueFloat64);
    message.valueString !== undefined &&
      (obj.valueString = message.valueString);
    message.valueBoolean !== undefined &&
      (obj.valueBoolean = message.valueBoolean);
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteDatumDto>, I>>(
    base?: I
  ): WriteDatumDto {
    return WriteDatumDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WriteDatumDto>, I>>(
    object: I
  ): WriteDatumDto {
    const message = createBaseWriteDatumDto();
    message.uniqueId = object.uniqueId ?? "";
    message.valueInt64 = object.valueInt64 ?? undefined;
    message.valueFloat64 = object.valueFloat64 ?? undefined;
    message.valueString = object.valueString ?? undefined;
    message.valueBoolean = object.valueBoolean ?? undefined;
    return message;
  },
};

function createBaseDataNodeModeCreateReply(): DataNodeModeCreateReply {
  return { data: undefined, error: undefined };
}

export const DataNodeModeCreateReply = {
  encode(
    message: DataNodeModeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DataNodeModeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DataNodeModeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeModeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DataNodeModeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeModeCreateReply {
    return {
      data: isSet(object.data)
        ? DataNodeModeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DataNodeModeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? DataNodeModeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeModeCreateReply>, I>>(
    base?: I
  ): DataNodeModeCreateReply {
    return DataNodeModeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeModeCreateReply>, I>>(
    object: I
  ): DataNodeModeCreateReply {
    const message = createBaseDataNodeModeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DataNodeModeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDataNodeModeReply(): DataNodeModeReply {
  return { data: undefined, error: undefined };
}

export const DataNodeModeReply = {
  encode(
    message: DataNodeModeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DataNodeModeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataNodeModeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeModeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DataNodeModeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeModeReply {
    return {
      data: isSet(object.data)
        ? DataNodeModeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DataNodeModeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? DataNodeModeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeModeReply>, I>>(
    base?: I
  ): DataNodeModeReply {
    return DataNodeModeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeModeReply>, I>>(
    object: I
  ): DataNodeModeReply {
    const message = createBaseDataNodeModeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DataNodeModeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDataNodeModeQueryReply(): DataNodeModeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const DataNodeModeQueryReply = {
  encode(
    message: DataNodeModeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      DataNodeModeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DataNodeModeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeModeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            DataNodeModeEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeModeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => DataNodeModeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DataNodeModeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? DataNodeModeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeModeQueryReply>, I>>(
    base?: I
  ): DataNodeModeQueryReply {
    return DataNodeModeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeModeQueryReply>, I>>(
    object: I
  ): DataNodeModeQueryReply {
    const message = createBaseDataNodeModeQueryReply();
    message.items =
      object.items?.map((e) => DataNodeModeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDataNodeModeEntity(): DataNodeModeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const DataNodeModeEntity = {
  encode(
    message: DataNodeModeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(72).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(80).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(88).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(98).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(106).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataNodeModeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeModeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.createdFormatted = reader.string();
          break;
        case 13:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeModeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: DataNodeModeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeModeEntity>, I>>(
    base?: I
  ): DataNodeModeEntity {
    return DataNodeModeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeModeEntity>, I>>(
    object: I
  ): DataNodeModeEntity {
    const message = createBaseDataNodeModeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseDataNodeTypeCreateReply(): DataNodeTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const DataNodeTypeCreateReply = {
  encode(
    message: DataNodeTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DataNodeTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DataNodeTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DataNodeTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeTypeCreateReply {
    return {
      data: isSet(object.data)
        ? DataNodeTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DataNodeTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? DataNodeTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeTypeCreateReply>, I>>(
    base?: I
  ): DataNodeTypeCreateReply {
    return DataNodeTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeTypeCreateReply>, I>>(
    object: I
  ): DataNodeTypeCreateReply {
    const message = createBaseDataNodeTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DataNodeTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDataNodeTypeReply(): DataNodeTypeReply {
  return { data: undefined, error: undefined };
}

export const DataNodeTypeReply = {
  encode(
    message: DataNodeTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DataNodeTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataNodeTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DataNodeTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeTypeReply {
    return {
      data: isSet(object.data)
        ? DataNodeTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DataNodeTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? DataNodeTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeTypeReply>, I>>(
    base?: I
  ): DataNodeTypeReply {
    return DataNodeTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeTypeReply>, I>>(
    object: I
  ): DataNodeTypeReply {
    const message = createBaseDataNodeTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DataNodeTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDataNodeTypeQueryReply(): DataNodeTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const DataNodeTypeQueryReply = {
  encode(
    message: DataNodeTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      DataNodeTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DataNodeTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            DataNodeTypeEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => DataNodeTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DataNodeTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? DataNodeTypeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeTypeQueryReply>, I>>(
    base?: I
  ): DataNodeTypeQueryReply {
    return DataNodeTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeTypeQueryReply>, I>>(
    object: I
  ): DataNodeTypeQueryReply {
    const message = createBaseDataNodeTypeQueryReply();
    message.items =
      object.items?.map((e) => DataNodeTypeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDataNodeTypeEntity(): DataNodeTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const DataNodeTypeEntity = {
  encode(
    message: DataNodeTypeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(72).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(80).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(88).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(98).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(106).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataNodeTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataNodeTypeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.createdFormatted = reader.string();
          break;
        case 13:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataNodeTypeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: DataNodeTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataNodeTypeEntity>, I>>(
    base?: I
  ): DataNodeTypeEntity {
    return DataNodeTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataNodeTypeEntity>, I>>(
    object: I
  ): DataNodeTypeEntity {
    const message = createBaseDataNodeTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseDeviceCreateReply(): DeviceCreateReply {
  return { data: undefined, error: undefined };
}

export const DeviceCreateReply = {
  encode(
    message: DeviceCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DeviceEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DeviceEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceCreateReply {
    return {
      data: isSet(object.data) ? DeviceEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DeviceCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? DeviceEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceCreateReply>, I>>(
    base?: I
  ): DeviceCreateReply {
    return DeviceCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceCreateReply>, I>>(
    object: I
  ): DeviceCreateReply {
    const message = createBaseDeviceCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DeviceEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDeviceReply(): DeviceReply {
  return { data: undefined, error: undefined };
}

export const DeviceReply = {
  encode(
    message: DeviceReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DeviceEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DeviceEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceReply {
    return {
      data: isSet(object.data) ? DeviceEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DeviceReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? DeviceEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceReply>, I>>(base?: I): DeviceReply {
    return DeviceReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceReply>, I>>(
    object: I
  ): DeviceReply {
    const message = createBaseDeviceReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DeviceEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDeviceQueryReply(): DeviceQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const DeviceQueryReply = {
  encode(
    message: DeviceQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      DeviceEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(DeviceEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => DeviceEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DeviceQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? DeviceEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceQueryReply>, I>>(
    base?: I
  ): DeviceQueryReply {
    return DeviceQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceQueryReply>, I>>(
    object: I
  ): DeviceQueryReply {
    const message = createBaseDeviceQueryReply();
    message.items = object.items?.map((e) => DeviceEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDeviceEntity(): DeviceEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    model: undefined,
    ip: undefined,
    wifiUser: undefined,
    wifiPassword: undefined,
    securityType: undefined,
    typeId: undefined,
    type: undefined,
    deviceModbusConfig: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
    children: [],
  };
}

export const DeviceEntity = {
  encode(
    message: DeviceEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      DeviceEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.model !== undefined) {
      writer.uint32(82).string(message.model);
    }
    if (message.ip !== undefined) {
      writer.uint32(90).string(message.ip);
    }
    if (message.wifiUser !== undefined) {
      writer.uint32(98).string(message.wifiUser);
    }
    if (message.wifiPassword !== undefined) {
      writer.uint32(106).string(message.wifiPassword);
    }
    if (message.securityType !== undefined) {
      writer.uint32(114).string(message.securityType);
    }
    if (message.typeId !== undefined) {
      writer.uint32(130).string(message.typeId);
    }
    if (message.type !== undefined) {
      DeviceTypeEntity.encode(message.type, writer.uint32(138).fork()).ldelim();
    }
    if (message.deviceModbusConfig !== undefined) {
      DeviceDeviceModbusConfigEntity.encode(
        message.deviceModbusConfig,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(152).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(160).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(168).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(178).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(186).string(message.updatedFormatted);
    }
    for (const v of message.children) {
      DeviceEntity.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            DeviceEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.model = reader.string();
          break;
        case 11:
          message.ip = reader.string();
          break;
        case 12:
          message.wifiUser = reader.string();
          break;
        case 13:
          message.wifiPassword = reader.string();
          break;
        case 14:
          message.securityType = reader.string();
          break;
        case 16:
          message.typeId = reader.string();
          break;
        case 17:
          message.type = DeviceTypeEntity.decode(reader, reader.uint32());
          break;
        case 18:
          message.deviceModbusConfig = DeviceDeviceModbusConfigEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.createdFormatted = reader.string();
          break;
        case 23:
          message.updatedFormatted = reader.string();
          break;
        case 24:
          message.children.push(DeviceEntity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) => DeviceEntityPolyglot.fromJSON(e))
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      model: isSet(object.model) ? String(object.model) : undefined,
      ip: isSet(object.ip) ? String(object.ip) : undefined,
      wifiUser: isSet(object.wifiUser) ? String(object.wifiUser) : undefined,
      wifiPassword: isSet(object.wifiPassword)
        ? String(object.wifiPassword)
        : undefined,
      securityType: isSet(object.securityType)
        ? String(object.securityType)
        : undefined,
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      type: isSet(object.type)
        ? DeviceTypeEntity.fromJSON(object.type)
        : undefined,
      deviceModbusConfig: isSet(object.deviceModbusConfig)
        ? DeviceDeviceModbusConfigEntity.fromJSON(object.deviceModbusConfig)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => DeviceEntity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DeviceEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? DeviceEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.model !== undefined && (obj.model = message.model);
    message.ip !== undefined && (obj.ip = message.ip);
    message.wifiUser !== undefined && (obj.wifiUser = message.wifiUser);
    message.wifiPassword !== undefined &&
      (obj.wifiPassword = message.wifiPassword);
    message.securityType !== undefined &&
      (obj.securityType = message.securityType);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.type !== undefined &&
      (obj.type = message.type
        ? DeviceTypeEntity.toJSON(message.type)
        : undefined);
    message.deviceModbusConfig !== undefined &&
      (obj.deviceModbusConfig = message.deviceModbusConfig
        ? DeviceDeviceModbusConfigEntity.toJSON(message.deviceModbusConfig)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    if (message.children) {
      obj.children = message.children.map((e) =>
        e ? DeviceEntity.toJSON(e) : undefined
      );
    } else {
      obj.children = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceEntity>, I>>(
    base?: I
  ): DeviceEntity {
    return DeviceEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceEntity>, I>>(
    object: I
  ): DeviceEntity {
    const message = createBaseDeviceEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) => DeviceEntityPolyglot.fromPartial(e)) ||
      [];
    message.name = object.name ?? undefined;
    message.model = object.model ?? undefined;
    message.ip = object.ip ?? undefined;
    message.wifiUser = object.wifiUser ?? undefined;
    message.wifiPassword = object.wifiPassword ?? undefined;
    message.securityType = object.securityType ?? undefined;
    message.typeId = object.typeId ?? undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? DeviceTypeEntity.fromPartial(object.type)
        : undefined;
    message.deviceModbusConfig =
      object.deviceModbusConfig !== undefined &&
      object.deviceModbusConfig !== null
        ? DeviceDeviceModbusConfigEntity.fromPartial(object.deviceModbusConfig)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    message.children =
      object.children?.map((e) => DeviceEntity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeviceEntityPolyglot(): DeviceEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const DeviceEntityPolyglot = {
  encode(
    message: DeviceEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeviceEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: DeviceEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceEntityPolyglot>, I>>(
    base?: I
  ): DeviceEntityPolyglot {
    return DeviceEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceEntityPolyglot>, I>>(
    object: I
  ): DeviceEntityPolyglot {
    const message = createBaseDeviceEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDeviceDeviceModbusConfigEntity(): DeviceDeviceModbusConfigEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    modeId: undefined,
    mode: undefined,
    baudRate: undefined,
    dataBits: undefined,
    parity: undefined,
    stopBit: undefined,
    timeout: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const DeviceDeviceModbusConfigEntity = {
  encode(
    message: DeviceDeviceModbusConfigEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.modeId !== undefined) {
      writer.uint32(74).string(message.modeId);
    }
    if (message.mode !== undefined) {
      ModbusTransmissionModeEntity.encode(
        message.mode,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.baudRate !== undefined) {
      writer.uint32(88).int64(message.baudRate);
    }
    if (message.dataBits !== undefined) {
      writer.uint32(96).int64(message.dataBits);
    }
    if (message.parity !== undefined) {
      writer.uint32(104).int64(message.parity);
    }
    if (message.stopBit !== undefined) {
      writer.uint32(112).int64(message.stopBit);
    }
    if (message.timeout !== undefined) {
      writer.uint32(120).int64(message.timeout);
    }
    if (message.rank !== 0) {
      writer.uint32(128).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(136).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(144).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(154).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(162).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeviceDeviceModbusConfigEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceDeviceModbusConfigEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.modeId = reader.string();
          break;
        case 10:
          message.mode = ModbusTransmissionModeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.baudRate = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.dataBits = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.parity = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.stopBit = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.timeout = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.createdFormatted = reader.string();
          break;
        case 20:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceDeviceModbusConfigEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      modeId: isSet(object.modeId) ? String(object.modeId) : undefined,
      mode: isSet(object.mode)
        ? ModbusTransmissionModeEntity.fromJSON(object.mode)
        : undefined,
      baudRate: isSet(object.baudRate) ? Number(object.baudRate) : undefined,
      dataBits: isSet(object.dataBits) ? Number(object.dataBits) : undefined,
      parity: isSet(object.parity) ? Number(object.parity) : undefined,
      stopBit: isSet(object.stopBit) ? Number(object.stopBit) : undefined,
      timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: DeviceDeviceModbusConfigEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.modeId !== undefined && (obj.modeId = message.modeId);
    message.mode !== undefined &&
      (obj.mode = message.mode
        ? ModbusTransmissionModeEntity.toJSON(message.mode)
        : undefined);
    message.baudRate !== undefined &&
      (obj.baudRate = Math.round(message.baudRate));
    message.dataBits !== undefined &&
      (obj.dataBits = Math.round(message.dataBits));
    message.parity !== undefined && (obj.parity = Math.round(message.parity));
    message.stopBit !== undefined &&
      (obj.stopBit = Math.round(message.stopBit));
    message.timeout !== undefined &&
      (obj.timeout = Math.round(message.timeout));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceDeviceModbusConfigEntity>, I>>(
    base?: I
  ): DeviceDeviceModbusConfigEntity {
    return DeviceDeviceModbusConfigEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceDeviceModbusConfigEntity>, I>>(
    object: I
  ): DeviceDeviceModbusConfigEntity {
    const message = createBaseDeviceDeviceModbusConfigEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.modeId = object.modeId ?? undefined;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? ModbusTransmissionModeEntity.fromPartial(object.mode)
        : undefined;
    message.baudRate = object.baudRate ?? undefined;
    message.dataBits = object.dataBits ?? undefined;
    message.parity = object.parity ?? undefined;
    message.stopBit = object.stopBit ?? undefined;
    message.timeout = object.timeout ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseDeviceTypeCreateReply(): DeviceTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const DeviceTypeCreateReply = {
  encode(
    message: DeviceTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DeviceTypeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeviceTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DeviceTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceTypeCreateReply {
    return {
      data: isSet(object.data)
        ? DeviceTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DeviceTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? DeviceTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceTypeCreateReply>, I>>(
    base?: I
  ): DeviceTypeCreateReply {
    return DeviceTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceTypeCreateReply>, I>>(
    object: I
  ): DeviceTypeCreateReply {
    const message = createBaseDeviceTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DeviceTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDeviceTypeReply(): DeviceTypeReply {
  return { data: undefined, error: undefined };
}

export const DeviceTypeReply = {
  encode(
    message: DeviceTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      DeviceTypeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = DeviceTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceTypeReply {
    return {
      data: isSet(object.data)
        ? DeviceTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DeviceTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? DeviceTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceTypeReply>, I>>(
    base?: I
  ): DeviceTypeReply {
    return DeviceTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceTypeReply>, I>>(
    object: I
  ): DeviceTypeReply {
    const message = createBaseDeviceTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? DeviceTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDeviceTypeQueryReply(): DeviceTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const DeviceTypeQueryReply = {
  encode(
    message: DeviceTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      DeviceTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeviceTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(DeviceTypeEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => DeviceTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: DeviceTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? DeviceTypeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceTypeQueryReply>, I>>(
    base?: I
  ): DeviceTypeQueryReply {
    return DeviceTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceTypeQueryReply>, I>>(
    object: I
  ): DeviceTypeQueryReply {
    const message = createBaseDeviceTypeQueryReply();
    message.items =
      object.items?.map((e) => DeviceTypeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseDeviceTypeEntity(): DeviceTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const DeviceTypeEntity = {
  encode(
    message: DeviceTypeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      DeviceTypeEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceTypeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            DeviceTypeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceTypeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            DeviceTypeEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: DeviceTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? DeviceTypeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceTypeEntity>, I>>(
    base?: I
  ): DeviceTypeEntity {
    return DeviceTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceTypeEntity>, I>>(
    object: I
  ): DeviceTypeEntity {
    const message = createBaseDeviceTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        DeviceTypeEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseDeviceTypeEntityPolyglot(): DeviceTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const DeviceTypeEntityPolyglot = {
  encode(
    message: DeviceTypeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeviceTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceTypeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: DeviceTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceTypeEntityPolyglot>, I>>(
    base?: I
  ): DeviceTypeEntityPolyglot {
    return DeviceTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeviceTypeEntityPolyglot>, I>>(
    object: I
  ): DeviceTypeEntityPolyglot {
    const message = createBaseDeviceTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGpioCreateReply(): GpioCreateReply {
  return { data: undefined, error: undefined };
}

export const GpioCreateReply = {
  encode(
    message: GpioCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GpioEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GpioEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioCreateReply {
    return {
      data: isSet(object.data) ? GpioEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GpioCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? GpioEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioCreateReply>, I>>(
    base?: I
  ): GpioCreateReply {
    return GpioCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioCreateReply>, I>>(
    object: I
  ): GpioCreateReply {
    const message = createBaseGpioCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GpioEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGpioReply(): GpioReply {
  return { data: undefined, error: undefined };
}

export const GpioReply = {
  encode(
    message: GpioReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GpioEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GpioEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioReply {
    return {
      data: isSet(object.data) ? GpioEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GpioReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? GpioEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioReply>, I>>(base?: I): GpioReply {
    return GpioReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioReply>, I>>(
    object: I
  ): GpioReply {
    const message = createBaseGpioReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GpioEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGpioQueryReply(): GpioQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const GpioQueryReply = {
  encode(
    message: GpioQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      GpioEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(GpioEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => GpioEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GpioQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? GpioEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioQueryReply>, I>>(
    base?: I
  ): GpioQueryReply {
    return GpioQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioQueryReply>, I>>(
    object: I
  ): GpioQueryReply {
    const message = createBaseGpioQueryReply();
    message.items = object.items?.map((e) => GpioEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGpioEntity(): GpioEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    index: undefined,
    analogFunction: undefined,
    rtcGpio: undefined,
    comments: undefined,
    modeId: undefined,
    mode: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const GpioEntity = {
  encode(
    message: GpioEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.index !== undefined) {
      writer.uint32(72).int64(message.index);
    }
    if (message.analogFunction !== undefined) {
      writer.uint32(82).string(message.analogFunction);
    }
    if (message.rtcGpio !== undefined) {
      writer.uint32(90).string(message.rtcGpio);
    }
    if (message.comments !== undefined) {
      writer.uint32(98).string(message.comments);
    }
    if (message.modeId !== undefined) {
      writer.uint32(114).string(message.modeId);
    }
    if (message.mode !== undefined) {
      GpioModeEntity.encode(message.mode, writer.uint32(122).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(128).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(136).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(144).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(154).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(162).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.index = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.analogFunction = reader.string();
          break;
        case 11:
          message.rtcGpio = reader.string();
          break;
        case 12:
          message.comments = reader.string();
          break;
        case 14:
          message.modeId = reader.string();
          break;
        case 15:
          message.mode = GpioModeEntity.decode(reader, reader.uint32());
          break;
        case 16:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.createdFormatted = reader.string();
          break;
        case 20:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      index: isSet(object.index) ? Number(object.index) : undefined,
      analogFunction: isSet(object.analogFunction)
        ? String(object.analogFunction)
        : undefined,
      rtcGpio: isSet(object.rtcGpio) ? String(object.rtcGpio) : undefined,
      comments: isSet(object.comments) ? String(object.comments) : undefined,
      modeId: isSet(object.modeId) ? String(object.modeId) : undefined,
      mode: isSet(object.mode)
        ? GpioModeEntity.fromJSON(object.mode)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: GpioEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.analogFunction !== undefined &&
      (obj.analogFunction = message.analogFunction);
    message.rtcGpio !== undefined && (obj.rtcGpio = message.rtcGpio);
    message.comments !== undefined && (obj.comments = message.comments);
    message.modeId !== undefined && (obj.modeId = message.modeId);
    message.mode !== undefined &&
      (obj.mode = message.mode
        ? GpioModeEntity.toJSON(message.mode)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioEntity>, I>>(base?: I): GpioEntity {
    return GpioEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioEntity>, I>>(
    object: I
  ): GpioEntity {
    const message = createBaseGpioEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.index = object.index ?? undefined;
    message.analogFunction = object.analogFunction ?? undefined;
    message.rtcGpio = object.rtcGpio ?? undefined;
    message.comments = object.comments ?? undefined;
    message.modeId = object.modeId ?? undefined;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? GpioModeEntity.fromPartial(object.mode)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseGpioModeCreateReply(): GpioModeCreateReply {
  return { data: undefined, error: undefined };
}

export const GpioModeCreateReply = {
  encode(
    message: GpioModeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GpioModeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioModeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioModeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GpioModeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioModeCreateReply {
    return {
      data: isSet(object.data)
        ? GpioModeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GpioModeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GpioModeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioModeCreateReply>, I>>(
    base?: I
  ): GpioModeCreateReply {
    return GpioModeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioModeCreateReply>, I>>(
    object: I
  ): GpioModeCreateReply {
    const message = createBaseGpioModeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GpioModeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGpioModeReply(): GpioModeReply {
  return { data: undefined, error: undefined };
}

export const GpioModeReply = {
  encode(
    message: GpioModeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GpioModeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioModeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioModeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GpioModeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioModeReply {
    return {
      data: isSet(object.data)
        ? GpioModeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GpioModeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GpioModeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioModeReply>, I>>(
    base?: I
  ): GpioModeReply {
    return GpioModeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioModeReply>, I>>(
    object: I
  ): GpioModeReply {
    const message = createBaseGpioModeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GpioModeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGpioModeQueryReply(): GpioModeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const GpioModeQueryReply = {
  encode(
    message: GpioModeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      GpioModeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioModeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioModeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(GpioModeEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioModeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => GpioModeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GpioModeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? GpioModeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioModeQueryReply>, I>>(
    base?: I
  ): GpioModeQueryReply {
    return GpioModeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioModeQueryReply>, I>>(
    object: I
  ): GpioModeQueryReply {
    const message = createBaseGpioModeQueryReply();
    message.items =
      object.items?.map((e) => GpioModeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGpioModeEntity(): GpioModeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    key: undefined,
    index: undefined,
    description: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const GpioModeEntity = {
  encode(
    message: GpioModeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      GpioModeEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.key !== undefined) {
      writer.uint32(74).string(message.key);
    }
    if (message.index !== undefined) {
      writer.uint32(80).int64(message.index);
    }
    if (message.description !== undefined) {
      writer.uint32(90).string(message.description);
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioModeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioModeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            GpioModeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.key = reader.string();
          break;
        case 10:
          message.index = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.description = reader.string();
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioModeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            GpioModeEntityPolyglot.fromJSON(e)
          )
        : [],
      key: isSet(object.key) ? String(object.key) : undefined,
      index: isSet(object.index) ? Number(object.index) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: GpioModeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? GpioModeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.key !== undefined && (obj.key = message.key);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.description !== undefined &&
      (obj.description = message.description);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioModeEntity>, I>>(
    base?: I
  ): GpioModeEntity {
    return GpioModeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioModeEntity>, I>>(
    object: I
  ): GpioModeEntity {
    const message = createBaseGpioModeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) => GpioModeEntityPolyglot.fromPartial(e)) ||
      [];
    message.key = object.key ?? undefined;
    message.index = object.index ?? undefined;
    message.description = object.description ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseGpioModeEntityPolyglot(): GpioModeEntityPolyglot {
  return { linkerId: "", languageId: "", description: "" };
}

export const GpioModeEntityPolyglot = {
  encode(
    message: GpioModeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GpioModeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioModeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioModeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: GpioModeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioModeEntityPolyglot>, I>>(
    base?: I
  ): GpioModeEntityPolyglot {
    return GpioModeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioModeEntityPolyglot>, I>>(
    object: I
  ): GpioModeEntityPolyglot {
    const message = createBaseGpioModeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseGpioStateCreateReply(): GpioStateCreateReply {
  return { data: undefined, error: undefined };
}

export const GpioStateCreateReply = {
  encode(
    message: GpioStateCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GpioStateEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GpioStateCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioStateCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GpioStateEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioStateCreateReply {
    return {
      data: isSet(object.data)
        ? GpioStateEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GpioStateCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GpioStateEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioStateCreateReply>, I>>(
    base?: I
  ): GpioStateCreateReply {
    return GpioStateCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioStateCreateReply>, I>>(
    object: I
  ): GpioStateCreateReply {
    const message = createBaseGpioStateCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GpioStateEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGpioStateReply(): GpioStateReply {
  return { data: undefined, error: undefined };
}

export const GpioStateReply = {
  encode(
    message: GpioStateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GpioStateEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioStateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioStateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GpioStateEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioStateReply {
    return {
      data: isSet(object.data)
        ? GpioStateEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GpioStateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GpioStateEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioStateReply>, I>>(
    base?: I
  ): GpioStateReply {
    return GpioStateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioStateReply>, I>>(
    object: I
  ): GpioStateReply {
    const message = createBaseGpioStateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GpioStateEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGpioStateQueryReply(): GpioStateQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const GpioStateQueryReply = {
  encode(
    message: GpioStateQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      GpioStateEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioStateQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioStateQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(GpioStateEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioStateQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => GpioStateEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GpioStateQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? GpioStateEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioStateQueryReply>, I>>(
    base?: I
  ): GpioStateQueryReply {
    return GpioStateQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioStateQueryReply>, I>>(
    object: I
  ): GpioStateQueryReply {
    const message = createBaseGpioStateQueryReply();
    message.items =
      object.items?.map((e) => GpioStateEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGpioStateEntity(): GpioStateEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    gpioModeId: undefined,
    gpioMode: undefined,
    gpioIndexSnapshot: undefined,
    gpioModeSnapshot: undefined,
    gpioValueSnapshot: undefined,
    gpioId: undefined,
    gpio: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const GpioStateEntity = {
  encode(
    message: GpioStateEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.gpioModeId !== undefined) {
      writer.uint32(74).string(message.gpioModeId);
    }
    if (message.gpioMode !== undefined) {
      GpioModeEntity.encode(
        message.gpioMode,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.gpioIndexSnapshot !== undefined) {
      writer.uint32(88).int64(message.gpioIndexSnapshot);
    }
    if (message.gpioModeSnapshot !== undefined) {
      writer.uint32(96).int64(message.gpioModeSnapshot);
    }
    if (message.gpioValueSnapshot !== undefined) {
      writer.uint32(104).int64(message.gpioValueSnapshot);
    }
    if (message.gpioId !== undefined) {
      writer.uint32(122).string(message.gpioId);
    }
    if (message.gpio !== undefined) {
      GpioEntity.encode(message.gpio, writer.uint32(130).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(136).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(144).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(152).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(162).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(170).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpioStateEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpioStateEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.gpioModeId = reader.string();
          break;
        case 10:
          message.gpioMode = GpioModeEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.gpioIndexSnapshot = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.gpioModeSnapshot = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.gpioValueSnapshot = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.gpioId = reader.string();
          break;
        case 16:
          message.gpio = GpioEntity.decode(reader, reader.uint32());
          break;
        case 17:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.createdFormatted = reader.string();
          break;
        case 21:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpioStateEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      gpioModeId: isSet(object.gpioModeId)
        ? String(object.gpioModeId)
        : undefined,
      gpioMode: isSet(object.gpioMode)
        ? GpioModeEntity.fromJSON(object.gpioMode)
        : undefined,
      gpioIndexSnapshot: isSet(object.gpioIndexSnapshot)
        ? Number(object.gpioIndexSnapshot)
        : undefined,
      gpioModeSnapshot: isSet(object.gpioModeSnapshot)
        ? Number(object.gpioModeSnapshot)
        : undefined,
      gpioValueSnapshot: isSet(object.gpioValueSnapshot)
        ? Number(object.gpioValueSnapshot)
        : undefined,
      gpioId: isSet(object.gpioId) ? String(object.gpioId) : undefined,
      gpio: isSet(object.gpio) ? GpioEntity.fromJSON(object.gpio) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: GpioStateEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.gpioModeId !== undefined && (obj.gpioModeId = message.gpioModeId);
    message.gpioMode !== undefined &&
      (obj.gpioMode = message.gpioMode
        ? GpioModeEntity.toJSON(message.gpioMode)
        : undefined);
    message.gpioIndexSnapshot !== undefined &&
      (obj.gpioIndexSnapshot = Math.round(message.gpioIndexSnapshot));
    message.gpioModeSnapshot !== undefined &&
      (obj.gpioModeSnapshot = Math.round(message.gpioModeSnapshot));
    message.gpioValueSnapshot !== undefined &&
      (obj.gpioValueSnapshot = Math.round(message.gpioValueSnapshot));
    message.gpioId !== undefined && (obj.gpioId = message.gpioId);
    message.gpio !== undefined &&
      (obj.gpio = message.gpio ? GpioEntity.toJSON(message.gpio) : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<GpioStateEntity>, I>>(
    base?: I
  ): GpioStateEntity {
    return GpioStateEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GpioStateEntity>, I>>(
    object: I
  ): GpioStateEntity {
    const message = createBaseGpioStateEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.gpioModeId = object.gpioModeId ?? undefined;
    message.gpioMode =
      object.gpioMode !== undefined && object.gpioMode !== null
        ? GpioModeEntity.fromPartial(object.gpioMode)
        : undefined;
    message.gpioIndexSnapshot = object.gpioIndexSnapshot ?? undefined;
    message.gpioModeSnapshot = object.gpioModeSnapshot ?? undefined;
    message.gpioValueSnapshot = object.gpioValueSnapshot ?? undefined;
    message.gpioId = object.gpioId ?? undefined;
    message.gpio =
      object.gpio !== undefined && object.gpio !== null
        ? GpioEntity.fromPartial(object.gpio)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseIoWriterDto(): IoWriterDto {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    content: undefined,
    type: undefined,
    host: undefined,
    path: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const IoWriterDto = {
  encode(
    message: IoWriterDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.content !== undefined) {
      writer.uint32(66).string(message.content);
    }
    if (message.type !== undefined) {
      writer.uint32(74).string(message.type);
    }
    if (message.host !== undefined) {
      writer.uint32(82).string(message.host);
    }
    if (message.path !== undefined) {
      writer.uint32(90).string(message.path);
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IoWriterDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIoWriterDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.content = reader.string();
          break;
        case 9:
          message.type = reader.string();
          break;
        case 10:
          message.host = reader.string();
          break;
        case 11:
          message.path = reader.string();
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IoWriterDto {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      host: isSet(object.host) ? String(object.host) : undefined,
      path: isSet(object.path) ? String(object.path) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: IoWriterDto): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.content !== undefined && (obj.content = message.content);
    message.type !== undefined && (obj.type = message.type);
    message.host !== undefined && (obj.host = message.host);
    message.path !== undefined && (obj.path = message.path);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<IoWriterDto>, I>>(base?: I): IoWriterDto {
    return IoWriterDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IoWriterDto>, I>>(
    object: I
  ): IoWriterDto {
    const message = createBaseIoWriterDto();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.content = object.content ?? undefined;
    message.type = object.type ?? undefined;
    message.host = object.host ?? undefined;
    message.path = object.path ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseMemoryStatCreateReply(): MemoryStatCreateReply {
  return { data: undefined, error: undefined };
}

export const MemoryStatCreateReply = {
  encode(
    message: MemoryStatCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      MemoryStatEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MemoryStatCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoryStatCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = MemoryStatEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemoryStatCreateReply {
    return {
      data: isSet(object.data)
        ? MemoryStatEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: MemoryStatCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? MemoryStatEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemoryStatCreateReply>, I>>(
    base?: I
  ): MemoryStatCreateReply {
    return MemoryStatCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemoryStatCreateReply>, I>>(
    object: I
  ): MemoryStatCreateReply {
    const message = createBaseMemoryStatCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? MemoryStatEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseMemoryStatReply(): MemoryStatReply {
  return { data: undefined, error: undefined };
}

export const MemoryStatReply = {
  encode(
    message: MemoryStatReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      MemoryStatEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemoryStatReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoryStatReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = MemoryStatEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemoryStatReply {
    return {
      data: isSet(object.data)
        ? MemoryStatEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: MemoryStatReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? MemoryStatEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemoryStatReply>, I>>(
    base?: I
  ): MemoryStatReply {
    return MemoryStatReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemoryStatReply>, I>>(
    object: I
  ): MemoryStatReply {
    const message = createBaseMemoryStatReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? MemoryStatEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseMemoryStatQueryReply(): MemoryStatQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const MemoryStatQueryReply = {
  encode(
    message: MemoryStatQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      MemoryStatEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MemoryStatQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoryStatQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(MemoryStatEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemoryStatQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => MemoryStatEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: MemoryStatQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? MemoryStatEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemoryStatQueryReply>, I>>(
    base?: I
  ): MemoryStatQueryReply {
    return MemoryStatQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemoryStatQueryReply>, I>>(
    object: I
  ): MemoryStatQueryReply {
    const message = createBaseMemoryStatQueryReply();
    message.items =
      object.items?.map((e) => MemoryStatEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseMemoryStatEntity(): MemoryStatEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    heapSize: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const MemoryStatEntity = {
  encode(
    message: MemoryStatEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.heapSize !== undefined) {
      writer.uint32(64).int64(message.heapSize);
    }
    if (message.rank !== 0) {
      writer.uint32(72).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(80).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(88).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(98).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(106).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemoryStatEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoryStatEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.heapSize = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.createdFormatted = reader.string();
          break;
        case 13:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemoryStatEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      heapSize: isSet(object.heapSize) ? Number(object.heapSize) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: MemoryStatEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.heapSize !== undefined &&
      (obj.heapSize = Math.round(message.heapSize));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemoryStatEntity>, I>>(
    base?: I
  ): MemoryStatEntity {
    return MemoryStatEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemoryStatEntity>, I>>(
    object: I
  ): MemoryStatEntity {
    const message = createBaseMemoryStatEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.heapSize = object.heapSize ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseModbusConnectionTypeCreateReply(): ModbusConnectionTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const ModbusConnectionTypeCreateReply = {
  encode(
    message: ModbusConnectionTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusConnectionTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusConnectionTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusConnectionTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusConnectionTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusConnectionTypeCreateReply {
    return {
      data: isSet(object.data)
        ? ModbusConnectionTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusConnectionTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusConnectionTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusConnectionTypeCreateReply>, I>>(
    base?: I
  ): ModbusConnectionTypeCreateReply {
    return ModbusConnectionTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusConnectionTypeCreateReply>, I>>(
    object: I
  ): ModbusConnectionTypeCreateReply {
    const message = createBaseModbusConnectionTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusConnectionTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusConnectionTypeReply(): ModbusConnectionTypeReply {
  return { data: undefined, error: undefined };
}

export const ModbusConnectionTypeReply = {
  encode(
    message: ModbusConnectionTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusConnectionTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusConnectionTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusConnectionTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusConnectionTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusConnectionTypeReply {
    return {
      data: isSet(object.data)
        ? ModbusConnectionTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusConnectionTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusConnectionTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusConnectionTypeReply>, I>>(
    base?: I
  ): ModbusConnectionTypeReply {
    return ModbusConnectionTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusConnectionTypeReply>, I>>(
    object: I
  ): ModbusConnectionTypeReply {
    const message = createBaseModbusConnectionTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusConnectionTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusConnectionTypeQueryReply(): ModbusConnectionTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ModbusConnectionTypeQueryReply = {
  encode(
    message: ModbusConnectionTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ModbusConnectionTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusConnectionTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusConnectionTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ModbusConnectionTypeEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusConnectionTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ModbusConnectionTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusConnectionTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ModbusConnectionTypeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusConnectionTypeQueryReply>, I>>(
    base?: I
  ): ModbusConnectionTypeQueryReply {
    return ModbusConnectionTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusConnectionTypeQueryReply>, I>>(
    object: I
  ): ModbusConnectionTypeQueryReply {
    const message = createBaseModbusConnectionTypeQueryReply();
    message.items =
      object.items?.map((e) => ModbusConnectionTypeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusConnectionTypeEntity(): ModbusConnectionTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ModbusConnectionTypeEntity = {
  encode(
    message: ModbusConnectionTypeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      ModbusConnectionTypeEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusConnectionTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusConnectionTypeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            ModbusConnectionTypeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusConnectionTypeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            ModbusConnectionTypeEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ModbusConnectionTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? ModbusConnectionTypeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusConnectionTypeEntity>, I>>(
    base?: I
  ): ModbusConnectionTypeEntity {
    return ModbusConnectionTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusConnectionTypeEntity>, I>>(
    object: I
  ): ModbusConnectionTypeEntity {
    const message = createBaseModbusConnectionTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ModbusConnectionTypeEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseModbusConnectionTypeEntityPolyglot(): ModbusConnectionTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ModbusConnectionTypeEntityPolyglot = {
  encode(
    message: ModbusConnectionTypeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusConnectionTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusConnectionTypeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusConnectionTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ModbusConnectionTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusConnectionTypeEntityPolyglot>, I>>(
    base?: I
  ): ModbusConnectionTypeEntityPolyglot {
    return ModbusConnectionTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ModbusConnectionTypeEntityPolyglot>, I>
  >(object: I): ModbusConnectionTypeEntityPolyglot {
    const message = createBaseModbusConnectionTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseModbusFunctionCodeCreateReply(): ModbusFunctionCodeCreateReply {
  return { data: undefined, error: undefined };
}

export const ModbusFunctionCodeCreateReply = {
  encode(
    message: ModbusFunctionCodeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusFunctionCodeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusFunctionCodeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusFunctionCodeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusFunctionCodeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusFunctionCodeCreateReply {
    return {
      data: isSet(object.data)
        ? ModbusFunctionCodeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusFunctionCodeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusFunctionCodeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusFunctionCodeCreateReply>, I>>(
    base?: I
  ): ModbusFunctionCodeCreateReply {
    return ModbusFunctionCodeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusFunctionCodeCreateReply>, I>>(
    object: I
  ): ModbusFunctionCodeCreateReply {
    const message = createBaseModbusFunctionCodeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusFunctionCodeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusFunctionCodeReply(): ModbusFunctionCodeReply {
  return { data: undefined, error: undefined };
}

export const ModbusFunctionCodeReply = {
  encode(
    message: ModbusFunctionCodeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusFunctionCodeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusFunctionCodeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusFunctionCodeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusFunctionCodeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusFunctionCodeReply {
    return {
      data: isSet(object.data)
        ? ModbusFunctionCodeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusFunctionCodeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusFunctionCodeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusFunctionCodeReply>, I>>(
    base?: I
  ): ModbusFunctionCodeReply {
    return ModbusFunctionCodeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusFunctionCodeReply>, I>>(
    object: I
  ): ModbusFunctionCodeReply {
    const message = createBaseModbusFunctionCodeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusFunctionCodeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusFunctionCodeQueryReply(): ModbusFunctionCodeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ModbusFunctionCodeQueryReply = {
  encode(
    message: ModbusFunctionCodeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ModbusFunctionCodeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusFunctionCodeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusFunctionCodeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ModbusFunctionCodeEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusFunctionCodeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ModbusFunctionCodeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusFunctionCodeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ModbusFunctionCodeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusFunctionCodeQueryReply>, I>>(
    base?: I
  ): ModbusFunctionCodeQueryReply {
    return ModbusFunctionCodeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusFunctionCodeQueryReply>, I>>(
    object: I
  ): ModbusFunctionCodeQueryReply {
    const message = createBaseModbusFunctionCodeQueryReply();
    message.items =
      object.items?.map((e) => ModbusFunctionCodeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusFunctionCodeEntity(): ModbusFunctionCodeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    code: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ModbusFunctionCodeEntity = {
  encode(
    message: ModbusFunctionCodeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      ModbusFunctionCodeEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.code !== undefined) {
      writer.uint32(80).int64(message.code);
    }
    if (message.rank !== 0) {
      writer.uint32(88).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(96).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(104).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(114).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(122).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusFunctionCodeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusFunctionCodeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            ModbusFunctionCodeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.code = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.createdFormatted = reader.string();
          break;
        case 15:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusFunctionCodeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            ModbusFunctionCodeEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      code: isSet(object.code) ? Number(object.code) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ModbusFunctionCodeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? ModbusFunctionCodeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusFunctionCodeEntity>, I>>(
    base?: I
  ): ModbusFunctionCodeEntity {
    return ModbusFunctionCodeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusFunctionCodeEntity>, I>>(
    object: I
  ): ModbusFunctionCodeEntity {
    const message = createBaseModbusFunctionCodeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ModbusFunctionCodeEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.code = object.code ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseModbusFunctionCodeEntityPolyglot(): ModbusFunctionCodeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ModbusFunctionCodeEntityPolyglot = {
  encode(
    message: ModbusFunctionCodeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusFunctionCodeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusFunctionCodeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusFunctionCodeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ModbusFunctionCodeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusFunctionCodeEntityPolyglot>, I>>(
    base?: I
  ): ModbusFunctionCodeEntityPolyglot {
    return ModbusFunctionCodeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ModbusFunctionCodeEntityPolyglot>, I>
  >(object: I): ModbusFunctionCodeEntityPolyglot {
    const message = createBaseModbusFunctionCodeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseModbusTaskCreateReply(): ModbusTaskCreateReply {
  return { data: undefined, error: undefined };
}

export const ModbusTaskCreateReply = {
  encode(
    message: ModbusTaskCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusTaskEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusTaskCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusTaskCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusTaskEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusTaskCreateReply {
    return {
      data: isSet(object.data)
        ? ModbusTaskEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusTaskCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusTaskEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusTaskCreateReply>, I>>(
    base?: I
  ): ModbusTaskCreateReply {
    return ModbusTaskCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusTaskCreateReply>, I>>(
    object: I
  ): ModbusTaskCreateReply {
    const message = createBaseModbusTaskCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusTaskEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusTaskReply(): ModbusTaskReply {
  return { data: undefined, error: undefined };
}

export const ModbusTaskReply = {
  encode(
    message: ModbusTaskReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusTaskEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModbusTaskReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusTaskReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusTaskEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusTaskReply {
    return {
      data: isSet(object.data)
        ? ModbusTaskEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusTaskReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusTaskEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusTaskReply>, I>>(
    base?: I
  ): ModbusTaskReply {
    return ModbusTaskReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusTaskReply>, I>>(
    object: I
  ): ModbusTaskReply {
    const message = createBaseModbusTaskReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusTaskEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusTaskQueryReply(): ModbusTaskQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ModbusTaskQueryReply = {
  encode(
    message: ModbusTaskQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ModbusTaskEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusTaskQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusTaskQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ModbusTaskEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusTaskQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ModbusTaskEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusTaskQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ModbusTaskEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusTaskQueryReply>, I>>(
    base?: I
  ): ModbusTaskQueryReply {
    return ModbusTaskQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusTaskQueryReply>, I>>(
    object: I
  ): ModbusTaskQueryReply {
    const message = createBaseModbusTaskQueryReply();
    message.items =
      object.items?.map((e) => ModbusTaskEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusTaskEntity(): ModbusTaskEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    modbusId: undefined,
    deviceId: undefined,
    device: undefined,
    connectionTypeId: undefined,
    connectionType: undefined,
    functionCodeId: undefined,
    functionCode: undefined,
    register: undefined,
    writeInterval: undefined,
    readInterval: undefined,
    range: undefined,
    length: undefined,
    variableTypeId: undefined,
    variableType: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ModbusTaskEntity = {
  encode(
    message: ModbusTaskEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.modbusId !== undefined) {
      writer.uint32(72).int64(message.modbusId);
    }
    if (message.deviceId !== undefined) {
      writer.uint32(90).string(message.deviceId);
    }
    if (message.device !== undefined) {
      DeviceEntity.encode(message.device, writer.uint32(98).fork()).ldelim();
    }
    if (message.connectionTypeId !== undefined) {
      writer.uint32(114).string(message.connectionTypeId);
    }
    if (message.connectionType !== undefined) {
      ModbusConnectionTypeEntity.encode(
        message.connectionType,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.functionCodeId !== undefined) {
      writer.uint32(138).string(message.functionCodeId);
    }
    if (message.functionCode !== undefined) {
      ModbusFunctionCodeEntity.encode(
        message.functionCode,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.register !== undefined) {
      writer.uint32(152).int64(message.register);
    }
    if (message.writeInterval !== undefined) {
      writer.uint32(160).int64(message.writeInterval);
    }
    if (message.readInterval !== undefined) {
      writer.uint32(168).int64(message.readInterval);
    }
    if (message.range !== undefined) {
      writer.uint32(176).int64(message.range);
    }
    if (message.length !== undefined) {
      writer.uint32(184).int64(message.length);
    }
    if (message.variableTypeId !== undefined) {
      writer.uint32(202).string(message.variableTypeId);
    }
    if (message.variableType !== undefined) {
      ModbusVariableTypeEntity.encode(
        message.variableType,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(216).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(224).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(232).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(242).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(250).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModbusTaskEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusTaskEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.modbusId = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.deviceId = reader.string();
          break;
        case 12:
          message.device = DeviceEntity.decode(reader, reader.uint32());
          break;
        case 14:
          message.connectionTypeId = reader.string();
          break;
        case 15:
          message.connectionType = ModbusConnectionTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.functionCodeId = reader.string();
          break;
        case 18:
          message.functionCode = ModbusFunctionCodeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.register = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.writeInterval = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.readInterval = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.range = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.length = longToNumber(reader.int64() as Long);
          break;
        case 25:
          message.variableTypeId = reader.string();
          break;
        case 26:
          message.variableType = ModbusVariableTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 27:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 28:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 29:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 30:
          message.createdFormatted = reader.string();
          break;
        case 31:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusTaskEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      modbusId: isSet(object.modbusId) ? Number(object.modbusId) : undefined,
      deviceId: isSet(object.deviceId) ? String(object.deviceId) : undefined,
      device: isSet(object.device)
        ? DeviceEntity.fromJSON(object.device)
        : undefined,
      connectionTypeId: isSet(object.connectionTypeId)
        ? String(object.connectionTypeId)
        : undefined,
      connectionType: isSet(object.connectionType)
        ? ModbusConnectionTypeEntity.fromJSON(object.connectionType)
        : undefined,
      functionCodeId: isSet(object.functionCodeId)
        ? String(object.functionCodeId)
        : undefined,
      functionCode: isSet(object.functionCode)
        ? ModbusFunctionCodeEntity.fromJSON(object.functionCode)
        : undefined,
      register: isSet(object.register) ? Number(object.register) : undefined,
      writeInterval: isSet(object.writeInterval)
        ? Number(object.writeInterval)
        : undefined,
      readInterval: isSet(object.readInterval)
        ? Number(object.readInterval)
        : undefined,
      range: isSet(object.range) ? Number(object.range) : undefined,
      length: isSet(object.length) ? Number(object.length) : undefined,
      variableTypeId: isSet(object.variableTypeId)
        ? String(object.variableTypeId)
        : undefined,
      variableType: isSet(object.variableType)
        ? ModbusVariableTypeEntity.fromJSON(object.variableType)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ModbusTaskEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.modbusId !== undefined &&
      (obj.modbusId = Math.round(message.modbusId));
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.device !== undefined &&
      (obj.device = message.device
        ? DeviceEntity.toJSON(message.device)
        : undefined);
    message.connectionTypeId !== undefined &&
      (obj.connectionTypeId = message.connectionTypeId);
    message.connectionType !== undefined &&
      (obj.connectionType = message.connectionType
        ? ModbusConnectionTypeEntity.toJSON(message.connectionType)
        : undefined);
    message.functionCodeId !== undefined &&
      (obj.functionCodeId = message.functionCodeId);
    message.functionCode !== undefined &&
      (obj.functionCode = message.functionCode
        ? ModbusFunctionCodeEntity.toJSON(message.functionCode)
        : undefined);
    message.register !== undefined &&
      (obj.register = Math.round(message.register));
    message.writeInterval !== undefined &&
      (obj.writeInterval = Math.round(message.writeInterval));
    message.readInterval !== undefined &&
      (obj.readInterval = Math.round(message.readInterval));
    message.range !== undefined && (obj.range = Math.round(message.range));
    message.length !== undefined && (obj.length = Math.round(message.length));
    message.variableTypeId !== undefined &&
      (obj.variableTypeId = message.variableTypeId);
    message.variableType !== undefined &&
      (obj.variableType = message.variableType
        ? ModbusVariableTypeEntity.toJSON(message.variableType)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusTaskEntity>, I>>(
    base?: I
  ): ModbusTaskEntity {
    return ModbusTaskEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusTaskEntity>, I>>(
    object: I
  ): ModbusTaskEntity {
    const message = createBaseModbusTaskEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.modbusId = object.modbusId ?? undefined;
    message.deviceId = object.deviceId ?? undefined;
    message.device =
      object.device !== undefined && object.device !== null
        ? DeviceEntity.fromPartial(object.device)
        : undefined;
    message.connectionTypeId = object.connectionTypeId ?? undefined;
    message.connectionType =
      object.connectionType !== undefined && object.connectionType !== null
        ? ModbusConnectionTypeEntity.fromPartial(object.connectionType)
        : undefined;
    message.functionCodeId = object.functionCodeId ?? undefined;
    message.functionCode =
      object.functionCode !== undefined && object.functionCode !== null
        ? ModbusFunctionCodeEntity.fromPartial(object.functionCode)
        : undefined;
    message.register = object.register ?? undefined;
    message.writeInterval = object.writeInterval ?? undefined;
    message.readInterval = object.readInterval ?? undefined;
    message.range = object.range ?? undefined;
    message.length = object.length ?? undefined;
    message.variableTypeId = object.variableTypeId ?? undefined;
    message.variableType =
      object.variableType !== undefined && object.variableType !== null
        ? ModbusVariableTypeEntity.fromPartial(object.variableType)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseModbusTransmissionModeCreateReply(): ModbusTransmissionModeCreateReply {
  return { data: undefined, error: undefined };
}

export const ModbusTransmissionModeCreateReply = {
  encode(
    message: ModbusTransmissionModeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusTransmissionModeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusTransmissionModeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusTransmissionModeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusTransmissionModeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusTransmissionModeCreateReply {
    return {
      data: isSet(object.data)
        ? ModbusTransmissionModeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusTransmissionModeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusTransmissionModeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusTransmissionModeCreateReply>, I>>(
    base?: I
  ): ModbusTransmissionModeCreateReply {
    return ModbusTransmissionModeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ModbusTransmissionModeCreateReply>, I>
  >(object: I): ModbusTransmissionModeCreateReply {
    const message = createBaseModbusTransmissionModeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusTransmissionModeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusTransmissionModeReply(): ModbusTransmissionModeReply {
  return { data: undefined, error: undefined };
}

export const ModbusTransmissionModeReply = {
  encode(
    message: ModbusTransmissionModeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusTransmissionModeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusTransmissionModeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusTransmissionModeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusTransmissionModeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusTransmissionModeReply {
    return {
      data: isSet(object.data)
        ? ModbusTransmissionModeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusTransmissionModeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusTransmissionModeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusTransmissionModeReply>, I>>(
    base?: I
  ): ModbusTransmissionModeReply {
    return ModbusTransmissionModeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusTransmissionModeReply>, I>>(
    object: I
  ): ModbusTransmissionModeReply {
    const message = createBaseModbusTransmissionModeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusTransmissionModeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusTransmissionModeQueryReply(): ModbusTransmissionModeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ModbusTransmissionModeQueryReply = {
  encode(
    message: ModbusTransmissionModeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ModbusTransmissionModeEntity.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusTransmissionModeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusTransmissionModeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ModbusTransmissionModeEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusTransmissionModeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ModbusTransmissionModeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusTransmissionModeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ModbusTransmissionModeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusTransmissionModeQueryReply>, I>>(
    base?: I
  ): ModbusTransmissionModeQueryReply {
    return ModbusTransmissionModeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ModbusTransmissionModeQueryReply>, I>
  >(object: I): ModbusTransmissionModeQueryReply {
    const message = createBaseModbusTransmissionModeQueryReply();
    message.items =
      object.items?.map((e) => ModbusTransmissionModeEntity.fromPartial(e)) ||
      [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusTransmissionModeEntity(): ModbusTransmissionModeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ModbusTransmissionModeEntity = {
  encode(
    message: ModbusTransmissionModeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      ModbusTransmissionModeEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusTransmissionModeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusTransmissionModeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            ModbusTransmissionModeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusTransmissionModeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            ModbusTransmissionModeEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ModbusTransmissionModeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? ModbusTransmissionModeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusTransmissionModeEntity>, I>>(
    base?: I
  ): ModbusTransmissionModeEntity {
    return ModbusTransmissionModeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusTransmissionModeEntity>, I>>(
    object: I
  ): ModbusTransmissionModeEntity {
    const message = createBaseModbusTransmissionModeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ModbusTransmissionModeEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseModbusTransmissionModeEntityPolyglot(): ModbusTransmissionModeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ModbusTransmissionModeEntityPolyglot = {
  encode(
    message: ModbusTransmissionModeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusTransmissionModeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusTransmissionModeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusTransmissionModeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ModbusTransmissionModeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusTransmissionModeEntityPolyglot>, I>>(
    base?: I
  ): ModbusTransmissionModeEntityPolyglot {
    return ModbusTransmissionModeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ModbusTransmissionModeEntityPolyglot>, I>
  >(object: I): ModbusTransmissionModeEntityPolyglot {
    const message = createBaseModbusTransmissionModeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseModbusVariableTypeCreateReply(): ModbusVariableTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const ModbusVariableTypeCreateReply = {
  encode(
    message: ModbusVariableTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusVariableTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusVariableTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusVariableTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusVariableTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusVariableTypeCreateReply {
    return {
      data: isSet(object.data)
        ? ModbusVariableTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusVariableTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusVariableTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusVariableTypeCreateReply>, I>>(
    base?: I
  ): ModbusVariableTypeCreateReply {
    return ModbusVariableTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusVariableTypeCreateReply>, I>>(
    object: I
  ): ModbusVariableTypeCreateReply {
    const message = createBaseModbusVariableTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusVariableTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusVariableTypeReply(): ModbusVariableTypeReply {
  return { data: undefined, error: undefined };
}

export const ModbusVariableTypeReply = {
  encode(
    message: ModbusVariableTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ModbusVariableTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusVariableTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusVariableTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ModbusVariableTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusVariableTypeReply {
    return {
      data: isSet(object.data)
        ? ModbusVariableTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusVariableTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ModbusVariableTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusVariableTypeReply>, I>>(
    base?: I
  ): ModbusVariableTypeReply {
    return ModbusVariableTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusVariableTypeReply>, I>>(
    object: I
  ): ModbusVariableTypeReply {
    const message = createBaseModbusVariableTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ModbusVariableTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusVariableTypeQueryReply(): ModbusVariableTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ModbusVariableTypeQueryReply = {
  encode(
    message: ModbusVariableTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ModbusVariableTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusVariableTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusVariableTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ModbusVariableTypeEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusVariableTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ModbusVariableTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModbusVariableTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ModbusVariableTypeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusVariableTypeQueryReply>, I>>(
    base?: I
  ): ModbusVariableTypeQueryReply {
    return ModbusVariableTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusVariableTypeQueryReply>, I>>(
    object: I
  ): ModbusVariableTypeQueryReply {
    const message = createBaseModbusVariableTypeQueryReply();
    message.items =
      object.items?.map((e) => ModbusVariableTypeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseModbusVariableTypeEntity(): ModbusVariableTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ModbusVariableTypeEntity = {
  encode(
    message: ModbusVariableTypeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      ModbusVariableTypeEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusVariableTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusVariableTypeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            ModbusVariableTypeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusVariableTypeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            ModbusVariableTypeEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ModbusVariableTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? ModbusVariableTypeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusVariableTypeEntity>, I>>(
    base?: I
  ): ModbusVariableTypeEntity {
    return ModbusVariableTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModbusVariableTypeEntity>, I>>(
    object: I
  ): ModbusVariableTypeEntity {
    const message = createBaseModbusVariableTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ModbusVariableTypeEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseModbusVariableTypeEntityPolyglot(): ModbusVariableTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ModbusVariableTypeEntityPolyglot = {
  encode(
    message: ModbusVariableTypeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModbusVariableTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModbusVariableTypeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModbusVariableTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ModbusVariableTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ModbusVariableTypeEntityPolyglot>, I>>(
    base?: I
  ): ModbusVariableTypeEntityPolyglot {
    return ModbusVariableTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ModbusVariableTypeEntityPolyglot>, I>
  >(object: I): ModbusVariableTypeEntityPolyglot {
    const message = createBaseModbusVariableTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMqttClientConnectDto(): MqttClientConnectDto {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    connect: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const MqttClientConnectDto = {
  encode(
    message: MqttClientConnectDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.connect !== undefined) {
      writer.uint32(64).bool(message.connect);
    }
    if (message.rank !== 0) {
      writer.uint32(72).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(80).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(88).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(98).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(106).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MqttClientConnectDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMqttClientConnectDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.connect = reader.bool();
          break;
        case 9:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.createdFormatted = reader.string();
          break;
        case 13:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MqttClientConnectDto {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      connect: isSet(object.connect) ? Boolean(object.connect) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: MqttClientConnectDto): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.connect !== undefined && (obj.connect = message.connect);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<MqttClientConnectDto>, I>>(
    base?: I
  ): MqttClientConnectDto {
    return MqttClientConnectDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MqttClientConnectDto>, I>>(
    object: I
  ): MqttClientConnectDto {
    const message = createBaseMqttClientConnectDto();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.connect = object.connect ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseMqttClientConnectionDto(): MqttClientConnectionDto {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    isConnected: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const MqttClientConnectionDto = {
  encode(
    message: MqttClientConnectionDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.isConnected !== undefined) {
      writer.uint32(72).bool(message.isConnected);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MqttClientConnectionDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMqttClientConnectionDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.isConnected = reader.bool();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MqttClientConnectionDto {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      isConnected: isSet(object.isConnected)
        ? Boolean(object.isConnected)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: MqttClientConnectionDto): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.isConnected !== undefined &&
      (obj.isConnected = message.isConnected);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<MqttClientConnectionDto>, I>>(
    base?: I
  ): MqttClientConnectionDto {
    return MqttClientConnectionDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MqttClientConnectionDto>, I>>(
    object: I
  ): MqttClientConnectionDto {
    const message = createBaseMqttClientConnectionDto();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.isConnected = object.isConnected ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseMqttConfigDto(): MqttConfigDto {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    ssl: undefined,
    autoReconnect: undefined,
    cleanSession: undefined,
    lastWillRetain: undefined,
    port: undefined,
    keepAlive: undefined,
    connectTimeout: undefined,
    lastWillQos: undefined,
    clientId: undefined,
    name: undefined,
    host: undefined,
    username: undefined,
    password: undefined,
    mqttVersionId: undefined,
    mqttVersion: undefined,
    lastWillTopic: undefined,
    lastWillPayload: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const MqttConfigDto = {
  encode(
    message: MqttConfigDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.ssl !== undefined) {
      writer.uint32(64).bool(message.ssl);
    }
    if (message.autoReconnect !== undefined) {
      writer.uint32(72).bool(message.autoReconnect);
    }
    if (message.cleanSession !== undefined) {
      writer.uint32(80).bool(message.cleanSession);
    }
    if (message.lastWillRetain !== undefined) {
      writer.uint32(88).bool(message.lastWillRetain);
    }
    if (message.port !== undefined) {
      writer.uint32(96).int64(message.port);
    }
    if (message.keepAlive !== undefined) {
      writer.uint32(104).int64(message.keepAlive);
    }
    if (message.connectTimeout !== undefined) {
      writer.uint32(112).int64(message.connectTimeout);
    }
    if (message.lastWillQos !== undefined) {
      writer.uint32(120).int64(message.lastWillQos);
    }
    if (message.clientId !== undefined) {
      writer.uint32(130).string(message.clientId);
    }
    if (message.name !== undefined) {
      writer.uint32(138).string(message.name);
    }
    if (message.host !== undefined) {
      writer.uint32(146).string(message.host);
    }
    if (message.username !== undefined) {
      writer.uint32(154).string(message.username);
    }
    if (message.password !== undefined) {
      writer.uint32(162).string(message.password);
    }
    if (message.mqttVersionId !== undefined) {
      writer.uint32(178).string(message.mqttVersionId);
    }
    if (message.mqttVersion !== undefined) {
      MqttVersionEntity.encode(
        message.mqttVersion,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.lastWillTopic !== undefined) {
      writer.uint32(194).string(message.lastWillTopic);
    }
    if (message.lastWillPayload !== undefined) {
      writer.uint32(202).string(message.lastWillPayload);
    }
    if (message.rank !== 0) {
      writer.uint32(208).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(216).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(224).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(234).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(242).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MqttConfigDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMqttConfigDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.ssl = reader.bool();
          break;
        case 9:
          message.autoReconnect = reader.bool();
          break;
        case 10:
          message.cleanSession = reader.bool();
          break;
        case 11:
          message.lastWillRetain = reader.bool();
          break;
        case 12:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.keepAlive = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.connectTimeout = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.lastWillQos = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.clientId = reader.string();
          break;
        case 17:
          message.name = reader.string();
          break;
        case 18:
          message.host = reader.string();
          break;
        case 19:
          message.username = reader.string();
          break;
        case 20:
          message.password = reader.string();
          break;
        case 22:
          message.mqttVersionId = reader.string();
          break;
        case 23:
          message.mqttVersion = MqttVersionEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.lastWillTopic = reader.string();
          break;
        case 25:
          message.lastWillPayload = reader.string();
          break;
        case 26:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 27:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 28:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 29:
          message.createdFormatted = reader.string();
          break;
        case 30:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MqttConfigDto {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      ssl: isSet(object.ssl) ? Boolean(object.ssl) : undefined,
      autoReconnect: isSet(object.autoReconnect)
        ? Boolean(object.autoReconnect)
        : undefined,
      cleanSession: isSet(object.cleanSession)
        ? Boolean(object.cleanSession)
        : undefined,
      lastWillRetain: isSet(object.lastWillRetain)
        ? Boolean(object.lastWillRetain)
        : undefined,
      port: isSet(object.port) ? Number(object.port) : undefined,
      keepAlive: isSet(object.keepAlive) ? Number(object.keepAlive) : undefined,
      connectTimeout: isSet(object.connectTimeout)
        ? Number(object.connectTimeout)
        : undefined,
      lastWillQos: isSet(object.lastWillQos)
        ? Number(object.lastWillQos)
        : undefined,
      clientId: isSet(object.clientId) ? String(object.clientId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      host: isSet(object.host) ? String(object.host) : undefined,
      username: isSet(object.username) ? String(object.username) : undefined,
      password: isSet(object.password) ? String(object.password) : undefined,
      mqttVersionId: isSet(object.mqttVersionId)
        ? String(object.mqttVersionId)
        : undefined,
      mqttVersion: isSet(object.mqttVersion)
        ? MqttVersionEntity.fromJSON(object.mqttVersion)
        : undefined,
      lastWillTopic: isSet(object.lastWillTopic)
        ? String(object.lastWillTopic)
        : undefined,
      lastWillPayload: isSet(object.lastWillPayload)
        ? String(object.lastWillPayload)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: MqttConfigDto): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.ssl !== undefined && (obj.ssl = message.ssl);
    message.autoReconnect !== undefined &&
      (obj.autoReconnect = message.autoReconnect);
    message.cleanSession !== undefined &&
      (obj.cleanSession = message.cleanSession);
    message.lastWillRetain !== undefined &&
      (obj.lastWillRetain = message.lastWillRetain);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.keepAlive !== undefined &&
      (obj.keepAlive = Math.round(message.keepAlive));
    message.connectTimeout !== undefined &&
      (obj.connectTimeout = Math.round(message.connectTimeout));
    message.lastWillQos !== undefined &&
      (obj.lastWillQos = Math.round(message.lastWillQos));
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.name !== undefined && (obj.name = message.name);
    message.host !== undefined && (obj.host = message.host);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.mqttVersionId !== undefined &&
      (obj.mqttVersionId = message.mqttVersionId);
    message.mqttVersion !== undefined &&
      (obj.mqttVersion = message.mqttVersion
        ? MqttVersionEntity.toJSON(message.mqttVersion)
        : undefined);
    message.lastWillTopic !== undefined &&
      (obj.lastWillTopic = message.lastWillTopic);
    message.lastWillPayload !== undefined &&
      (obj.lastWillPayload = message.lastWillPayload);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<MqttConfigDto>, I>>(
    base?: I
  ): MqttConfigDto {
    return MqttConfigDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MqttConfigDto>, I>>(
    object: I
  ): MqttConfigDto {
    const message = createBaseMqttConfigDto();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.ssl = object.ssl ?? undefined;
    message.autoReconnect = object.autoReconnect ?? undefined;
    message.cleanSession = object.cleanSession ?? undefined;
    message.lastWillRetain = object.lastWillRetain ?? undefined;
    message.port = object.port ?? undefined;
    message.keepAlive = object.keepAlive ?? undefined;
    message.connectTimeout = object.connectTimeout ?? undefined;
    message.lastWillQos = object.lastWillQos ?? undefined;
    message.clientId = object.clientId ?? undefined;
    message.name = object.name ?? undefined;
    message.host = object.host ?? undefined;
    message.username = object.username ?? undefined;
    message.password = object.password ?? undefined;
    message.mqttVersionId = object.mqttVersionId ?? undefined;
    message.mqttVersion =
      object.mqttVersion !== undefined && object.mqttVersion !== null
        ? MqttVersionEntity.fromPartial(object.mqttVersion)
        : undefined;
    message.lastWillTopic = object.lastWillTopic ?? undefined;
    message.lastWillPayload = object.lastWillPayload ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseMqttVersionCreateReply(): MqttVersionCreateReply {
  return { data: undefined, error: undefined };
}

export const MqttVersionCreateReply = {
  encode(
    message: MqttVersionCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      MqttVersionEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MqttVersionCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMqttVersionCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = MqttVersionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MqttVersionCreateReply {
    return {
      data: isSet(object.data)
        ? MqttVersionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: MqttVersionCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? MqttVersionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MqttVersionCreateReply>, I>>(
    base?: I
  ): MqttVersionCreateReply {
    return MqttVersionCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MqttVersionCreateReply>, I>>(
    object: I
  ): MqttVersionCreateReply {
    const message = createBaseMqttVersionCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? MqttVersionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseMqttVersionReply(): MqttVersionReply {
  return { data: undefined, error: undefined };
}

export const MqttVersionReply = {
  encode(
    message: MqttVersionReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      MqttVersionEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MqttVersionReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMqttVersionReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = MqttVersionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MqttVersionReply {
    return {
      data: isSet(object.data)
        ? MqttVersionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: MqttVersionReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? MqttVersionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MqttVersionReply>, I>>(
    base?: I
  ): MqttVersionReply {
    return MqttVersionReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MqttVersionReply>, I>>(
    object: I
  ): MqttVersionReply {
    const message = createBaseMqttVersionReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? MqttVersionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseMqttVersionQueryReply(): MqttVersionQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const MqttVersionQueryReply = {
  encode(
    message: MqttVersionQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      MqttVersionEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MqttVersionQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMqttVersionQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(MqttVersionEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MqttVersionQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => MqttVersionEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: MqttVersionQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? MqttVersionEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MqttVersionQueryReply>, I>>(
    base?: I
  ): MqttVersionQueryReply {
    return MqttVersionQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MqttVersionQueryReply>, I>>(
    object: I
  ): MqttVersionQueryReply {
    const message = createBaseMqttVersionQueryReply();
    message.items =
      object.items?.map((e) => MqttVersionEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseMqttVersionEntity(): MqttVersionEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    version: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const MqttVersionEntity = {
  encode(
    message: MqttVersionEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.version !== undefined) {
      writer.uint32(66).string(message.version);
    }
    if (message.rank !== 0) {
      writer.uint32(72).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(80).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(88).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(98).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(106).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MqttVersionEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMqttVersionEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.version = reader.string();
          break;
        case 9:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.createdFormatted = reader.string();
          break;
        case 13:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MqttVersionEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      version: isSet(object.version) ? String(object.version) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: MqttVersionEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.version !== undefined && (obj.version = message.version);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<MqttVersionEntity>, I>>(
    base?: I
  ): MqttVersionEntity {
    return MqttVersionEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MqttVersionEntity>, I>>(
    object: I
  ): MqttVersionEntity {
    const message = createBaseMqttVersionEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.version = object.version ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseNodeDatumCreateReply(): NodeDatumCreateReply {
  return { data: undefined, error: undefined };
}

export const NodeDatumCreateReply = {
  encode(
    message: NodeDatumCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      NodeDatumEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NodeDatumCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeDatumCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = NodeDatumEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeDatumCreateReply {
    return {
      data: isSet(object.data)
        ? NodeDatumEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NodeDatumCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? NodeDatumEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeDatumCreateReply>, I>>(
    base?: I
  ): NodeDatumCreateReply {
    return NodeDatumCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeDatumCreateReply>, I>>(
    object: I
  ): NodeDatumCreateReply {
    const message = createBaseNodeDatumCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? NodeDatumEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseNodeDatumReply(): NodeDatumReply {
  return { data: undefined, error: undefined };
}

export const NodeDatumReply = {
  encode(
    message: NodeDatumReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      NodeDatumEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeDatumReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeDatumReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = NodeDatumEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeDatumReply {
    return {
      data: isSet(object.data)
        ? NodeDatumEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NodeDatumReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? NodeDatumEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeDatumReply>, I>>(
    base?: I
  ): NodeDatumReply {
    return NodeDatumReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeDatumReply>, I>>(
    object: I
  ): NodeDatumReply {
    const message = createBaseNodeDatumReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? NodeDatumEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseNodeDatumQueryReply(): NodeDatumQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const NodeDatumQueryReply = {
  encode(
    message: NodeDatumQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      NodeDatumEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeDatumQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeDatumQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(NodeDatumEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeDatumQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => NodeDatumEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NodeDatumQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? NodeDatumEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeDatumQueryReply>, I>>(
    base?: I
  ): NodeDatumQueryReply {
    return NodeDatumQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeDatumQueryReply>, I>>(
    object: I
  ): NodeDatumQueryReply {
    const message = createBaseNodeDatumQueryReply();
    message.items =
      object.items?.map((e) => NodeDatumEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseNodeDatumEntity(): NodeDatumEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    nodeId: undefined,
    node: undefined,
    valueFloat64: undefined,
    valueInt64: undefined,
    valueString: undefined,
    valueBoolean: undefined,
    ingestedAt: 0,
    ingestedAtFormatted: "",
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const NodeDatumEntity = {
  encode(
    message: NodeDatumEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.nodeId !== undefined) {
      writer.uint32(74).string(message.nodeId);
    }
    if (message.node !== undefined) {
      DataNodeEntity.encode(message.node, writer.uint32(82).fork()).ldelim();
    }
    if (message.valueFloat64 !== undefined) {
      writer.uint32(89).double(message.valueFloat64);
    }
    if (message.valueInt64 !== undefined) {
      writer.uint32(96).int64(message.valueInt64);
    }
    if (message.valueString !== undefined) {
      writer.uint32(106).string(message.valueString);
    }
    if (message.valueBoolean !== undefined) {
      writer.uint32(112).bool(message.valueBoolean);
    }
    if (message.ingestedAt !== 0) {
      writer.uint32(128).int64(message.ingestedAt);
    }
    if (message.ingestedAtFormatted !== "") {
      writer.uint32(138).string(message.ingestedAtFormatted);
    }
    if (message.rank !== 0) {
      writer.uint32(144).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(152).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(160).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(170).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(178).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeDatumEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeDatumEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.nodeId = reader.string();
          break;
        case 10:
          message.node = DataNodeEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.valueFloat64 = reader.double();
          break;
        case 12:
          message.valueInt64 = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.valueString = reader.string();
          break;
        case 14:
          message.valueBoolean = reader.bool();
          break;
        case 16:
          message.ingestedAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.ingestedAtFormatted = reader.string();
          break;
        case 18:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.createdFormatted = reader.string();
          break;
        case 22:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeDatumEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : undefined,
      node: isSet(object.node)
        ? DataNodeEntity.fromJSON(object.node)
        : undefined,
      valueFloat64: isSet(object.valueFloat64)
        ? Number(object.valueFloat64)
        : undefined,
      valueInt64: isSet(object.valueInt64)
        ? Number(object.valueInt64)
        : undefined,
      valueString: isSet(object.valueString)
        ? String(object.valueString)
        : undefined,
      valueBoolean: isSet(object.valueBoolean)
        ? Boolean(object.valueBoolean)
        : undefined,
      ingestedAt: isSet(object.ingestedAt) ? Number(object.ingestedAt) : 0,
      ingestedAtFormatted: isSet(object.ingestedAtFormatted)
        ? String(object.ingestedAtFormatted)
        : "",
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: NodeDatumEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.node !== undefined &&
      (obj.node = message.node
        ? DataNodeEntity.toJSON(message.node)
        : undefined);
    message.valueFloat64 !== undefined &&
      (obj.valueFloat64 = message.valueFloat64);
    message.valueInt64 !== undefined &&
      (obj.valueInt64 = Math.round(message.valueInt64));
    message.valueString !== undefined &&
      (obj.valueString = message.valueString);
    message.valueBoolean !== undefined &&
      (obj.valueBoolean = message.valueBoolean);
    message.ingestedAt !== undefined &&
      (obj.ingestedAt = Math.round(message.ingestedAt));
    message.ingestedAtFormatted !== undefined &&
      (obj.ingestedAtFormatted = message.ingestedAtFormatted);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeDatumEntity>, I>>(
    base?: I
  ): NodeDatumEntity {
    return NodeDatumEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeDatumEntity>, I>>(
    object: I
  ): NodeDatumEntity {
    const message = createBaseNodeDatumEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.nodeId = object.nodeId ?? undefined;
    message.node =
      object.node !== undefined && object.node !== null
        ? DataNodeEntity.fromPartial(object.node)
        : undefined;
    message.valueFloat64 = object.valueFloat64 ?? undefined;
    message.valueInt64 = object.valueInt64 ?? undefined;
    message.valueString = object.valueString ?? undefined;
    message.valueBoolean = object.valueBoolean ?? undefined;
    message.ingestedAt = object.ingestedAt ?? 0;
    message.ingestedAtFormatted = object.ingestedAtFormatted ?? "";
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseNodeReaderCreateReply(): NodeReaderCreateReply {
  return { data: undefined, error: undefined };
}

export const NodeReaderCreateReply = {
  encode(
    message: NodeReaderCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      NodeReaderEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NodeReaderCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeReaderCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = NodeReaderEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeReaderCreateReply {
    return {
      data: isSet(object.data)
        ? NodeReaderEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NodeReaderCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? NodeReaderEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeReaderCreateReply>, I>>(
    base?: I
  ): NodeReaderCreateReply {
    return NodeReaderCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeReaderCreateReply>, I>>(
    object: I
  ): NodeReaderCreateReply {
    const message = createBaseNodeReaderCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? NodeReaderEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseNodeReaderReply(): NodeReaderReply {
  return { data: undefined, error: undefined };
}

export const NodeReaderReply = {
  encode(
    message: NodeReaderReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      NodeReaderEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeReaderReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeReaderReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = NodeReaderEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeReaderReply {
    return {
      data: isSet(object.data)
        ? NodeReaderEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NodeReaderReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? NodeReaderEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeReaderReply>, I>>(
    base?: I
  ): NodeReaderReply {
    return NodeReaderReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeReaderReply>, I>>(
    object: I
  ): NodeReaderReply {
    const message = createBaseNodeReaderReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? NodeReaderEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseNodeReaderQueryReply(): NodeReaderQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const NodeReaderQueryReply = {
  encode(
    message: NodeReaderQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      NodeReaderEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NodeReaderQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeReaderQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(NodeReaderEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeReaderQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => NodeReaderEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NodeReaderQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? NodeReaderEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeReaderQueryReply>, I>>(
    base?: I
  ): NodeReaderQueryReply {
    return NodeReaderQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeReaderQueryReply>, I>>(
    object: I
  ): NodeReaderQueryReply {
    const message = createBaseNodeReaderQueryReply();
    message.items =
      object.items?.map((e) => NodeReaderEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseNodeReaderEntity(): NodeReaderEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    nativeFn: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const NodeReaderEntity = {
  encode(
    message: NodeReaderEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.nativeFn !== undefined) {
      writer.uint32(74).string(message.nativeFn);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeReaderEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeReaderEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.nativeFn = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeReaderEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      nativeFn: isSet(object.nativeFn) ? String(object.nativeFn) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: NodeReaderEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.nativeFn !== undefined && (obj.nativeFn = message.nativeFn);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeReaderEntity>, I>>(
    base?: I
  ): NodeReaderEntity {
    return NodeReaderEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeReaderEntity>, I>>(
    object: I
  ): NodeReaderEntity {
    const message = createBaseNodeReaderEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.nativeFn = object.nativeFn ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseNodeWriterCreateReply(): NodeWriterCreateReply {
  return { data: undefined, error: undefined };
}

export const NodeWriterCreateReply = {
  encode(
    message: NodeWriterCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      NodeWriterEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NodeWriterCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeWriterCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = NodeWriterEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeWriterCreateReply {
    return {
      data: isSet(object.data)
        ? NodeWriterEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NodeWriterCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? NodeWriterEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeWriterCreateReply>, I>>(
    base?: I
  ): NodeWriterCreateReply {
    return NodeWriterCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeWriterCreateReply>, I>>(
    object: I
  ): NodeWriterCreateReply {
    const message = createBaseNodeWriterCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? NodeWriterEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseNodeWriterReply(): NodeWriterReply {
  return { data: undefined, error: undefined };
}

export const NodeWriterReply = {
  encode(
    message: NodeWriterReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      NodeWriterEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeWriterReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeWriterReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = NodeWriterEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeWriterReply {
    return {
      data: isSet(object.data)
        ? NodeWriterEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NodeWriterReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? NodeWriterEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeWriterReply>, I>>(
    base?: I
  ): NodeWriterReply {
    return NodeWriterReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeWriterReply>, I>>(
    object: I
  ): NodeWriterReply {
    const message = createBaseNodeWriterReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? NodeWriterEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseNodeWriterQueryReply(): NodeWriterQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const NodeWriterQueryReply = {
  encode(
    message: NodeWriterQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      NodeWriterEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NodeWriterQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeWriterQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(NodeWriterEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeWriterQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => NodeWriterEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NodeWriterQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? NodeWriterEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeWriterQueryReply>, I>>(
    base?: I
  ): NodeWriterQueryReply {
    return NodeWriterQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeWriterQueryReply>, I>>(
    object: I
  ): NodeWriterQueryReply {
    const message = createBaseNodeWriterQueryReply();
    message.items =
      object.items?.map((e) => NodeWriterEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseNodeWriterEntity(): NodeWriterEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    nativeFn: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const NodeWriterEntity = {
  encode(
    message: NodeWriterEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.nativeFn !== undefined) {
      writer.uint32(74).string(message.nativeFn);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeWriterEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeWriterEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.nativeFn = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeWriterEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      nativeFn: isSet(object.nativeFn) ? String(object.nativeFn) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: NodeWriterEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.nativeFn !== undefined && (obj.nativeFn = message.nativeFn);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeWriterEntity>, I>>(
    base?: I
  ): NodeWriterEntity {
    return NodeWriterEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeWriterEntity>, I>>(
    object: I
  ): NodeWriterEntity {
    const message = createBaseNodeWriterEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.nativeFn = object.nativeFn ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseOvioSetOutputDto(): OvioSetOutputDto {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    id: undefined,
    type: undefined,
    cmdid: undefined,
    data: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const OvioSetOutputDto = {
  encode(
    message: OvioSetOutputDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.id !== undefined) {
      writer.uint32(66).string(message.id);
    }
    if (message.type !== undefined) {
      writer.uint32(74).string(message.type);
    }
    if (message.cmdid !== undefined) {
      writer.uint32(82).string(message.cmdid);
    }
    if (message.data !== undefined) {
      OvioSetOutputDataDto.encode(
        message.data,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OvioSetOutputDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOvioSetOutputDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.id = reader.string();
          break;
        case 9:
          message.type = reader.string();
          break;
        case 10:
          message.cmdid = reader.string();
          break;
        case 11:
          message.data = OvioSetOutputDataDto.decode(reader, reader.uint32());
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OvioSetOutputDto {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      id: isSet(object.id) ? String(object.id) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      cmdid: isSet(object.cmdid) ? String(object.cmdid) : undefined,
      data: isSet(object.data)
        ? OvioSetOutputDataDto.fromJSON(object.data)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: OvioSetOutputDto): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.cmdid !== undefined && (obj.cmdid = message.cmdid);
    message.data !== undefined &&
      (obj.data = message.data
        ? OvioSetOutputDataDto.toJSON(message.data)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<OvioSetOutputDto>, I>>(
    base?: I
  ): OvioSetOutputDto {
    return OvioSetOutputDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OvioSetOutputDto>, I>>(
    object: I
  ): OvioSetOutputDto {
    const message = createBaseOvioSetOutputDto();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.id = object.id ?? undefined;
    message.type = object.type ?? undefined;
    message.cmdid = object.cmdid ?? undefined;
    message.data =
      object.data !== undefined && object.data !== null
        ? OvioSetOutputDataDto.fromPartial(object.data)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseOvioSetOutputDataDto(): OvioSetOutputDataDto {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    o1: undefined,
    o2: undefined,
    o3: undefined,
    o4: undefined,
    o5: undefined,
    o6: undefined,
    o7: undefined,
    o8: undefined,
    i1: undefined,
    i2: undefined,
    i3: undefined,
    i4: undefined,
    i5: undefined,
    i6: undefined,
    i7: undefined,
    i8: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const OvioSetOutputDataDto = {
  encode(
    message: OvioSetOutputDataDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.o1 !== undefined) {
      writer.uint32(64).int64(message.o1);
    }
    if (message.o2 !== undefined) {
      writer.uint32(72).int64(message.o2);
    }
    if (message.o3 !== undefined) {
      writer.uint32(80).int64(message.o3);
    }
    if (message.o4 !== undefined) {
      writer.uint32(88).int64(message.o4);
    }
    if (message.o5 !== undefined) {
      writer.uint32(96).int64(message.o5);
    }
    if (message.o6 !== undefined) {
      writer.uint32(104).int64(message.o6);
    }
    if (message.o7 !== undefined) {
      writer.uint32(112).int64(message.o7);
    }
    if (message.o8 !== undefined) {
      writer.uint32(120).int64(message.o8);
    }
    if (message.i1 !== undefined) {
      writer.uint32(128).int64(message.i1);
    }
    if (message.i2 !== undefined) {
      writer.uint32(136).int64(message.i2);
    }
    if (message.i3 !== undefined) {
      writer.uint32(144).int64(message.i3);
    }
    if (message.i4 !== undefined) {
      writer.uint32(152).int64(message.i4);
    }
    if (message.i5 !== undefined) {
      writer.uint32(160).int64(message.i5);
    }
    if (message.i6 !== undefined) {
      writer.uint32(168).int64(message.i6);
    }
    if (message.i7 !== undefined) {
      writer.uint32(176).int64(message.i7);
    }
    if (message.i8 !== undefined) {
      writer.uint32(184).int64(message.i8);
    }
    if (message.rank !== 0) {
      writer.uint32(192).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(200).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(208).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(218).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(226).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OvioSetOutputDataDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOvioSetOutputDataDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.o1 = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.o2 = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.o3 = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.o4 = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.o5 = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.o6 = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.o7 = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.o8 = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.i1 = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.i2 = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.i3 = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.i4 = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.i5 = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.i6 = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.i7 = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.i8 = longToNumber(reader.int64() as Long);
          break;
        case 24:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 25:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 26:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 27:
          message.createdFormatted = reader.string();
          break;
        case 28:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OvioSetOutputDataDto {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      o1: isSet(object.o1) ? Number(object.o1) : undefined,
      o2: isSet(object.o2) ? Number(object.o2) : undefined,
      o3: isSet(object.o3) ? Number(object.o3) : undefined,
      o4: isSet(object.o4) ? Number(object.o4) : undefined,
      o5: isSet(object.o5) ? Number(object.o5) : undefined,
      o6: isSet(object.o6) ? Number(object.o6) : undefined,
      o7: isSet(object.o7) ? Number(object.o7) : undefined,
      o8: isSet(object.o8) ? Number(object.o8) : undefined,
      i1: isSet(object.i1) ? Number(object.i1) : undefined,
      i2: isSet(object.i2) ? Number(object.i2) : undefined,
      i3: isSet(object.i3) ? Number(object.i3) : undefined,
      i4: isSet(object.i4) ? Number(object.i4) : undefined,
      i5: isSet(object.i5) ? Number(object.i5) : undefined,
      i6: isSet(object.i6) ? Number(object.i6) : undefined,
      i7: isSet(object.i7) ? Number(object.i7) : undefined,
      i8: isSet(object.i8) ? Number(object.i8) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: OvioSetOutputDataDto): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.o1 !== undefined && (obj.o1 = Math.round(message.o1));
    message.o2 !== undefined && (obj.o2 = Math.round(message.o2));
    message.o3 !== undefined && (obj.o3 = Math.round(message.o3));
    message.o4 !== undefined && (obj.o4 = Math.round(message.o4));
    message.o5 !== undefined && (obj.o5 = Math.round(message.o5));
    message.o6 !== undefined && (obj.o6 = Math.round(message.o6));
    message.o7 !== undefined && (obj.o7 = Math.round(message.o7));
    message.o8 !== undefined && (obj.o8 = Math.round(message.o8));
    message.i1 !== undefined && (obj.i1 = Math.round(message.i1));
    message.i2 !== undefined && (obj.i2 = Math.round(message.i2));
    message.i3 !== undefined && (obj.i3 = Math.round(message.i3));
    message.i4 !== undefined && (obj.i4 = Math.round(message.i4));
    message.i5 !== undefined && (obj.i5 = Math.round(message.i5));
    message.i6 !== undefined && (obj.i6 = Math.round(message.i6));
    message.i7 !== undefined && (obj.i7 = Math.round(message.i7));
    message.i8 !== undefined && (obj.i8 = Math.round(message.i8));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<OvioSetOutputDataDto>, I>>(
    base?: I
  ): OvioSetOutputDataDto {
    return OvioSetOutputDataDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OvioSetOutputDataDto>, I>>(
    object: I
  ): OvioSetOutputDataDto {
    const message = createBaseOvioSetOutputDataDto();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.o1 = object.o1 ?? undefined;
    message.o2 = object.o2 ?? undefined;
    message.o3 = object.o3 ?? undefined;
    message.o4 = object.o4 ?? undefined;
    message.o5 = object.o5 ?? undefined;
    message.o6 = object.o6 ?? undefined;
    message.o7 = object.o7 ?? undefined;
    message.o8 = object.o8 ?? undefined;
    message.i1 = object.i1 ?? undefined;
    message.i2 = object.i2 ?? undefined;
    message.i3 = object.i3 ?? undefined;
    message.i4 = object.i4 ?? undefined;
    message.i5 = object.i5 ?? undefined;
    message.i6 = object.i6 ?? undefined;
    message.i7 = object.i7 ?? undefined;
    message.i8 = object.i8 ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBasePhysicalSectionCreateReply(): PhysicalSectionCreateReply {
  return { data: undefined, error: undefined };
}

export const PhysicalSectionCreateReply = {
  encode(
    message: PhysicalSectionCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      PhysicalSectionEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PhysicalSectionCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhysicalSectionCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = PhysicalSectionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhysicalSectionCreateReply {
    return {
      data: isSet(object.data)
        ? PhysicalSectionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PhysicalSectionCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? PhysicalSectionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PhysicalSectionCreateReply>, I>>(
    base?: I
  ): PhysicalSectionCreateReply {
    return PhysicalSectionCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhysicalSectionCreateReply>, I>>(
    object: I
  ): PhysicalSectionCreateReply {
    const message = createBasePhysicalSectionCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? PhysicalSectionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBasePhysicalSectionReply(): PhysicalSectionReply {
  return { data: undefined, error: undefined };
}

export const PhysicalSectionReply = {
  encode(
    message: PhysicalSectionReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      PhysicalSectionEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PhysicalSectionReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhysicalSectionReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = PhysicalSectionEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhysicalSectionReply {
    return {
      data: isSet(object.data)
        ? PhysicalSectionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PhysicalSectionReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? PhysicalSectionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PhysicalSectionReply>, I>>(
    base?: I
  ): PhysicalSectionReply {
    return PhysicalSectionReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhysicalSectionReply>, I>>(
    object: I
  ): PhysicalSectionReply {
    const message = createBasePhysicalSectionReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? PhysicalSectionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBasePhysicalSectionQueryReply(): PhysicalSectionQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const PhysicalSectionQueryReply = {
  encode(
    message: PhysicalSectionQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      PhysicalSectionEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PhysicalSectionQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhysicalSectionQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            PhysicalSectionEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhysicalSectionQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => PhysicalSectionEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PhysicalSectionQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PhysicalSectionEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PhysicalSectionQueryReply>, I>>(
    base?: I
  ): PhysicalSectionQueryReply {
    return PhysicalSectionQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhysicalSectionQueryReply>, I>>(
    object: I
  ): PhysicalSectionQueryReply {
    const message = createBasePhysicalSectionQueryReply();
    message.items =
      object.items?.map((e) => PhysicalSectionEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBasePhysicalSectionEntity(): PhysicalSectionEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const PhysicalSectionEntity = {
  encode(
    message: PhysicalSectionEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      PhysicalSectionEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PhysicalSectionEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhysicalSectionEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            PhysicalSectionEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhysicalSectionEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            PhysicalSectionEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: PhysicalSectionEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? PhysicalSectionEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<PhysicalSectionEntity>, I>>(
    base?: I
  ): PhysicalSectionEntity {
    return PhysicalSectionEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhysicalSectionEntity>, I>>(
    object: I
  ): PhysicalSectionEntity {
    const message = createBasePhysicalSectionEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        PhysicalSectionEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBasePhysicalSectionEntityPolyglot(): PhysicalSectionEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const PhysicalSectionEntityPolyglot = {
  encode(
    message: PhysicalSectionEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PhysicalSectionEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhysicalSectionEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhysicalSectionEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: PhysicalSectionEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<PhysicalSectionEntityPolyglot>, I>>(
    base?: I
  ): PhysicalSectionEntityPolyglot {
    return PhysicalSectionEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhysicalSectionEntityPolyglot>, I>>(
    object: I
  ): PhysicalSectionEntityPolyglot {
    const message = createBasePhysicalSectionEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseScenarioCreateReply(): ScenarioCreateReply {
  return { data: undefined, error: undefined };
}

export const ScenarioCreateReply = {
  encode(
    message: ScenarioCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ScenarioEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScenarioCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ScenarioEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioCreateReply {
    return {
      data: isSet(object.data)
        ? ScenarioEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ScenarioCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ScenarioEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioCreateReply>, I>>(
    base?: I
  ): ScenarioCreateReply {
    return ScenarioCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioCreateReply>, I>>(
    object: I
  ): ScenarioCreateReply {
    const message = createBaseScenarioCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ScenarioEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseScenarioReply(): ScenarioReply {
  return { data: undefined, error: undefined };
}

export const ScenarioReply = {
  encode(
    message: ScenarioReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ScenarioEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScenarioReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ScenarioEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioReply {
    return {
      data: isSet(object.data)
        ? ScenarioEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ScenarioReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ScenarioEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioReply>, I>>(
    base?: I
  ): ScenarioReply {
    return ScenarioReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioReply>, I>>(
    object: I
  ): ScenarioReply {
    const message = createBaseScenarioReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ScenarioEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseScenarioQueryReply(): ScenarioQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ScenarioQueryReply = {
  encode(
    message: ScenarioQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ScenarioEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScenarioQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ScenarioEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ScenarioEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ScenarioQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ScenarioEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioQueryReply>, I>>(
    base?: I
  ): ScenarioQueryReply {
    return ScenarioQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioQueryReply>, I>>(
    object: I
  ): ScenarioQueryReply {
    const message = createBaseScenarioQueryReply();
    message.items =
      object.items?.map((e) => ScenarioEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseScenarioEntity(): ScenarioEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    script: undefined,
    lammerSequences: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ScenarioEntity = {
  encode(
    message: ScenarioEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      ScenarioEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.script !== undefined) {
      ScenarioScriptEntity.encode(
        message.script,
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.lammerSequences) {
      ScenarioLammerSequenceEntity.encode(
        v!,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScenarioEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            ScenarioEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.script = ScenarioScriptEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.lammerSequences.push(
            ScenarioLammerSequenceEntity.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            ScenarioEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      script: isSet(object.script)
        ? ScenarioScriptEntity.fromJSON(object.script)
        : undefined,
      lammerSequences: Array.isArray(object?.lammerSequences)
        ? object.lammerSequences.map((e: any) =>
            ScenarioLammerSequenceEntity.fromJSON(e)
          )
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ScenarioEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? ScenarioEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.script !== undefined &&
      (obj.script = message.script
        ? ScenarioScriptEntity.toJSON(message.script)
        : undefined);
    if (message.lammerSequences) {
      obj.lammerSequences = message.lammerSequences.map((e) =>
        e ? ScenarioLammerSequenceEntity.toJSON(e) : undefined
      );
    } else {
      obj.lammerSequences = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioEntity>, I>>(
    base?: I
  ): ScenarioEntity {
    return ScenarioEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioEntity>, I>>(
    object: I
  ): ScenarioEntity {
    const message = createBaseScenarioEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) => ScenarioEntityPolyglot.fromPartial(e)) ||
      [];
    message.name = object.name ?? undefined;
    message.script =
      object.script !== undefined && object.script !== null
        ? ScenarioScriptEntity.fromPartial(object.script)
        : undefined;
    message.lammerSequences =
      object.lammerSequences?.map((e) =>
        ScenarioLammerSequenceEntity.fromPartial(e)
      ) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseScenarioEntityPolyglot(): ScenarioEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ScenarioEntityPolyglot = {
  encode(
    message: ScenarioEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ScenarioEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioEntityPolyglot>, I>>(
    base?: I
  ): ScenarioEntityPolyglot {
    return ScenarioEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioEntityPolyglot>, I>>(
    object: I
  ): ScenarioEntityPolyglot {
    const message = createBaseScenarioEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseScenarioScriptEntity(): ScenarioScriptEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    content: undefined,
    scriptLanguageId: undefined,
    scriptLanguage: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ScenarioScriptEntity = {
  encode(
    message: ScenarioScriptEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.content !== undefined) {
      writer.uint32(66).string(message.content);
    }
    if (message.scriptLanguageId !== undefined) {
      writer.uint32(82).string(message.scriptLanguageId);
    }
    if (message.scriptLanguage !== undefined) {
      ScenarioLanguageEntity.encode(
        message.scriptLanguage,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioScriptEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioScriptEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.content = reader.string();
          break;
        case 10:
          message.scriptLanguageId = reader.string();
          break;
        case 11:
          message.scriptLanguage = ScenarioLanguageEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioScriptEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      scriptLanguageId: isSet(object.scriptLanguageId)
        ? String(object.scriptLanguageId)
        : undefined,
      scriptLanguage: isSet(object.scriptLanguage)
        ? ScenarioLanguageEntity.fromJSON(object.scriptLanguage)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ScenarioScriptEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.content !== undefined && (obj.content = message.content);
    message.scriptLanguageId !== undefined &&
      (obj.scriptLanguageId = message.scriptLanguageId);
    message.scriptLanguage !== undefined &&
      (obj.scriptLanguage = message.scriptLanguage
        ? ScenarioLanguageEntity.toJSON(message.scriptLanguage)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioScriptEntity>, I>>(
    base?: I
  ): ScenarioScriptEntity {
    return ScenarioScriptEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioScriptEntity>, I>>(
    object: I
  ): ScenarioScriptEntity {
    const message = createBaseScenarioScriptEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.content = object.content ?? undefined;
    message.scriptLanguageId = object.scriptLanguageId ?? undefined;
    message.scriptLanguage =
      object.scriptLanguage !== undefined && object.scriptLanguage !== null
        ? ScenarioLanguageEntity.fromPartial(object.scriptLanguage)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseScenarioLammerSequenceEntity(): ScenarioLammerSequenceEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    operationTypeId: undefined,
    operationType: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ScenarioLammerSequenceEntity = {
  encode(
    message: ScenarioLammerSequenceEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.operationTypeId !== undefined) {
      writer.uint32(74).string(message.operationTypeId);
    }
    if (message.operationType !== undefined) {
      ScenarioOperationTypeEntity.encode(
        message.operationType,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(88).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(96).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(104).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(114).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(122).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioLammerSequenceEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioLammerSequenceEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.operationTypeId = reader.string();
          break;
        case 10:
          message.operationType = ScenarioOperationTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.createdFormatted = reader.string();
          break;
        case 15:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioLammerSequenceEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      operationTypeId: isSet(object.operationTypeId)
        ? String(object.operationTypeId)
        : undefined,
      operationType: isSet(object.operationType)
        ? ScenarioOperationTypeEntity.fromJSON(object.operationType)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ScenarioLammerSequenceEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.operationTypeId !== undefined &&
      (obj.operationTypeId = message.operationTypeId);
    message.operationType !== undefined &&
      (obj.operationType = message.operationType
        ? ScenarioOperationTypeEntity.toJSON(message.operationType)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioLammerSequenceEntity>, I>>(
    base?: I
  ): ScenarioLammerSequenceEntity {
    return ScenarioLammerSequenceEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioLammerSequenceEntity>, I>>(
    object: I
  ): ScenarioLammerSequenceEntity {
    const message = createBaseScenarioLammerSequenceEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.operationTypeId = object.operationTypeId ?? undefined;
    message.operationType =
      object.operationType !== undefined && object.operationType !== null
        ? ScenarioOperationTypeEntity.fromPartial(object.operationType)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseScenarioLanguageCreateReply(): ScenarioLanguageCreateReply {
  return { data: undefined, error: undefined };
}

export const ScenarioLanguageCreateReply = {
  encode(
    message: ScenarioLanguageCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ScenarioLanguageEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioLanguageCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioLanguageCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ScenarioLanguageEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioLanguageCreateReply {
    return {
      data: isSet(object.data)
        ? ScenarioLanguageEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ScenarioLanguageCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ScenarioLanguageEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioLanguageCreateReply>, I>>(
    base?: I
  ): ScenarioLanguageCreateReply {
    return ScenarioLanguageCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioLanguageCreateReply>, I>>(
    object: I
  ): ScenarioLanguageCreateReply {
    const message = createBaseScenarioLanguageCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ScenarioLanguageEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseScenarioLanguageReply(): ScenarioLanguageReply {
  return { data: undefined, error: undefined };
}

export const ScenarioLanguageReply = {
  encode(
    message: ScenarioLanguageReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ScenarioLanguageEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioLanguageReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioLanguageReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ScenarioLanguageEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioLanguageReply {
    return {
      data: isSet(object.data)
        ? ScenarioLanguageEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ScenarioLanguageReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ScenarioLanguageEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioLanguageReply>, I>>(
    base?: I
  ): ScenarioLanguageReply {
    return ScenarioLanguageReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioLanguageReply>, I>>(
    object: I
  ): ScenarioLanguageReply {
    const message = createBaseScenarioLanguageReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ScenarioLanguageEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseScenarioLanguageQueryReply(): ScenarioLanguageQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ScenarioLanguageQueryReply = {
  encode(
    message: ScenarioLanguageQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ScenarioLanguageEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioLanguageQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioLanguageQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ScenarioLanguageEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioLanguageQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ScenarioLanguageEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ScenarioLanguageQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ScenarioLanguageEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioLanguageQueryReply>, I>>(
    base?: I
  ): ScenarioLanguageQueryReply {
    return ScenarioLanguageQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioLanguageQueryReply>, I>>(
    object: I
  ): ScenarioLanguageQueryReply {
    const message = createBaseScenarioLanguageQueryReply();
    message.items =
      object.items?.map((e) => ScenarioLanguageEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseScenarioLanguageEntity(): ScenarioLanguageEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ScenarioLanguageEntity = {
  encode(
    message: ScenarioLanguageEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(72).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(80).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(88).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(98).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(106).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioLanguageEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioLanguageEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.createdFormatted = reader.string();
          break;
        case 13:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioLanguageEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ScenarioLanguageEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioLanguageEntity>, I>>(
    base?: I
  ): ScenarioLanguageEntity {
    return ScenarioLanguageEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioLanguageEntity>, I>>(
    object: I
  ): ScenarioLanguageEntity {
    const message = createBaseScenarioLanguageEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseScenarioOperationTypeCreateReply(): ScenarioOperationTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const ScenarioOperationTypeCreateReply = {
  encode(
    message: ScenarioOperationTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ScenarioOperationTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioOperationTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioOperationTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ScenarioOperationTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioOperationTypeCreateReply {
    return {
      data: isSet(object.data)
        ? ScenarioOperationTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ScenarioOperationTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ScenarioOperationTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioOperationTypeCreateReply>, I>>(
    base?: I
  ): ScenarioOperationTypeCreateReply {
    return ScenarioOperationTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ScenarioOperationTypeCreateReply>, I>
  >(object: I): ScenarioOperationTypeCreateReply {
    const message = createBaseScenarioOperationTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ScenarioOperationTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseScenarioOperationTypeReply(): ScenarioOperationTypeReply {
  return { data: undefined, error: undefined };
}

export const ScenarioOperationTypeReply = {
  encode(
    message: ScenarioOperationTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ScenarioOperationTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioOperationTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioOperationTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ScenarioOperationTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioOperationTypeReply {
    return {
      data: isSet(object.data)
        ? ScenarioOperationTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ScenarioOperationTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ScenarioOperationTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioOperationTypeReply>, I>>(
    base?: I
  ): ScenarioOperationTypeReply {
    return ScenarioOperationTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioOperationTypeReply>, I>>(
    object: I
  ): ScenarioOperationTypeReply {
    const message = createBaseScenarioOperationTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ScenarioOperationTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseScenarioOperationTypeQueryReply(): ScenarioOperationTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ScenarioOperationTypeQueryReply = {
  encode(
    message: ScenarioOperationTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ScenarioOperationTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioOperationTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioOperationTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ScenarioOperationTypeEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioOperationTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ScenarioOperationTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ScenarioOperationTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ScenarioOperationTypeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioOperationTypeQueryReply>, I>>(
    base?: I
  ): ScenarioOperationTypeQueryReply {
    return ScenarioOperationTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioOperationTypeQueryReply>, I>>(
    object: I
  ): ScenarioOperationTypeQueryReply {
    const message = createBaseScenarioOperationTypeQueryReply();
    message.items =
      object.items?.map((e) => ScenarioOperationTypeEntity.fromPartial(e)) ||
      [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseScenarioOperationTypeEntity(): ScenarioOperationTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ScenarioOperationTypeEntity = {
  encode(
    message: ScenarioOperationTypeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      ScenarioOperationTypeEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioOperationTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioOperationTypeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            ScenarioOperationTypeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioOperationTypeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            ScenarioOperationTypeEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ScenarioOperationTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? ScenarioOperationTypeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioOperationTypeEntity>, I>>(
    base?: I
  ): ScenarioOperationTypeEntity {
    return ScenarioOperationTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScenarioOperationTypeEntity>, I>>(
    object: I
  ): ScenarioOperationTypeEntity {
    const message = createBaseScenarioOperationTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ScenarioOperationTypeEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseScenarioOperationTypeEntityPolyglot(): ScenarioOperationTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ScenarioOperationTypeEntityPolyglot = {
  encode(
    message: ScenarioOperationTypeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScenarioOperationTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenarioOperationTypeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScenarioOperationTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ScenarioOperationTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenarioOperationTypeEntityPolyglot>, I>>(
    base?: I
  ): ScenarioOperationTypeEntityPolyglot {
    return ScenarioOperationTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ScenarioOperationTypeEntityPolyglot>, I>
  >(object: I): ScenarioOperationTypeEntityPolyglot {
    const message = createBaseScenarioOperationTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseTriggerCreateReply(): TriggerCreateReply {
  return { data: undefined, error: undefined };
}

export const TriggerCreateReply = {
  encode(
    message: TriggerCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      TriggerEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = TriggerEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerCreateReply {
    return {
      data: isSet(object.data)
        ? TriggerEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TriggerCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? TriggerEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerCreateReply>, I>>(
    base?: I
  ): TriggerCreateReply {
    return TriggerCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerCreateReply>, I>>(
    object: I
  ): TriggerCreateReply {
    const message = createBaseTriggerCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? TriggerEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseTriggerReply(): TriggerReply {
  return { data: undefined, error: undefined };
}

export const TriggerReply = {
  encode(
    message: TriggerReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      TriggerEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = TriggerEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerReply {
    return {
      data: isSet(object.data)
        ? TriggerEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TriggerReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? TriggerEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerReply>, I>>(
    base?: I
  ): TriggerReply {
    return TriggerReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerReply>, I>>(
    object: I
  ): TriggerReply {
    const message = createBaseTriggerReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? TriggerEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseTriggerQueryReply(): TriggerQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const TriggerQueryReply = {
  encode(
    message: TriggerQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      TriggerEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TriggerEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => TriggerEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TriggerQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? TriggerEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerQueryReply>, I>>(
    base?: I
  ): TriggerQueryReply {
    return TriggerQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerQueryReply>, I>>(
    object: I
  ): TriggerQueryReply {
    const message = createBaseTriggerQueryReply();
    message.items =
      object.items?.map((e) => TriggerEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseTriggerEntity(): TriggerEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    triggerTypeId: undefined,
    triggerType: undefined,
    triggerTypeCronjob: undefined,
    triggerTypeGpioValue: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const TriggerEntity = {
  encode(
    message: TriggerEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      TriggerEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.triggerTypeId !== undefined) {
      writer.uint32(90).string(message.triggerTypeId);
    }
    if (message.triggerType !== undefined) {
      TriggerTypeEntity.encode(
        message.triggerType,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.triggerTypeCronjob !== undefined) {
      TriggerTriggerTypeCronjobEntity.encode(
        message.triggerTypeCronjob,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.triggerTypeGpioValue !== undefined) {
      TriggerTriggerTypeGpioValueEntity.encode(
        message.triggerTypeGpioValue,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(120).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(128).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(136).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(146).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(154).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            TriggerEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 11:
          message.triggerTypeId = reader.string();
          break;
        case 12:
          message.triggerType = TriggerTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.triggerTypeCronjob = TriggerTriggerTypeCronjobEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.triggerTypeGpioValue =
            TriggerTriggerTypeGpioValueEntity.decode(reader, reader.uint32());
          break;
        case 15:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.createdFormatted = reader.string();
          break;
        case 19:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) => TriggerEntityPolyglot.fromJSON(e))
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      triggerTypeId: isSet(object.triggerTypeId)
        ? String(object.triggerTypeId)
        : undefined,
      triggerType: isSet(object.triggerType)
        ? TriggerTypeEntity.fromJSON(object.triggerType)
        : undefined,
      triggerTypeCronjob: isSet(object.triggerTypeCronjob)
        ? TriggerTriggerTypeCronjobEntity.fromJSON(object.triggerTypeCronjob)
        : undefined,
      triggerTypeGpioValue: isSet(object.triggerTypeGpioValue)
        ? TriggerTriggerTypeGpioValueEntity.fromJSON(
            object.triggerTypeGpioValue
          )
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: TriggerEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? TriggerEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.triggerTypeId !== undefined &&
      (obj.triggerTypeId = message.triggerTypeId);
    message.triggerType !== undefined &&
      (obj.triggerType = message.triggerType
        ? TriggerTypeEntity.toJSON(message.triggerType)
        : undefined);
    message.triggerTypeCronjob !== undefined &&
      (obj.triggerTypeCronjob = message.triggerTypeCronjob
        ? TriggerTriggerTypeCronjobEntity.toJSON(message.triggerTypeCronjob)
        : undefined);
    message.triggerTypeGpioValue !== undefined &&
      (obj.triggerTypeGpioValue = message.triggerTypeGpioValue
        ? TriggerTriggerTypeGpioValueEntity.toJSON(message.triggerTypeGpioValue)
        : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerEntity>, I>>(
    base?: I
  ): TriggerEntity {
    return TriggerEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerEntity>, I>>(
    object: I
  ): TriggerEntity {
    const message = createBaseTriggerEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) => TriggerEntityPolyglot.fromPartial(e)) ||
      [];
    message.name = object.name ?? undefined;
    message.triggerTypeId = object.triggerTypeId ?? undefined;
    message.triggerType =
      object.triggerType !== undefined && object.triggerType !== null
        ? TriggerTypeEntity.fromPartial(object.triggerType)
        : undefined;
    message.triggerTypeCronjob =
      object.triggerTypeCronjob !== undefined &&
      object.triggerTypeCronjob !== null
        ? TriggerTriggerTypeCronjobEntity.fromPartial(object.triggerTypeCronjob)
        : undefined;
    message.triggerTypeGpioValue =
      object.triggerTypeGpioValue !== undefined &&
      object.triggerTypeGpioValue !== null
        ? TriggerTriggerTypeGpioValueEntity.fromPartial(
            object.triggerTypeGpioValue
          )
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseTriggerEntityPolyglot(): TriggerEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const TriggerEntityPolyglot = {
  encode(
    message: TriggerEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TriggerEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: TriggerEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerEntityPolyglot>, I>>(
    base?: I
  ): TriggerEntityPolyglot {
    return TriggerEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerEntityPolyglot>, I>>(
    object: I
  ): TriggerEntityPolyglot {
    const message = createBaseTriggerEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseTriggerTriggerTypeCronjobEntity(): TriggerTriggerTypeCronjobEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    expression: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const TriggerTriggerTypeCronjobEntity = {
  encode(
    message: TriggerTriggerTypeCronjobEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.expression !== undefined) {
      writer.uint32(66).string(message.expression);
    }
    if (message.rank !== 0) {
      writer.uint32(72).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(80).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(88).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(98).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(106).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TriggerTriggerTypeCronjobEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTriggerTypeCronjobEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.expression = reader.string();
          break;
        case 9:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.createdFormatted = reader.string();
          break;
        case 13:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerTriggerTypeCronjobEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      expression: isSet(object.expression)
        ? String(object.expression)
        : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: TriggerTriggerTypeCronjobEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.expression !== undefined && (obj.expression = message.expression);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerTriggerTypeCronjobEntity>, I>>(
    base?: I
  ): TriggerTriggerTypeCronjobEntity {
    return TriggerTriggerTypeCronjobEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerTriggerTypeCronjobEntity>, I>>(
    object: I
  ): TriggerTriggerTypeCronjobEntity {
    const message = createBaseTriggerTriggerTypeCronjobEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.expression = object.expression ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseTriggerTriggerTypeGpioValueEntity(): TriggerTriggerTypeGpioValueEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    gpioId: undefined,
    gpio: undefined,
    compareTypeId: undefined,
    compareType: undefined,
    compareValueInt: undefined,
    compareValueString: undefined,
    compareValueFloat: undefined,
    thresholdPrecentage: undefined,
    beginHour: undefined,
    endHour: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const TriggerTriggerTypeGpioValueEntity = {
  encode(
    message: TriggerTriggerTypeGpioValueEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.gpioId !== undefined) {
      writer.uint32(74).string(message.gpioId);
    }
    if (message.gpio !== undefined) {
      GpioEntity.encode(message.gpio, writer.uint32(82).fork()).ldelim();
    }
    if (message.compareTypeId !== undefined) {
      writer.uint32(98).string(message.compareTypeId);
    }
    if (message.compareType !== undefined) {
      ComparisonTypeEntity.encode(
        message.compareType,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.compareValueInt !== undefined) {
      writer.uint32(112).int64(message.compareValueInt);
    }
    if (message.compareValueString !== undefined) {
      writer.uint32(120).int64(message.compareValueString);
    }
    if (message.compareValueFloat !== undefined) {
      writer.uint32(129).double(message.compareValueFloat);
    }
    if (message.thresholdPrecentage !== undefined) {
      writer.uint32(137).double(message.thresholdPrecentage);
    }
    if (message.beginHour !== undefined) {
      writer.uint32(144).int64(message.beginHour);
    }
    if (message.endHour !== undefined) {
      writer.uint32(152).int64(message.endHour);
    }
    if (message.rank !== 0) {
      writer.uint32(160).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(168).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(176).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(186).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(194).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TriggerTriggerTypeGpioValueEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTriggerTypeGpioValueEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 9:
          message.gpioId = reader.string();
          break;
        case 10:
          message.gpio = GpioEntity.decode(reader, reader.uint32());
          break;
        case 12:
          message.compareTypeId = reader.string();
          break;
        case 13:
          message.compareType = ComparisonTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.compareValueInt = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.compareValueString = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.compareValueFloat = reader.double();
          break;
        case 17:
          message.thresholdPrecentage = reader.double();
          break;
        case 18:
          message.beginHour = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.endHour = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.createdFormatted = reader.string();
          break;
        case 24:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerTriggerTypeGpioValueEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      gpioId: isSet(object.gpioId) ? String(object.gpioId) : undefined,
      gpio: isSet(object.gpio) ? GpioEntity.fromJSON(object.gpio) : undefined,
      compareTypeId: isSet(object.compareTypeId)
        ? String(object.compareTypeId)
        : undefined,
      compareType: isSet(object.compareType)
        ? ComparisonTypeEntity.fromJSON(object.compareType)
        : undefined,
      compareValueInt: isSet(object.compareValueInt)
        ? Number(object.compareValueInt)
        : undefined,
      compareValueString: isSet(object.compareValueString)
        ? Number(object.compareValueString)
        : undefined,
      compareValueFloat: isSet(object.compareValueFloat)
        ? Number(object.compareValueFloat)
        : undefined,
      thresholdPrecentage: isSet(object.thresholdPrecentage)
        ? Number(object.thresholdPrecentage)
        : undefined,
      beginHour: isSet(object.beginHour) ? Number(object.beginHour) : undefined,
      endHour: isSet(object.endHour) ? Number(object.endHour) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: TriggerTriggerTypeGpioValueEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.gpioId !== undefined && (obj.gpioId = message.gpioId);
    message.gpio !== undefined &&
      (obj.gpio = message.gpio ? GpioEntity.toJSON(message.gpio) : undefined);
    message.compareTypeId !== undefined &&
      (obj.compareTypeId = message.compareTypeId);
    message.compareType !== undefined &&
      (obj.compareType = message.compareType
        ? ComparisonTypeEntity.toJSON(message.compareType)
        : undefined);
    message.compareValueInt !== undefined &&
      (obj.compareValueInt = Math.round(message.compareValueInt));
    message.compareValueString !== undefined &&
      (obj.compareValueString = Math.round(message.compareValueString));
    message.compareValueFloat !== undefined &&
      (obj.compareValueFloat = message.compareValueFloat);
    message.thresholdPrecentage !== undefined &&
      (obj.thresholdPrecentage = message.thresholdPrecentage);
    message.beginHour !== undefined &&
      (obj.beginHour = Math.round(message.beginHour));
    message.endHour !== undefined &&
      (obj.endHour = Math.round(message.endHour));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerTriggerTypeGpioValueEntity>, I>>(
    base?: I
  ): TriggerTriggerTypeGpioValueEntity {
    return TriggerTriggerTypeGpioValueEntity.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<TriggerTriggerTypeGpioValueEntity>, I>
  >(object: I): TriggerTriggerTypeGpioValueEntity {
    const message = createBaseTriggerTriggerTypeGpioValueEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.gpioId = object.gpioId ?? undefined;
    message.gpio =
      object.gpio !== undefined && object.gpio !== null
        ? GpioEntity.fromPartial(object.gpio)
        : undefined;
    message.compareTypeId = object.compareTypeId ?? undefined;
    message.compareType =
      object.compareType !== undefined && object.compareType !== null
        ? ComparisonTypeEntity.fromPartial(object.compareType)
        : undefined;
    message.compareValueInt = object.compareValueInt ?? undefined;
    message.compareValueString = object.compareValueString ?? undefined;
    message.compareValueFloat = object.compareValueFloat ?? undefined;
    message.thresholdPrecentage = object.thresholdPrecentage ?? undefined;
    message.beginHour = object.beginHour ?? undefined;
    message.endHour = object.endHour ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseTriggerTypeCreateReply(): TriggerTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const TriggerTypeCreateReply = {
  encode(
    message: TriggerTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      TriggerTypeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TriggerTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = TriggerTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerTypeCreateReply {
    return {
      data: isSet(object.data)
        ? TriggerTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TriggerTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? TriggerTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerTypeCreateReply>, I>>(
    base?: I
  ): TriggerTypeCreateReply {
    return TriggerTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerTypeCreateReply>, I>>(
    object: I
  ): TriggerTypeCreateReply {
    const message = createBaseTriggerTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? TriggerTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseTriggerTypeReply(): TriggerTypeReply {
  return { data: undefined, error: undefined };
}

export const TriggerTypeReply = {
  encode(
    message: TriggerTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      TriggerTypeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = TriggerTypeEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerTypeReply {
    return {
      data: isSet(object.data)
        ? TriggerTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TriggerTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? TriggerTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerTypeReply>, I>>(
    base?: I
  ): TriggerTypeReply {
    return TriggerTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerTypeReply>, I>>(
    object: I
  ): TriggerTypeReply {
    const message = createBaseTriggerTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? TriggerTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseTriggerTypeQueryReply(): TriggerTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const TriggerTypeQueryReply = {
  encode(
    message: TriggerTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      TriggerTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TriggerTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TriggerTypeEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => TriggerTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TriggerTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? TriggerTypeEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerTypeQueryReply>, I>>(
    base?: I
  ): TriggerTypeQueryReply {
    return TriggerTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerTypeQueryReply>, I>>(
    object: I
  ): TriggerTypeQueryReply {
    const message = createBaseTriggerTypeQueryReply();
    message.items =
      object.items?.map((e) => TriggerTypeEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseTriggerTypeEntity(): TriggerTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const TriggerTypeEntity = {
  encode(
    message: TriggerTypeEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      TriggerTypeEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTypeEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            TriggerTypeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerTypeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            TriggerTypeEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: TriggerTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? TriggerTypeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerTypeEntity>, I>>(
    base?: I
  ): TriggerTypeEntity {
    return TriggerTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerTypeEntity>, I>>(
    object: I
  ): TriggerTypeEntity {
    const message = createBaseTriggerTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        TriggerTypeEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseTriggerTypeEntityPolyglot(): TriggerTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const TriggerTypeEntityPolyglot = {
  encode(
    message: TriggerTypeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TriggerTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTypeEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: TriggerTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerTypeEntityPolyglot>, I>>(
    base?: I
  ): TriggerTypeEntityPolyglot {
    return TriggerTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TriggerTypeEntityPolyglot>, I>>(
    object: I
  ): TriggerTypeEntityPolyglot {
    const message = createBaseTriggerTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

export interface ComparisonTypes {
  ComparisonTypeActionCreate(
    request: ComparisonTypeEntity
  ): Promise<ComparisonTypeCreateReply>;
  ComparisonTypeActionUpdate(
    request: ComparisonTypeEntity
  ): Promise<ComparisonTypeCreateReply>;
  ComparisonTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ComparisonTypeQueryReply>;
  ComparisonTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ComparisonTypeReply>;
  ComparisonTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ComparisonTypesClientImpl implements ComparisonTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ComparisonTypes";
    this.rpc = rpc;
    this.ComparisonTypeActionCreate =
      this.ComparisonTypeActionCreate.bind(this);
    this.ComparisonTypeActionUpdate =
      this.ComparisonTypeActionUpdate.bind(this);
    this.ComparisonTypeActionQuery = this.ComparisonTypeActionQuery.bind(this);
    this.ComparisonTypeActionGetOne =
      this.ComparisonTypeActionGetOne.bind(this);
    this.ComparisonTypeActionRemove =
      this.ComparisonTypeActionRemove.bind(this);
  }
  ComparisonTypeActionCreate(
    request: ComparisonTypeEntity
  ): Promise<ComparisonTypeCreateReply> {
    const data = ComparisonTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ComparisonTypeActionCreate",
      data
    );
    return promise.then((data) =>
      ComparisonTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ComparisonTypeActionUpdate(
    request: ComparisonTypeEntity
  ): Promise<ComparisonTypeCreateReply> {
    const data = ComparisonTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ComparisonTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      ComparisonTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ComparisonTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ComparisonTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ComparisonTypeActionQuery",
      data
    );
    return promise.then((data) =>
      ComparisonTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  ComparisonTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ComparisonTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ComparisonTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      ComparisonTypeReply.decode(new _m0.Reader(data))
    );
  }

  ComparisonTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ComparisonTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface DataNodes {
  DataNodeActionCreate(request: DataNodeEntity): Promise<DataNodeCreateReply>;
  DataNodeActionUpdate(request: DataNodeEntity): Promise<DataNodeCreateReply>;
  DataNodeActionQuery(request: QueryFilterRequest): Promise<DataNodeQueryReply>;
  DataNodeActionGetOne(request: QueryFilterRequest): Promise<DataNodeReply>;
  DataNodeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class DataNodesClientImpl implements DataNodes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "DataNodes";
    this.rpc = rpc;
    this.DataNodeActionCreate = this.DataNodeActionCreate.bind(this);
    this.DataNodeActionUpdate = this.DataNodeActionUpdate.bind(this);
    this.DataNodeActionQuery = this.DataNodeActionQuery.bind(this);
    this.DataNodeActionGetOne = this.DataNodeActionGetOne.bind(this);
    this.DataNodeActionRemove = this.DataNodeActionRemove.bind(this);
  }
  DataNodeActionCreate(request: DataNodeEntity): Promise<DataNodeCreateReply> {
    const data = DataNodeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeActionCreate",
      data
    );
    return promise.then((data) =>
      DataNodeCreateReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeActionUpdate(request: DataNodeEntity): Promise<DataNodeCreateReply> {
    const data = DataNodeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeActionUpdate",
      data
    );
    return promise.then((data) =>
      DataNodeCreateReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeActionQuery(
    request: QueryFilterRequest
  ): Promise<DataNodeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DataNodeActionQuery", data);
    return promise.then((data) =>
      DataNodeQueryReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeActionGetOne(request: QueryFilterRequest): Promise<DataNodeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeActionGetOne",
      data
    );
    return promise.then((data) => DataNodeReply.decode(new _m0.Reader(data)));
  }

  DataNodeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface DataNodeModes {
  DataNodeModeActionCreate(
    request: DataNodeModeEntity
  ): Promise<DataNodeModeCreateReply>;
  DataNodeModeActionUpdate(
    request: DataNodeModeEntity
  ): Promise<DataNodeModeCreateReply>;
  DataNodeModeActionQuery(
    request: QueryFilterRequest
  ): Promise<DataNodeModeQueryReply>;
  DataNodeModeActionGetOne(
    request: QueryFilterRequest
  ): Promise<DataNodeModeReply>;
  DataNodeModeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class DataNodeModesClientImpl implements DataNodeModes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "DataNodeModes";
    this.rpc = rpc;
    this.DataNodeModeActionCreate = this.DataNodeModeActionCreate.bind(this);
    this.DataNodeModeActionUpdate = this.DataNodeModeActionUpdate.bind(this);
    this.DataNodeModeActionQuery = this.DataNodeModeActionQuery.bind(this);
    this.DataNodeModeActionGetOne = this.DataNodeModeActionGetOne.bind(this);
    this.DataNodeModeActionRemove = this.DataNodeModeActionRemove.bind(this);
  }
  DataNodeModeActionCreate(
    request: DataNodeModeEntity
  ): Promise<DataNodeModeCreateReply> {
    const data = DataNodeModeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeModeActionCreate",
      data
    );
    return promise.then((data) =>
      DataNodeModeCreateReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeModeActionUpdate(
    request: DataNodeModeEntity
  ): Promise<DataNodeModeCreateReply> {
    const data = DataNodeModeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeModeActionUpdate",
      data
    );
    return promise.then((data) =>
      DataNodeModeCreateReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeModeActionQuery(
    request: QueryFilterRequest
  ): Promise<DataNodeModeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeModeActionQuery",
      data
    );
    return promise.then((data) =>
      DataNodeModeQueryReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeModeActionGetOne(
    request: QueryFilterRequest
  ): Promise<DataNodeModeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeModeActionGetOne",
      data
    );
    return promise.then((data) =>
      DataNodeModeReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeModeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeModeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface DataNodeTypes {
  DataNodeTypeActionCreate(
    request: DataNodeTypeEntity
  ): Promise<DataNodeTypeCreateReply>;
  DataNodeTypeActionUpdate(
    request: DataNodeTypeEntity
  ): Promise<DataNodeTypeCreateReply>;
  DataNodeTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<DataNodeTypeQueryReply>;
  DataNodeTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<DataNodeTypeReply>;
  DataNodeTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class DataNodeTypesClientImpl implements DataNodeTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "DataNodeTypes";
    this.rpc = rpc;
    this.DataNodeTypeActionCreate = this.DataNodeTypeActionCreate.bind(this);
    this.DataNodeTypeActionUpdate = this.DataNodeTypeActionUpdate.bind(this);
    this.DataNodeTypeActionQuery = this.DataNodeTypeActionQuery.bind(this);
    this.DataNodeTypeActionGetOne = this.DataNodeTypeActionGetOne.bind(this);
    this.DataNodeTypeActionRemove = this.DataNodeTypeActionRemove.bind(this);
  }
  DataNodeTypeActionCreate(
    request: DataNodeTypeEntity
  ): Promise<DataNodeTypeCreateReply> {
    const data = DataNodeTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeTypeActionCreate",
      data
    );
    return promise.then((data) =>
      DataNodeTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeTypeActionUpdate(
    request: DataNodeTypeEntity
  ): Promise<DataNodeTypeCreateReply> {
    const data = DataNodeTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      DataNodeTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<DataNodeTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeTypeActionQuery",
      data
    );
    return promise.then((data) =>
      DataNodeTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<DataNodeTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      DataNodeTypeReply.decode(new _m0.Reader(data))
    );
  }

  DataNodeTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DataNodeTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Devices {
  DeviceActionCreate(request: DeviceEntity): Promise<DeviceCreateReply>;
  DeviceActionUpdate(request: DeviceEntity): Promise<DeviceCreateReply>;
  DeviceActionQuery(request: QueryFilterRequest): Promise<DeviceQueryReply>;
  DeviceActionGetOne(request: QueryFilterRequest): Promise<DeviceReply>;
  DeviceActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class DevicesClientImpl implements Devices {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Devices";
    this.rpc = rpc;
    this.DeviceActionCreate = this.DeviceActionCreate.bind(this);
    this.DeviceActionUpdate = this.DeviceActionUpdate.bind(this);
    this.DeviceActionQuery = this.DeviceActionQuery.bind(this);
    this.DeviceActionGetOne = this.DeviceActionGetOne.bind(this);
    this.DeviceActionRemove = this.DeviceActionRemove.bind(this);
  }
  DeviceActionCreate(request: DeviceEntity): Promise<DeviceCreateReply> {
    const data = DeviceEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeviceActionCreate", data);
    return promise.then((data) =>
      DeviceCreateReply.decode(new _m0.Reader(data))
    );
  }

  DeviceActionUpdate(request: DeviceEntity): Promise<DeviceCreateReply> {
    const data = DeviceEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeviceActionUpdate", data);
    return promise.then((data) =>
      DeviceCreateReply.decode(new _m0.Reader(data))
    );
  }

  DeviceActionQuery(request: QueryFilterRequest): Promise<DeviceQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeviceActionQuery", data);
    return promise.then((data) =>
      DeviceQueryReply.decode(new _m0.Reader(data))
    );
  }

  DeviceActionGetOne(request: QueryFilterRequest): Promise<DeviceReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeviceActionGetOne", data);
    return promise.then((data) => DeviceReply.decode(new _m0.Reader(data)));
  }

  DeviceActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeviceActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface DeviceTypes {
  DeviceTypeActionCreate(
    request: DeviceTypeEntity
  ): Promise<DeviceTypeCreateReply>;
  DeviceTypeActionUpdate(
    request: DeviceTypeEntity
  ): Promise<DeviceTypeCreateReply>;
  DeviceTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<DeviceTypeQueryReply>;
  DeviceTypeActionGetOne(request: QueryFilterRequest): Promise<DeviceTypeReply>;
  DeviceTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class DeviceTypesClientImpl implements DeviceTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "DeviceTypes";
    this.rpc = rpc;
    this.DeviceTypeActionCreate = this.DeviceTypeActionCreate.bind(this);
    this.DeviceTypeActionUpdate = this.DeviceTypeActionUpdate.bind(this);
    this.DeviceTypeActionQuery = this.DeviceTypeActionQuery.bind(this);
    this.DeviceTypeActionGetOne = this.DeviceTypeActionGetOne.bind(this);
    this.DeviceTypeActionRemove = this.DeviceTypeActionRemove.bind(this);
  }
  DeviceTypeActionCreate(
    request: DeviceTypeEntity
  ): Promise<DeviceTypeCreateReply> {
    const data = DeviceTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DeviceTypeActionCreate",
      data
    );
    return promise.then((data) =>
      DeviceTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  DeviceTypeActionUpdate(
    request: DeviceTypeEntity
  ): Promise<DeviceTypeCreateReply> {
    const data = DeviceTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DeviceTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      DeviceTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  DeviceTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<DeviceTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DeviceTypeActionQuery",
      data
    );
    return promise.then((data) =>
      DeviceTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  DeviceTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<DeviceTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DeviceTypeActionGetOne",
      data
    );
    return promise.then((data) => DeviceTypeReply.decode(new _m0.Reader(data)));
  }

  DeviceTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DeviceTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Gpios {
  GpioActionCreate(request: GpioEntity): Promise<GpioCreateReply>;
  GpioActionUpdate(request: GpioEntity): Promise<GpioCreateReply>;
  GpioActionQuery(request: QueryFilterRequest): Promise<GpioQueryReply>;
  GpioActionGetOne(request: QueryFilterRequest): Promise<GpioReply>;
  GpioActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class GpiosClientImpl implements Gpios {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Gpios";
    this.rpc = rpc;
    this.GpioActionCreate = this.GpioActionCreate.bind(this);
    this.GpioActionUpdate = this.GpioActionUpdate.bind(this);
    this.GpioActionQuery = this.GpioActionQuery.bind(this);
    this.GpioActionGetOne = this.GpioActionGetOne.bind(this);
    this.GpioActionRemove = this.GpioActionRemove.bind(this);
  }
  GpioActionCreate(request: GpioEntity): Promise<GpioCreateReply> {
    const data = GpioEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "GpioActionCreate", data);
    return promise.then((data) => GpioCreateReply.decode(new _m0.Reader(data)));
  }

  GpioActionUpdate(request: GpioEntity): Promise<GpioCreateReply> {
    const data = GpioEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "GpioActionUpdate", data);
    return promise.then((data) => GpioCreateReply.decode(new _m0.Reader(data)));
  }

  GpioActionQuery(request: QueryFilterRequest): Promise<GpioQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GpioActionQuery", data);
    return promise.then((data) => GpioQueryReply.decode(new _m0.Reader(data)));
  }

  GpioActionGetOne(request: QueryFilterRequest): Promise<GpioReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GpioActionGetOne", data);
    return promise.then((data) => GpioReply.decode(new _m0.Reader(data)));
  }

  GpioActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GpioActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface GpioModes {
  GpioModeActionCreate(request: GpioModeEntity): Promise<GpioModeCreateReply>;
  GpioModeActionUpdate(request: GpioModeEntity): Promise<GpioModeCreateReply>;
  GpioModeActionQuery(request: QueryFilterRequest): Promise<GpioModeQueryReply>;
  GpioModeActionGetOne(request: QueryFilterRequest): Promise<GpioModeReply>;
  GpioModeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class GpioModesClientImpl implements GpioModes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GpioModes";
    this.rpc = rpc;
    this.GpioModeActionCreate = this.GpioModeActionCreate.bind(this);
    this.GpioModeActionUpdate = this.GpioModeActionUpdate.bind(this);
    this.GpioModeActionQuery = this.GpioModeActionQuery.bind(this);
    this.GpioModeActionGetOne = this.GpioModeActionGetOne.bind(this);
    this.GpioModeActionRemove = this.GpioModeActionRemove.bind(this);
  }
  GpioModeActionCreate(request: GpioModeEntity): Promise<GpioModeCreateReply> {
    const data = GpioModeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GpioModeActionCreate",
      data
    );
    return promise.then((data) =>
      GpioModeCreateReply.decode(new _m0.Reader(data))
    );
  }

  GpioModeActionUpdate(request: GpioModeEntity): Promise<GpioModeCreateReply> {
    const data = GpioModeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GpioModeActionUpdate",
      data
    );
    return promise.then((data) =>
      GpioModeCreateReply.decode(new _m0.Reader(data))
    );
  }

  GpioModeActionQuery(
    request: QueryFilterRequest
  ): Promise<GpioModeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GpioModeActionQuery", data);
    return promise.then((data) =>
      GpioModeQueryReply.decode(new _m0.Reader(data))
    );
  }

  GpioModeActionGetOne(request: QueryFilterRequest): Promise<GpioModeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GpioModeActionGetOne",
      data
    );
    return promise.then((data) => GpioModeReply.decode(new _m0.Reader(data)));
  }

  GpioModeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GpioModeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface GpioStates {
  GpioStateActionCreate(
    request: GpioStateEntity
  ): Promise<GpioStateCreateReply>;
  GpioStateActionUpdate(
    request: GpioStateEntity
  ): Promise<GpioStateCreateReply>;
  GpioStateActionQuery(
    request: QueryFilterRequest
  ): Promise<GpioStateQueryReply>;
  GpioStateActionGetOne(request: QueryFilterRequest): Promise<GpioStateReply>;
  GpioStateActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class GpioStatesClientImpl implements GpioStates {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GpioStates";
    this.rpc = rpc;
    this.GpioStateActionCreate = this.GpioStateActionCreate.bind(this);
    this.GpioStateActionUpdate = this.GpioStateActionUpdate.bind(this);
    this.GpioStateActionQuery = this.GpioStateActionQuery.bind(this);
    this.GpioStateActionGetOne = this.GpioStateActionGetOne.bind(this);
    this.GpioStateActionRemove = this.GpioStateActionRemove.bind(this);
  }
  GpioStateActionCreate(
    request: GpioStateEntity
  ): Promise<GpioStateCreateReply> {
    const data = GpioStateEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GpioStateActionCreate",
      data
    );
    return promise.then((data) =>
      GpioStateCreateReply.decode(new _m0.Reader(data))
    );
  }

  GpioStateActionUpdate(
    request: GpioStateEntity
  ): Promise<GpioStateCreateReply> {
    const data = GpioStateEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GpioStateActionUpdate",
      data
    );
    return promise.then((data) =>
      GpioStateCreateReply.decode(new _m0.Reader(data))
    );
  }

  GpioStateActionQuery(
    request: QueryFilterRequest
  ): Promise<GpioStateQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GpioStateActionQuery",
      data
    );
    return promise.then((data) =>
      GpioStateQueryReply.decode(new _m0.Reader(data))
    );
  }

  GpioStateActionGetOne(request: QueryFilterRequest): Promise<GpioStateReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GpioStateActionGetOne",
      data
    );
    return promise.then((data) => GpioStateReply.decode(new _m0.Reader(data)));
  }

  GpioStateActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GpioStateActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface MemoryStats {
  MemoryStatActionCreate(
    request: MemoryStatEntity
  ): Promise<MemoryStatCreateReply>;
  MemoryStatActionUpdate(
    request: MemoryStatEntity
  ): Promise<MemoryStatCreateReply>;
  MemoryStatActionQuery(
    request: QueryFilterRequest
  ): Promise<MemoryStatQueryReply>;
  MemoryStatActionGetOne(request: QueryFilterRequest): Promise<MemoryStatReply>;
  MemoryStatActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class MemoryStatsClientImpl implements MemoryStats {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "MemoryStats";
    this.rpc = rpc;
    this.MemoryStatActionCreate = this.MemoryStatActionCreate.bind(this);
    this.MemoryStatActionUpdate = this.MemoryStatActionUpdate.bind(this);
    this.MemoryStatActionQuery = this.MemoryStatActionQuery.bind(this);
    this.MemoryStatActionGetOne = this.MemoryStatActionGetOne.bind(this);
    this.MemoryStatActionRemove = this.MemoryStatActionRemove.bind(this);
  }
  MemoryStatActionCreate(
    request: MemoryStatEntity
  ): Promise<MemoryStatCreateReply> {
    const data = MemoryStatEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MemoryStatActionCreate",
      data
    );
    return promise.then((data) =>
      MemoryStatCreateReply.decode(new _m0.Reader(data))
    );
  }

  MemoryStatActionUpdate(
    request: MemoryStatEntity
  ): Promise<MemoryStatCreateReply> {
    const data = MemoryStatEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MemoryStatActionUpdate",
      data
    );
    return promise.then((data) =>
      MemoryStatCreateReply.decode(new _m0.Reader(data))
    );
  }

  MemoryStatActionQuery(
    request: QueryFilterRequest
  ): Promise<MemoryStatQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MemoryStatActionQuery",
      data
    );
    return promise.then((data) =>
      MemoryStatQueryReply.decode(new _m0.Reader(data))
    );
  }

  MemoryStatActionGetOne(
    request: QueryFilterRequest
  ): Promise<MemoryStatReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MemoryStatActionGetOne",
      data
    );
    return promise.then((data) => MemoryStatReply.decode(new _m0.Reader(data)));
  }

  MemoryStatActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MemoryStatActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ModbusConnectionTypes {
  ModbusConnectionTypeActionCreate(
    request: ModbusConnectionTypeEntity
  ): Promise<ModbusConnectionTypeCreateReply>;
  ModbusConnectionTypeActionUpdate(
    request: ModbusConnectionTypeEntity
  ): Promise<ModbusConnectionTypeCreateReply>;
  ModbusConnectionTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusConnectionTypeQueryReply>;
  ModbusConnectionTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ModbusConnectionTypeReply>;
  ModbusConnectionTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class ModbusConnectionTypesClientImpl implements ModbusConnectionTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ModbusConnectionTypes";
    this.rpc = rpc;
    this.ModbusConnectionTypeActionCreate =
      this.ModbusConnectionTypeActionCreate.bind(this);
    this.ModbusConnectionTypeActionUpdate =
      this.ModbusConnectionTypeActionUpdate.bind(this);
    this.ModbusConnectionTypeActionQuery =
      this.ModbusConnectionTypeActionQuery.bind(this);
    this.ModbusConnectionTypeActionGetOne =
      this.ModbusConnectionTypeActionGetOne.bind(this);
    this.ModbusConnectionTypeActionRemove =
      this.ModbusConnectionTypeActionRemove.bind(this);
  }
  ModbusConnectionTypeActionCreate(
    request: ModbusConnectionTypeEntity
  ): Promise<ModbusConnectionTypeCreateReply> {
    const data = ModbusConnectionTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusConnectionTypeActionCreate",
      data
    );
    return promise.then((data) =>
      ModbusConnectionTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusConnectionTypeActionUpdate(
    request: ModbusConnectionTypeEntity
  ): Promise<ModbusConnectionTypeCreateReply> {
    const data = ModbusConnectionTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusConnectionTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      ModbusConnectionTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusConnectionTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusConnectionTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusConnectionTypeActionQuery",
      data
    );
    return promise.then((data) =>
      ModbusConnectionTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  ModbusConnectionTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ModbusConnectionTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusConnectionTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      ModbusConnectionTypeReply.decode(new _m0.Reader(data))
    );
  }

  ModbusConnectionTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusConnectionTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ModbusFunctionCodes {
  ModbusFunctionCodeActionCreate(
    request: ModbusFunctionCodeEntity
  ): Promise<ModbusFunctionCodeCreateReply>;
  ModbusFunctionCodeActionUpdate(
    request: ModbusFunctionCodeEntity
  ): Promise<ModbusFunctionCodeCreateReply>;
  ModbusFunctionCodeActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusFunctionCodeQueryReply>;
  ModbusFunctionCodeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ModbusFunctionCodeReply>;
  ModbusFunctionCodeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class ModbusFunctionCodesClientImpl implements ModbusFunctionCodes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ModbusFunctionCodes";
    this.rpc = rpc;
    this.ModbusFunctionCodeActionCreate =
      this.ModbusFunctionCodeActionCreate.bind(this);
    this.ModbusFunctionCodeActionUpdate =
      this.ModbusFunctionCodeActionUpdate.bind(this);
    this.ModbusFunctionCodeActionQuery =
      this.ModbusFunctionCodeActionQuery.bind(this);
    this.ModbusFunctionCodeActionGetOne =
      this.ModbusFunctionCodeActionGetOne.bind(this);
    this.ModbusFunctionCodeActionRemove =
      this.ModbusFunctionCodeActionRemove.bind(this);
  }
  ModbusFunctionCodeActionCreate(
    request: ModbusFunctionCodeEntity
  ): Promise<ModbusFunctionCodeCreateReply> {
    const data = ModbusFunctionCodeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusFunctionCodeActionCreate",
      data
    );
    return promise.then((data) =>
      ModbusFunctionCodeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusFunctionCodeActionUpdate(
    request: ModbusFunctionCodeEntity
  ): Promise<ModbusFunctionCodeCreateReply> {
    const data = ModbusFunctionCodeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusFunctionCodeActionUpdate",
      data
    );
    return promise.then((data) =>
      ModbusFunctionCodeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusFunctionCodeActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusFunctionCodeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusFunctionCodeActionQuery",
      data
    );
    return promise.then((data) =>
      ModbusFunctionCodeQueryReply.decode(new _m0.Reader(data))
    );
  }

  ModbusFunctionCodeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ModbusFunctionCodeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusFunctionCodeActionGetOne",
      data
    );
    return promise.then((data) =>
      ModbusFunctionCodeReply.decode(new _m0.Reader(data))
    );
  }

  ModbusFunctionCodeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusFunctionCodeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ModbusTasks {
  ModbusTaskActionCreate(
    request: ModbusTaskEntity
  ): Promise<ModbusTaskCreateReply>;
  ModbusTaskActionUpdate(
    request: ModbusTaskEntity
  ): Promise<ModbusTaskCreateReply>;
  ModbusTaskActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusTaskQueryReply>;
  ModbusTaskActionGetOne(request: QueryFilterRequest): Promise<ModbusTaskReply>;
  ModbusTaskActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ModbusTasksClientImpl implements ModbusTasks {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ModbusTasks";
    this.rpc = rpc;
    this.ModbusTaskActionCreate = this.ModbusTaskActionCreate.bind(this);
    this.ModbusTaskActionUpdate = this.ModbusTaskActionUpdate.bind(this);
    this.ModbusTaskActionQuery = this.ModbusTaskActionQuery.bind(this);
    this.ModbusTaskActionGetOne = this.ModbusTaskActionGetOne.bind(this);
    this.ModbusTaskActionRemove = this.ModbusTaskActionRemove.bind(this);
  }
  ModbusTaskActionCreate(
    request: ModbusTaskEntity
  ): Promise<ModbusTaskCreateReply> {
    const data = ModbusTaskEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTaskActionCreate",
      data
    );
    return promise.then((data) =>
      ModbusTaskCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusTaskActionUpdate(
    request: ModbusTaskEntity
  ): Promise<ModbusTaskCreateReply> {
    const data = ModbusTaskEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTaskActionUpdate",
      data
    );
    return promise.then((data) =>
      ModbusTaskCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusTaskActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusTaskQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTaskActionQuery",
      data
    );
    return promise.then((data) =>
      ModbusTaskQueryReply.decode(new _m0.Reader(data))
    );
  }

  ModbusTaskActionGetOne(
    request: QueryFilterRequest
  ): Promise<ModbusTaskReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTaskActionGetOne",
      data
    );
    return promise.then((data) => ModbusTaskReply.decode(new _m0.Reader(data)));
  }

  ModbusTaskActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTaskActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ModbusTransmissionModes {
  ModbusTransmissionModeActionCreate(
    request: ModbusTransmissionModeEntity
  ): Promise<ModbusTransmissionModeCreateReply>;
  ModbusTransmissionModeActionUpdate(
    request: ModbusTransmissionModeEntity
  ): Promise<ModbusTransmissionModeCreateReply>;
  ModbusTransmissionModeActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusTransmissionModeQueryReply>;
  ModbusTransmissionModeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ModbusTransmissionModeReply>;
  ModbusTransmissionModeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class ModbusTransmissionModesClientImpl
  implements ModbusTransmissionModes
{
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ModbusTransmissionModes";
    this.rpc = rpc;
    this.ModbusTransmissionModeActionCreate =
      this.ModbusTransmissionModeActionCreate.bind(this);
    this.ModbusTransmissionModeActionUpdate =
      this.ModbusTransmissionModeActionUpdate.bind(this);
    this.ModbusTransmissionModeActionQuery =
      this.ModbusTransmissionModeActionQuery.bind(this);
    this.ModbusTransmissionModeActionGetOne =
      this.ModbusTransmissionModeActionGetOne.bind(this);
    this.ModbusTransmissionModeActionRemove =
      this.ModbusTransmissionModeActionRemove.bind(this);
  }
  ModbusTransmissionModeActionCreate(
    request: ModbusTransmissionModeEntity
  ): Promise<ModbusTransmissionModeCreateReply> {
    const data = ModbusTransmissionModeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTransmissionModeActionCreate",
      data
    );
    return promise.then((data) =>
      ModbusTransmissionModeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusTransmissionModeActionUpdate(
    request: ModbusTransmissionModeEntity
  ): Promise<ModbusTransmissionModeCreateReply> {
    const data = ModbusTransmissionModeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTransmissionModeActionUpdate",
      data
    );
    return promise.then((data) =>
      ModbusTransmissionModeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusTransmissionModeActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusTransmissionModeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTransmissionModeActionQuery",
      data
    );
    return promise.then((data) =>
      ModbusTransmissionModeQueryReply.decode(new _m0.Reader(data))
    );
  }

  ModbusTransmissionModeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ModbusTransmissionModeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTransmissionModeActionGetOne",
      data
    );
    return promise.then((data) =>
      ModbusTransmissionModeReply.decode(new _m0.Reader(data))
    );
  }

  ModbusTransmissionModeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusTransmissionModeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ModbusVariableTypes {
  ModbusVariableTypeActionCreate(
    request: ModbusVariableTypeEntity
  ): Promise<ModbusVariableTypeCreateReply>;
  ModbusVariableTypeActionUpdate(
    request: ModbusVariableTypeEntity
  ): Promise<ModbusVariableTypeCreateReply>;
  ModbusVariableTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusVariableTypeQueryReply>;
  ModbusVariableTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ModbusVariableTypeReply>;
  ModbusVariableTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class ModbusVariableTypesClientImpl implements ModbusVariableTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ModbusVariableTypes";
    this.rpc = rpc;
    this.ModbusVariableTypeActionCreate =
      this.ModbusVariableTypeActionCreate.bind(this);
    this.ModbusVariableTypeActionUpdate =
      this.ModbusVariableTypeActionUpdate.bind(this);
    this.ModbusVariableTypeActionQuery =
      this.ModbusVariableTypeActionQuery.bind(this);
    this.ModbusVariableTypeActionGetOne =
      this.ModbusVariableTypeActionGetOne.bind(this);
    this.ModbusVariableTypeActionRemove =
      this.ModbusVariableTypeActionRemove.bind(this);
  }
  ModbusVariableTypeActionCreate(
    request: ModbusVariableTypeEntity
  ): Promise<ModbusVariableTypeCreateReply> {
    const data = ModbusVariableTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusVariableTypeActionCreate",
      data
    );
    return promise.then((data) =>
      ModbusVariableTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusVariableTypeActionUpdate(
    request: ModbusVariableTypeEntity
  ): Promise<ModbusVariableTypeCreateReply> {
    const data = ModbusVariableTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusVariableTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      ModbusVariableTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ModbusVariableTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ModbusVariableTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusVariableTypeActionQuery",
      data
    );
    return promise.then((data) =>
      ModbusVariableTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  ModbusVariableTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ModbusVariableTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusVariableTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      ModbusVariableTypeReply.decode(new _m0.Reader(data))
    );
  }

  ModbusVariableTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ModbusVariableTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface MqttVersions {
  MqttVersionActionCreate(
    request: MqttVersionEntity
  ): Promise<MqttVersionCreateReply>;
  MqttVersionActionUpdate(
    request: MqttVersionEntity
  ): Promise<MqttVersionCreateReply>;
  MqttVersionActionQuery(
    request: QueryFilterRequest
  ): Promise<MqttVersionQueryReply>;
  MqttVersionActionGetOne(
    request: QueryFilterRequest
  ): Promise<MqttVersionReply>;
  MqttVersionActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class MqttVersionsClientImpl implements MqttVersions {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "MqttVersions";
    this.rpc = rpc;
    this.MqttVersionActionCreate = this.MqttVersionActionCreate.bind(this);
    this.MqttVersionActionUpdate = this.MqttVersionActionUpdate.bind(this);
    this.MqttVersionActionQuery = this.MqttVersionActionQuery.bind(this);
    this.MqttVersionActionGetOne = this.MqttVersionActionGetOne.bind(this);
    this.MqttVersionActionRemove = this.MqttVersionActionRemove.bind(this);
  }
  MqttVersionActionCreate(
    request: MqttVersionEntity
  ): Promise<MqttVersionCreateReply> {
    const data = MqttVersionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MqttVersionActionCreate",
      data
    );
    return promise.then((data) =>
      MqttVersionCreateReply.decode(new _m0.Reader(data))
    );
  }

  MqttVersionActionUpdate(
    request: MqttVersionEntity
  ): Promise<MqttVersionCreateReply> {
    const data = MqttVersionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MqttVersionActionUpdate",
      data
    );
    return promise.then((data) =>
      MqttVersionCreateReply.decode(new _m0.Reader(data))
    );
  }

  MqttVersionActionQuery(
    request: QueryFilterRequest
  ): Promise<MqttVersionQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MqttVersionActionQuery",
      data
    );
    return promise.then((data) =>
      MqttVersionQueryReply.decode(new _m0.Reader(data))
    );
  }

  MqttVersionActionGetOne(
    request: QueryFilterRequest
  ): Promise<MqttVersionReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MqttVersionActionGetOne",
      data
    );
    return promise.then((data) =>
      MqttVersionReply.decode(new _m0.Reader(data))
    );
  }

  MqttVersionActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MqttVersionActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface NodeDatums {
  NodeDatumActionCreate(
    request: NodeDatumEntity
  ): Promise<NodeDatumCreateReply>;
  NodeDatumActionUpdate(
    request: NodeDatumEntity
  ): Promise<NodeDatumCreateReply>;
  NodeDatumActionQuery(
    request: QueryFilterRequest
  ): Promise<NodeDatumQueryReply>;
  NodeDatumActionGetOne(request: QueryFilterRequest): Promise<NodeDatumReply>;
  NodeDatumActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class NodeDatumsClientImpl implements NodeDatums {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "NodeDatums";
    this.rpc = rpc;
    this.NodeDatumActionCreate = this.NodeDatumActionCreate.bind(this);
    this.NodeDatumActionUpdate = this.NodeDatumActionUpdate.bind(this);
    this.NodeDatumActionQuery = this.NodeDatumActionQuery.bind(this);
    this.NodeDatumActionGetOne = this.NodeDatumActionGetOne.bind(this);
    this.NodeDatumActionRemove = this.NodeDatumActionRemove.bind(this);
  }
  NodeDatumActionCreate(
    request: NodeDatumEntity
  ): Promise<NodeDatumCreateReply> {
    const data = NodeDatumEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeDatumActionCreate",
      data
    );
    return promise.then((data) =>
      NodeDatumCreateReply.decode(new _m0.Reader(data))
    );
  }

  NodeDatumActionUpdate(
    request: NodeDatumEntity
  ): Promise<NodeDatumCreateReply> {
    const data = NodeDatumEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeDatumActionUpdate",
      data
    );
    return promise.then((data) =>
      NodeDatumCreateReply.decode(new _m0.Reader(data))
    );
  }

  NodeDatumActionQuery(
    request: QueryFilterRequest
  ): Promise<NodeDatumQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeDatumActionQuery",
      data
    );
    return promise.then((data) =>
      NodeDatumQueryReply.decode(new _m0.Reader(data))
    );
  }

  NodeDatumActionGetOne(request: QueryFilterRequest): Promise<NodeDatumReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeDatumActionGetOne",
      data
    );
    return promise.then((data) => NodeDatumReply.decode(new _m0.Reader(data)));
  }

  NodeDatumActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeDatumActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface NodeReaders {
  NodeReaderActionCreate(
    request: NodeReaderEntity
  ): Promise<NodeReaderCreateReply>;
  NodeReaderActionUpdate(
    request: NodeReaderEntity
  ): Promise<NodeReaderCreateReply>;
  NodeReaderActionQuery(
    request: QueryFilterRequest
  ): Promise<NodeReaderQueryReply>;
  NodeReaderActionGetOne(request: QueryFilterRequest): Promise<NodeReaderReply>;
  NodeReaderActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class NodeReadersClientImpl implements NodeReaders {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "NodeReaders";
    this.rpc = rpc;
    this.NodeReaderActionCreate = this.NodeReaderActionCreate.bind(this);
    this.NodeReaderActionUpdate = this.NodeReaderActionUpdate.bind(this);
    this.NodeReaderActionQuery = this.NodeReaderActionQuery.bind(this);
    this.NodeReaderActionGetOne = this.NodeReaderActionGetOne.bind(this);
    this.NodeReaderActionRemove = this.NodeReaderActionRemove.bind(this);
  }
  NodeReaderActionCreate(
    request: NodeReaderEntity
  ): Promise<NodeReaderCreateReply> {
    const data = NodeReaderEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeReaderActionCreate",
      data
    );
    return promise.then((data) =>
      NodeReaderCreateReply.decode(new _m0.Reader(data))
    );
  }

  NodeReaderActionUpdate(
    request: NodeReaderEntity
  ): Promise<NodeReaderCreateReply> {
    const data = NodeReaderEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeReaderActionUpdate",
      data
    );
    return promise.then((data) =>
      NodeReaderCreateReply.decode(new _m0.Reader(data))
    );
  }

  NodeReaderActionQuery(
    request: QueryFilterRequest
  ): Promise<NodeReaderQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeReaderActionQuery",
      data
    );
    return promise.then((data) =>
      NodeReaderQueryReply.decode(new _m0.Reader(data))
    );
  }

  NodeReaderActionGetOne(
    request: QueryFilterRequest
  ): Promise<NodeReaderReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeReaderActionGetOne",
      data
    );
    return promise.then((data) => NodeReaderReply.decode(new _m0.Reader(data)));
  }

  NodeReaderActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeReaderActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface NodeWriters {
  NodeWriterActionCreate(
    request: NodeWriterEntity
  ): Promise<NodeWriterCreateReply>;
  NodeWriterActionUpdate(
    request: NodeWriterEntity
  ): Promise<NodeWriterCreateReply>;
  NodeWriterActionQuery(
    request: QueryFilterRequest
  ): Promise<NodeWriterQueryReply>;
  NodeWriterActionGetOne(request: QueryFilterRequest): Promise<NodeWriterReply>;
  NodeWriterActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class NodeWritersClientImpl implements NodeWriters {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "NodeWriters";
    this.rpc = rpc;
    this.NodeWriterActionCreate = this.NodeWriterActionCreate.bind(this);
    this.NodeWriterActionUpdate = this.NodeWriterActionUpdate.bind(this);
    this.NodeWriterActionQuery = this.NodeWriterActionQuery.bind(this);
    this.NodeWriterActionGetOne = this.NodeWriterActionGetOne.bind(this);
    this.NodeWriterActionRemove = this.NodeWriterActionRemove.bind(this);
  }
  NodeWriterActionCreate(
    request: NodeWriterEntity
  ): Promise<NodeWriterCreateReply> {
    const data = NodeWriterEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeWriterActionCreate",
      data
    );
    return promise.then((data) =>
      NodeWriterCreateReply.decode(new _m0.Reader(data))
    );
  }

  NodeWriterActionUpdate(
    request: NodeWriterEntity
  ): Promise<NodeWriterCreateReply> {
    const data = NodeWriterEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeWriterActionUpdate",
      data
    );
    return promise.then((data) =>
      NodeWriterCreateReply.decode(new _m0.Reader(data))
    );
  }

  NodeWriterActionQuery(
    request: QueryFilterRequest
  ): Promise<NodeWriterQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeWriterActionQuery",
      data
    );
    return promise.then((data) =>
      NodeWriterQueryReply.decode(new _m0.Reader(data))
    );
  }

  NodeWriterActionGetOne(
    request: QueryFilterRequest
  ): Promise<NodeWriterReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeWriterActionGetOne",
      data
    );
    return promise.then((data) => NodeWriterReply.decode(new _m0.Reader(data)));
  }

  NodeWriterActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "NodeWriterActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface PhysicalSections {
  PhysicalSectionActionCreate(
    request: PhysicalSectionEntity
  ): Promise<PhysicalSectionCreateReply>;
  PhysicalSectionActionUpdate(
    request: PhysicalSectionEntity
  ): Promise<PhysicalSectionCreateReply>;
  PhysicalSectionActionQuery(
    request: QueryFilterRequest
  ): Promise<PhysicalSectionQueryReply>;
  PhysicalSectionActionGetOne(
    request: QueryFilterRequest
  ): Promise<PhysicalSectionReply>;
  PhysicalSectionActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class PhysicalSectionsClientImpl implements PhysicalSections {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "PhysicalSections";
    this.rpc = rpc;
    this.PhysicalSectionActionCreate =
      this.PhysicalSectionActionCreate.bind(this);
    this.PhysicalSectionActionUpdate =
      this.PhysicalSectionActionUpdate.bind(this);
    this.PhysicalSectionActionQuery =
      this.PhysicalSectionActionQuery.bind(this);
    this.PhysicalSectionActionGetOne =
      this.PhysicalSectionActionGetOne.bind(this);
    this.PhysicalSectionActionRemove =
      this.PhysicalSectionActionRemove.bind(this);
  }
  PhysicalSectionActionCreate(
    request: PhysicalSectionEntity
  ): Promise<PhysicalSectionCreateReply> {
    const data = PhysicalSectionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PhysicalSectionActionCreate",
      data
    );
    return promise.then((data) =>
      PhysicalSectionCreateReply.decode(new _m0.Reader(data))
    );
  }

  PhysicalSectionActionUpdate(
    request: PhysicalSectionEntity
  ): Promise<PhysicalSectionCreateReply> {
    const data = PhysicalSectionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PhysicalSectionActionUpdate",
      data
    );
    return promise.then((data) =>
      PhysicalSectionCreateReply.decode(new _m0.Reader(data))
    );
  }

  PhysicalSectionActionQuery(
    request: QueryFilterRequest
  ): Promise<PhysicalSectionQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PhysicalSectionActionQuery",
      data
    );
    return promise.then((data) =>
      PhysicalSectionQueryReply.decode(new _m0.Reader(data))
    );
  }

  PhysicalSectionActionGetOne(
    request: QueryFilterRequest
  ): Promise<PhysicalSectionReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PhysicalSectionActionGetOne",
      data
    );
    return promise.then((data) =>
      PhysicalSectionReply.decode(new _m0.Reader(data))
    );
  }

  PhysicalSectionActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PhysicalSectionActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Scenarios {
  ScenarioActionCreate(request: ScenarioEntity): Promise<ScenarioCreateReply>;
  ScenarioActionUpdate(request: ScenarioEntity): Promise<ScenarioCreateReply>;
  ScenarioActionQuery(request: QueryFilterRequest): Promise<ScenarioQueryReply>;
  ScenarioActionGetOne(request: QueryFilterRequest): Promise<ScenarioReply>;
  ScenarioActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ScenariosClientImpl implements Scenarios {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Scenarios";
    this.rpc = rpc;
    this.ScenarioActionCreate = this.ScenarioActionCreate.bind(this);
    this.ScenarioActionUpdate = this.ScenarioActionUpdate.bind(this);
    this.ScenarioActionQuery = this.ScenarioActionQuery.bind(this);
    this.ScenarioActionGetOne = this.ScenarioActionGetOne.bind(this);
    this.ScenarioActionRemove = this.ScenarioActionRemove.bind(this);
  }
  ScenarioActionCreate(request: ScenarioEntity): Promise<ScenarioCreateReply> {
    const data = ScenarioEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioActionCreate",
      data
    );
    return promise.then((data) =>
      ScenarioCreateReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioActionUpdate(request: ScenarioEntity): Promise<ScenarioCreateReply> {
    const data = ScenarioEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioActionUpdate",
      data
    );
    return promise.then((data) =>
      ScenarioCreateReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioActionQuery(
    request: QueryFilterRequest
  ): Promise<ScenarioQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ScenarioActionQuery", data);
    return promise.then((data) =>
      ScenarioQueryReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioActionGetOne(request: QueryFilterRequest): Promise<ScenarioReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioActionGetOne",
      data
    );
    return promise.then((data) => ScenarioReply.decode(new _m0.Reader(data)));
  }

  ScenarioActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ScenarioLanguages {
  ScenarioLanguageActionCreate(
    request: ScenarioLanguageEntity
  ): Promise<ScenarioLanguageCreateReply>;
  ScenarioLanguageActionUpdate(
    request: ScenarioLanguageEntity
  ): Promise<ScenarioLanguageCreateReply>;
  ScenarioLanguageActionQuery(
    request: QueryFilterRequest
  ): Promise<ScenarioLanguageQueryReply>;
  ScenarioLanguageActionGetOne(
    request: QueryFilterRequest
  ): Promise<ScenarioLanguageReply>;
  ScenarioLanguageActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class ScenarioLanguagesClientImpl implements ScenarioLanguages {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ScenarioLanguages";
    this.rpc = rpc;
    this.ScenarioLanguageActionCreate =
      this.ScenarioLanguageActionCreate.bind(this);
    this.ScenarioLanguageActionUpdate =
      this.ScenarioLanguageActionUpdate.bind(this);
    this.ScenarioLanguageActionQuery =
      this.ScenarioLanguageActionQuery.bind(this);
    this.ScenarioLanguageActionGetOne =
      this.ScenarioLanguageActionGetOne.bind(this);
    this.ScenarioLanguageActionRemove =
      this.ScenarioLanguageActionRemove.bind(this);
  }
  ScenarioLanguageActionCreate(
    request: ScenarioLanguageEntity
  ): Promise<ScenarioLanguageCreateReply> {
    const data = ScenarioLanguageEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioLanguageActionCreate",
      data
    );
    return promise.then((data) =>
      ScenarioLanguageCreateReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioLanguageActionUpdate(
    request: ScenarioLanguageEntity
  ): Promise<ScenarioLanguageCreateReply> {
    const data = ScenarioLanguageEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioLanguageActionUpdate",
      data
    );
    return promise.then((data) =>
      ScenarioLanguageCreateReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioLanguageActionQuery(
    request: QueryFilterRequest
  ): Promise<ScenarioLanguageQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioLanguageActionQuery",
      data
    );
    return promise.then((data) =>
      ScenarioLanguageQueryReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioLanguageActionGetOne(
    request: QueryFilterRequest
  ): Promise<ScenarioLanguageReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioLanguageActionGetOne",
      data
    );
    return promise.then((data) =>
      ScenarioLanguageReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioLanguageActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioLanguageActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ScenarioOperationTypes {
  ScenarioOperationTypeActionCreate(
    request: ScenarioOperationTypeEntity
  ): Promise<ScenarioOperationTypeCreateReply>;
  ScenarioOperationTypeActionUpdate(
    request: ScenarioOperationTypeEntity
  ): Promise<ScenarioOperationTypeCreateReply>;
  ScenarioOperationTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ScenarioOperationTypeQueryReply>;
  ScenarioOperationTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ScenarioOperationTypeReply>;
  ScenarioOperationTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class ScenarioOperationTypesClientImpl
  implements ScenarioOperationTypes
{
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ScenarioOperationTypes";
    this.rpc = rpc;
    this.ScenarioOperationTypeActionCreate =
      this.ScenarioOperationTypeActionCreate.bind(this);
    this.ScenarioOperationTypeActionUpdate =
      this.ScenarioOperationTypeActionUpdate.bind(this);
    this.ScenarioOperationTypeActionQuery =
      this.ScenarioOperationTypeActionQuery.bind(this);
    this.ScenarioOperationTypeActionGetOne =
      this.ScenarioOperationTypeActionGetOne.bind(this);
    this.ScenarioOperationTypeActionRemove =
      this.ScenarioOperationTypeActionRemove.bind(this);
  }
  ScenarioOperationTypeActionCreate(
    request: ScenarioOperationTypeEntity
  ): Promise<ScenarioOperationTypeCreateReply> {
    const data = ScenarioOperationTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioOperationTypeActionCreate",
      data
    );
    return promise.then((data) =>
      ScenarioOperationTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioOperationTypeActionUpdate(
    request: ScenarioOperationTypeEntity
  ): Promise<ScenarioOperationTypeCreateReply> {
    const data = ScenarioOperationTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioOperationTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      ScenarioOperationTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioOperationTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ScenarioOperationTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioOperationTypeActionQuery",
      data
    );
    return promise.then((data) =>
      ScenarioOperationTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioOperationTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ScenarioOperationTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioOperationTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      ScenarioOperationTypeReply.decode(new _m0.Reader(data))
    );
  }

  ScenarioOperationTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ScenarioOperationTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Triggers {
  TriggerActionCreate(request: TriggerEntity): Promise<TriggerCreateReply>;
  TriggerActionUpdate(request: TriggerEntity): Promise<TriggerCreateReply>;
  TriggerActionQuery(request: QueryFilterRequest): Promise<TriggerQueryReply>;
  TriggerActionGetOne(request: QueryFilterRequest): Promise<TriggerReply>;
  TriggerActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class TriggersClientImpl implements Triggers {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Triggers";
    this.rpc = rpc;
    this.TriggerActionCreate = this.TriggerActionCreate.bind(this);
    this.TriggerActionUpdate = this.TriggerActionUpdate.bind(this);
    this.TriggerActionQuery = this.TriggerActionQuery.bind(this);
    this.TriggerActionGetOne = this.TriggerActionGetOne.bind(this);
    this.TriggerActionRemove = this.TriggerActionRemove.bind(this);
  }
  TriggerActionCreate(request: TriggerEntity): Promise<TriggerCreateReply> {
    const data = TriggerEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "TriggerActionCreate", data);
    return promise.then((data) =>
      TriggerCreateReply.decode(new _m0.Reader(data))
    );
  }

  TriggerActionUpdate(request: TriggerEntity): Promise<TriggerCreateReply> {
    const data = TriggerEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "TriggerActionUpdate", data);
    return promise.then((data) =>
      TriggerCreateReply.decode(new _m0.Reader(data))
    );
  }

  TriggerActionQuery(request: QueryFilterRequest): Promise<TriggerQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TriggerActionQuery", data);
    return promise.then((data) =>
      TriggerQueryReply.decode(new _m0.Reader(data))
    );
  }

  TriggerActionGetOne(request: QueryFilterRequest): Promise<TriggerReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TriggerActionGetOne", data);
    return promise.then((data) => TriggerReply.decode(new _m0.Reader(data)));
  }

  TriggerActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TriggerActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface TriggerTypes {
  TriggerTypeActionCreate(
    request: TriggerTypeEntity
  ): Promise<TriggerTypeCreateReply>;
  TriggerTypeActionUpdate(
    request: TriggerTypeEntity
  ): Promise<TriggerTypeCreateReply>;
  TriggerTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<TriggerTypeQueryReply>;
  TriggerTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<TriggerTypeReply>;
  TriggerTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class TriggerTypesClientImpl implements TriggerTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "TriggerTypes";
    this.rpc = rpc;
    this.TriggerTypeActionCreate = this.TriggerTypeActionCreate.bind(this);
    this.TriggerTypeActionUpdate = this.TriggerTypeActionUpdate.bind(this);
    this.TriggerTypeActionQuery = this.TriggerTypeActionQuery.bind(this);
    this.TriggerTypeActionGetOne = this.TriggerTypeActionGetOne.bind(this);
    this.TriggerTypeActionRemove = this.TriggerTypeActionRemove.bind(this);
  }
  TriggerTypeActionCreate(
    request: TriggerTypeEntity
  ): Promise<TriggerTypeCreateReply> {
    const data = TriggerTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TriggerTypeActionCreate",
      data
    );
    return promise.then((data) =>
      TriggerTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  TriggerTypeActionUpdate(
    request: TriggerTypeEntity
  ): Promise<TriggerTypeCreateReply> {
    const data = TriggerTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TriggerTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      TriggerTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  TriggerTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<TriggerTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TriggerTypeActionQuery",
      data
    );
    return promise.then((data) =>
      TriggerTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  TriggerTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<TriggerTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TriggerTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      TriggerTypeReply.decode(new _m0.Reader(data))
    );
  }

  TriggerTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TriggerTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error(
      "Value is larger than Number.MAX_SAFE_INTEGER"
    );
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
