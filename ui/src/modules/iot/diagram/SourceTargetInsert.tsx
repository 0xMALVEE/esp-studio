export function SourceTargetInsert(props: {
  reverse?: boolean;
  append: (type: any) => void;
}) {
  return (
    <>
      <div
        className="source-target-insert"
        style={{ flexDirection: props.reverse ? "row-reverse" : "row" }}
      >
        <button
          className="btn btn-primary small"
          onClick={() => props.append("target")}
        >
          + Target
        </button>
        <button
          className="btn btn-primary small"
          onClick={() => props.append("source")}
        >
          + Source
        </button>
      </div>
    </>
  );
}
