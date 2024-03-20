import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormText } from "@/components/forms/form-text/FormText";
import { useT } from "@/hooks/useT";
import { VirtualAccountEntity } from "src/sdk/academy";
import { VirtualAccountEntityFields } from "src/sdk/academy/modules/wallet/virtual-account-fields";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useGetCurrencys } from "src/sdk/fireback/modules/currency/useGetCurrencys";
import { FormikProps } from "formik";
import { useContext } from "react";

export const VirtualAccountForm = ({
  form,
  isEditing,
}: {
  isEditing?: boolean;
  form: FormikProps<Partial<VirtualAccountEntity>>;
}) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(VirtualAccountEntityFields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.financeMenu.accountName}
        autoFocus={!isEditing}
        hint={t.financeMenu.accountNameHint}
      />
      <FormEntitySelect3
        label={t.financeMenu.currency}
        hint={t.financeMenu.currencyHint}
        useQuery={useGetCurrencys}
        formEffect={{ field: "currency", form }}
      />
    </>
  );
};
