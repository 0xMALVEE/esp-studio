import { useEffect, useState } from "react";

import { useRouter } from "@/Router";
import { CommonDataTable } from "@/components/common-data-table/CommonDataTable";
import Link from "@/components/link/Link";
import { dxFilterToSqlAlike, urlStringToFilters } from "@/hooks/datatabletools";
import { useDatatableFiltering } from "@/hooks/useDatatableFiltering";
import { useLocale } from "@/hooks/useLocale";
import { useT } from "@/hooks/useT";
import { DataTypeProvider } from "@devexpress/dx-react-grid";
import { useDeleteExam } from "src/sdk/academy/modules/academy/useDeleteExam";

import { useGetVirtualTransactions } from "src/sdk/academy/modules/wallet/useGetVirtualTransactions";
import { VirtualTransactionEntityFields } from "src/sdk/academy/modules/wallet/virtual-transaction-fields";
import { VirtualTransactionNavigationTools } from "src/sdk/academy/modules/wallet/virtual-transaction-navigation-tools";
import { useQueryClient } from "react-query";

const UniqueIdColumn = ({ value }: any) => (
  <Link href={VirtualTransactionNavigationTools.single(value)}>{value}</Link>
);

const UniqueIdColumnProvider = (props: any) => (
  <DataTypeProvider formatterComponent={UniqueIdColumn} {...props} />
);

export const VirtualTransactionList = ({
  virtualAccountId,
}: {
  virtualAccountId?: string;
}) => {
  const t = useT();
  const router = useRouter();
  const { locale } = useLocale();
  const queryClient = useQueryClient();

  const { submit: submitDelete } = useDeleteExam({
    queryClient,
  });

  const udf = useDatatableFiltering({
    urlMask: "",
    submitDelete,
  });

  const columns = [
    {
      name: VirtualTransactionEntityFields.subject,
      title: t.financeMenu.subject,
      width: 250,
    },
    {
      name: VirtualTransactionEntityFields.amountFormatted,
      title: t.financeMenu.amount,
      width: 50,
    },
    {
      name: VirtualTransactionEntityFields.summaryFormatted,
      title: t.financeMenu.summary,
      width: 50,
    },
  ];

  const [booleanColumns] = useState(["uniqueId"]);

  const [defaultColumnWidths] = useState(
    columns.map((t) => ({ columnName: t.name, width: t.width }))
  );

  const { query } = useGetVirtualTransactions({
    query: {
      itemsPerPage: udf.filters.itemsPerPage,
      startIndex: udf.filters.startIndex || 0,
      // query: dxFilterToSqlAlike(udf.filters.rawFilters),
      query: `virtual_account_id = ${virtualAccountId}`,
    },
    queryClient: queryClient,
  });

  useEffect(() => {
    udf.setFilter(urlStringToFilters(), false);
    query.refetch();
  }, []);

  const items = query.data?.data?.items || [];

  return (
    <>
      <CommonDataTable
        udf={udf}
        columns={columns}
        rows={items}
        defaultColumnWidths={defaultColumnWidths}
        query={query}
        booleanColumns={booleanColumns}
      >
        <UniqueIdColumnProvider for={booleanColumns || []} />
      </CommonDataTable>
    </>
  );
};
