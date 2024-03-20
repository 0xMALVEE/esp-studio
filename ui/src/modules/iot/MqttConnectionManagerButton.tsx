import { httpErrorHanlder } from "@/helpers/api";
import { useT } from "@/hooks/useT";
import { useGetMqttClientConnection } from "@/sdk/esp-studio/modules/iot/useGetMqttClientConnection";
import { usePostMqttClientConnect } from "@/sdk/esp-studio/modules/iot/usePostMqttClientConnect";
import { useQueryClient } from "react-query";

export function MqttConnectionManagerButton({
  uniqueId,
}: {
  uniqueId?: string;
}) {
  const t = useT();
  const queryClient = useQueryClient();

  const g = useGetMqttClientConnection({
    queryClient,
    query: { uniqueId },
  });

  const connectionHook = usePostMqttClientConnect({ queryClient });
  const isConnected = g.query.data?.data?.isConnected;

  const toggleConnection = () => {
    connectionHook
      .submit({ connect: !isConnected, uniqueId })
      .then((res) => {
        g.query.refetch();
      })
      .catch((e) => httpErrorHanlder(e, t));
  };

  return (
    <button
      type="button"
      disabled={g.query.isLoading || connectionHook.mutation.isLoading}
      onClick={toggleConnection}
    >
      {g.query.isLoading ? (
        <span>Loading...</span>
      ) : (
        <span>{isConnected ? "Disconnect" : "Connect"}</span>
      )}
    </button>
  );
}
