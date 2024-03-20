import { SimpleBarChart } from "@/components/charts/SimpleBarChart";
import { CustomPageSize } from "@/components/common-data-table/CustomPageSize";
import { dxFilterToSqlAlike } from "@/hooks/datatabletools";
import { useDatatableFiltering } from "@/hooks/useDatatableFiltering";
import { useGetFlowValues } from "@/sdk/esp-studio/modules/iot/useGetFlowValues";
import { useQueryClient } from "react-query";

export function FlowValueCommonReport() {
  const queryClient = useQueryClient();
  const udf = useDatatableFiltering({
    urlMask: "",
  });

  const { query } = useGetFlowValues({
    query: {
      itemsPerPage: udf.debouncedFilters.itemsPerPage,
      startIndex: udf.debouncedFilters.startIndex || 0,
      query: dxFilterToSqlAlike(udf.debouncedFilters.rawFilters),
    },
    queryClient: queryClient,
  });

  const {
    filters,
    setSorting,
    setStartIndex,
    selection,
    setSelection,
    setPageSize,
    onFiltersChange,
  } = udf;
  const items = query.data?.data?.items || [];

  return (
    <>
      <SimpleBarChart items={items} />
      <CustomPageSize
        currentPageSize={filters.itemsPerPage || 10}
        onPageSizeChange={setPageSize}
        pageSizes={[2, 10, 15, 20, 40, 50, 100, 200, 1000]}
      />
    </>
  );
}
