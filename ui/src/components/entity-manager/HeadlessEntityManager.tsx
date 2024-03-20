import { useCommonCrudActions } from "@/components/action-menu/ActionMenu";
import { usePageTitle } from "@/components/page-title/PageTitle";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { Formik, FormikHelpers, FormikProps } from "formik";

import { ProductPlanEntity } from "src/sdk/academy";

import { useKeyPress } from "@/hooks/useKeyPress";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { IResponse } from "src/sdk/fireback";
import { QueryErrorView } from "../error-view/QueryError";
import { httpErrorHanlder } from "@/helpers/api";

export interface HeadlessEntityManagerProps<T> {
  data?: T | null;
  Form: any;
  getSingleHook?: any;
  setInnerRef?: (ref: FormikProps<Partial<T>>) => void;
  postHook?: any;
  forceEdit?: boolean;
  patchHook?: any;
  beforeSubmit?: (data: T) => T;
  onSuccessPatchOrPost?: (response: IResponse<any>) => void;
  onFinishUriResolver?: (response: IResponse<any>, locale: string) => string;
}

export interface DtoEntity<T, V = null> {
  data?: Partial<T> | null;
  setInnerRef?: (ref: FormikProps<Partial<T>>) => void;
  enabledFields?: Partial<V>;
  onSuccess?: (response: IResponse<T>) => void;
  showSubmit?: boolean;
}

export const HeadlessEntityManager = ({
  data,
  Form,
  getSingleHook,
  postHook,
  onFinishUriResolver,
  patchHook,
  setInnerRef,
  forceEdit,
  beforeSubmit,
  onSuccessPatchOrPost,
}: HeadlessEntityManagerProps<any>) => {
  const { router, isEditing, locale, formik, t } = useCommonEntityManager<
    Partial<ProductPlanEntity>
  >({
    data,
  });

  // const { query: getQuery } = getSingleHook;

  useEffect(() => {
    if (getSingleHook?.query.data?.data) {
      formik.current?.setValues({
        ...getSingleHook.query.data.data,
      });
    }
  }, [getSingleHook?.query.data]);

  useEffect(() => {
    formik.current?.setSubmitting(
      postHook?.mutation.isLoading || patchHook?.mutation.isLoading
    );
  }, [postHook?.isLoading, patchHook?.isLoading]);

  const onSubmit = (
    values: Partial<ProductPlanEntity>,
    d: FormikHelpers<Partial<ProductPlanEntity>>
  ) => {
    if (beforeSubmit) {
      values = beforeSubmit(values);
    }

    const op =
      (isEditing || forceEdit) && patchHook
        ? patchHook?.submit(values, d)
        : postHook?.submit(values, d);

    op.then((response: any) => {
      if (response.data?.uniqueId) {
        if (onSuccessPatchOrPost) {
          onSuccessPatchOrPost(response);
        } else if (onFinishUriResolver) {
          router.goBackOrDefault(
            onFinishUriResolver(response, locale),
            onFinishUriResolver(response, locale),
            {
              shallow: true,
            }
          );
        } else {
          toast("Done", { type: "success" });
        }
      }
    }).catch((err: any) => {
      httpErrorHanlder(err, t);
    });
  };

  return (
    <Formik
      innerRef={(r) => {
        if (r) {
          formik.current = r;
          setInnerRef && setInnerRef(r);
        }
      }}
      initialValues={{}}
      onSubmit={onSubmit}
    >
      {(form: FormikProps<Partial<ProductPlanEntity>>) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.submitForm();
          }}
          className="headless-form-entity-manager"
        >
          {/* <pre>{JSON.stringify(form.values, null, 2)}</pre> */}
          {/* <ErrorsView errors={form.errors} /> */}
          <div style={{ marginBottom: "15px" }}>
            <QueryErrorView
              query={
                postHook?.mutation?.isError
                  ? postHook.mutation
                  : patchHook?.mutation?.isError
                  ? patchHook.mutation
                  : getSingleHook?.query?.isError
                  ? getSingleHook.query
                  : null
              }
            />
          </div>
          <Form isEditing={isEditing} form={form} />
          {/* <ProductPlanForm form={form} /> */}
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};
