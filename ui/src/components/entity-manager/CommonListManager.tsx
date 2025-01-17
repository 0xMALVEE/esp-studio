import { QueryArchiveColumn } from "@/definitions/common";
import { Filter } from "@/definitions/definitions";
import { dxFilterToSqlAlike, urlStringToFilters } from "@/hooks/datatabletools";
import { useDatatableFiltering } from "@/hooks/useDatatableFiltering";
import { useT } from "@/hooks/useT";
import { useGetTableViewSizingByUniqueId } from "@/sdk/fireback/modules/workspaces/useGetTableViewSizingByUniqueId";
import { usePatchTableViewSizing } from "@/sdk/fireback/modules/workspaces/usePatchTableViewSizing";
import { enTranslations } from "@/translations/en";
import {
  DataTypeProvider,
  TableColumnWidthInfo,
} from "@devexpress/dx-react-grid";
import { useEffect, useMemo, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { CommonDataTable } from "../common-data-table/CommonDataTable";
import Link from "../link/Link";
import { filtersToJsonQuery } from "./EnttityManagerHelper";
import { FlatListMode } from "./FlatListMode";
import { MapListMode } from "./MapListMode";

function wdc(t: typeof enTranslations, items: Array<any>): Array<any> {
  return [
    {
      name: "uniqueId",
      title: t.table.uniqueId,
      width: 200,
    },
    ...(items || []),
    {
      name: "createdFormatted",
      sortKey: "created",
      title: t.created,
      width: 200,
    },
  ];
}
const media = matchMedia("(max-width: 600px)");

function useViewMode() {
  const matchRef = useRef(media);

  const [view, setView] = useState<"datatable" | "card" | "map">(
    media.matches ? "card" : "datatable"
  );

  useEffect(() => {
    const query = matchRef.current;
    function listener() {
      if (query.matches) {
        setView("card");
      } else {
        setView("datatable");
      }
    }
    query.addEventListener("change", listener);

    return () => query.removeEventListener("change", listener);
  }, []);

  return { view };
}

export const CommonListManager = ({
  children,
  columns,
  deleteHook,
  uniqueIdHrefHandler,
  withFilters,
  queryHook,
  onRecordsDeleted,
  id,
  RowDetail,
  deep,
  withPreloads,
  queryFilters,
  inlineInsertHook,
  bulkEditHook,
}: {
  queryHook: any;
  RowDetail?: any;
  bulkEditHook?: any;
  inlineInsertHook?: any;
  deleteHook?: any;
  columns: QueryArchiveColumn[];
  id?: string;
  withPreloads?: string;
  deep?: boolean;
  uniqueIdHrefHandler?: (id: string) => void;
  withFilters?: boolean;
  onRecordsDeleted?: ({ queryClient }: { queryClient: any }) => void;
  children?: React.ReactNode;
  queryFilters?: Array<Filter | undefined>;
}) => {
  const t = useT();
  const { view } = useViewMode();
  const queryClient = useQueryClient();
  const kcolumns = wdc(t, columns);
  const { query } = useGetTableViewSizingByUniqueId({
    query: { uniqueId: queryHook.UKEY },
  });

  const [columnSizes, setColumnSizes] = useState<any>(
    kcolumns.map((t) => ({ columnName: t.name, width: t.width }))
  );

  useEffect(() => {
    if ((query as any).data?.data?.sizes) {
      setColumnSizes(JSON.parse((query as any).data?.data?.sizes));
    } else {
      const table = localStorage.getItem(`table_${queryHook.UKEY}`);
      if (table) {
        setColumnSizes(JSON.parse(table));
      }
    }
  }, [(query as any).data?.data?.sizes]);

  const { submit: submitTableSizing } = usePatchTableViewSizing({
    queryClient,
  });

  const delHook =
    deleteHook &&
    deleteHook({
      queryClient,
    });

  const udf = useDatatableFiltering({
    urlMask: "",
    submitDelete: delHook?.submit,
    onRecordsDeleted: onRecordsDeleted
      ? () => onRecordsDeleted({ queryClient })
      : undefined,
  });

  const [defaultColumnWidths] = useState(
    kcolumns.map((t) => ({ columnName: t.name, width: t.width }))
  );

  const onColumnWidthsChange = (nextColumnWidths: TableColumnWidthInfo[]) => {
    setColumnSizes(nextColumnWidths);
    const sizes = JSON.stringify(nextColumnWidths);
    submitTableSizing({
      uniqueId: queryHook.UKEY,
      sizes,
    });
    localStorage.setItem(`table_${queryHook.UKEY}`, sizes);
  };

  let UniqueIdCellRenderer = ({ value }: any) => (
    <Link href={uniqueIdHrefHandler && uniqueIdHrefHandler(value)}>
      {value}
    </Link>
  );

  let BooleanTypeProvider = (props: any) => (
    <DataTypeProvider formatterComponent={UniqueIdCellRenderer} {...props} />
  );

  const f = [
    ...(udf.debouncedFilters.rawFilters || []),
    ...(queryFilters || []),
  ];

  const jsonQuery = useMemo(() => filtersToJsonQuery(f as any), [f]);

  const q = queryHook({
    query: {
      itemsPerPage: udf.debouncedFilters.itemsPerPage,
      startIndex: udf.debouncedFilters.startIndex || 0,
      query: dxFilterToSqlAlike(f),
      jsonQuery,
      sort: udf.debouncedFilters.sorting,
      deep: deep === undefined ? true : deep,
      withPreloads,
    },
    queryClient: queryClient,
  });

  q.jsonQuery = jsonQuery;

  useEffect(() => {
    // udf.setFilter(urlStringToFilters(), false);
    // q?.query?.refetch();
  }, []);

  const rows: any = q.query.data?.data?.items || [];

  return (
    <>
      {view === "map" && (
        <MapListMode
          columns={kcolumns}
          deleteHook={deleteHook}
          uniqueIdHrefHandler={uniqueIdHrefHandler}
          q={q}
          udf={udf}
        />
      )}
      {view === "card" && (
        <FlatListMode
          columns={kcolumns}
          jsonQuery={jsonQuery}
          deleteHook={deleteHook}
          uniqueIdHrefHandler={uniqueIdHrefHandler}
          q={q}
          udf={udf}
        />
      )}
      {view === "datatable" && (
        <CommonDataTable
          udf={udf}
          bulkEditHook={bulkEditHook}
          RowDetail={RowDetail}
          onColumnWidthsChange={
            kcolumns.length === columnSizes.length
              ? onColumnWidthsChange
              : undefined
          }
          columns={kcolumns}
          columnSizes={columnSizes}
          inlineInsertHook={inlineInsertHook}
          rows={rows}
          defaultColumnWidths={defaultColumnWidths as any}
          query={q.query}
          booleanColumns={["uniqueId"]}
          withFilters={withFilters}
        >
          <BooleanTypeProvider for={["uniqueId"]} />

          {children}
        </CommonDataTable>
      )}
    </>
  );
};
