/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IError, QueryFilterRequest, RemoveReply } from "../../core/common";
import { FileEntity } from "../drive/index";
import { GeoCountryEntity } from "../geo/index";
import { SkillsetEntity } from "../skillset/index";

export const protobufPackage = "";

export interface ResumeCompanyCreateReply {
  data: ResumeCompanyEntity | undefined;
  error: IError | undefined;
}

export interface ResumeCompanyReply {
  data: ResumeCompanyEntity | undefined;
  error: IError | undefined;
}

export interface ResumeCompanyQueryReply {
  items: ResumeCompanyEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ResumeCompanyEntity {
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
  placeCountryId?: string | undefined;
  /** @tag(gorm:"foreignKey:PlaceCountryId;references:UniqueId" json:"placeCountry" yaml:"placeCountry" fbtype:"one") */
  placeCountry: GeoCountryEntity | undefined;
  /** One 2 one to external entity */
  workCountryId?: string | undefined;
  /** @tag(gorm:"foreignKey:WorkCountryId;references:UniqueId" json:"workCountry" yaml:"workCountry" fbtype:"one") */
  workCountry: GeoCountryEntity | undefined;
  /** One 2 one to external entity */
  mainIndustryId?: string | undefined;
  /** @tag(gorm:"foreignKey:MainIndustryId;references:UniqueId" json:"mainIndustry" yaml:"mainIndustry" fbtype:"one") */
  mainIndustry: ResumeIndustryEntity | undefined;
  /** @tag(  yaml:"employeeCount"  ) */
  employeeCount?: number | undefined;
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

export interface ResumeCreateReply {
  data: ResumeEntity | undefined;
  error: IError | undefined;
}

export interface ResumeReply {
  data: ResumeEntity | undefined;
  error: IError | undefined;
}

export interface ResumeQueryReply {
  items: ResumeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ResumeEntity {
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
  translations: ResumeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"title"  ) */
  title?: string | undefined;
  /** repeated ResumeKeySkillsEntity keySkills = 10; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"keySkills") */
  keySkills: ResumeKeySkillsEntity[];
  /** repeated ResumeVideosEntity videos = 11; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"videos") */
  videos: ResumeVideosEntity[];
  /** repeated ResumePreferredPositionsEntity preferredPositions = 12; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"preferredPositions") */
  preferredPositions: ResumePreferredPositionsEntity[];
  /** @tag(translate:"true"  yaml:"headline1"  ) */
  headline1?: string | undefined;
  /** @tag(translate:"true"  yaml:"phone"  ) */
  phone?: string | undefined;
  /** @tag(translate:"true"  yaml:"email"  ) */
  email?: string | undefined;
  /** @tag(translate:"true"  yaml:"headline2"  ) */
  headline2?: string | undefined;
  /** Many 2 many entities */
  productsListId: string[];
  /** @tag(gorm:"many2many:resume_products;foreignKey:UniqueId;references:UniqueId" yaml:"products" fbtype:"many2many") */
  products: ResumeProductEntity[];
  /** Many 2 many entities */
  projectsListId: string[];
  /** @tag(gorm:"many2many:resume_projects;foreignKey:UniqueId;references:UniqueId" yaml:"projects" fbtype:"many2many") */
  projects: ResumeProjectEntity[];
  /** Many 2 many entities */
  companiesListId: string[];
  /** @tag(gorm:"many2many:resume_companies;foreignKey:UniqueId;references:UniqueId" yaml:"companies" fbtype:"many2many") */
  companies: ResumeCompanyEntity[];
  /** Many 2 many entities */
  servicesListId: string[];
  /** @tag(gorm:"many2many:resume_services;foreignKey:UniqueId;references:UniqueId" yaml:"services" fbtype:"many2many") */
  services: ResumeServiceEntity[];
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
export interface ResumeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"title" json:"title"); */
  title: string;
  /** @tag(yaml:"headline1" json:"headline1"); */
  headline1: string;
  /** @tag(yaml:"phone" json:"phone"); */
  phone: string;
  /** @tag(yaml:"email" json:"email"); */
  email: string;
  /** @tag(yaml:"headline2" json:"headline2"); */
  headline2: string;
}

export interface ResumeKeySkillsEntity {
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
  translations: ResumeKeySkillsEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"level"  ) */
  level?: number | undefined;
  /** @tag(  yaml:"usage"  ) */
  usage?: number | undefined;
  started: number;
  startedFormatted: string;
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
export interface ResumeKeySkillsEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ResumeVideosEntity {
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
  /** @tag(  yaml:"link"  ) */
  link?: string | undefined;
  /** @tag(  yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(  yaml:"description"  ) */
  description?: string | undefined;
  /** @tag(  yaml:"locale"  ) */
  locale?: string | undefined;
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

export interface ResumePreferredPositionsEntity {
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
  translations: ResumePreferredPositionsEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(translate:"true"  yaml:"contractType"  ) */
  contractType?: string | undefined;
  /** @tag(translate:"true"  yaml:"description"  ) */
  description?: string | undefined;
  /** @tag(  yaml:"locale"  ) */
  locale?: string | undefined;
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
export interface ResumePreferredPositionsEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"title" json:"title"); */
  title: string;
  /** @tag(yaml:"contractType" json:"contractType"); */
  contractType: string;
  /** @tag(yaml:"description" json:"description"); */
  description: string;
}

export interface ResumeIndustryCreateReply {
  data: ResumeIndustryEntity | undefined;
  error: IError | undefined;
}

export interface ResumeIndustryReply {
  data: ResumeIndustryEntity | undefined;
  error: IError | undefined;
}

export interface ResumeIndustryQueryReply {
  items: ResumeIndustryEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ResumeIndustryEntity {
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
  translations: ResumeIndustryEntityPolyglot[];
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
export interface ResumeIndustryEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ResumeProductCreateReply {
  data: ResumeProductEntity | undefined;
  error: IError | undefined;
}

export interface ResumeProductReply {
  data: ResumeProductEntity | undefined;
  error: IError | undefined;
}

export interface ResumeProductQueryReply {
  items: ResumeProductEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ResumeProductEntity {
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
  translations: ResumeProductEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(translate:"true"  yaml:"description"  ) */
  description?: string | undefined;
  /** repeated ResumeProductLinksEntity links = 11; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"links") */
  links: ResumeProductLinksEntity[];
  /** repeated ResumeProductTechnologiesEntity technologies = 12; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"technologies") */
  technologies: ResumeProductTechnologiesEntity[];
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
export interface ResumeProductEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
  /** @tag(yaml:"description" json:"description"); */
  description: string;
}

export interface ResumeProductLinksEntity {
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
  /** @tag(  yaml:"url"  ) */
  url?: string | undefined;
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

export interface ResumeProductTechnologiesEntity {
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
  translations: ResumeProductTechnologiesEntityPolyglot[];
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
export interface ResumeProductTechnologiesEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ResumeProjectCreateReply {
  data: ResumeProjectEntity | undefined;
  error: IError | undefined;
}

export interface ResumeProjectReply {
  data: ResumeProjectEntity | undefined;
  error: IError | undefined;
}

export interface ResumeProjectQueryReply {
  items: ResumeProjectEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ResumeProjectEntity {
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
  translations: ResumeProjectEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"title"  ) */
  title?: string | undefined;
  /** @tag(translate:"true"  yaml:"description" gorm:"text" ) */
  description?: string | undefined;
  /** @tag(translate:"true" yaml:"descriptionExcerpt" gorm:"text" ) */
  descriptionExcerpt?: string | undefined;
  /** @tag(translate:"true"  yaml:"technicalDescription" gorm:"text" ) */
  technicalDescription?: string | undefined;
  /** @tag(translate:"true" yaml:"technicalDescriptionExcerpt" gorm:"text" ) */
  technicalDescriptionExcerpt?: string | undefined;
  /** One 2 one to external entity */
  typeId?: string | undefined;
  /** @tag(gorm:"foreignKey:TypeId;references:UniqueId" json:"type" yaml:"type" fbtype:"one") */
  type: ResumeProjectTypeEntity | undefined;
  /** Many 2 many entities */
  attachmentsListId: string[];
  /** @tag(gorm:"many2many:resumeProject_attachments;foreignKey:UniqueId;references:UniqueId" yaml:"attachments" fbtype:"many2many") */
  attachments: FileEntity[];
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
  /** One 2 one to external entity */
  workLocationId?: string | undefined;
  /** @tag(gorm:"foreignKey:WorkLocationId;references:UniqueId" json:"workLocation" yaml:"workLocation" fbtype:"one") */
  workLocation: GeoCountryEntity | undefined;
  /** One 2 one to external entity */
  companyLocationId?: string | undefined;
  /** @tag(gorm:"foreignKey:CompanyLocationId;references:UniqueId" json:"companyLocation" yaml:"companyLocation" fbtype:"one") */
  companyLocation: GeoCountryEntity | undefined;
  /** One 2 one to external entity */
  clientLocationId?: string | undefined;
  /** @tag(gorm:"foreignKey:ClientLocationId;references:UniqueId" json:"clientLocation" yaml:"clientLocation" fbtype:"one") */
  clientLocation: GeoCountryEntity | undefined;
  /** repeated ResumeProjectLinksEntity links = 35; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"links") */
  links: ResumeProjectLinksEntity[];
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
export interface ResumeProjectEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"title" json:"title"); */
  title: string;
  /** @tag(yaml:"description" json:"description"); */
  description: string;
  /** @tag(yaml:"technicalDescription" json:"technicalDescription"); */
  technicalDescription: string;
}

export interface ResumeProjectLinksEntity {
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
  /** @tag(  yaml:"link"  ) */
  link?: string | undefined;
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

export interface ResumeProjectTypeCreateReply {
  data: ResumeProjectTypeEntity | undefined;
  error: IError | undefined;
}

export interface ResumeProjectTypeReply {
  data: ResumeProjectTypeEntity | undefined;
  error: IError | undefined;
}

export interface ResumeProjectTypeQueryReply {
  items: ResumeProjectTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ResumeProjectTypeEntity {
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
  translations: ResumeProjectTypeEntityPolyglot[];
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
export interface ResumeProjectTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ResumeServiceCreateReply {
  data: ResumeServiceEntity | undefined;
  error: IError | undefined;
}

export interface ResumeServiceReply {
  data: ResumeServiceEntity | undefined;
  error: IError | undefined;
}

export interface ResumeServiceQueryReply {
  items: ResumeServiceEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ResumeServiceEntity {
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
  translations: ResumeServiceEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
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
export interface ResumeServiceEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
  /** @tag(yaml:"description" json:"description"); */
  description: string;
}

export interface ResumeSkillCreateReply {
  data: ResumeSkillEntity | undefined;
  error: IError | undefined;
}

export interface ResumeSkillReply {
  data: ResumeSkillEntity | undefined;
  error: IError | undefined;
}

export interface ResumeSkillQueryReply {
  items: ResumeSkillEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ResumeSkillEntity {
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
  skillsetId?: string | undefined;
  /** @tag(gorm:"foreignKey:SkillsetId;references:UniqueId" json:"skillset" yaml:"skillset" fbtype:"one") */
  skillset: SkillsetEntity | undefined;
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

function createBaseResumeCompanyCreateReply(): ResumeCompanyCreateReply {
  return { data: undefined, error: undefined };
}

export const ResumeCompanyCreateReply = {
  encode(
    message: ResumeCompanyCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeCompanyEntity.encode(
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
  ): ResumeCompanyCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeCompanyCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeCompanyEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeCompanyCreateReply {
    return {
      data: isSet(object.data)
        ? ResumeCompanyEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeCompanyCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeCompanyEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeCompanyCreateReply>, I>>(
    base?: I
  ): ResumeCompanyCreateReply {
    return ResumeCompanyCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeCompanyCreateReply>, I>>(
    object: I
  ): ResumeCompanyCreateReply {
    const message = createBaseResumeCompanyCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeCompanyEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeCompanyReply(): ResumeCompanyReply {
  return { data: undefined, error: undefined };
}

export const ResumeCompanyReply = {
  encode(
    message: ResumeCompanyReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeCompanyEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeCompanyReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeCompanyReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeCompanyEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeCompanyReply {
    return {
      data: isSet(object.data)
        ? ResumeCompanyEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeCompanyReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeCompanyEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeCompanyReply>, I>>(
    base?: I
  ): ResumeCompanyReply {
    return ResumeCompanyReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeCompanyReply>, I>>(
    object: I
  ): ResumeCompanyReply {
    const message = createBaseResumeCompanyReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeCompanyEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeCompanyQueryReply(): ResumeCompanyQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ResumeCompanyQueryReply = {
  encode(
    message: ResumeCompanyQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ResumeCompanyEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): ResumeCompanyQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeCompanyQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ResumeCompanyEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): ResumeCompanyQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ResumeCompanyEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeCompanyQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ResumeCompanyEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeCompanyQueryReply>, I>>(
    base?: I
  ): ResumeCompanyQueryReply {
    return ResumeCompanyQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeCompanyQueryReply>, I>>(
    object: I
  ): ResumeCompanyQueryReply {
    const message = createBaseResumeCompanyQueryReply();
    message.items =
      object.items?.map((e) => ResumeCompanyEntity.fromPartial(e)) || [];
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

function createBaseResumeCompanyEntity(): ResumeCompanyEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    placeCountryId: undefined,
    placeCountry: undefined,
    workCountryId: undefined,
    workCountry: undefined,
    mainIndustryId: undefined,
    mainIndustry: undefined,
    employeeCount: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeCompanyEntity = {
  encode(
    message: ResumeCompanyEntity,
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
    if (message.placeCountryId !== undefined) {
      writer.uint32(74).string(message.placeCountryId);
    }
    if (message.placeCountry !== undefined) {
      GeoCountryEntity.encode(
        message.placeCountry,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.workCountryId !== undefined) {
      writer.uint32(98).string(message.workCountryId);
    }
    if (message.workCountry !== undefined) {
      GeoCountryEntity.encode(
        message.workCountry,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.mainIndustryId !== undefined) {
      writer.uint32(122).string(message.mainIndustryId);
    }
    if (message.mainIndustry !== undefined) {
      ResumeIndustryEntity.encode(
        message.mainIndustry,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.employeeCount !== undefined) {
      writer.uint32(136).int64(message.employeeCount);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeCompanyEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeCompanyEntity();
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
          message.placeCountryId = reader.string();
          break;
        case 10:
          message.placeCountry = GeoCountryEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.workCountryId = reader.string();
          break;
        case 13:
          message.workCountry = GeoCountryEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.mainIndustryId = reader.string();
          break;
        case 16:
          message.mainIndustry = ResumeIndustryEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.employeeCount = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): ResumeCompanyEntity {
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
      placeCountryId: isSet(object.placeCountryId)
        ? String(object.placeCountryId)
        : undefined,
      placeCountry: isSet(object.placeCountry)
        ? GeoCountryEntity.fromJSON(object.placeCountry)
        : undefined,
      workCountryId: isSet(object.workCountryId)
        ? String(object.workCountryId)
        : undefined,
      workCountry: isSet(object.workCountry)
        ? GeoCountryEntity.fromJSON(object.workCountry)
        : undefined,
      mainIndustryId: isSet(object.mainIndustryId)
        ? String(object.mainIndustryId)
        : undefined,
      mainIndustry: isSet(object.mainIndustry)
        ? ResumeIndustryEntity.fromJSON(object.mainIndustry)
        : undefined,
      employeeCount: isSet(object.employeeCount)
        ? Number(object.employeeCount)
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

  toJSON(message: ResumeCompanyEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.placeCountryId !== undefined &&
      (obj.placeCountryId = message.placeCountryId);
    message.placeCountry !== undefined &&
      (obj.placeCountry = message.placeCountry
        ? GeoCountryEntity.toJSON(message.placeCountry)
        : undefined);
    message.workCountryId !== undefined &&
      (obj.workCountryId = message.workCountryId);
    message.workCountry !== undefined &&
      (obj.workCountry = message.workCountry
        ? GeoCountryEntity.toJSON(message.workCountry)
        : undefined);
    message.mainIndustryId !== undefined &&
      (obj.mainIndustryId = message.mainIndustryId);
    message.mainIndustry !== undefined &&
      (obj.mainIndustry = message.mainIndustry
        ? ResumeIndustryEntity.toJSON(message.mainIndustry)
        : undefined);
    message.employeeCount !== undefined &&
      (obj.employeeCount = Math.round(message.employeeCount));
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

  create<I extends Exact<DeepPartial<ResumeCompanyEntity>, I>>(
    base?: I
  ): ResumeCompanyEntity {
    return ResumeCompanyEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeCompanyEntity>, I>>(
    object: I
  ): ResumeCompanyEntity {
    const message = createBaseResumeCompanyEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.placeCountryId = object.placeCountryId ?? undefined;
    message.placeCountry =
      object.placeCountry !== undefined && object.placeCountry !== null
        ? GeoCountryEntity.fromPartial(object.placeCountry)
        : undefined;
    message.workCountryId = object.workCountryId ?? undefined;
    message.workCountry =
      object.workCountry !== undefined && object.workCountry !== null
        ? GeoCountryEntity.fromPartial(object.workCountry)
        : undefined;
    message.mainIndustryId = object.mainIndustryId ?? undefined;
    message.mainIndustry =
      object.mainIndustry !== undefined && object.mainIndustry !== null
        ? ResumeIndustryEntity.fromPartial(object.mainIndustry)
        : undefined;
    message.employeeCount = object.employeeCount ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumeCreateReply(): ResumeCreateReply {
  return { data: undefined, error: undefined };
}

export const ResumeCreateReply = {
  encode(
    message: ResumeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeCreateReply {
    return {
      data: isSet(object.data) ? ResumeEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? ResumeEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeCreateReply>, I>>(
    base?: I
  ): ResumeCreateReply {
    return ResumeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeCreateReply>, I>>(
    object: I
  ): ResumeCreateReply {
    const message = createBaseResumeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeReply(): ResumeReply {
  return { data: undefined, error: undefined };
}

export const ResumeReply = {
  encode(
    message: ResumeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeReply {
    return {
      data: isSet(object.data) ? ResumeEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? ResumeEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeReply>, I>>(base?: I): ResumeReply {
    return ResumeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeReply>, I>>(
    object: I
  ): ResumeReply {
    const message = createBaseResumeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeQueryReply(): ResumeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ResumeQueryReply = {
  encode(
    message: ResumeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ResumeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ResumeEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ResumeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ResumeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ResumeEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeQueryReply>, I>>(
    base?: I
  ): ResumeQueryReply {
    return ResumeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeQueryReply>, I>>(
    object: I
  ): ResumeQueryReply {
    const message = createBaseResumeQueryReply();
    message.items = object.items?.map((e) => ResumeEntity.fromPartial(e)) || [];
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

function createBaseResumeEntity(): ResumeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    title: undefined,
    keySkills: [],
    videos: [],
    preferredPositions: [],
    headline1: undefined,
    phone: undefined,
    email: undefined,
    headline2: undefined,
    productsListId: [],
    products: [],
    projectsListId: [],
    projects: [],
    companiesListId: [],
    companies: [],
    servicesListId: [],
    services: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeEntity = {
  encode(
    message: ResumeEntity,
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
      ResumeEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
    }
    for (const v of message.keySkills) {
      ResumeKeySkillsEntity.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.videos) {
      ResumeVideosEntity.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.preferredPositions) {
      ResumePreferredPositionsEntity.encode(
        v!,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.headline1 !== undefined) {
      writer.uint32(106).string(message.headline1);
    }
    if (message.phone !== undefined) {
      writer.uint32(114).string(message.phone);
    }
    if (message.email !== undefined) {
      writer.uint32(122).string(message.email);
    }
    if (message.headline2 !== undefined) {
      writer.uint32(130).string(message.headline2);
    }
    for (const v of message.productsListId) {
      writer.uint32(146).string(v!);
    }
    for (const v of message.products) {
      ResumeProductEntity.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.projectsListId) {
      writer.uint32(170).string(v!);
    }
    for (const v of message.projects) {
      ResumeProjectEntity.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.companiesListId) {
      writer.uint32(194).string(v!);
    }
    for (const v of message.companies) {
      ResumeCompanyEntity.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.servicesListId) {
      writer.uint32(218).string(v!);
    }
    for (const v of message.services) {
      ResumeServiceEntity.encode(v!, writer.uint32(226).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(232).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(240).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(248).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(258).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(266).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeEntity();
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
            ResumeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.title = reader.string();
          break;
        case 10:
          message.keySkills.push(
            ResumeKeySkillsEntity.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.videos.push(
            ResumeVideosEntity.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.preferredPositions.push(
            ResumePreferredPositionsEntity.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.headline1 = reader.string();
          break;
        case 14:
          message.phone = reader.string();
          break;
        case 15:
          message.email = reader.string();
          break;
        case 16:
          message.headline2 = reader.string();
          break;
        case 18:
          message.productsListId.push(reader.string());
          break;
        case 19:
          message.products.push(
            ResumeProductEntity.decode(reader, reader.uint32())
          );
          break;
        case 21:
          message.projectsListId.push(reader.string());
          break;
        case 22:
          message.projects.push(
            ResumeProjectEntity.decode(reader, reader.uint32())
          );
          break;
        case 24:
          message.companiesListId.push(reader.string());
          break;
        case 25:
          message.companies.push(
            ResumeCompanyEntity.decode(reader, reader.uint32())
          );
          break;
        case 27:
          message.servicesListId.push(reader.string());
          break;
        case 28:
          message.services.push(
            ResumeServiceEntity.decode(reader, reader.uint32())
          );
          break;
        case 29:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 30:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 31:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 32:
          message.createdFormatted = reader.string();
          break;
        case 33:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeEntity {
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
        ? object.translations.map((e: any) => ResumeEntityPolyglot.fromJSON(e))
        : [],
      title: isSet(object.title) ? String(object.title) : undefined,
      keySkills: Array.isArray(object?.keySkills)
        ? object.keySkills.map((e: any) => ResumeKeySkillsEntity.fromJSON(e))
        : [],
      videos: Array.isArray(object?.videos)
        ? object.videos.map((e: any) => ResumeVideosEntity.fromJSON(e))
        : [],
      preferredPositions: Array.isArray(object?.preferredPositions)
        ? object.preferredPositions.map((e: any) =>
            ResumePreferredPositionsEntity.fromJSON(e)
          )
        : [],
      headline1: isSet(object.headline1) ? String(object.headline1) : undefined,
      phone: isSet(object.phone) ? String(object.phone) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      headline2: isSet(object.headline2) ? String(object.headline2) : undefined,
      productsListId: Array.isArray(object?.productsListId)
        ? object.productsListId.map((e: any) => String(e))
        : [],
      products: Array.isArray(object?.products)
        ? object.products.map((e: any) => ResumeProductEntity.fromJSON(e))
        : [],
      projectsListId: Array.isArray(object?.projectsListId)
        ? object.projectsListId.map((e: any) => String(e))
        : [],
      projects: Array.isArray(object?.projects)
        ? object.projects.map((e: any) => ResumeProjectEntity.fromJSON(e))
        : [],
      companiesListId: Array.isArray(object?.companiesListId)
        ? object.companiesListId.map((e: any) => String(e))
        : [],
      companies: Array.isArray(object?.companies)
        ? object.companies.map((e: any) => ResumeCompanyEntity.fromJSON(e))
        : [],
      servicesListId: Array.isArray(object?.servicesListId)
        ? object.servicesListId.map((e: any) => String(e))
        : [],
      services: Array.isArray(object?.services)
        ? object.services.map((e: any) => ResumeServiceEntity.fromJSON(e))
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

  toJSON(message: ResumeEntity): unknown {
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
        e ? ResumeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.title !== undefined && (obj.title = message.title);
    if (message.keySkills) {
      obj.keySkills = message.keySkills.map((e) =>
        e ? ResumeKeySkillsEntity.toJSON(e) : undefined
      );
    } else {
      obj.keySkills = [];
    }
    if (message.videos) {
      obj.videos = message.videos.map((e) =>
        e ? ResumeVideosEntity.toJSON(e) : undefined
      );
    } else {
      obj.videos = [];
    }
    if (message.preferredPositions) {
      obj.preferredPositions = message.preferredPositions.map((e) =>
        e ? ResumePreferredPositionsEntity.toJSON(e) : undefined
      );
    } else {
      obj.preferredPositions = [];
    }
    message.headline1 !== undefined && (obj.headline1 = message.headline1);
    message.phone !== undefined && (obj.phone = message.phone);
    message.email !== undefined && (obj.email = message.email);
    message.headline2 !== undefined && (obj.headline2 = message.headline2);
    if (message.productsListId) {
      obj.productsListId = message.productsListId.map((e) => e);
    } else {
      obj.productsListId = [];
    }
    if (message.products) {
      obj.products = message.products.map((e) =>
        e ? ResumeProductEntity.toJSON(e) : undefined
      );
    } else {
      obj.products = [];
    }
    if (message.projectsListId) {
      obj.projectsListId = message.projectsListId.map((e) => e);
    } else {
      obj.projectsListId = [];
    }
    if (message.projects) {
      obj.projects = message.projects.map((e) =>
        e ? ResumeProjectEntity.toJSON(e) : undefined
      );
    } else {
      obj.projects = [];
    }
    if (message.companiesListId) {
      obj.companiesListId = message.companiesListId.map((e) => e);
    } else {
      obj.companiesListId = [];
    }
    if (message.companies) {
      obj.companies = message.companies.map((e) =>
        e ? ResumeCompanyEntity.toJSON(e) : undefined
      );
    } else {
      obj.companies = [];
    }
    if (message.servicesListId) {
      obj.servicesListId = message.servicesListId.map((e) => e);
    } else {
      obj.servicesListId = [];
    }
    if (message.services) {
      obj.services = message.services.map((e) =>
        e ? ResumeServiceEntity.toJSON(e) : undefined
      );
    } else {
      obj.services = [];
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

  create<I extends Exact<DeepPartial<ResumeEntity>, I>>(
    base?: I
  ): ResumeEntity {
    return ResumeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeEntity>, I>>(
    object: I
  ): ResumeEntity {
    const message = createBaseResumeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) => ResumeEntityPolyglot.fromPartial(e)) ||
      [];
    message.title = object.title ?? undefined;
    message.keySkills =
      object.keySkills?.map((e) => ResumeKeySkillsEntity.fromPartial(e)) || [];
    message.videos =
      object.videos?.map((e) => ResumeVideosEntity.fromPartial(e)) || [];
    message.preferredPositions =
      object.preferredPositions?.map((e) =>
        ResumePreferredPositionsEntity.fromPartial(e)
      ) || [];
    message.headline1 = object.headline1 ?? undefined;
    message.phone = object.phone ?? undefined;
    message.email = object.email ?? undefined;
    message.headline2 = object.headline2 ?? undefined;
    message.productsListId = object.productsListId?.map((e) => e) || [];
    message.products =
      object.products?.map((e) => ResumeProductEntity.fromPartial(e)) || [];
    message.projectsListId = object.projectsListId?.map((e) => e) || [];
    message.projects =
      object.projects?.map((e) => ResumeProjectEntity.fromPartial(e)) || [];
    message.companiesListId = object.companiesListId?.map((e) => e) || [];
    message.companies =
      object.companies?.map((e) => ResumeCompanyEntity.fromPartial(e)) || [];
    message.servicesListId = object.servicesListId?.map((e) => e) || [];
    message.services =
      object.services?.map((e) => ResumeServiceEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumeEntityPolyglot(): ResumeEntityPolyglot {
  return {
    linkerId: "",
    languageId: "",
    title: "",
    headline1: "",
    phone: "",
    email: "",
    headline2: "",
  };
}

export const ResumeEntityPolyglot = {
  encode(
    message: ResumeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.headline1 !== "") {
      writer.uint32(34).string(message.headline1);
    }
    if (message.phone !== "") {
      writer.uint32(42).string(message.phone);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    if (message.headline2 !== "") {
      writer.uint32(58).string(message.headline2);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeEntityPolyglot();
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
          message.title = reader.string();
          break;
        case 4:
          message.headline1 = reader.string();
          break;
        case 5:
          message.phone = reader.string();
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.headline2 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      headline1: isSet(object.headline1) ? String(object.headline1) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      email: isSet(object.email) ? String(object.email) : "",
      headline2: isSet(object.headline2) ? String(object.headline2) : "",
    };
  },

  toJSON(message: ResumeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.title !== undefined && (obj.title = message.title);
    message.headline1 !== undefined && (obj.headline1 = message.headline1);
    message.phone !== undefined && (obj.phone = message.phone);
    message.email !== undefined && (obj.email = message.email);
    message.headline2 !== undefined && (obj.headline2 = message.headline2);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeEntityPolyglot>, I>>(
    base?: I
  ): ResumeEntityPolyglot {
    return ResumeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeEntityPolyglot>, I>>(
    object: I
  ): ResumeEntityPolyglot {
    const message = createBaseResumeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.title = object.title ?? "";
    message.headline1 = object.headline1 ?? "";
    message.phone = object.phone ?? "";
    message.email = object.email ?? "";
    message.headline2 = object.headline2 ?? "";
    return message;
  },
};

function createBaseResumeKeySkillsEntity(): ResumeKeySkillsEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    level: undefined,
    usage: undefined,
    started: 0,
    startedFormatted: "",
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeKeySkillsEntity = {
  encode(
    message: ResumeKeySkillsEntity,
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
      ResumeKeySkillsEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.level !== undefined) {
      writer.uint32(80).int64(message.level);
    }
    if (message.usage !== undefined) {
      writer.uint32(88).int64(message.usage);
    }
    if (message.started !== 0) {
      writer.uint32(104).int64(message.started);
    }
    if (message.startedFormatted !== "") {
      writer.uint32(114).string(message.startedFormatted);
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeKeySkillsEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeKeySkillsEntity();
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
            ResumeKeySkillsEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.level = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.usage = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.started = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.startedFormatted = reader.string();
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

  fromJSON(object: any): ResumeKeySkillsEntity {
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
            ResumeKeySkillsEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      level: isSet(object.level) ? Number(object.level) : undefined,
      usage: isSet(object.usage) ? Number(object.usage) : undefined,
      started: isSet(object.started) ? Number(object.started) : 0,
      startedFormatted: isSet(object.startedFormatted)
        ? String(object.startedFormatted)
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

  toJSON(message: ResumeKeySkillsEntity): unknown {
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
        e ? ResumeKeySkillsEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.usage !== undefined && (obj.usage = Math.round(message.usage));
    message.started !== undefined &&
      (obj.started = Math.round(message.started));
    message.startedFormatted !== undefined &&
      (obj.startedFormatted = message.startedFormatted);
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

  create<I extends Exact<DeepPartial<ResumeKeySkillsEntity>, I>>(
    base?: I
  ): ResumeKeySkillsEntity {
    return ResumeKeySkillsEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeKeySkillsEntity>, I>>(
    object: I
  ): ResumeKeySkillsEntity {
    const message = createBaseResumeKeySkillsEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ResumeKeySkillsEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.level = object.level ?? undefined;
    message.usage = object.usage ?? undefined;
    message.started = object.started ?? 0;
    message.startedFormatted = object.startedFormatted ?? "";
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumeKeySkillsEntityPolyglot(): ResumeKeySkillsEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ResumeKeySkillsEntityPolyglot = {
  encode(
    message: ResumeKeySkillsEntityPolyglot,
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
  ): ResumeKeySkillsEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeKeySkillsEntityPolyglot();
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

  fromJSON(object: any): ResumeKeySkillsEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ResumeKeySkillsEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeKeySkillsEntityPolyglot>, I>>(
    base?: I
  ): ResumeKeySkillsEntityPolyglot {
    return ResumeKeySkillsEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeKeySkillsEntityPolyglot>, I>>(
    object: I
  ): ResumeKeySkillsEntityPolyglot {
    const message = createBaseResumeKeySkillsEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseResumeVideosEntity(): ResumeVideosEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    link: undefined,
    title: undefined,
    description: undefined,
    locale: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeVideosEntity = {
  encode(
    message: ResumeVideosEntity,
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
    if (message.link !== undefined) {
      writer.uint32(66).string(message.link);
    }
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(82).string(message.description);
    }
    if (message.locale !== undefined) {
      writer.uint32(90).string(message.locale);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeVideosEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeVideosEntity();
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
          message.link = reader.string();
          break;
        case 9:
          message.title = reader.string();
          break;
        case 10:
          message.description = reader.string();
          break;
        case 11:
          message.locale = reader.string();
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

  fromJSON(object: any): ResumeVideosEntity {
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
      link: isSet(object.link) ? String(object.link) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      locale: isSet(object.locale) ? String(object.locale) : undefined,
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

  toJSON(message: ResumeVideosEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.link !== undefined && (obj.link = message.link);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.locale !== undefined && (obj.locale = message.locale);
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

  create<I extends Exact<DeepPartial<ResumeVideosEntity>, I>>(
    base?: I
  ): ResumeVideosEntity {
    return ResumeVideosEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeVideosEntity>, I>>(
    object: I
  ): ResumeVideosEntity {
    const message = createBaseResumeVideosEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.link = object.link ?? undefined;
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.locale = object.locale ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumePreferredPositionsEntity(): ResumePreferredPositionsEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    title: undefined,
    contractType: undefined,
    description: undefined,
    locale: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumePreferredPositionsEntity = {
  encode(
    message: ResumePreferredPositionsEntity,
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
      ResumePreferredPositionsEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
    }
    if (message.contractType !== undefined) {
      writer.uint32(82).string(message.contractType);
    }
    if (message.description !== undefined) {
      writer.uint32(90).string(message.description);
    }
    if (message.locale !== undefined) {
      writer.uint32(98).string(message.locale);
    }
    if (message.rank !== 0) {
      writer.uint32(104).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(112).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(120).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(130).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(138).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumePreferredPositionsEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumePreferredPositionsEntity();
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
            ResumePreferredPositionsEntityPolyglot.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 9:
          message.title = reader.string();
          break;
        case 10:
          message.contractType = reader.string();
          break;
        case 11:
          message.description = reader.string();
          break;
        case 12:
          message.locale = reader.string();
          break;
        case 13:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.createdFormatted = reader.string();
          break;
        case 17:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumePreferredPositionsEntity {
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
            ResumePreferredPositionsEntityPolyglot.fromJSON(e)
          )
        : [],
      title: isSet(object.title) ? String(object.title) : undefined,
      contractType: isSet(object.contractType)
        ? String(object.contractType)
        : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      locale: isSet(object.locale) ? String(object.locale) : undefined,
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

  toJSON(message: ResumePreferredPositionsEntity): unknown {
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
        e ? ResumePreferredPositionsEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.title !== undefined && (obj.title = message.title);
    message.contractType !== undefined &&
      (obj.contractType = message.contractType);
    message.description !== undefined &&
      (obj.description = message.description);
    message.locale !== undefined && (obj.locale = message.locale);
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

  create<I extends Exact<DeepPartial<ResumePreferredPositionsEntity>, I>>(
    base?: I
  ): ResumePreferredPositionsEntity {
    return ResumePreferredPositionsEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumePreferredPositionsEntity>, I>>(
    object: I
  ): ResumePreferredPositionsEntity {
    const message = createBaseResumePreferredPositionsEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ResumePreferredPositionsEntityPolyglot.fromPartial(e)
      ) || [];
    message.title = object.title ?? undefined;
    message.contractType = object.contractType ?? undefined;
    message.description = object.description ?? undefined;
    message.locale = object.locale ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumePreferredPositionsEntityPolyglot(): ResumePreferredPositionsEntityPolyglot {
  return {
    linkerId: "",
    languageId: "",
    title: "",
    contractType: "",
    description: "",
  };
}

export const ResumePreferredPositionsEntityPolyglot = {
  encode(
    message: ResumePreferredPositionsEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.contractType !== "") {
      writer.uint32(34).string(message.contractType);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumePreferredPositionsEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumePreferredPositionsEntityPolyglot();
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
          message.title = reader.string();
          break;
        case 4:
          message.contractType = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumePreferredPositionsEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      contractType: isSet(object.contractType)
        ? String(object.contractType)
        : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: ResumePreferredPositionsEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.title !== undefined && (obj.title = message.title);
    message.contractType !== undefined &&
      (obj.contractType = message.contractType);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ResumePreferredPositionsEntityPolyglot>, I>
  >(base?: I): ResumePreferredPositionsEntityPolyglot {
    return ResumePreferredPositionsEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ResumePreferredPositionsEntityPolyglot>, I>
  >(object: I): ResumePreferredPositionsEntityPolyglot {
    const message = createBaseResumePreferredPositionsEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.title = object.title ?? "";
    message.contractType = object.contractType ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseResumeIndustryCreateReply(): ResumeIndustryCreateReply {
  return { data: undefined, error: undefined };
}

export const ResumeIndustryCreateReply = {
  encode(
    message: ResumeIndustryCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeIndustryEntity.encode(
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
  ): ResumeIndustryCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeIndustryCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeIndustryEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeIndustryCreateReply {
    return {
      data: isSet(object.data)
        ? ResumeIndustryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeIndustryCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeIndustryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeIndustryCreateReply>, I>>(
    base?: I
  ): ResumeIndustryCreateReply {
    return ResumeIndustryCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeIndustryCreateReply>, I>>(
    object: I
  ): ResumeIndustryCreateReply {
    const message = createBaseResumeIndustryCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeIndustryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeIndustryReply(): ResumeIndustryReply {
  return { data: undefined, error: undefined };
}

export const ResumeIndustryReply = {
  encode(
    message: ResumeIndustryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeIndustryEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeIndustryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeIndustryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeIndustryEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeIndustryReply {
    return {
      data: isSet(object.data)
        ? ResumeIndustryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeIndustryReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeIndustryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeIndustryReply>, I>>(
    base?: I
  ): ResumeIndustryReply {
    return ResumeIndustryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeIndustryReply>, I>>(
    object: I
  ): ResumeIndustryReply {
    const message = createBaseResumeIndustryReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeIndustryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeIndustryQueryReply(): ResumeIndustryQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ResumeIndustryQueryReply = {
  encode(
    message: ResumeIndustryQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ResumeIndustryEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): ResumeIndustryQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeIndustryQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ResumeIndustryEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): ResumeIndustryQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ResumeIndustryEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeIndustryQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ResumeIndustryEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeIndustryQueryReply>, I>>(
    base?: I
  ): ResumeIndustryQueryReply {
    return ResumeIndustryQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeIndustryQueryReply>, I>>(
    object: I
  ): ResumeIndustryQueryReply {
    const message = createBaseResumeIndustryQueryReply();
    message.items =
      object.items?.map((e) => ResumeIndustryEntity.fromPartial(e)) || [];
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

function createBaseResumeIndustryEntity(): ResumeIndustryEntity {
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

export const ResumeIndustryEntity = {
  encode(
    message: ResumeIndustryEntity,
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
      ResumeIndustryEntityPolyglot.encode(
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
  ): ResumeIndustryEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeIndustryEntity();
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
            ResumeIndustryEntityPolyglot.decode(reader, reader.uint32())
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

  fromJSON(object: any): ResumeIndustryEntity {
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
            ResumeIndustryEntityPolyglot.fromJSON(e)
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

  toJSON(message: ResumeIndustryEntity): unknown {
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
        e ? ResumeIndustryEntityPolyglot.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeIndustryEntity>, I>>(
    base?: I
  ): ResumeIndustryEntity {
    return ResumeIndustryEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeIndustryEntity>, I>>(
    object: I
  ): ResumeIndustryEntity {
    const message = createBaseResumeIndustryEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ResumeIndustryEntityPolyglot.fromPartial(e)
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

function createBaseResumeIndustryEntityPolyglot(): ResumeIndustryEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ResumeIndustryEntityPolyglot = {
  encode(
    message: ResumeIndustryEntityPolyglot,
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
  ): ResumeIndustryEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeIndustryEntityPolyglot();
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

  fromJSON(object: any): ResumeIndustryEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ResumeIndustryEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeIndustryEntityPolyglot>, I>>(
    base?: I
  ): ResumeIndustryEntityPolyglot {
    return ResumeIndustryEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeIndustryEntityPolyglot>, I>>(
    object: I
  ): ResumeIndustryEntityPolyglot {
    const message = createBaseResumeIndustryEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseResumeProductCreateReply(): ResumeProductCreateReply {
  return { data: undefined, error: undefined };
}

export const ResumeProductCreateReply = {
  encode(
    message: ResumeProductCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeProductEntity.encode(
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
  ): ResumeProductCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProductCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeProductEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeProductCreateReply {
    return {
      data: isSet(object.data)
        ? ResumeProductEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeProductCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeProductEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeProductCreateReply>, I>>(
    base?: I
  ): ResumeProductCreateReply {
    return ResumeProductCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProductCreateReply>, I>>(
    object: I
  ): ResumeProductCreateReply {
    const message = createBaseResumeProductCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeProductEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeProductReply(): ResumeProductReply {
  return { data: undefined, error: undefined };
}

export const ResumeProductReply = {
  encode(
    message: ResumeProductReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeProductEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeProductReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProductReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeProductEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeProductReply {
    return {
      data: isSet(object.data)
        ? ResumeProductEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeProductReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeProductEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeProductReply>, I>>(
    base?: I
  ): ResumeProductReply {
    return ResumeProductReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProductReply>, I>>(
    object: I
  ): ResumeProductReply {
    const message = createBaseResumeProductReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeProductEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeProductQueryReply(): ResumeProductQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ResumeProductQueryReply = {
  encode(
    message: ResumeProductQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ResumeProductEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): ResumeProductQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProductQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ResumeProductEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): ResumeProductQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ResumeProductEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeProductQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ResumeProductEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeProductQueryReply>, I>>(
    base?: I
  ): ResumeProductQueryReply {
    return ResumeProductQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProductQueryReply>, I>>(
    object: I
  ): ResumeProductQueryReply {
    const message = createBaseResumeProductQueryReply();
    message.items =
      object.items?.map((e) => ResumeProductEntity.fromPartial(e)) || [];
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

function createBaseResumeProductEntity(): ResumeProductEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    description: undefined,
    links: [],
    technologies: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeProductEntity = {
  encode(
    message: ResumeProductEntity,
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
      ResumeProductEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(82).string(message.description);
    }
    for (const v of message.links) {
      ResumeProductLinksEntity.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.technologies) {
      ResumeProductTechnologiesEntity.encode(
        v!,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(104).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(112).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(120).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(130).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(138).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeProductEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProductEntity();
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
            ResumeProductEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.description = reader.string();
          break;
        case 11:
          message.links.push(
            ResumeProductLinksEntity.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.technologies.push(
            ResumeProductTechnologiesEntity.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.createdFormatted = reader.string();
          break;
        case 17:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeProductEntity {
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
            ResumeProductEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => ResumeProductLinksEntity.fromJSON(e))
        : [],
      technologies: Array.isArray(object?.technologies)
        ? object.technologies.map((e: any) =>
            ResumeProductTechnologiesEntity.fromJSON(e)
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

  toJSON(message: ResumeProductEntity): unknown {
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
        e ? ResumeProductEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? ResumeProductLinksEntity.toJSON(e) : undefined
      );
    } else {
      obj.links = [];
    }
    if (message.technologies) {
      obj.technologies = message.technologies.map((e) =>
        e ? ResumeProductTechnologiesEntity.toJSON(e) : undefined
      );
    } else {
      obj.technologies = [];
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

  create<I extends Exact<DeepPartial<ResumeProductEntity>, I>>(
    base?: I
  ): ResumeProductEntity {
    return ResumeProductEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProductEntity>, I>>(
    object: I
  ): ResumeProductEntity {
    const message = createBaseResumeProductEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ResumeProductEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.links =
      object.links?.map((e) => ResumeProductLinksEntity.fromPartial(e)) || [];
    message.technologies =
      object.technologies?.map((e) =>
        ResumeProductTechnologiesEntity.fromPartial(e)
      ) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumeProductEntityPolyglot(): ResumeProductEntityPolyglot {
  return { linkerId: "", languageId: "", name: "", description: "" };
}

export const ResumeProductEntityPolyglot = {
  encode(
    message: ResumeProductEntityPolyglot,
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
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeProductEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProductEntityPolyglot();
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
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeProductEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: ResumeProductEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeProductEntityPolyglot>, I>>(
    base?: I
  ): ResumeProductEntityPolyglot {
    return ResumeProductEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProductEntityPolyglot>, I>>(
    object: I
  ): ResumeProductEntityPolyglot {
    const message = createBaseResumeProductEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseResumeProductLinksEntity(): ResumeProductLinksEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    url: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeProductLinksEntity = {
  encode(
    message: ResumeProductLinksEntity,
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
    if (message.url !== undefined) {
      writer.uint32(66).string(message.url);
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
  ): ResumeProductLinksEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProductLinksEntity();
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
          message.url = reader.string();
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

  fromJSON(object: any): ResumeProductLinksEntity {
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
      url: isSet(object.url) ? String(object.url) : undefined,
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

  toJSON(message: ResumeProductLinksEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.url !== undefined && (obj.url = message.url);
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

  create<I extends Exact<DeepPartial<ResumeProductLinksEntity>, I>>(
    base?: I
  ): ResumeProductLinksEntity {
    return ResumeProductLinksEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProductLinksEntity>, I>>(
    object: I
  ): ResumeProductLinksEntity {
    const message = createBaseResumeProductLinksEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.url = object.url ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumeProductTechnologiesEntity(): ResumeProductTechnologiesEntity {
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

export const ResumeProductTechnologiesEntity = {
  encode(
    message: ResumeProductTechnologiesEntity,
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
      ResumeProductTechnologiesEntityPolyglot.encode(
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
  ): ResumeProductTechnologiesEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProductTechnologiesEntity();
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
            ResumeProductTechnologiesEntityPolyglot.decode(
              reader,
              reader.uint32()
            )
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

  fromJSON(object: any): ResumeProductTechnologiesEntity {
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
            ResumeProductTechnologiesEntityPolyglot.fromJSON(e)
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

  toJSON(message: ResumeProductTechnologiesEntity): unknown {
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
        e ? ResumeProductTechnologiesEntityPolyglot.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeProductTechnologiesEntity>, I>>(
    base?: I
  ): ResumeProductTechnologiesEntity {
    return ResumeProductTechnologiesEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProductTechnologiesEntity>, I>>(
    object: I
  ): ResumeProductTechnologiesEntity {
    const message = createBaseResumeProductTechnologiesEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ResumeProductTechnologiesEntityPolyglot.fromPartial(e)
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

function createBaseResumeProductTechnologiesEntityPolyglot(): ResumeProductTechnologiesEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ResumeProductTechnologiesEntityPolyglot = {
  encode(
    message: ResumeProductTechnologiesEntityPolyglot,
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
  ): ResumeProductTechnologiesEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProductTechnologiesEntityPolyglot();
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

  fromJSON(object: any): ResumeProductTechnologiesEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ResumeProductTechnologiesEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ResumeProductTechnologiesEntityPolyglot>, I>
  >(base?: I): ResumeProductTechnologiesEntityPolyglot {
    return ResumeProductTechnologiesEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ResumeProductTechnologiesEntityPolyglot>, I>
  >(object: I): ResumeProductTechnologiesEntityPolyglot {
    const message = createBaseResumeProductTechnologiesEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseResumeProjectCreateReply(): ResumeProjectCreateReply {
  return { data: undefined, error: undefined };
}

export const ResumeProjectCreateReply = {
  encode(
    message: ResumeProjectCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeProjectEntity.encode(
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
  ): ResumeProjectCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeProjectEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeProjectCreateReply {
    return {
      data: isSet(object.data)
        ? ResumeProjectEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeProjectCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeProjectEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeProjectCreateReply>, I>>(
    base?: I
  ): ResumeProjectCreateReply {
    return ResumeProjectCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectCreateReply>, I>>(
    object: I
  ): ResumeProjectCreateReply {
    const message = createBaseResumeProjectCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeProjectEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeProjectReply(): ResumeProjectReply {
  return { data: undefined, error: undefined };
}

export const ResumeProjectReply = {
  encode(
    message: ResumeProjectReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeProjectEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeProjectReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeProjectEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeProjectReply {
    return {
      data: isSet(object.data)
        ? ResumeProjectEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeProjectReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeProjectEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeProjectReply>, I>>(
    base?: I
  ): ResumeProjectReply {
    return ResumeProjectReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectReply>, I>>(
    object: I
  ): ResumeProjectReply {
    const message = createBaseResumeProjectReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeProjectEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeProjectQueryReply(): ResumeProjectQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ResumeProjectQueryReply = {
  encode(
    message: ResumeProjectQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ResumeProjectEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): ResumeProjectQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ResumeProjectEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): ResumeProjectQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ResumeProjectEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeProjectQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ResumeProjectEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeProjectQueryReply>, I>>(
    base?: I
  ): ResumeProjectQueryReply {
    return ResumeProjectQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectQueryReply>, I>>(
    object: I
  ): ResumeProjectQueryReply {
    const message = createBaseResumeProjectQueryReply();
    message.items =
      object.items?.map((e) => ResumeProjectEntity.fromPartial(e)) || [];
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

function createBaseResumeProjectEntity(): ResumeProjectEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    title: undefined,
    description: undefined,
    descriptionExcerpt: undefined,
    technicalDescription: undefined,
    technicalDescriptionExcerpt: undefined,
    typeId: undefined,
    type: undefined,
    attachmentsListId: [],
    attachments: [],
    start: 0,
    startFormatted: "",
    end: 0,
    endFormatted: "",
    workLocationId: undefined,
    workLocation: undefined,
    companyLocationId: undefined,
    companyLocation: undefined,
    clientLocationId: undefined,
    clientLocation: undefined,
    links: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeProjectEntity = {
  encode(
    message: ResumeProjectEntity,
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
      ResumeProjectEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(82).string(message.description);
    }
    if (message.descriptionExcerpt !== undefined) {
      writer.uint32(90).string(message.descriptionExcerpt);
    }
    if (message.technicalDescription !== undefined) {
      writer.uint32(98).string(message.technicalDescription);
    }
    if (message.technicalDescriptionExcerpt !== undefined) {
      writer.uint32(106).string(message.technicalDescriptionExcerpt);
    }
    if (message.typeId !== undefined) {
      writer.uint32(122).string(message.typeId);
    }
    if (message.type !== undefined) {
      ResumeProjectTypeEntity.encode(
        message.type,
        writer.uint32(130).fork()
      ).ldelim();
    }
    for (const v of message.attachmentsListId) {
      writer.uint32(146).string(v!);
    }
    for (const v of message.attachments) {
      FileEntity.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.start !== 0) {
      writer.uint32(168).int64(message.start);
    }
    if (message.startFormatted !== "") {
      writer.uint32(178).string(message.startFormatted);
    }
    if (message.end !== 0) {
      writer.uint32(192).int64(message.end);
    }
    if (message.endFormatted !== "") {
      writer.uint32(202).string(message.endFormatted);
    }
    if (message.workLocationId !== undefined) {
      writer.uint32(218).string(message.workLocationId);
    }
    if (message.workLocation !== undefined) {
      GeoCountryEntity.encode(
        message.workLocation,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.companyLocationId !== undefined) {
      writer.uint32(242).string(message.companyLocationId);
    }
    if (message.companyLocation !== undefined) {
      GeoCountryEntity.encode(
        message.companyLocation,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.clientLocationId !== undefined) {
      writer.uint32(266).string(message.clientLocationId);
    }
    if (message.clientLocation !== undefined) {
      GeoCountryEntity.encode(
        message.clientLocation,
        writer.uint32(274).fork()
      ).ldelim();
    }
    for (const v of message.links) {
      ResumeProjectLinksEntity.encode(v!, writer.uint32(282).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(288).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(296).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(304).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(314).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(322).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeProjectEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectEntity();
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
            ResumeProjectEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.title = reader.string();
          break;
        case 10:
          message.description = reader.string();
          break;
        case 11:
          message.descriptionExcerpt = reader.string();
          break;
        case 12:
          message.technicalDescription = reader.string();
          break;
        case 13:
          message.technicalDescriptionExcerpt = reader.string();
          break;
        case 15:
          message.typeId = reader.string();
          break;
        case 16:
          message.type = ResumeProjectTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.attachmentsListId.push(reader.string());
          break;
        case 19:
          message.attachments.push(FileEntity.decode(reader, reader.uint32()));
          break;
        case 21:
          message.start = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.startFormatted = reader.string();
          break;
        case 24:
          message.end = longToNumber(reader.int64() as Long);
          break;
        case 25:
          message.endFormatted = reader.string();
          break;
        case 27:
          message.workLocationId = reader.string();
          break;
        case 28:
          message.workLocation = GeoCountryEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 30:
          message.companyLocationId = reader.string();
          break;
        case 31:
          message.companyLocation = GeoCountryEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 33:
          message.clientLocationId = reader.string();
          break;
        case 34:
          message.clientLocation = GeoCountryEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 35:
          message.links.push(
            ResumeProjectLinksEntity.decode(reader, reader.uint32())
          );
          break;
        case 36:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 37:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 38:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 39:
          message.createdFormatted = reader.string();
          break;
        case 40:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeProjectEntity {
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
            ResumeProjectEntityPolyglot.fromJSON(e)
          )
        : [],
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      descriptionExcerpt: isSet(object.descriptionExcerpt)
        ? String(object.descriptionExcerpt)
        : undefined,
      technicalDescription: isSet(object.technicalDescription)
        ? String(object.technicalDescription)
        : undefined,
      technicalDescriptionExcerpt: isSet(object.technicalDescriptionExcerpt)
        ? String(object.technicalDescriptionExcerpt)
        : undefined,
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      type: isSet(object.type)
        ? ResumeProjectTypeEntity.fromJSON(object.type)
        : undefined,
      attachmentsListId: Array.isArray(object?.attachmentsListId)
        ? object.attachmentsListId.map((e: any) => String(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => FileEntity.fromJSON(e))
        : [],
      start: isSet(object.start) ? Number(object.start) : 0,
      startFormatted: isSet(object.startFormatted)
        ? String(object.startFormatted)
        : "",
      end: isSet(object.end) ? Number(object.end) : 0,
      endFormatted: isSet(object.endFormatted)
        ? String(object.endFormatted)
        : "",
      workLocationId: isSet(object.workLocationId)
        ? String(object.workLocationId)
        : undefined,
      workLocation: isSet(object.workLocation)
        ? GeoCountryEntity.fromJSON(object.workLocation)
        : undefined,
      companyLocationId: isSet(object.companyLocationId)
        ? String(object.companyLocationId)
        : undefined,
      companyLocation: isSet(object.companyLocation)
        ? GeoCountryEntity.fromJSON(object.companyLocation)
        : undefined,
      clientLocationId: isSet(object.clientLocationId)
        ? String(object.clientLocationId)
        : undefined,
      clientLocation: isSet(object.clientLocation)
        ? GeoCountryEntity.fromJSON(object.clientLocation)
        : undefined,
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => ResumeProjectLinksEntity.fromJSON(e))
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

  toJSON(message: ResumeProjectEntity): unknown {
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
        e ? ResumeProjectEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.descriptionExcerpt !== undefined &&
      (obj.descriptionExcerpt = message.descriptionExcerpt);
    message.technicalDescription !== undefined &&
      (obj.technicalDescription = message.technicalDescription);
    message.technicalDescriptionExcerpt !== undefined &&
      (obj.technicalDescriptionExcerpt = message.technicalDescriptionExcerpt);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.type !== undefined &&
      (obj.type = message.type
        ? ResumeProjectTypeEntity.toJSON(message.type)
        : undefined);
    if (message.attachmentsListId) {
      obj.attachmentsListId = message.attachmentsListId.map((e) => e);
    } else {
      obj.attachmentsListId = [];
    }
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? FileEntity.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.startFormatted !== undefined &&
      (obj.startFormatted = message.startFormatted);
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.endFormatted !== undefined &&
      (obj.endFormatted = message.endFormatted);
    message.workLocationId !== undefined &&
      (obj.workLocationId = message.workLocationId);
    message.workLocation !== undefined &&
      (obj.workLocation = message.workLocation
        ? GeoCountryEntity.toJSON(message.workLocation)
        : undefined);
    message.companyLocationId !== undefined &&
      (obj.companyLocationId = message.companyLocationId);
    message.companyLocation !== undefined &&
      (obj.companyLocation = message.companyLocation
        ? GeoCountryEntity.toJSON(message.companyLocation)
        : undefined);
    message.clientLocationId !== undefined &&
      (obj.clientLocationId = message.clientLocationId);
    message.clientLocation !== undefined &&
      (obj.clientLocation = message.clientLocation
        ? GeoCountryEntity.toJSON(message.clientLocation)
        : undefined);
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? ResumeProjectLinksEntity.toJSON(e) : undefined
      );
    } else {
      obj.links = [];
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

  create<I extends Exact<DeepPartial<ResumeProjectEntity>, I>>(
    base?: I
  ): ResumeProjectEntity {
    return ResumeProjectEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectEntity>, I>>(
    object: I
  ): ResumeProjectEntity {
    const message = createBaseResumeProjectEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ResumeProjectEntityPolyglot.fromPartial(e)
      ) || [];
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.descriptionExcerpt = object.descriptionExcerpt ?? undefined;
    message.technicalDescription = object.technicalDescription ?? undefined;
    message.technicalDescriptionExcerpt =
      object.technicalDescriptionExcerpt ?? undefined;
    message.typeId = object.typeId ?? undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? ResumeProjectTypeEntity.fromPartial(object.type)
        : undefined;
    message.attachmentsListId = object.attachmentsListId?.map((e) => e) || [];
    message.attachments =
      object.attachments?.map((e) => FileEntity.fromPartial(e)) || [];
    message.start = object.start ?? 0;
    message.startFormatted = object.startFormatted ?? "";
    message.end = object.end ?? 0;
    message.endFormatted = object.endFormatted ?? "";
    message.workLocationId = object.workLocationId ?? undefined;
    message.workLocation =
      object.workLocation !== undefined && object.workLocation !== null
        ? GeoCountryEntity.fromPartial(object.workLocation)
        : undefined;
    message.companyLocationId = object.companyLocationId ?? undefined;
    message.companyLocation =
      object.companyLocation !== undefined && object.companyLocation !== null
        ? GeoCountryEntity.fromPartial(object.companyLocation)
        : undefined;
    message.clientLocationId = object.clientLocationId ?? undefined;
    message.clientLocation =
      object.clientLocation !== undefined && object.clientLocation !== null
        ? GeoCountryEntity.fromPartial(object.clientLocation)
        : undefined;
    message.links =
      object.links?.map((e) => ResumeProjectLinksEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumeProjectEntityPolyglot(): ResumeProjectEntityPolyglot {
  return {
    linkerId: "",
    languageId: "",
    title: "",
    description: "",
    technicalDescription: "",
  };
}

export const ResumeProjectEntityPolyglot = {
  encode(
    message: ResumeProjectEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.technicalDescription !== "") {
      writer.uint32(42).string(message.technicalDescription);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeProjectEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectEntityPolyglot();
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
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.technicalDescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeProjectEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      technicalDescription: isSet(object.technicalDescription)
        ? String(object.technicalDescription)
        : "",
    };
  },

  toJSON(message: ResumeProjectEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.technicalDescription !== undefined &&
      (obj.technicalDescription = message.technicalDescription);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeProjectEntityPolyglot>, I>>(
    base?: I
  ): ResumeProjectEntityPolyglot {
    return ResumeProjectEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectEntityPolyglot>, I>>(
    object: I
  ): ResumeProjectEntityPolyglot {
    const message = createBaseResumeProjectEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.technicalDescription = object.technicalDescription ?? "";
    return message;
  },
};

function createBaseResumeProjectLinksEntity(): ResumeProjectLinksEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    link: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeProjectLinksEntity = {
  encode(
    message: ResumeProjectLinksEntity,
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
    if (message.link !== undefined) {
      writer.uint32(66).string(message.link);
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
  ): ResumeProjectLinksEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectLinksEntity();
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
          message.link = reader.string();
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

  fromJSON(object: any): ResumeProjectLinksEntity {
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
      link: isSet(object.link) ? String(object.link) : undefined,
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

  toJSON(message: ResumeProjectLinksEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.link !== undefined && (obj.link = message.link);
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

  create<I extends Exact<DeepPartial<ResumeProjectLinksEntity>, I>>(
    base?: I
  ): ResumeProjectLinksEntity {
    return ResumeProjectLinksEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectLinksEntity>, I>>(
    object: I
  ): ResumeProjectLinksEntity {
    const message = createBaseResumeProjectLinksEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.link = object.link ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumeProjectTypeCreateReply(): ResumeProjectTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const ResumeProjectTypeCreateReply = {
  encode(
    message: ResumeProjectTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeProjectTypeEntity.encode(
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
  ): ResumeProjectTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeProjectTypeEntity.decode(
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

  fromJSON(object: any): ResumeProjectTypeCreateReply {
    return {
      data: isSet(object.data)
        ? ResumeProjectTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeProjectTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeProjectTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeProjectTypeCreateReply>, I>>(
    base?: I
  ): ResumeProjectTypeCreateReply {
    return ResumeProjectTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectTypeCreateReply>, I>>(
    object: I
  ): ResumeProjectTypeCreateReply {
    const message = createBaseResumeProjectTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeProjectTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeProjectTypeReply(): ResumeProjectTypeReply {
  return { data: undefined, error: undefined };
}

export const ResumeProjectTypeReply = {
  encode(
    message: ResumeProjectTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeProjectTypeEntity.encode(
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
  ): ResumeProjectTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeProjectTypeEntity.decode(
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

  fromJSON(object: any): ResumeProjectTypeReply {
    return {
      data: isSet(object.data)
        ? ResumeProjectTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeProjectTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeProjectTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeProjectTypeReply>, I>>(
    base?: I
  ): ResumeProjectTypeReply {
    return ResumeProjectTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectTypeReply>, I>>(
    object: I
  ): ResumeProjectTypeReply {
    const message = createBaseResumeProjectTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeProjectTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeProjectTypeQueryReply(): ResumeProjectTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ResumeProjectTypeQueryReply = {
  encode(
    message: ResumeProjectTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ResumeProjectTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): ResumeProjectTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ResumeProjectTypeEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): ResumeProjectTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ResumeProjectTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeProjectTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ResumeProjectTypeEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeProjectTypeQueryReply>, I>>(
    base?: I
  ): ResumeProjectTypeQueryReply {
    return ResumeProjectTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectTypeQueryReply>, I>>(
    object: I
  ): ResumeProjectTypeQueryReply {
    const message = createBaseResumeProjectTypeQueryReply();
    message.items =
      object.items?.map((e) => ResumeProjectTypeEntity.fromPartial(e)) || [];
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

function createBaseResumeProjectTypeEntity(): ResumeProjectTypeEntity {
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

export const ResumeProjectTypeEntity = {
  encode(
    message: ResumeProjectTypeEntity,
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
      ResumeProjectTypeEntityPolyglot.encode(
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
  ): ResumeProjectTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectTypeEntity();
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
            ResumeProjectTypeEntityPolyglot.decode(reader, reader.uint32())
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

  fromJSON(object: any): ResumeProjectTypeEntity {
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
            ResumeProjectTypeEntityPolyglot.fromJSON(e)
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

  toJSON(message: ResumeProjectTypeEntity): unknown {
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
        e ? ResumeProjectTypeEntityPolyglot.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeProjectTypeEntity>, I>>(
    base?: I
  ): ResumeProjectTypeEntity {
    return ResumeProjectTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectTypeEntity>, I>>(
    object: I
  ): ResumeProjectTypeEntity {
    const message = createBaseResumeProjectTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ResumeProjectTypeEntityPolyglot.fromPartial(e)
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

function createBaseResumeProjectTypeEntityPolyglot(): ResumeProjectTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ResumeProjectTypeEntityPolyglot = {
  encode(
    message: ResumeProjectTypeEntityPolyglot,
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
  ): ResumeProjectTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeProjectTypeEntityPolyglot();
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

  fromJSON(object: any): ResumeProjectTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ResumeProjectTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeProjectTypeEntityPolyglot>, I>>(
    base?: I
  ): ResumeProjectTypeEntityPolyglot {
    return ResumeProjectTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeProjectTypeEntityPolyglot>, I>>(
    object: I
  ): ResumeProjectTypeEntityPolyglot {
    const message = createBaseResumeProjectTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseResumeServiceCreateReply(): ResumeServiceCreateReply {
  return { data: undefined, error: undefined };
}

export const ResumeServiceCreateReply = {
  encode(
    message: ResumeServiceCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeServiceEntity.encode(
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
  ): ResumeServiceCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeServiceCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeServiceEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeServiceCreateReply {
    return {
      data: isSet(object.data)
        ? ResumeServiceEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeServiceCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeServiceEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeServiceCreateReply>, I>>(
    base?: I
  ): ResumeServiceCreateReply {
    return ResumeServiceCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeServiceCreateReply>, I>>(
    object: I
  ): ResumeServiceCreateReply {
    const message = createBaseResumeServiceCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeServiceEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeServiceReply(): ResumeServiceReply {
  return { data: undefined, error: undefined };
}

export const ResumeServiceReply = {
  encode(
    message: ResumeServiceReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeServiceEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeServiceReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeServiceReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeServiceEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeServiceReply {
    return {
      data: isSet(object.data)
        ? ResumeServiceEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeServiceReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeServiceEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeServiceReply>, I>>(
    base?: I
  ): ResumeServiceReply {
    return ResumeServiceReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeServiceReply>, I>>(
    object: I
  ): ResumeServiceReply {
    const message = createBaseResumeServiceReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeServiceEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeServiceQueryReply(): ResumeServiceQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ResumeServiceQueryReply = {
  encode(
    message: ResumeServiceQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ResumeServiceEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): ResumeServiceQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeServiceQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ResumeServiceEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): ResumeServiceQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ResumeServiceEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeServiceQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ResumeServiceEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeServiceQueryReply>, I>>(
    base?: I
  ): ResumeServiceQueryReply {
    return ResumeServiceQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeServiceQueryReply>, I>>(
    object: I
  ): ResumeServiceQueryReply {
    const message = createBaseResumeServiceQueryReply();
    message.items =
      object.items?.map((e) => ResumeServiceEntity.fromPartial(e)) || [];
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

function createBaseResumeServiceEntity(): ResumeServiceEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    description: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeServiceEntity = {
  encode(
    message: ResumeServiceEntity,
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
      ResumeServiceEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(82).string(message.description);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeServiceEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeServiceEntity();
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
            ResumeServiceEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.description = reader.string();
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

  fromJSON(object: any): ResumeServiceEntity {
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
            ResumeServiceEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
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

  toJSON(message: ResumeServiceEntity): unknown {
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
        e ? ResumeServiceEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
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

  create<I extends Exact<DeepPartial<ResumeServiceEntity>, I>>(
    base?: I
  ): ResumeServiceEntity {
    return ResumeServiceEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeServiceEntity>, I>>(
    object: I
  ): ResumeServiceEntity {
    const message = createBaseResumeServiceEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ResumeServiceEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseResumeServiceEntityPolyglot(): ResumeServiceEntityPolyglot {
  return { linkerId: "", languageId: "", name: "", description: "" };
}

export const ResumeServiceEntityPolyglot = {
  encode(
    message: ResumeServiceEntityPolyglot,
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
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeServiceEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeServiceEntityPolyglot();
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
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeServiceEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: ResumeServiceEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeServiceEntityPolyglot>, I>>(
    base?: I
  ): ResumeServiceEntityPolyglot {
    return ResumeServiceEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeServiceEntityPolyglot>, I>>(
    object: I
  ): ResumeServiceEntityPolyglot {
    const message = createBaseResumeServiceEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseResumeSkillCreateReply(): ResumeSkillCreateReply {
  return { data: undefined, error: undefined };
}

export const ResumeSkillCreateReply = {
  encode(
    message: ResumeSkillCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeSkillEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeSkillCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeSkillCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeSkillEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeSkillCreateReply {
    return {
      data: isSet(object.data)
        ? ResumeSkillEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeSkillCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeSkillEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeSkillCreateReply>, I>>(
    base?: I
  ): ResumeSkillCreateReply {
    return ResumeSkillCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeSkillCreateReply>, I>>(
    object: I
  ): ResumeSkillCreateReply {
    const message = createBaseResumeSkillCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeSkillEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeSkillReply(): ResumeSkillReply {
  return { data: undefined, error: undefined };
}

export const ResumeSkillReply = {
  encode(
    message: ResumeSkillReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ResumeSkillEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeSkillReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeSkillReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ResumeSkillEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeSkillReply {
    return {
      data: isSet(object.data)
        ? ResumeSkillEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeSkillReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ResumeSkillEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeSkillReply>, I>>(
    base?: I
  ): ResumeSkillReply {
    return ResumeSkillReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeSkillReply>, I>>(
    object: I
  ): ResumeSkillReply {
    const message = createBaseResumeSkillReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ResumeSkillEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseResumeSkillQueryReply(): ResumeSkillQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ResumeSkillQueryReply = {
  encode(
    message: ResumeSkillQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ResumeSkillEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): ResumeSkillQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeSkillQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ResumeSkillEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ResumeSkillQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ResumeSkillEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResumeSkillQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ResumeSkillEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<ResumeSkillQueryReply>, I>>(
    base?: I
  ): ResumeSkillQueryReply {
    return ResumeSkillQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeSkillQueryReply>, I>>(
    object: I
  ): ResumeSkillQueryReply {
    const message = createBaseResumeSkillQueryReply();
    message.items =
      object.items?.map((e) => ResumeSkillEntity.fromPartial(e)) || [];
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

function createBaseResumeSkillEntity(): ResumeSkillEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    skillsetId: undefined,
    skillset: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ResumeSkillEntity = {
  encode(
    message: ResumeSkillEntity,
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
    if (message.skillsetId !== undefined) {
      writer.uint32(74).string(message.skillsetId);
    }
    if (message.skillset !== undefined) {
      SkillsetEntity.encode(
        message.skillset,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeSkillEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeSkillEntity();
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
          message.skillsetId = reader.string();
          break;
        case 10:
          message.skillset = SkillsetEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResumeSkillEntity {
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
      skillsetId: isSet(object.skillsetId)
        ? String(object.skillsetId)
        : undefined,
      skillset: isSet(object.skillset)
        ? SkillsetEntity.fromJSON(object.skillset)
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

  toJSON(message: ResumeSkillEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.skillsetId !== undefined && (obj.skillsetId = message.skillsetId);
    message.skillset !== undefined &&
      (obj.skillset = message.skillset
        ? SkillsetEntity.toJSON(message.skillset)
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

  create<I extends Exact<DeepPartial<ResumeSkillEntity>, I>>(
    base?: I
  ): ResumeSkillEntity {
    return ResumeSkillEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResumeSkillEntity>, I>>(
    object: I
  ): ResumeSkillEntity {
    const message = createBaseResumeSkillEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.skillsetId = object.skillsetId ?? undefined;
    message.skillset =
      object.skillset !== undefined && object.skillset !== null
        ? SkillsetEntity.fromPartial(object.skillset)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

export interface ResumeCompanys {
  ResumeCompanyActionCreate(
    request: ResumeCompanyEntity
  ): Promise<ResumeCompanyCreateReply>;
  ResumeCompanyActionUpdate(
    request: ResumeCompanyEntity
  ): Promise<ResumeCompanyCreateReply>;
  ResumeCompanyActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeCompanyQueryReply>;
  ResumeCompanyActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeCompanyReply>;
  ResumeCompanyActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ResumeCompanysClientImpl implements ResumeCompanys {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ResumeCompanys";
    this.rpc = rpc;
    this.ResumeCompanyActionCreate = this.ResumeCompanyActionCreate.bind(this);
    this.ResumeCompanyActionUpdate = this.ResumeCompanyActionUpdate.bind(this);
    this.ResumeCompanyActionQuery = this.ResumeCompanyActionQuery.bind(this);
    this.ResumeCompanyActionGetOne = this.ResumeCompanyActionGetOne.bind(this);
    this.ResumeCompanyActionRemove = this.ResumeCompanyActionRemove.bind(this);
  }
  ResumeCompanyActionCreate(
    request: ResumeCompanyEntity
  ): Promise<ResumeCompanyCreateReply> {
    const data = ResumeCompanyEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeCompanyActionCreate",
      data
    );
    return promise.then((data) =>
      ResumeCompanyCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeCompanyActionUpdate(
    request: ResumeCompanyEntity
  ): Promise<ResumeCompanyCreateReply> {
    const data = ResumeCompanyEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeCompanyActionUpdate",
      data
    );
    return promise.then((data) =>
      ResumeCompanyCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeCompanyActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeCompanyQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeCompanyActionQuery",
      data
    );
    return promise.then((data) =>
      ResumeCompanyQueryReply.decode(new _m0.Reader(data))
    );
  }

  ResumeCompanyActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeCompanyReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeCompanyActionGetOne",
      data
    );
    return promise.then((data) =>
      ResumeCompanyReply.decode(new _m0.Reader(data))
    );
  }

  ResumeCompanyActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeCompanyActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Resumes {
  ResumeActionCreate(request: ResumeEntity): Promise<ResumeCreateReply>;
  ResumeActionUpdate(request: ResumeEntity): Promise<ResumeCreateReply>;
  ResumeActionQuery(request: QueryFilterRequest): Promise<ResumeQueryReply>;
  ResumeActionGetOne(request: QueryFilterRequest): Promise<ResumeReply>;
  ResumeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ResumesClientImpl implements Resumes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Resumes";
    this.rpc = rpc;
    this.ResumeActionCreate = this.ResumeActionCreate.bind(this);
    this.ResumeActionUpdate = this.ResumeActionUpdate.bind(this);
    this.ResumeActionQuery = this.ResumeActionQuery.bind(this);
    this.ResumeActionGetOne = this.ResumeActionGetOne.bind(this);
    this.ResumeActionRemove = this.ResumeActionRemove.bind(this);
  }
  ResumeActionCreate(request: ResumeEntity): Promise<ResumeCreateReply> {
    const data = ResumeEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResumeActionCreate", data);
    return promise.then((data) =>
      ResumeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeActionUpdate(request: ResumeEntity): Promise<ResumeCreateReply> {
    const data = ResumeEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResumeActionUpdate", data);
    return promise.then((data) =>
      ResumeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeActionQuery(request: QueryFilterRequest): Promise<ResumeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResumeActionQuery", data);
    return promise.then((data) =>
      ResumeQueryReply.decode(new _m0.Reader(data))
    );
  }

  ResumeActionGetOne(request: QueryFilterRequest): Promise<ResumeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResumeActionGetOne", data);
    return promise.then((data) => ResumeReply.decode(new _m0.Reader(data)));
  }

  ResumeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResumeActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ResumeIndustrys {
  ResumeIndustryActionCreate(
    request: ResumeIndustryEntity
  ): Promise<ResumeIndustryCreateReply>;
  ResumeIndustryActionUpdate(
    request: ResumeIndustryEntity
  ): Promise<ResumeIndustryCreateReply>;
  ResumeIndustryActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeIndustryQueryReply>;
  ResumeIndustryActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeIndustryReply>;
  ResumeIndustryActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ResumeIndustrysClientImpl implements ResumeIndustrys {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ResumeIndustrys";
    this.rpc = rpc;
    this.ResumeIndustryActionCreate =
      this.ResumeIndustryActionCreate.bind(this);
    this.ResumeIndustryActionUpdate =
      this.ResumeIndustryActionUpdate.bind(this);
    this.ResumeIndustryActionQuery = this.ResumeIndustryActionQuery.bind(this);
    this.ResumeIndustryActionGetOne =
      this.ResumeIndustryActionGetOne.bind(this);
    this.ResumeIndustryActionRemove =
      this.ResumeIndustryActionRemove.bind(this);
  }
  ResumeIndustryActionCreate(
    request: ResumeIndustryEntity
  ): Promise<ResumeIndustryCreateReply> {
    const data = ResumeIndustryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeIndustryActionCreate",
      data
    );
    return promise.then((data) =>
      ResumeIndustryCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeIndustryActionUpdate(
    request: ResumeIndustryEntity
  ): Promise<ResumeIndustryCreateReply> {
    const data = ResumeIndustryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeIndustryActionUpdate",
      data
    );
    return promise.then((data) =>
      ResumeIndustryCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeIndustryActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeIndustryQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeIndustryActionQuery",
      data
    );
    return promise.then((data) =>
      ResumeIndustryQueryReply.decode(new _m0.Reader(data))
    );
  }

  ResumeIndustryActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeIndustryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeIndustryActionGetOne",
      data
    );
    return promise.then((data) =>
      ResumeIndustryReply.decode(new _m0.Reader(data))
    );
  }

  ResumeIndustryActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeIndustryActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ResumeProducts {
  ResumeProductActionCreate(
    request: ResumeProductEntity
  ): Promise<ResumeProductCreateReply>;
  ResumeProductActionUpdate(
    request: ResumeProductEntity
  ): Promise<ResumeProductCreateReply>;
  ResumeProductActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeProductQueryReply>;
  ResumeProductActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeProductReply>;
  ResumeProductActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ResumeProductsClientImpl implements ResumeProducts {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ResumeProducts";
    this.rpc = rpc;
    this.ResumeProductActionCreate = this.ResumeProductActionCreate.bind(this);
    this.ResumeProductActionUpdate = this.ResumeProductActionUpdate.bind(this);
    this.ResumeProductActionQuery = this.ResumeProductActionQuery.bind(this);
    this.ResumeProductActionGetOne = this.ResumeProductActionGetOne.bind(this);
    this.ResumeProductActionRemove = this.ResumeProductActionRemove.bind(this);
  }
  ResumeProductActionCreate(
    request: ResumeProductEntity
  ): Promise<ResumeProductCreateReply> {
    const data = ResumeProductEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProductActionCreate",
      data
    );
    return promise.then((data) =>
      ResumeProductCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProductActionUpdate(
    request: ResumeProductEntity
  ): Promise<ResumeProductCreateReply> {
    const data = ResumeProductEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProductActionUpdate",
      data
    );
    return promise.then((data) =>
      ResumeProductCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProductActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeProductQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProductActionQuery",
      data
    );
    return promise.then((data) =>
      ResumeProductQueryReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProductActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeProductReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProductActionGetOne",
      data
    );
    return promise.then((data) =>
      ResumeProductReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProductActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProductActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ResumeProjects {
  ResumeProjectActionCreate(
    request: ResumeProjectEntity
  ): Promise<ResumeProjectCreateReply>;
  ResumeProjectActionUpdate(
    request: ResumeProjectEntity
  ): Promise<ResumeProjectCreateReply>;
  ResumeProjectActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeProjectQueryReply>;
  ResumeProjectActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeProjectReply>;
  ResumeProjectActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ResumeProjectsClientImpl implements ResumeProjects {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ResumeProjects";
    this.rpc = rpc;
    this.ResumeProjectActionCreate = this.ResumeProjectActionCreate.bind(this);
    this.ResumeProjectActionUpdate = this.ResumeProjectActionUpdate.bind(this);
    this.ResumeProjectActionQuery = this.ResumeProjectActionQuery.bind(this);
    this.ResumeProjectActionGetOne = this.ResumeProjectActionGetOne.bind(this);
    this.ResumeProjectActionRemove = this.ResumeProjectActionRemove.bind(this);
  }
  ResumeProjectActionCreate(
    request: ResumeProjectEntity
  ): Promise<ResumeProjectCreateReply> {
    const data = ResumeProjectEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectActionCreate",
      data
    );
    return promise.then((data) =>
      ResumeProjectCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProjectActionUpdate(
    request: ResumeProjectEntity
  ): Promise<ResumeProjectCreateReply> {
    const data = ResumeProjectEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectActionUpdate",
      data
    );
    return promise.then((data) =>
      ResumeProjectCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProjectActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeProjectQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectActionQuery",
      data
    );
    return promise.then((data) =>
      ResumeProjectQueryReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProjectActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeProjectReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectActionGetOne",
      data
    );
    return promise.then((data) =>
      ResumeProjectReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProjectActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ResumeProjectTypes {
  ResumeProjectTypeActionCreate(
    request: ResumeProjectTypeEntity
  ): Promise<ResumeProjectTypeCreateReply>;
  ResumeProjectTypeActionUpdate(
    request: ResumeProjectTypeEntity
  ): Promise<ResumeProjectTypeCreateReply>;
  ResumeProjectTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeProjectTypeQueryReply>;
  ResumeProjectTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeProjectTypeReply>;
  ResumeProjectTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class ResumeProjectTypesClientImpl implements ResumeProjectTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ResumeProjectTypes";
    this.rpc = rpc;
    this.ResumeProjectTypeActionCreate =
      this.ResumeProjectTypeActionCreate.bind(this);
    this.ResumeProjectTypeActionUpdate =
      this.ResumeProjectTypeActionUpdate.bind(this);
    this.ResumeProjectTypeActionQuery =
      this.ResumeProjectTypeActionQuery.bind(this);
    this.ResumeProjectTypeActionGetOne =
      this.ResumeProjectTypeActionGetOne.bind(this);
    this.ResumeProjectTypeActionRemove =
      this.ResumeProjectTypeActionRemove.bind(this);
  }
  ResumeProjectTypeActionCreate(
    request: ResumeProjectTypeEntity
  ): Promise<ResumeProjectTypeCreateReply> {
    const data = ResumeProjectTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectTypeActionCreate",
      data
    );
    return promise.then((data) =>
      ResumeProjectTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProjectTypeActionUpdate(
    request: ResumeProjectTypeEntity
  ): Promise<ResumeProjectTypeCreateReply> {
    const data = ResumeProjectTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      ResumeProjectTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProjectTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeProjectTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectTypeActionQuery",
      data
    );
    return promise.then((data) =>
      ResumeProjectTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProjectTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeProjectTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      ResumeProjectTypeReply.decode(new _m0.Reader(data))
    );
  }

  ResumeProjectTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeProjectTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ResumeServices {
  ResumeServiceActionCreate(
    request: ResumeServiceEntity
  ): Promise<ResumeServiceCreateReply>;
  ResumeServiceActionUpdate(
    request: ResumeServiceEntity
  ): Promise<ResumeServiceCreateReply>;
  ResumeServiceActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeServiceQueryReply>;
  ResumeServiceActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeServiceReply>;
  ResumeServiceActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ResumeServicesClientImpl implements ResumeServices {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ResumeServices";
    this.rpc = rpc;
    this.ResumeServiceActionCreate = this.ResumeServiceActionCreate.bind(this);
    this.ResumeServiceActionUpdate = this.ResumeServiceActionUpdate.bind(this);
    this.ResumeServiceActionQuery = this.ResumeServiceActionQuery.bind(this);
    this.ResumeServiceActionGetOne = this.ResumeServiceActionGetOne.bind(this);
    this.ResumeServiceActionRemove = this.ResumeServiceActionRemove.bind(this);
  }
  ResumeServiceActionCreate(
    request: ResumeServiceEntity
  ): Promise<ResumeServiceCreateReply> {
    const data = ResumeServiceEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeServiceActionCreate",
      data
    );
    return promise.then((data) =>
      ResumeServiceCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeServiceActionUpdate(
    request: ResumeServiceEntity
  ): Promise<ResumeServiceCreateReply> {
    const data = ResumeServiceEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeServiceActionUpdate",
      data
    );
    return promise.then((data) =>
      ResumeServiceCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeServiceActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeServiceQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeServiceActionQuery",
      data
    );
    return promise.then((data) =>
      ResumeServiceQueryReply.decode(new _m0.Reader(data))
    );
  }

  ResumeServiceActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeServiceReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeServiceActionGetOne",
      data
    );
    return promise.then((data) =>
      ResumeServiceReply.decode(new _m0.Reader(data))
    );
  }

  ResumeServiceActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeServiceActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ResumeSkills {
  ResumeSkillActionCreate(
    request: ResumeSkillEntity
  ): Promise<ResumeSkillCreateReply>;
  ResumeSkillActionUpdate(
    request: ResumeSkillEntity
  ): Promise<ResumeSkillCreateReply>;
  ResumeSkillActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeSkillQueryReply>;
  ResumeSkillActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeSkillReply>;
  ResumeSkillActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ResumeSkillsClientImpl implements ResumeSkills {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ResumeSkills";
    this.rpc = rpc;
    this.ResumeSkillActionCreate = this.ResumeSkillActionCreate.bind(this);
    this.ResumeSkillActionUpdate = this.ResumeSkillActionUpdate.bind(this);
    this.ResumeSkillActionQuery = this.ResumeSkillActionQuery.bind(this);
    this.ResumeSkillActionGetOne = this.ResumeSkillActionGetOne.bind(this);
    this.ResumeSkillActionRemove = this.ResumeSkillActionRemove.bind(this);
  }
  ResumeSkillActionCreate(
    request: ResumeSkillEntity
  ): Promise<ResumeSkillCreateReply> {
    const data = ResumeSkillEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeSkillActionCreate",
      data
    );
    return promise.then((data) =>
      ResumeSkillCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeSkillActionUpdate(
    request: ResumeSkillEntity
  ): Promise<ResumeSkillCreateReply> {
    const data = ResumeSkillEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeSkillActionUpdate",
      data
    );
    return promise.then((data) =>
      ResumeSkillCreateReply.decode(new _m0.Reader(data))
    );
  }

  ResumeSkillActionQuery(
    request: QueryFilterRequest
  ): Promise<ResumeSkillQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeSkillActionQuery",
      data
    );
    return promise.then((data) =>
      ResumeSkillQueryReply.decode(new _m0.Reader(data))
    );
  }

  ResumeSkillActionGetOne(
    request: QueryFilterRequest
  ): Promise<ResumeSkillReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeSkillActionGetOne",
      data
    );
    return promise.then((data) =>
      ResumeSkillReply.decode(new _m0.Reader(data))
    );
  }

  ResumeSkillActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ResumeSkillActionRemove",
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
