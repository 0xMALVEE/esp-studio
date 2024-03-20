import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    ForgetPasswordEntity,
} from "./ForgetPasswordEntity"
import {
    UserSessionDto,
} from "./UserSessionDto"
// In this section we have sub entities related to this object
// Class body
export type EmailOtpResponseDtoKeys =
  keyof typeof EmailOtpResponseDto.Fields;
export class EmailOtpResponseDto extends BaseDto {
  public request?: ForgetPasswordEntity | null;
    requestId?: string | null;
  public userSession?: UserSessionDto | null;
    userSessionId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        requestId: 'requestId',
      request$: 'request',
      request: ForgetPasswordEntity.Fields,
        userSessionId: 'userSessionId',
      userSession$: 'userSession',
      userSession: UserSessionDto.Fields,
}
  public static definition = {
  "name": "emailOtpResponse",
  "fields": [
    {
      "linkedTo": "",
      "name": "request",
      "type": "one",
      "primitive": "",
      "target": "ForgetPasswordEntity",
      "computedType": "ForgetPasswordEntity",
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
      "name": "userSession",
      "type": "one",
      "primitive": "",
      "target": "UserSessionDto",
      "computedType": "UserSessionDto",
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
