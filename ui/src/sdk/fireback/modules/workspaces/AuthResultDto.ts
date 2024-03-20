import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    UserAccessLevelDto,
} from "./UserAccessLevelDto"
import {
    UserEntity,
} from "./UserEntity"
// In this section we have sub entities related to this object
// Class body
export type AuthResultDtoKeys =
  keyof typeof AuthResultDto.Fields;
export class AuthResultDto extends BaseDto {
  public workspaceId?: string | null;
  public internalSql?: string | null;
  public userId?: string | null;
  public userHas?: string[] | null;
  public user?: UserEntity | null;
    userId?: string | null;
  public accessLevel?: UserAccessLevelDto | null;
    accessLevelId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      workspaceId: 'workspaceId',
      internalSql: 'internalSql',
      userId: 'userId',
      userHas: 'userHas',
        userId: 'userId',
      user$: 'user',
      user: UserEntity.Fields,
        accessLevelId: 'accessLevelId',
      accessLevel$: 'accessLevel',
      accessLevel: UserAccessLevelDto.Fields,
}
  public static definition = {
  "name": "authResult",
  "fields": [
    {
      "linkedTo": "",
      "name": "workspaceId",
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
      "name": "internalSql",
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
      "name": "userId",
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
      "name": "userHas",
      "type": "arrayP",
      "primitive": "string",
      "computedType": "string[]",
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
    },
    {
      "linkedTo": "",
      "name": "accessLevel",
      "type": "one",
      "primitive": "",
      "target": "UserAccessLevelDto",
      "computedType": "UserAccessLevelDto",
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
