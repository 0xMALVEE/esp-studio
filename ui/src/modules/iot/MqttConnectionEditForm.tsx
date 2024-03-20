import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormCheckbox } from "@/components/forms/form-switch/FormSwitch";
import { FormText } from "@/components/forms/form-text/FormText";
import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { MqttConnectionEntity } from "@/sdk/esp-studio/modules/iot/MqttConnectionEntity";
import { MqttVersionEntity } from "@/sdk/esp-studio/modules/iot/MqttVersionEntity";
import { useGetMqttVersions } from "@/sdk/esp-studio/modules/iot/useGetMqttVersions";

export const MqttConnectionForm = ({
  form,
  isEditing,
}: EntityFormProps<MqttConnectionEntity>) => {
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.clientId}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.clientId, value, false)
        }
        errorMessage={errors.clientId}
        label={t.mqttconfigs.clientId}
        autoFocus={!isEditing}
        hint={t.mqttconfigs.clientIdHint}
      />

      <FormText
        value={values.name}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.mqttconfigs.name}
        hint={t.mqttconfigs.nameHint}
      />

      <FormText
        value={values.host}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.host, value, false)
        }
        errorMessage={errors.host}
        label={t.mqttconfigs.host}
        hint={t.mqttconfigs.hostHint}
      />

      <FormText
        value={values.username}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.username, value, false)
        }
        errorMessage={errors.username}
        label={t.mqttconfigs.username}
        hint={t.mqttconfigs.usernameHint}
      />

      <FormText
        value={values.password}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.password, value, false)
        }
        errorMessage={errors.password}
        label={t.mqttconfigs.password}
        hint={t.mqttconfigs.passwordHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: MqttConnectionEntity.Fields.mqttVersion$ }}
        labelFn={(t: MqttVersionEntity) => t.version}
        useQuery={useGetMqttVersions}
        label={t.mqttconfigs.mqttVersion}
        hint={t.mqttconfigs.mqttVersionHint}
      />

      <FormText
        value={values.lastWillTopic}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.lastWillTopic, value, false)
        }
        errorMessage={errors.lastWillTopic}
        label={t.mqttconfigs.lastWillTopic}
        hint={t.mqttconfigs.lastWillTopicHint}
      />

      <FormText
        value={values.lastWillPayload}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(
            MqttConnectionEntity.Fields.lastWillPayload,
            value,
            false
          )
        }
        errorMessage={errors.lastWillPayload}
        label={t.mqttconfigs.lastWillPayload}
        hint={t.mqttconfigs.lastWillPayloadHint}
      />

      <FormText
        type="number"
        value={values.connectTimeout}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(
            MqttConnectionEntity.Fields.connectTimeout,
            value,
            false
          )
        }
        errorMessage={errors.connectTimeout}
        label={t.mqttconfigs.connectTimeout}
        hint={t.mqttconfigs.connectTimeoutHint}
      />

      <FormText
        value={values.lastWillQos}
        dir="ltr"
        type="number"
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.lastWillQos, value, false)
        }
        errorMessage={errors.lastWillQos}
        label={t.mqttconfigs.lastWillQos}
        hint={t.mqttconfigs.lastWillQosHint}
      />

      <FormText
        type="number"
        value={values.keepAlive}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.keepAlive, value, false)
        }
        errorMessage={errors.keepAlive}
        label={t.mqttconfigs.keepAlive}
        hint={t.mqttconfigs.keepAliveHint}
      />

      <FormText
        type="number"
        value={values.port}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.port, value, false)
        }
        errorMessage={errors.port}
        label={t.mqttconfigs.port}
        hint={t.mqttconfigs.portHint}
      />

      <FormCheckbox
        value={values.ssl}
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.ssl, value, false)
        }
        errorMessage={errors.ssl}
        label={t.mqttconfigs.ssl}
        hint={t.mqttconfigs.sslHint}
      />

      <FormCheckbox
        value={values.autoReconnect}
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.autoReconnect, value, false)
        }
        errorMessage={errors.autoReconnect}
        label={t.mqttconfigs.autoReconnect}
        hint={t.mqttconfigs.autoReconnectHint}
      />

      <FormCheckbox
        value={values.cleanSession}
        onChange={(value) =>
          setFieldValue(MqttConnectionEntity.Fields.cleanSession, value, false)
        }
        errorMessage={errors.cleanSession}
        label={t.mqttconfigs.cleanSession}
        hint={t.mqttconfigs.cleanSessionHint}
      />

      <FormCheckbox
        value={values.lastWillRetain}
        onChange={(value) =>
          setFieldValue(
            MqttConnectionEntity.Fields.lastWillRetain,
            value,
            false
          )
        }
        errorMessage={errors.lastWillRetain}
        label={t.mqttconfigs.lastWillRetain}
        hint={t.mqttconfigs.lastWillRetainHint}
      />
    </>
  );
};
