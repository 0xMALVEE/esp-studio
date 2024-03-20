import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
export class KeyboardShortcutDefaultCombination extends BaseEntity {
  public altKey?: boolean | null;
  public key?: string | null;
  public metaKey?: boolean | null;
  public shiftKey?: boolean | null;
  public ctrlKey?: boolean | null;
}
export class KeyboardShortcutUserCombination extends BaseEntity {
  public altKey?: boolean | null;
  public key?: string | null;
  public metaKey?: boolean | null;
  public shiftKey?: boolean | null;
  public ctrlKey?: boolean | null;
}
// Class body
export type KeyboardShortcutEntityKeys =
  keyof typeof KeyboardShortcutEntity.Fields;
export class KeyboardShortcutEntity extends BaseEntity {
  public os?: string | null;
  public host?: string | null;
  public defaultCombination?: KeyboardShortcutDefaultCombination | null;
  public userCombination?: KeyboardShortcutUserCombination | null;
  public action?: string | null;
  public actionKey?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      os: 'os',
      host: 'host',
      defaultCombination$: 'defaultCombination',
      defaultCombination: {
  ...BaseEntity.Fields,
      altKey: 'altKey',
      key: 'key',
      metaKey: 'metaKey',
      shiftKey: 'shiftKey',
      ctrlKey: 'ctrlKey',
      },
      userCombination$: 'userCombination',
      userCombination: {
  ...BaseEntity.Fields,
      altKey: 'altKey',
      key: 'key',
      metaKey: 'metaKey',
      shiftKey: 'shiftKey',
      ctrlKey: 'ctrlKey',
      },
      action: 'action',
      actionKey: 'actionKey',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/keyboard-shortcut/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/keyboard-shortcut/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/keyboard-shortcut/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/keyboard-shortcuts`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "keyboard-shortcut/edit/:uniqueId",
      Rcreate: "keyboard-shortcut/new",
      Rsingle: "keyboard-shortcut/:uniqueId",
      Rquery: "keyboard-shortcuts",
      rDefaultCombinationCreate: "keyboard-shortcut/:linkerId/default_combination/new",
      rDefaultCombinationEdit: "keyboard-shortcut/:linkerId/default_combination/edit/:uniqueId",
      editDefaultCombination(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/keyboard-shortcut/${linkerId}/default_combination/edit/${uniqueId}`;
      },
      createDefaultCombination(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/keyboard-shortcut/${linkerId}/default_combination/new`;
      },
      rUserCombinationCreate: "keyboard-shortcut/:linkerId/user_combination/new",
      rUserCombinationEdit: "keyboard-shortcut/:linkerId/user_combination/edit/:uniqueId",
      editUserCombination(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/keyboard-shortcut/${linkerId}/user_combination/edit/${uniqueId}`;
      },
      createUserCombination(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/keyboard-shortcut/${linkerId}/user_combination/new`;
      },
  };
  public static definition = {
  "name": "keyboardShortcut",
  "distinctBy": "",
  "noQuery": false,
  "access": "",
  "queryScope": "public",
  "http": {
    "query": false
  },
  "gormMap": {
    "workspaceId": "",
    "userId": ""
  },
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "os",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "keyboardShortcut",
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
      "description": "",
      "name": "host",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "keyboardShortcut",
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
      "linkedTo": "KeyboardShortcutEntity",
      "description": "",
      "name": "defaultCombination",
      "type": "object",
      "primitive": "",
      "computedType": "KeyboardShortcutDefaultCombination",
      "BelongingEntityName": "keyboardShortcut",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "KeyboardShortcutDefaultCombination",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "altKey",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "keyboardShortcut",
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
          "description": "",
          "name": "key",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "keyboardShortcut",
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
          "description": "",
          "name": "metaKey",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "keyboardShortcut",
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
          "description": "",
          "name": "shiftKey",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "keyboardShortcut",
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
          "description": "",
          "name": "ctrlKey",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "keyboardShortcut",
          "matches": null,
          "Gorm": "",
          "gormMap": {
            "workspaceId": "",
            "userId": ""
          },
          "Sql": "",
          "fields": null
        }
      ]
    },
    {
      "linkedTo": "KeyboardShortcutEntity",
      "description": "",
      "name": "userCombination",
      "type": "object",
      "primitive": "",
      "computedType": "KeyboardShortcutUserCombination",
      "BelongingEntityName": "keyboardShortcut",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "KeyboardShortcutUserCombination",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "altKey",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "keyboardShortcut",
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
          "description": "",
          "name": "key",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "keyboardShortcut",
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
          "description": "",
          "name": "metaKey",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "keyboardShortcut",
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
          "description": "",
          "name": "shiftKey",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "keyboardShortcut",
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
          "description": "",
          "name": "ctrlKey",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "keyboardShortcut",
          "matches": null,
          "Gorm": "",
          "gormMap": {
            "workspaceId": "",
            "userId": ""
          },
          "Sql": "",
          "fields": null
        }
      ]
    },
    {
      "linkedTo": "",
      "description": "",
      "name": "action",
      "type": "string",
      "primitive": "",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "keyboardShortcut",
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
      "description": "",
      "name": "actionKey",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "keyboardShortcut",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    }
  ],
  "cliShort": "kbshort",
  "cliDescription": "Manage the keyboard shortcuts in web and desktop apps (accessibility)"
}
}
