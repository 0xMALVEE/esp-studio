import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    EmailProviderEntity,
} from "./EmailProviderEntity"
import {
    EmailSenderEntity,
} from "./EmailSenderEntity"
import {
    GsmProviderEntity,
} from "./GsmProviderEntity"
// In this section we have sub entities related to this object
// Class body
export type NotificationConfigEntityKeys =
  keyof typeof NotificationConfigEntity.Fields;
export class NotificationConfigEntity extends BaseEntity {
  public cascadeToSubWorkspaces?: boolean | null;
  public forcedCascadeEmailProvider?: boolean | null;
  public generalEmailProvider?: EmailProviderEntity | null;
    generalEmailProviderId?: string | null;
  public generalGsmProvider?: GsmProviderEntity | null;
    generalGsmProviderId?: string | null;
  public inviteToWorkspaceContent?: string | null;
  public inviteToWorkspaceContentExcerpt?: string | null;
  public inviteToWorkspaceContentDefault?: string | null;
  public inviteToWorkspaceContentDefaultExcerpt?: string | null;
  public inviteToWorkspaceTitle?: string | null;
  public inviteToWorkspaceTitleDefault?: string | null;
  public inviteToWorkspaceSender?: EmailSenderEntity | null;
    inviteToWorkspaceSenderId?: string | null;
  public forgetPasswordContent?: string | null;
  public forgetPasswordContentExcerpt?: string | null;
  public forgetPasswordContentDefault?: string | null;
  public forgetPasswordContentDefaultExcerpt?: string | null;
  public forgetPasswordTitle?: string | null;
  public forgetPasswordTitleDefault?: string | null;
  public forgetPasswordSender?: EmailSenderEntity | null;
    forgetPasswordSenderId?: string | null;
  public acceptLanguage?: string | null;
  public confirmEmailSender?: EmailSenderEntity | null;
    confirmEmailSenderId?: string | null;
  public confirmEmailContent?: string | null;
  public confirmEmailContentExcerpt?: string | null;
  public confirmEmailContentDefault?: string | null;
  public confirmEmailContentDefaultExcerpt?: string | null;
  public confirmEmailTitle?: string | null;
  public confirmEmailTitleDefault?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      cascadeToSubWorkspaces: 'cascadeToSubWorkspaces',
      forcedCascadeEmailProvider: 'forcedCascadeEmailProvider',
        generalEmailProviderId: 'generalEmailProviderId',
      generalEmailProvider$: 'generalEmailProvider',
      generalEmailProvider: EmailProviderEntity.Fields,
        generalGsmProviderId: 'generalGsmProviderId',
      generalGsmProvider$: 'generalGsmProvider',
      generalGsmProvider: GsmProviderEntity.Fields,
      inviteToWorkspaceContent: 'inviteToWorkspaceContent',
      inviteToWorkspaceContentExcerpt: 'inviteToWorkspaceContentExcerpt',
      inviteToWorkspaceContentDefault: 'inviteToWorkspaceContentDefault',
      inviteToWorkspaceContentDefaultExcerpt: 'inviteToWorkspaceContentDefaultExcerpt',
      inviteToWorkspaceTitle: 'inviteToWorkspaceTitle',
      inviteToWorkspaceTitleDefault: 'inviteToWorkspaceTitleDefault',
        inviteToWorkspaceSenderId: 'inviteToWorkspaceSenderId',
      inviteToWorkspaceSender$: 'inviteToWorkspaceSender',
      inviteToWorkspaceSender: EmailSenderEntity.Fields,
      forgetPasswordContent: 'forgetPasswordContent',
      forgetPasswordContentExcerpt: 'forgetPasswordContentExcerpt',
      forgetPasswordContentDefault: 'forgetPasswordContentDefault',
      forgetPasswordContentDefaultExcerpt: 'forgetPasswordContentDefaultExcerpt',
      forgetPasswordTitle: 'forgetPasswordTitle',
      forgetPasswordTitleDefault: 'forgetPasswordTitleDefault',
        forgetPasswordSenderId: 'forgetPasswordSenderId',
      forgetPasswordSender$: 'forgetPasswordSender',
      forgetPasswordSender: EmailSenderEntity.Fields,
      acceptLanguage: 'acceptLanguage',
        confirmEmailSenderId: 'confirmEmailSenderId',
      confirmEmailSender$: 'confirmEmailSender',
      confirmEmailSender: EmailSenderEntity.Fields,
      confirmEmailContent: 'confirmEmailContent',
      confirmEmailContentExcerpt: 'confirmEmailContentExcerpt',
      confirmEmailContentDefault: 'confirmEmailContentDefault',
      confirmEmailContentDefaultExcerpt: 'confirmEmailContentDefaultExcerpt',
      confirmEmailTitle: 'confirmEmailTitle',
      confirmEmailTitleDefault: 'confirmEmailTitleDefault',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/notification-config/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/notification-config/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/notification-config/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/notification-configs`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "notification-config/edit/:uniqueId",
      Rcreate: "notification-config/new",
      Rsingle: "notification-config/:uniqueId",
      Rquery: "notification-configs",
  };
  public static definition = {
  "name": "notificationConfig",
  "distinctBy": "",
  "noQuery": false,
  "access": "",
  "queryScope": "",
  "http": {
    "query": false
  },
  "gormMap": {
    "workspaceId": "",
    "userId": ""
  },
  "importList": [
    "modules/workspaces/GsmProviderDefinitions.dyno.proto",
    "modules/workspaces/EmailProviderDefinitions.dyno.proto",
    "modules/workspaces/EmailSenderDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "cascadeToSubWorkspaces",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "forcedCascadeEmailProvider",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "generalEmailProvider",
      "type": "one",
      "primitive": "",
      "target": "EmailProviderEntity",
      "computedType": "EmailProviderEntity",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "generalGsmProvider",
      "type": "one",
      "primitive": "",
      "target": "GsmProviderEntity",
      "computedType": "GsmProviderEntity",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "inviteToWorkspaceContent",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "inviteToWorkspaceContentExcerpt",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "inviteToWorkspaceContentDefault",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "inviteToWorkspaceContentDefaultExcerpt",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "inviteToWorkspaceTitle",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "inviteToWorkspaceTitleDefault",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "inviteToWorkspaceSender",
      "type": "one",
      "primitive": "",
      "target": "EmailSenderEntity",
      "computedType": "EmailSenderEntity",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "forgetPasswordContent",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "forgetPasswordContentExcerpt",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "forgetPasswordContentDefault",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "forgetPasswordContentDefaultExcerpt",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "forgetPasswordTitle",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "forgetPasswordTitleDefault",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "forgetPasswordSender",
      "type": "one",
      "primitive": "",
      "target": "EmailSenderEntity",
      "computedType": "EmailSenderEntity",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "acceptLanguage",
      "type": "text",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "confirmEmailSender",
      "type": "one",
      "primitive": "",
      "target": "EmailSenderEntity",
      "computedType": "EmailSenderEntity",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "confirmEmailContent",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "confirmEmailContentExcerpt",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "confirmEmailContentDefault",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "confirmEmailContentDefaultExcerpt",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "text",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "confirmEmailTitle",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "confirmEmailTitleDefault",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "notificationConfig",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    }
  ]
}
}
