import { useContext } from "react";
import { useQuery } from "react-query";
import { 
  RemoteQueryContext,
  UseRemoteQuery,
  queryBeforeSend,
} from "../../core/react-tools";
import { execApiFn, IResponseList } from "../../core/http-tools";
import {
    CapabilityEntity,
} from "../workspaces/CapabilityEntity"
export function useGetCapabilitiesExport({
  queryOptions,
  query,
  queryClient,
  execFnOverride,
  unauthorized,
  optionFn
}: UseRemoteQuery) {
  const { options, execFn } = useContext(RemoteQueryContext);
  const computedOptions = optionFn ? optionFn(options) : options;
  // Calculare the function which will do the remote calls.
  // We consider to use global override, this specific override, or default which
  // comes with the sdk.
  const rpcFn = execFnOverride
    ? execFnOverride(computedOptions)
    : execFn
    ? execFn(computedOptions)
    : execApiFn(computedOptions);
  // Url of the remote affix.
  const url = "/capabilities/export".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  // Attach the details of the request to the fn
  const fn = () => rpcFn("GET", computedUrl);
  const auth = computedOptions?.headers?.authorization
  const hasKey = auth != "undefined" && auth != undefined && auth !=null && auth != "null" && !!auth
  const query$ = useQuery<any, any, IResponseList<CapabilityEntity>, any>(["*workspaces.CapabilityEntity", computedOptions, query], fn, {
    cacheTime: 1000,
    retry: false,
    keepPreviousData: true,
    enabled: hasKey || unauthorized || false,
    ...(queryOptions || {})
  } as any);
  const items: Array<CapabilityEntity> = query$.data?.data?.items || [];
  return { query: query$, items};
}
useGetCapabilitiesExport.UKEY = "*workspaces.CapabilityEntity"