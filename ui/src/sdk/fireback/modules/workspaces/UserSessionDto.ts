import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    PassportEntity,
} from "./PassportEntity"
import {
    UserEntity,
} from "./UserEntity"
import {
    UserWorkspaceEntity,
} from "./UserWorkspaceEntity"
// In this section we have sub entities related to this object
// Class body
export type UserSessionDtoKeys =
  keyof typeof UserSessionDto.Fields;
export class UserSessionDto extends BaseDto {
  public passport?: PassportEntity | null;
    passportId?: string | null;
  public token?: string | null;
  public exchangeKey?: string | null;
  public userWorkspaces?: UserWorkspaces[] | null;
    userWorkspacesListId?: string[] | null;
  public user?: UserEntity | null;
    userId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        passportId: 'passportId',
      passport$: 'passport',
      passport: PassportEntity.Fields,
      token: 'token',
      exchangeKey: 'exchangeKey',
        userWorkspacesListId: 'userWorkspacesListId',
      userWorkspaces$: 'userWorkspaces',
      userWorkspaces: UserWorkspaceEntity.Fields,
        userId: 'userId',
      user$: 'user',
      user: UserEntity.Fields,
}
  public static definition = {
  "name": "userSession",
  "fields": [
    {
      "linkedTo": "",
      "name": "passport",
      "type": "one",
      "primitive": "",
      "target": "PassportEntity",
      "computedType": "PassportEntity",
      "BelongingEntityName": "",
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
      "name": "token",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "",
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
      "name": "exchangeKey",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "",
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
      "name": "userWorkspaces",
      "type": "many2many",
      "primitive": "",
      "target": "UserWorkspaceEntity",
      "computedType": "UserWorkspaces[]",
      "BelongingEntityName": "",
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
      "name": "user",
      "type": "one",
      "primitive": "",
      "target": "UserEntity",
      "computedType": "UserEntity",
      "BelongingEntityName": "",
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
}
}
