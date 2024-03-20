import { useContext } from "react";
import { useQuery } from "react-query";
import { 
  RemoteQueryContext,
  UseRemoteQuery,
  queryBeforeSend,
} from "../../core/react-tools";
import { execApiFn } from "../../core/http-tools";
export function useGetEmailProviders({
  queryOptions,
  query,
  queryClient,
  execFnOverride,
  unauthorized
}: UseRemoteQuery) {
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
  const url = "/email-providers".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  // Attach the details of the request to the fn
  const fn = () => rpcFn("GET", computedUrl);
  const auth = options?.headers?.authorization
  const hasKey = auth != "undefined" && auth != undefined && auth !=null && auth != "null" && !!auth
  const query$ = useQuery(["*workspaces.EmailProviderEntity", options, query], fn, {
    cacheTime: 1000,
    retry: false,
    keepPreviousData: true,
    enabled: hasKey || unauthorized || false,
    ...(queryOptions || {})
  } as any);
  // const items: ENTITY_OBJECT[] = query$.data?.data?.items;
  const items = [];
  return { query: query$, items};
}
useGetEmailProviders.UKEY = "*workspaces.EmailProviderEntity"