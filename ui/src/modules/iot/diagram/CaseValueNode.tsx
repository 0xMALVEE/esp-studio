import { FormText } from "@/components/forms/form-text/FormText";
import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { useT } from "@/hooks/useT";
import { ControlSheetObjects } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { DnInterpolateConfigDto } from "@/sdk/esp-studio/modules/iot/DnInterpolateConfigDto";

import { useGetDataNodeByUniqueId } from "@/sdk/esp-studio/modules/iot/useGetDataNodeByUniqueId";
import { useQueryClient } from "react-query";
import { useReactFlow } from "reactflow";
import { useDiagram } from "./diagramTools";
import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";
import { SourceTargetInsert } from "./SourceTargetInsert";

export function CaseValueNode(props: {
  id: string;
  data: DnInterpolateConfigDto;
}) {
  let startPoint = 30;

  const t = useT();

  const { setNodes } = useReactFlow();
  const queryClient = useQueryClient();

  const { query } = useGetDataNodeByUniqueId({
    queryClient,
    query: {
      uniqueId: props.data.meta?.nodeId,
    },
  });
  const { execInNodes } = useDiagram();

  const append = (type: "source" | "target") => {
    execInNodes(props.id, (node) => {
      const sources = [...(node.data?.meta?.sources || [])];
      const targets = [...(node.data?.meta?.targets || [])];

      if (type === "source") {
        sources.push(0);
      } else if (type === "target") {
        targets.push(0);
      }

      return {
        ...node,
        data: {
          ...node.data,
          meta: {
            ...(node.data?.meta || {}),
            sources,
            targets,
          },
        },
      };
    });
  };

  const remove = (type: "source" | "target", index: number) => {
    execInNodes(props.id, (node) => {
      const meta = node.data.meta;

      if (type === "source") {
        meta.sources = meta.sources.filter((m, i) => i !== index);
      }
      if (type === "target") {
        meta.targets = meta.targets.filter((m, i) => i !== index);
      }
      return {
        ...node,
        data: {
          ...node.data,
          meta,
        },
      };
    });
  };

  const update = (data, type: "source" | "target", index: number) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === props.id) {
          const meta = node.data.meta;

          if (type === "source") {
            meta.sources = meta.sources.map((m, i) => {
              if (i === index) {
                return data;
              }

              return m;
            });
          }
          if (type === "target") {
            meta.targets = meta.targets.map((m, i) => {
              if (i === index) {
                return data;
              }
              return m;
            });
          }

          return {
            ...node,
            data: {
              ...node.data,
              meta,
            },
          };
        }
        return node;
      })
    );
  };

  return (
    <>
      <NodeWrapper>
        <div>Interpolate</div>
        <SourceTargetInsert append={append} />

        <div className="interpolate-list">
          <div className="interpolate-sources">
            {(props.data?.meta?.sources || []).map((source, index) => {
              return (
                <div key={index}>
                  <FormText
                    onChange={(v: number) => {
                      update(+v, "source", index);
                    }}
                    value={source}
                  >
                    <button
                      className="node-remove"
                      onClick={() => remove("source", index)}
                    >
                      X
                    </button>
                  </FormText>
                </div>
              );
            })}
          </div>
          <div className="interpolate-targets">
            {(props.data?.meta?.targets || []).map((target, index) => {
              return (
                <div key={index}>
                  <FormText
                    onChange={(v: number) => {
                      update(+v, "target", index);
                    }}
                    value={target}
                  >
                    <button
                      className="node-remove"
                      onClick={() => remove("target", index)}
                    >
                      X
                    </button>
                  </FormText>
                </div>
              );
            })}
          </div>
        </div>
        {(props.data?.connections || []).map((connection, index) => {
          return (
            <div key={index}>
              <HandleRender startPoint={startPoint} connection={connection} />
            </div>
          );
        })}
        {/* <pre>{JSON.stringify(props, null, 2)}</pre>
        <pre>{JSON.stringify(query.data?.data?.values, null, 2)}</pre>
        <pre>{JSON.stringify(props.data?.meta, null, 2)}</pre> */}
      </NodeWrapper>
    </>
  );
}

CaseValueNode.emptyGenerator = function () {
  const id = uuidv4();
  return {
    type: "caseValueNode",
    data: {
      connections: [
        {
          uniqueId: uuidv4(),
          data: {},
          type: "source",
        },
        {
          uniqueId: uuidv4(),
          data: {},
          type: "target",
        },
      ],
      meta: {
        sources: [0, 100],
        targets: [0, 10],
      },
    },
    id,
    uniqueId: id,
    positionAbsolute: {
      x: 59,
      y: 100,
    },
    position: { x: 50, y: 100 },
  } as DeepPartial<ControlSheetObjects>;
};
