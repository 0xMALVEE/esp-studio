import { source } from "@/helpers/source";
import { LocationDataEntity } from "src/sdk/academy";
import React from "react";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet";

const position: any = [51.505, -0.09];

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [28, 36],
  iconAnchor: [14, 36],
} as any);

L.Marker.prototype.options.icon = DefaultIcon;

function MapOSM({
  value,
  onMapRef,
  editing,
}: {
  value?: LocationDataEntity[];
  onMapRef?: (l: any) => void;
  editing?: boolean;
}) {
  return (
    <div className="map-osm-container" style={{ height: "400px" }}>
      {editing && (
        <img
          src={source("common/marker_pin.svg")}
          className="map-center-marker"
        />
      )}

      <MapContainer
        center={position}
        style={{ height: "400px", width: "100%" }}
        zoom={13}
        ref={(r) => onMapRef && onMapRef(r)}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {value?.map((marker) => (
          <Marker
            key={marker.uniqueId}
            position={{ lat: marker.lat, lng: marker.lng }}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default React.memo(MapOSM);
