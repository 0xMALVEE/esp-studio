import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormSelect } from "@/components/forms/form-select/FormSelect";
import { FormText } from "@/components/forms/form-text/FormText";
import { FormUploader } from "@/components/forms/form-uploader/FormUploader";
import { EntityFormProps, KeyValue } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { PaymentRequestEntity, VirtualAccountEntity } from "src/sdk/academy";
import { PaymentRequestEntityFields } from "src/sdk/academy/modules/wallet/payment-request-fields";
import { useGetVirtualAccounts } from "src/sdk/academy/modules/wallet/useGetVirtualAccounts";
import { VirtualAccountActions } from "src/sdk/academy/modules/wallet/virtual-account-actions";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { FormikProps } from "formik";
import { useContext } from "react";

const paymentProviders: KeyValue[] = [
  {
    label: "Bank transfer",
    value: "manual",
  },
  {
    label: "Zarrinpal",
    value: "zarrinpal",
  },
];

export const PaymentRequestForm = ({
  form,
  isEditing,
}: EntityFormProps<PaymentRequestEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.amount}
        onChange={(value) =>
          setFieldValue(PaymentRequestEntityFields.amount, +value)
        }
        errorMessage={errors.amount}
        label={t.financeMenu.amount}
        autoFocus={!isEditing}
        hint={t.financeMenu.amountHint}
      />
      <FormSelect
        value={values.provider}
        onChange={(value) =>
          setFieldValue(PaymentRequestEntityFields.provider, value, false)
        }
        errorMessage={errors.provider}
        options={paymentProviders}
        label={t.financeMenu.paymentMethod}
        hint={t.financeMenu.paymentMethodHint}
      />

      <FormEntitySelect3
        label={t.financeMenu.virtualAccount}
        hint={t.financeMenu.virtualAccountHint}
        errorMessage={errors.virtualAccountId}
        useQuery={useGetVirtualAccounts}
        formEffect={{ field: "virtualAccount", form }}
        labelFn={(t: VirtualAccountEntity) => [t?.name, t.currencyId].join(" ")}
      />
      <FormUploader
        onChange={(entities) => {
          setValues({
            ...values,
            attachments: entities as any,
            attachmentsListId: entities.map((t) => t.uniqueId),
          });
        }}
        value={values.attachments || []}
      />
    </>
  );
};
