import { FormikHelpers } from "formik";
import { useContext } from "react";
import { useMutation } from "react-query";
import { 
  execApiFn,
  IResponse,
  mutationErrorsToFormik,
  IResponseList
} from "../../core/http-tools";
import {
  RemoteQueryContext,
  UseRemoteQuery,
  queryBeforeSend
} from "../../core/react-tools";
import {
    ProductPlanPermissions,
} from "../licenses/ProductPlanPermissions"
export function usePostProductPlanByLinkerIdPermissions({queryClient, query, execFnOverride}: UseRemoteQuery) {
  query = query || {}
  const { options, execFn } = useContext(RemoteQueryContext);
  // Calculare the function which will do the remote calls.
  // We consider to use global override, this specific override, or default which
  // comes with the sdk.
  const rpcFn = execFnOverride
    ? execFnOverride(options)
    : execFn
    ? execFn(options)
    : execApiFn(options);
  // Url of the remote affix.
  const url = "/product-plan/:linkerId/permissions".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  computedUrl = computedUrl.replace(":linkerId", query[":linkerId".replace(":", "")] || "")
  // Attach the details of the request to the fn
  const fn = (body) => rpcFn("POST", computedUrl, body);
  const mutation = useMutation<
    IResponse<ProductPlanPermissions>,
    IResponse<ProductPlanPermissions>,
    Partial<ProductPlanPermissions>
  >(fn);
  // Only entities are having a store in front-end
  const fnUpdater = (
    data: IResponseList<ProductPlanPermissions> | undefined,
    item: IResponse<ProductPlanPermissions>
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }
    // To me it seems this is not a good or any correct strategy to update the store.
    // When we are posting, we want to add it there, that's it. Not updating it.
    // We have patch, but also posting with ID is possible.
    data.data.items = [item.data, ...(data?.data?.items || [])];
    return data;
  };
  const submit = (
    values: Partial<ProductPlanPermissions>,
    formikProps?: FormikHelpers<Partial<ProductPlanPermissions>>
  ): Promise<IResponse<ProductPlanPermissions>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<ProductPlanPermissions>) {
          queryClient.setQueryData<IResponseList<ProductPlanPermissions>>(
            "*licenses.ProductPlanPermissions",
            (data) => fnUpdater(data, response)
          );
          resolve(response);
        },
        onError(error: any) {
          formikProps?.setErrors(mutationErrorsToFormik(error));
          reject(error);
        },
      });
    });
  };
  return { mutation, submit, fnUpdater };
}
