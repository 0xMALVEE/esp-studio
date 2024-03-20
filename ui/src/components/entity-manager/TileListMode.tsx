import { QueryArchiveColumn } from "@/definitions/common";
import { useT } from "@/hooks/useT";
import { useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { QueryErrorView } from "../error-view/QueryError";
const { FixedSizeList } = require("react-window");

export const TileListMode = ({
  columns,
  deleteHook,
  uniqueIdHrefHandler,
  udf,
  jsonQuery,
  q,
}: {
  udf: any;
  q: any;

  deleteHook?: any;
  columns: QueryArchiveColumn[];
  uniqueIdHrefHandler?: (id: string) => void;
  jsonQuery?: any;
}) => {
  const t = useT();
  // Used for cashing the query
  // const indexedData = useRef<Array<any>>([]);
  const previousQuery = useRef<any>();
  let [indexedData, setIndexedData] = useState<Array<any>>([]);
  const [pullToRefreshEnabled, setPTREnabled] = useState<boolean>(true);

  const queryClient = useQueryClient();

  const total = q.query?.data?.data?.totalItems || 0;
  const rows: any = q.query.data?.data?.items || [];
  return (
    <>
      <QueryErrorView query={q.query} />
      <div className="row">
        {rows.map((item) => {
          return <div className="col-lg-4" key={item.uniqueId}></div>;
        })}
      </div>

      {indexedData.length === 0 && !q.query?.isError && (
        <span>{t.table.noRecords}</span>
      )}
    </>
  );
};
