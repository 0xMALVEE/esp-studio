import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormText } from "@/components/forms/form-text/FormText";
import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { GpioEntity } from "@/sdk/esp-studio/modules/iot/GpioEntity";
import { GpioModeEntity } from "@/sdk/esp-studio/modules/iot/GpioModeEntity";
import { useGetGpioModes } from "@/sdk/esp-studio/modules/iot/useGetGpioModes";

export const GpioForm = ({ form, isEditing }: EntityFormProps<GpioEntity>) => {
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(GpioEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.gpios.name}
        autoFocus={!isEditing}
        hint={t.gpios.nameHint}
      />

      <FormText
        value={values.index}
        onChange={(value) =>
          setFieldValue(GpioEntity.Fields.index, value, false)
        }
        errorMessage={errors.index}
        label={t.gpios.index}
        autoFocus={!isEditing}
        hint={t.gpios.indexHint}
      />

      <FormText
        value={values.analogFunction}
        onChange={(value) =>
          setFieldValue(GpioEntity.Fields.analogFunction, value, false)
        }
        errorMessage={errors.analogFunction}
        label={t.gpios.analogFunction}
        autoFocus={!isEditing}
        hint={t.gpios.analogFunctionHint}
      />

      <FormText
        value={values.rtcGpio}
        onChange={(value) =>
          setFieldValue(GpioEntity.Fields.rtcGpio, value, false)
        }
        errorMessage={errors.rtcGpio}
        label={t.gpios.rtcGpio}
        autoFocus={!isEditing}
        hint={t.gpios.rtcGpioHint}
      />

      <FormText
        value={values.comments}
        onChange={(value) =>
          setFieldValue(GpioEntity.Fields.comments, value, false)
        }
        errorMessage={errors.comments}
        label={t.gpios.comments}
        autoFocus={!isEditing}
        hint={t.gpios.commentsHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: GpioEntity.Fields.mode$ }}
        useQuery={useGetGpioModes}
        labelFn={(item: GpioModeEntity) =>
          `${item.description} (${item.index})`
        }
        label={t.gpios.modeId}
        hint={t.gpios.modeIdHint}
      />
    </>
  );
};
