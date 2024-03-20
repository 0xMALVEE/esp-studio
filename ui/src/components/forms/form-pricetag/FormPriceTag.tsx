import classNames from "classnames";
import { useCallback, useContext, useRef, useState } from "react";
import "react-phone-input-2/lib/style.css";

import { uuidv4 } from "@/helpers/api";
import { useT } from "@/hooks/useT";
import {
  CurrencyEntity,
  PriceTagEntity,
  PriceTagVariationEntity,
} from "src/sdk/fireback";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import {
  BaseFormElement,
  BaseFormElementProps,
} from "../base-form-element/BaseFormElement";
import { FormEntitySelect2 } from "../form-select/FormEntitySelect2";
import { FormText } from "../form-text/FormText";

export interface FormPriceTagProps extends BaseFormElementProps {
  placeholder?: string;
  label?: string;
  fnLoadCurrency?: any;
  disabled?: boolean;
  onChange?: (value: Partial<PriceTagEntity>) => void;
  Icon?: any;
  errorMessage?: string;
  autoFocus?: boolean;
  validMessage?: string;
  value?: PriceTagEntity;
  type?: "text" | "password" | "number" | "phonenumber" | "email";
  focused?: boolean;
  getInputRef?: (ref: any) => void;
  pattern?: string;
}

// & React.InputHTMLAttributes<HTMLInputElement>;

export const FormPriceTag = (props: FormPriceTagProps) => {
  const {
    placeholder,
    label,
    getInputRef,
    Icon,
    onChange,
    value,
    errorMessage,
    type,
    focused: f = false,
    fnLoadCurrency,
    autoFocus,
    ...restProps
  } = props;
  const t = useT();
  const { options } = useContext(RemoteQueryContext);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement | null>();
  const onClick = useCallback(() => {
    ref.current?.focus();
  }, [ref.current]);

  const addPriceTag = () => {
    const priceTag: any = value || {
      uniqueId: uuidv4(),
      variations: [],
    };

    if (!priceTag.variations) {
      priceTag.variations = [];
    }

    priceTag.variations.push({
      amount: 0,
      currencyId: "USD",
      uniqueId: uuidv4(),
    });

    onChange && onChange(priceTag);
  };

  const deleteVariation = (variation: PriceTagVariationEntity) => {
    if (value?.variations) {
      value.variations = value.variations.filter(
        (v) => v.uniqueId !== variation.uniqueId
      );
      onChange && onChange(value);
    }
  };

  const updateVariation = (variation: PriceTagVariationEntity) => {
    if (value?.variations) {
      value.variations = value.variations.map((v) => {
        if (v.uniqueId === variation.uniqueId) {
          return { ...v, ...variation };
        }

        return v;
      });
      onChange && onChange(value);
    }
  };

  const isEditing = !!onChange;

  return (
    <BaseFormElement focused={focused} onClick={onClick} {...props}>
      <div
        className={classNames(
          "form-price-tag",
          isEditing ? "form-price-tag-editing" : "form-price-tag-reading"
        )}
      >
        {(value?.variations || []).map((variation) => (
          <div className="row" key={variation.uniqueId}>
            <div className="col-6">
              {!isEditing ? (
                <span>{variation.currencyId}</span>
              ) : (
                <FormEntitySelect2
                  label={t.financeMenu.currency}
                  hint={t.financeMenu.currencyHint}
                  fnLoadOptions={fnLoadCurrency}
                  value={variation.currency}
                  onChange={(entity) => {
                    updateVariation({
                      ...variation,
                      currencyId: entity.uniqueId,
                      currency: entity,
                    });
                  }}
                  labelFn={(t: CurrencyEntity) =>
                    [t?.name, t.symbol, t.symbolNative].join(" ")
                  }
                />
              )}
            </div>
            <div className="col-5">
              {!isEditing ? (
                <span>{variation.amount}</span>
              ) : (
                <FormText
                  onChange={(v) => {
                    updateVariation({
                      ...variation,
                      amount: +v,
                    });
                  }}
                  label={t.financeMenu.amount}
                  hint={t.financeMenu.amountHint}
                  type="number"
                  value={variation.amount}
                ></FormText>
              )}
            </div>
            {isEditing && (
              <div className="col-1">
                <button
                  type="button"
                  className="btn btn-danger mt-4"
                  onClick={() => deleteVariation(variation)}
                >
                  {t.deleteAction}
                </button>
              </div>
            )}
          </div>
        ))}

        {isEditing && (
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addPriceTag}
            >
              {t.priceTag.add}
            </button>
          </div>
        )}
      </div>
    </BaseFormElement>
  );
};
