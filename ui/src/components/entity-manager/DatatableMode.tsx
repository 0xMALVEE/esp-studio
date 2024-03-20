// // @ts-ignore
export function n() {}
// import { QueryArchiveColumn } from "@/definitions/common";
// import { Filter } from "@/definitions/definitions";
// import { dxFilterToSqlAlike, urlStringToFilters } from "@/hooks/datatabletools";
// import { useDatatableFiltering } from "@/hooks/useDatatableFiltering";
// import { useT } from "@/hooks/useT";
// import { DataTypeProvider } from "@devexpress/dx-react-grid";
// import { useEffect, useRef, useState } from "react";
// import { useQueryClient } from "react-query";
// import { CommonDataTable } from "../common-data-table/CommonDataTable";
// import Link from "../link/Link";
// import { filtersToJsonQuery } from "./EnttityManagerHelper";

// export const DatatableMode = ({
//   children,
//   columns,
//   deleteHook,
//   uniqueIdHrefHandler,
//   withFilters,
//   queryHook,
//   onRecordsDeleted,
//   withPreloads,
//   queryFilters,
// }: {
//   queryHook: any;
//   deleteHook?: any;
//   columns: QueryArchiveColumn[];
//   withPreloads?: string;
//   uniqueIdHrefHandler?: (id: string) => void;
//   withFilters?: boolean;
//   onRecordsDeleted?: ({ queryClient }: { queryClient: any }) => void;
//   children?: React.ReactNode;
//   queryFilters?: Array<Filter | undefined>;
// }) => {
//   const t = useT();
//   const queryClient = useQueryClient();

//   const delHook =
//     deleteHook &&
//     deleteHook({
//       queryClient,
//     });

//   const udf = useDatatableFiltering({
//     urlMask: screens.cloudProjects,
//     submitDelete: delHook?.submit,
//     onRecordsDeleted: onRecordsDeleted
//       ? () => onRecordsDeleted({ queryClient })
//       : undefined,
//   });

//   const [defaultColumnWidths] = useState(
//     columns.map((t) => ({ columnName: t.name, width: t.width }))
//   );

//   let UniqueIdCellRenderer = ({ value }: any) => (
//     <Link href={uniqueIdHrefHandler && uniqueIdHrefHandler(value)}>
//       {value}
//     </Link>
//   );

//   let BooleanTypeProvider = (props: any) => (
//     <DataTypeProvider formatterComponent={UniqueIdCellRenderer} {...props} />
//   );

//   const rows: any = q.query.data?.data?.items || [];

//   return (
//     <>
//       <CommonDataTable
//         udf={udf}
//         columns={columns}
//         rows={rows}
//         defaultColumnWidths={defaultColumnWidths as any}
//         query={q.query}
//         booleanColumns={["uniqueId"]}
//         withFilters={withFilters}
//       >
//         <BooleanTypeProvider for={["uniqueId"]} />

//         {children}
//       </CommonDataTable>
//     </>
//   );
// };
