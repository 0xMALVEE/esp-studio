// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: wallet
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { VirtualTransactionActions } from "./virtual-transaction-actions";
import * as wallet from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  core,
  IResponse,
  ExecApi,
  mutationErrorsToFormik,
  IResponseList,
} from "../../core/http-tools";
/**
 * Gives you formik forms, all mutations, submit actions, and error handling,
 * and provides internal store for all changes happens through this
 * for modules
 */
export function useWallet(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? VirtualTransactionActions.fnExec(execFn(options))
    : VirtualTransactionActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const virtualTransactionsQuery = useQuery(
    ["*[]wallet.VirtualTransactionEntity", options],
    () => Q().getVirtualTransactions(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const virtualTransactionsExportQuery = useQuery(
    ["*[]wallet.VirtualTransactionEntity", options],
    () => Q().getVirtualTransactionsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const virtualTransactionByUniqueIdQuery = useQuery(
    ["*wallet.VirtualTransactionEntity", options],
    (uniqueId: string) => Q().getVirtualTransactionByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  return {
    queryClient,
    virtualTransactionsQuery,
    virtualTransactionsExportQuery,
    virtualTransactionByUniqueIdQuery,
  };
}
