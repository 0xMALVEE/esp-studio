import { useT } from "@/hooks/useT";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { LocationDataEntity } from "src/sdk/academy";
import React from "react";
import { googlemapGrayScale } from "./Style";

const center = {
  lng: 51.389942295,
  lat: 35.69030342,
};

function MapGoogle({
  value,
  onMapRef,
}: {
  value?: LocationDataEntity[];
  onMapRef?: (l: any) => void;
}) {
  const t = useT();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCFlThyoRIyg6e39IYHCQ-kE8l-fTzF2LU",
    // libraries: ["drawing"],
  });

  const [map, setMap] = React.useState<any | null>(null);
  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
    onMapRef && onMapRef(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      id="map-view"
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: googlemapGrayScale,
      }}
    >
      <>
        {value
          ? value.map((m, i) => {
              return (
                <Marker
                  key={i}
                  position={{ lat: m.lat, lng: m.lng }}
                  // options={options}
                />
              );
            })
          : null}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapGoogle);
