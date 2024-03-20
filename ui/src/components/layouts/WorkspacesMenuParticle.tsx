import { MacTagsColor, Menu } from "@/definitions/common";
import { useT } from "@/hooks/useT";
import { useGetUserWorkspaces } from "@/sdk/fireback/modules/workspaces/useGetUserWorkspaces";
import { useGetWorkspaces } from "@/sdk/fireback/modules/workspaces/useGetWorkspaces";
import { groupBy } from "lodash";
import { useContext, useEffect } from "react";
import { useQueryClient } from "react-query";
import {
  RemoteQueryContext,
  noWorkspaceQuery,
} from "src/sdk/fireback/core/react-tools";
import { MenuParticle } from "./MenuParticle";

export function WorkspacesMenuParticle({ onClick }: { onClick: () => void }) {
  const t = useT();
  const { selectedUrw, selectUrw } = useContext(RemoteQueryContext) as any;

  const queryClient = useQueryClient();
  const { query: queryWorkspaces } = useGetWorkspaces({
    queryClient,
    query: {
      deep: true,
    },
    queryOptions: {
      cacheTime: 0,
      refetchOnWindowFocus: false,
    },
    optionFn: noWorkspaceQuery,
  });

  useEffect(() => {
    if (queryWorkspaces.data?.data?.items?.length && !selectedUrw) {
      selectUrw(queryWorkspaces.data?.data?.items[0]);
    }
  }, [queryWorkspaces.data?.data?.items]);

  const menus: Menu[] = [];
  if ((queryWorkspaces.data?.data?.items || []).length) {
    menus.push({
      label: t.wokspaces.sidetitle,
      children: (queryWorkspaces.data?.data?.items || []).map((item) => {
        return {
          label: item?.name || item.workspace?.name || item?.workspaceId,
          forceActive: selectedUrw?.workspaceId === item.workspaceId,
          color:
            item.workspaceId === "root"
              ? MacTagsColor.Orange
              : MacTagsColor.Green,
          onClick() {
            if (item.workspaceId) {
              selectUrw({ workspaceId: item.workspaceId });
            }
          },
        };
      }),
    });
  }

  if (menus.length === 1 && menus[0].children.length === 0) {
    return null;
  }

  return (
    <>
      {menus.map((menu) => {
        return <MenuParticle onClick={onClick} key={menu.name} menu={menu} />;
      })}
    </>
  );
}
