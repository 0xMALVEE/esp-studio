import { FormText } from "@/components/forms/form-text/FormText";
import { useT } from "@/hooks/useT";
import { CurrencyEntity } from "src/sdk/academy";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { CurrencyEntityFields } from "src/sdk/fireback/modules/currency/currency-fields";
import { FormikProps } from "formik";
import { useContext } from "react";

export const CurrencyForm = ({
  form,
  isEditing,
}: {
  isEditing?: boolean;
  form: FormikProps<Partial<CurrencyEntity>>;
}) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(CurrencyEntityFields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.misc.currency.name}
        hint={t.misc.currency.nameHint}
        autoFocus={!isEditing}
      />
      <FormText
        value={values.symbol}
        onChange={(value) =>
          setFieldValue(CurrencyEntityFields.symbol, value, false)
        }
        errorMessage={errors.symbol}
        label={t.misc.currency.symbol}
        hint={t.misc.currency.symbolHint}
      />
      <FormText
        value={values.symbolNative}
        onChange={(value) =>
          setFieldValue(CurrencyEntityFields.symbolNative, value, false)
        }
        errorMessage={errors.symbolNative}
        label={t.misc.currency.symbolNative}
        hint={t.misc.currency.symbolNativeHint}
      />
    </>
  );
};
