import { uuidv4 } from "@/helpers/api";
import { source } from "@/helpers/source";
import { useT } from "@/hooks/useT";
import { MapLocationDataItems } from "@/modules/loyalty/MapLocationDataItems";
import { LocationDataEntity } from "src/sdk/academy";
import React, { useState } from "react";
import MapGoogle from "./MapGoogle";
import MapOSM from "./MapOSM";

function MapView({
  value,
  onChange,
}: {
  value?: LocationDataEntity[];
  onChange?: (l: Partial<LocationDataEntity>[]) => void;
}) {
  const t = useT();
  const [provider, setProvider] = useState<"google" | "osm">("osm");

  // Keeps reference to the map module, either google maps or react-leaf, or even others
  const [map, setMap] = React.useState<any | null>(null);

  // Implements different methods of the getting map center for each module
  const getMapCenter = () => {
    if (provider === "google") {
      return {
        lat: map?.getCenter().lat(),
        lng: map?.getCenter().lng(),
      };
    }
    if (provider === "osm") {
      return map?.getCenter();
    }
  };

  const onAddLocation = () => {
    onChange &&
      onChange([
        ...(value || []),
        {
          ...getMapCenter(),
          uniqueId: uuidv4(),
        },
      ]);
  };

  return (
    <div>
      <div className="form-map-container">
        {onChange && (
          <img
            src={source("common/marker_pin.svg")}
            className="map-center-marker"
          />
        )}
        <div className="map-view-toolbar">
          {onChange && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={onAddLocation}
            >
              {t.addLocation}
            </button>
          )}
        </div>
        {provider === "osm" && (
          <MapOSM
            editing={!!onChange}
            value={value}
            onMapRef={(r) => setMap(r)}
          />
        )}
        {provider === "google" && (
          <MapGoogle onMapRef={(r) => setMap(r)} value={value} />
        )}
      </div>

      <MapLocationDataItems onChange={onChange} value={value} />
    </div>
  );
}

export default React.memo(MapView);
