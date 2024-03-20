import { useLocale } from "@/hooks/useLocale";
import { BaseEntity } from "@/sdk/fireback/core/definitions";
import { useEffect, useRef, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(Responsive);

export function GridRender<T>({
  components,
  onLayout,
  componentMap,
  layout,
  NoComponentsView,
  locked,
  onClick,
}: {
  components: Array<T>;
  onLayout: (l: any) => void;
  onClick: (l: T) => void;
  locked?: boolean;
  NoComponentsView?: any;
  layout: any;
  componentMap: any;
}) {
  const [layout$, setLayout] = useState<any>();
  const rendered = useRef(false);
  const { locale, dir } = useLocale();

  const fixLocale = (dir: string) => {
    const gridLayoutContainers =
      document.querySelectorAll(".react-grid-layout");
    gridLayoutContainers.forEach((item) => {
      const children = item.querySelectorAll(".react-grid-item");
      if (item) {
        item.setAttribute("dir", "ltr");
      }
      children.forEach((child) => child.setAttribute("dir", dir));
    });
  };

  useEffect(() => {
    if (dir === "rtl") {
      setTimeout(() => {
        fixLocale(dir);
      }, 1000);
    }
  }, [locale]);

  useEffect(() => {
    if (layout) {
      setLayout(layout);
    }
  }, [layout]);

  useEffect(() => {
    if (!locked) {
      rendered.current = true;
    } else {
      rendered.current = false;
    }
  }, [locked]);

  if (components.length === 0 && NoComponentsView) {
    return <NoComponentsView />;
  }

  return (
    <ReactGridLayout
      layouts={layout$}
      isDraggable={!locked}
      isResizable={!locked}
      onResizeStop={(items: BaseEntity[]) => {
        console.log(items);
      }}
      className={"layout"}
      items={components.length}
      rowHeight={35}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      onLayoutChange={(m: any, layouts: any) => {
        if (!layout$ || !rendered.current) {
          return;
        }

        setLayout(layouts);
        onLayout(layouts);
      }}
    >
      {components.map((item, i) => {
        const Component: any = componentMap[item?.typeId as any];

        if (!Component) {
          return null;
        }

        return (
          <div
            className="card"
            key={item.uniqueId}
            onDoubleClick={() => onClick(item)}
          >
            <span
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                fontSize: "10px",
              }}
            >
              {item.label}
            </span>
            <Component data={{ item }} />
          </div>
        );
      })}
    </ReactGridLayout>
  );
}
