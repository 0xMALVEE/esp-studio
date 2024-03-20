import { useT } from "@/hooks/useT";

export function DiagramToolbar({
  addFeature,
  children,
}: {
  addFeature: (type: string) => void;
  children?: any;
}) {
  const t = useT();
  return (
    <ul className="particles-menu-bar">
      {children}
      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("dataNodeRelaySource")}
        >
          {t.node.source}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("dataNodeRelayTarget")}
        >
          {t.node.target}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("interpolateNode")}
        >
          {t.node.interpolate}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          style={{ width: "60px" }}
          onClick={() => addFeature("oddEvenNode")}
        >
          {t.node.Oddeven}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          style={{ width: "60px" }}
          onClick={() => addFeature("valueGaugeNode")}
        >
          {t.node.valueGauge}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          style={{ width: "60px" }}
          onClick={() => addFeature("containerLevelValueNode")}
        >
          {t.node.containerLevelValue}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("colorNode")}
        >
          {t.node.color}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("circularInputNode")}
        >
          {t.node.circularInput}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("cronNode")}
        >
          {t.node.cron}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("digitalLabel")}
        >
          {t.node.digital}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("basicTimerNode")}
        >
          {t.node.timer}
        </button>
      </li>

      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("averageNode")}
        >
          {t.node.average}
        </button>
      </li>

      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("delayNode")}
        >
          {t.node.delay}
        </button>
      </li>

      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("switchNode")}
        >
          {t.node.switch}
        </button>
      </li>
      <li>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => addFeature("valueMonitorNode")}
        >
          {t.node.value}
        </button>
      </li>
    </ul>
  );
}
