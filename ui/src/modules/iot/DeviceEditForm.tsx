import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormText } from "@/components/forms/form-text/FormText";
import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { DeviceEntity } from "@/sdk/esp-studio/modules/iot/DeviceEntity";
import { useGetDeviceTypes } from "@/sdk/esp-studio/modules/iot/useGetDeviceTypes";

export const DeviceForm = ({
  form,
  isEditing,
}: EntityFormProps<DeviceEntity>) => {
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(DeviceEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.devices.name}
        autoFocus={!isEditing}
        hint={t.devices.nameHint}
      />

      <FormText
        value={values.model}
        onChange={(value) =>
          setFieldValue(DeviceEntity.Fields.model, value, false)
        }
        errorMessage={errors.model}
        label={t.devices.model}
        hint={t.devices.modelHint}
      />

      <FormText
        value={values.ip}
        onChange={(value) =>
          setFieldValue(DeviceEntity.Fields.ip, value, false)
        }
        errorMessage={errors.ip}
        label={t.devices.ip}
        hint={t.devices.ipHint}
      />

      <FormText
        value={values.wifiUser}
        onChange={(value) =>
          setFieldValue(DeviceEntity.Fields.wifiUser, value, false)
        }
        errorMessage={errors.wifiUser}
        label={t.devices.wifiSSID}
        hint={t.devices.wifiSSIDHint}
      />

      <FormText
        value={values.wifiPassword}
        onChange={(value) =>
          setFieldValue(DeviceEntity.Fields.wifiPassword, value, false)
        }
        errorMessage={errors.wifiPassword}
        label={t.devices.wifiPassword}
        hint={t.devices.wifiPasswordHint}
      />

      <FormText
        value={values.securityType}
        onChange={(value) =>
          setFieldValue(DeviceEntity.Fields.securityType, value, false)
        }
        errorMessage={errors.securityType}
        label={t.devices.securityType}
        hint={t.devices.securityTypeHint}
      />

      <FormText
        value={values.typeId}
        onChange={(value) =>
          setFieldValue(DeviceEntity.Fields.typeId, value, false)
        }
        errorMessage={errors.typeId}
        label={t.devices.typeId}
        hint={t.devices.typeIdHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: DeviceEntity.Fields.type$ }}
        useQuery={useGetDeviceTypes}
        label={t.devices.type}
        hint={t.devices.typeHint}
      />

      {/*
          Unkown field: *iot.DeviceDeviceModbusConfigEntity
          Name: deviceModbusConfig,omitempty
          <FormText
            value={values.deviceModbusConfig}
            onChange={(value) => setFieldValue(DeviceEntity.Fields.deviceModbusConfig, value, false)}
            errorMessage={errors.deviceModbusConfig}
            label={t.devices.deviceModbusConfig}
            autoFocus={!isEditing}
            hint={t.devices.deviceModbusConfigHint}
          />
          
          */}
    </>
  );
};
