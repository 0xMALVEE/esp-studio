import { AppConfigContext } from "@/hooks/appConfigTools";
import { useT } from "@/hooks/useT";
import { CommonProfileEntityManager } from "@/modules/abac/common-profile/CommonProfileEntityManager";
import { SettingsScreen } from "@/modules/desktop-app-settings/SettingsScreen";

import { NotFound404 } from "@/components/404/NotFound404";
import { useLocale } from "@/hooks/useLocale";
import { useRtlClass } from "@/hooks/useRtlClass";
import {
  useAbacAuthenticatedRoutes,
  useAbacModulePublicRoutes,
} from "@/modules/abac/AbacModuleRoutes";
import { useDriveRoutes } from "@/modules/drive/DriveRoutes";
import { useDeviceRoutes } from "@/modules/iot/DeviceRoutes";
import { useDeviceTypeRoutes } from "@/modules/iot/DeviceTypeRoutes";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import { AboutScreen } from "./AboutScreen";
import { defaultNavbar } from "./constants";

import { useGpioModeRoutes } from "@/modules/iot/GpioModeRoutes";

import { useGpioRoutes } from "@/modules/iot/GpioRoutes";
import { useModbusTaskRoutes } from "@/modules/iot/ModbusTaskRoutes";

import { useRemoteMenuResolver } from "@/hooks/useRemoteMenuResolver";
import { BackupSingleScreen } from "@/modules/abac/backup/BackupSingleScreen";
import { useControlSheetRoutes } from "@/modules/iot/ControlSheetRoutes";
import { useDataNodeRoutes } from "@/modules/iot/DataNodeRoutes";
import { useFlowValueRoutes } from "@/modules/iot/FlowValueRoutes";
import { useGpioStateRoutes } from "@/modules/iot/GpioStateRoutes";
import { useHmiRoutes } from "@/modules/iot/HmiRoutes";
import { HmiSingleScreen } from "@/modules/iot/HmiSingleScreen";
import { useModbusConnectionTypeRoutes } from "@/modules/iot/ModbusConnectionTypeRoutes";
import { useModbusFunctionCodeRoutes } from "@/modules/iot/ModbusFunctionCodeRoutes";
import { useModbusVariableTypeRoutes } from "@/modules/iot/ModbusVariableTypeRoutes";
import { useMqttConnectionRoutes } from "@/modules/iot/MqttConnectionRoutes";
import { useKeyboardShortcutRoutes } from "@/modules/keyboardShortcuts/KeyboardShortcutRoutes";
// ~ auto:useRouteImport

export function ApplicationRoutes() {
  const t = useT();
  useRtlClass();
  const { locale } = useLocale();

  const { config } = useContext(AppConfigContext);
  const abacModulePublicRoutes = useAbacModulePublicRoutes();
  const abacAuthenticatedRoutes = useAbacAuthenticatedRoutes();
  const deviceTypeRoutes = useDeviceTypeRoutes();
  const deviceRoutes = useDeviceRoutes();
  const driveRoutes = useDriveRoutes();

  const sidebarMenu = useRemoteMenuResolver("sidebar");

  const gpioModeRoutes = useGpioModeRoutes();
  const gpioRoutes = useGpioRoutes();
  const modbusTaskRoutes = useModbusTaskRoutes();
  const modbusConnectionTypeRoutes = useModbusConnectionTypeRoutes();
  const modbusFunctionCodeRoutes = useModbusFunctionCodeRoutes();
  const dataNodeRoutes = useDataNodeRoutes();
  const modbusVariableTypeRoutes = useModbusVariableTypeRoutes();
  const keyboardShortcutRoutes = useKeyboardShortcutRoutes();
  const gpioStateRoutes = useGpioStateRoutes();
  const controlSheetRoutes = useControlSheetRoutes();
  const mqttConnectionRoutes = useMqttConnectionRoutes();
  const hmiRoutes = useHmiRoutes();
  const flowValueRoutes = useFlowValueRoutes();
  // ~ auto:useRouteDefs

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={(
              process.env.REACT_APP_DEFAULT_ROUTE || "/{locale}/signin"
            ).replace("{locale}", config.interfaceLanguage || locale || "en")}
            replace
          />
        }
      />
      <Route path={"hmi-view/:uniqueId"} element={<HmiSingleScreen />}></Route>
      <Route path=":locale">{abacModulePublicRoutes}</Route>

      <Route
        path=":locale"
        element={
          <Layout navbarMenu={defaultNavbar} sidebarMenu={sidebarMenu} />
        }
      >
        <Route
          path={"profile"}
          element={<CommonProfileEntityManager />}
        ></Route>
        <Route path="about" element={<AboutScreen />}></Route>
        {driveRoutes}
        <Route path={"settings"} element={<SettingsScreen />}></Route>
        <Route path={"migration"} element={<BackupSingleScreen />}></Route>

        {keyboardShortcutRoutes}
        {abacAuthenticatedRoutes}
        {deviceTypeRoutes}
        {deviceRoutes}

        {dataNodeRoutes}
        {gpioModeRoutes}
        {gpioRoutes}
        {modbusTaskRoutes}
        {modbusConnectionTypeRoutes}
        {modbusFunctionCodeRoutes}
        {modbusVariableTypeRoutes}
        {gpioStateRoutes}
        {controlSheetRoutes}
        {mqttConnectionRoutes}
        {hmiRoutes}
        {flowValueRoutes}
        {/* ~ auto:useRouteJsx */}

        <Route path="*" element={<NotFound404 />} />
      </Route>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}
