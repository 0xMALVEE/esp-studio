import {
  IMenuActionItem,
  useActions,
  useMenuTools,
} from "@/components/action-menu/ActionMenu";
import { ModalContext } from "@/components/modal/Modal";
import { Filters } from "@/hooks/datatabletools";
import { useLocale } from "@/hooks/useLocale";
import { useRouter } from "@/Router";
import { Filter, Sorting } from "@devexpress/dx-react-grid";
import { core } from "src/sdk/fireback/core/http-tools";
import { useContext, useEffect, useRef, useState } from "react";
import { useDebouncedEffect } from "./useDebouncedEffect";
import { QueryClient, useQueryClient } from "react-query";
import { useT } from "./useT";
import { MailTemplateEntityManager } from "@/modules/abac/workspaces/MailTemplateEntityManager";
import { osResources } from "@/components/mulittarget/multitarget-resource";
import { useKeyCombination } from "./useKeyPress";
import { KeyboardAction } from "@/definitions/definitions";

class SortState {
  private data: Array<{ columnName?: string; direction?: string }> = [];
  constructor(
    initalData: string | Array<{ columnName?: string; direction?: string }>
  ) {
    if (typeof initalData === "string") {
      const items = initalData.split(",");
      this.data = items.map((x) => {
        const kv = x.split(" ");
        return {
          columnName: kv[0],
          direction: kv[1],
        };
      });
    } else if (Array.isArray(initalData)) {
      this.data = initalData;
    }
  }

  toString() {
    return this.data.map((x) => `${x.columnName} ${x.direction}`).join(",");
  }
}
export function useDatatableFiltering({
  urlMask,
  submitDelete,
  onRecordsDeleted,
  initialFilters,
  fnFilterNormalizer,
}: {
  urlMask: string;
  onRecordsDeleted?: () => void;
  fnFilterNormalizer?: (data: {
    rawFilters: Filter[] | undefined;
    startIndex: number;
  }) => {
    rawFilters: Filter[] | undefined;
    startIndex: number;
  };
  submitDelete?: any;
  initialFilters?: Partial<Filters>;
}) {
  const t = useT();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { locale } = useLocale();

  const { withDebounce } = useDebouncedEffect();
  const init = {
    itemsPerPage: 15,
    startIndex: 0,
    query: "",
    rawFilters: [],
    sorting: [],
    ...(initialFilters || {}),
  };

  const [filters, setFilters] = useState<Partial<Filters>>(init);
  const [debouncedFilters, setDebouncedFilters] =
    useState<Partial<Filters>>(init);

  const [selection, setSelection$] = useState<Array<string>>([]);

  const setSelection = (selection: string[]) => {
    setSelection$(selection);
  };

  const setFilter = (
    newFiltersObj: Partial<Filters>,
    withAddressBarChang = true
  ) => {
    const newFilters: any = {
      ...filters,
      ...newFiltersObj,
    };

    const reflectToAddressBar: any = {
      ...newFilters,
    };
    if (reflectToAddressBar.sorting) {
      reflectToAddressBar.sorting = new SortState(
        reflectToAddressBar.sorting
      ).toString();
    }

    setLocationWithFilters(reflectToAddressBar);

    setFilters(newFilters);
    withDebounce(() => setDebouncedFilters(reflectToAddressBar), 500);
  };

  const setLocationWithFilters = (filters: any) => {
    const searchParams = new URLSearchParams();
    const params = filters as any;
    Object.keys(params).forEach(
      (key) =>
        params[key] !== undefined && searchParams.append(key, params[key])
    );

    const q = searchParams.toString();
    console.log(100, filters.sorting);
    window.history.replaceState(
      null,
      "New Page Title",
      window.location.pathname + "?" + q
    );

    // router.push(
    //   `/${locale}/${urlMask}`.replace("//", "/"),
    //   `/${locale}/${urlMask}?${q}`.replace("//", "/"),
    //   {
    //     shallow: true,
    //   }
    // );
  };

  const setPageSize = (page: number) => {
    setFilter({ itemsPerPage: page });
  };

  const setSorting = (sorting: Sorting[] | undefined) => {
    setFilter({ sorting });
  };

  const setStartIndex = (index: number) => {
    setFilter({ startIndex: index });
  };

  const onFiltersChange = (filters: Filter[] | undefined) => {
    let newFilters = { rawFilters: filters, startIndex: 0 };
    setFilter(newFilters);
  };

  const useModal = useContext(ModalContext);

  const idsToQuery = (items: string[]): core.DeleteRequest => {
    return {
      query: items.map((t) => `unique_id = ${t}`).join(" or "),
      uniqueId: "",
    };
  };

  const deleteItems = async () => {
    useModal.openModal({
      title: t.confirm,
      confirmButtonLabel: t.common.yes,
      component: () => <div>{t.deleteConfirmMessage}</div>,
      onSubmit: async () => {
        if (submitDelete) {
          await submitDelete(idsToQuery(selection), null as any);
          onRecordsDeleted && onRecordsDeleted();
        }
        return true;
      },
    });
  };

  const deleteAction = (): IMenuActionItem => ({
    label: t.deleteAction,
    onSelect() {
      deleteItems();
    },
    icon: osResources.delete,
    uniqueActionKey: "GENERAL_DELETE_ACTION",
  });

  const { addActions, removeActionMenu } = useMenuTools();

  useEffect(() => {
    if (selection.length > 0 && typeof submitDelete !== "undefined") {
      return addActions("table-selection", [deleteAction()]);
    } else {
      removeActionMenu("table-selection");
    }
  }, [selection]);

  useKeyCombination(KeyboardAction.Delete, () => {
    if (selection.length > 0 && typeof submitDelete !== "undefined") {
      deleteItems();
    }
  });

  return {
    filters,
    setFilters,
    setFilter,
    setSorting,
    setStartIndex,
    selection,
    setSelection,
    onFiltersChange,
    setPageSize,
    debouncedFilters,
  };
}
