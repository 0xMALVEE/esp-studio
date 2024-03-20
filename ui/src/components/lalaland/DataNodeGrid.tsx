import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
// @ts-ignore
import RGL, { WidthProvider } from "react-grid-layout";
import Switch from "react-switch";
import { useGetDataNodes } from "src/sdk/academy/modules/iot/useGetDataNodes";
import { useQueryClient } from "react-query";
import { DataNodeEntity } from "src/sdk/academy";
import { usePostDataNodeWrite } from "src/sdk/academy/modules/iot/usePostDataNodeWrite";
import { useLocale } from "@/hooks/useLocale";
const ReactGridLayout = WidthProvider(RGL);

export function DataNodeGrid() {
  const queryClient = useQueryClient();
  const { dir, locale } = useLocale();
  const query = useGetDataNodes({
    queryClient,
    query: {},
  });

  const items: DataNodeEntity[] = query?.query?.data?.data?.items || [];

  const generateLayout = () => {
    return _.map(items, function (item, i) {
      // const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: i * 2,
        y: 1,
        w: 2,
        h: 2,
        i: item.uniqueId,
      };
    });
  };

  const [layout, setLayout] = useState(generateLayout());

  useEffect(() => {
    setLayout(generateLayout());
  }, [items]);

  useEffect(() => {
    // const gridLayoutContainer = document.querySelector(".react-grid-layout");
    // const children = document.querySelectorAll(".react-grid-item");
    // if (gridLayoutContainer) {
    //   gridLayoutContainer.setAttribute("dir", "ltr");
    // }
    // children.forEach((child) => child.setAttribute("dir", dir));
    const gridLayoutContainers =
      document.querySelectorAll(".react-grid-layout");
    gridLayoutContainers.forEach((item) => {
      const children = item.querySelectorAll(".react-grid-item");
      if (item) {
        item.setAttribute("dir", "ltr");
      }
      children.forEach((child) => child.setAttribute("dir", dir));
    });
  }, [locale]);

  return (
    <ReactGridLayout
      layout={layout}
      onLayoutChange={() => {}}
      className={"layout"}
      items={items.length}
      rowHeight={35}
      cols={12}
    >
      {items.map((item, i) => {
        return (
          <div key={item.uniqueId}>
            <DataNodeWidget item={item} />
          </div>
        );
      })}
    </ReactGridLayout>
  );
  // }
}

export function DataNodeWidget({ item }: { item: DataNodeEntity }) {
  const [checked, setChecked] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    if ((item as any).value === "on") {
      setChecked(true);
    }
  }, [item]);

  const { mutation, submit } = usePostDataNodeWrite({
    queryClient,
  });

  return (
    <div className="card p-3">
      <span className="text">{item.uniqueId}</span>
      <Switch
        checked={checked}
        disabled={mutation.isLoading}
        onChange={(value) => {
          setChecked((v) => !v);
          submit({
            uniqueId: item.uniqueId,
            valueString: value ? "on" : "off",
          });
        }}
      />
    </div>
  );
}
