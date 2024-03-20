import { useT } from "@/hooks/useT";

import { useExportActions } from "@/components/action-menu/ActionMenu";
import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { KeyboardAction } from "@/definitions/definitions";
import { RemoteQueryContext } from "@/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { DeviceList } from "./DeviceList";
import { DeviceEntity } from "@/sdk/esp-studio/modules/iot/DeviceEntity";

export const DeviceArchiveScreen = () => {
  const { session, options } = useContext(RemoteQueryContext);
  const t = useT();

  useExportActions(() => {
    function toBinaryString(data: any) {
      var ret = [];
      var len = data.length;
      var byte;
      for (var i = 0; i < len; i++) {
        byte = (data.charCodeAt(i) & 0xff) >>> 0;
        ret.push(String.fromCharCode(byte));
      }

      return ret.join("");
    }

    var xhr = new XMLHttpRequest();

    xhr.open("GET", options.prefix + "devices/export");

    xhr.addEventListener(
      "load",
      function () {
        var data = toBinaryString(this.responseText);
        data = "data:application/text;base64," + btoa(data);
        document.location = data;
      },
      false
    );

    const h: any = options?.headers;
    xhr.setRequestHeader("Authorization", h.authorization || "");
    xhr.setRequestHeader("Workspace-Id", h["workspace-id"] || "");
    xhr.setRequestHeader("role-Id", h["role-id"] || "");
    xhr.overrideMimeType("application/octet-stream; charset=x-user-defined;");
    xhr.send(null);
  }, KeyboardAction.ExportTable);

  return (
    <CommonArchiveManager
      pageTitle={t.devices.devicetemplateArchiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(DeviceEntity.Navigation.create(locale));
      }}
    >
      <DeviceList />
    </CommonArchiveManager>
  );
};
