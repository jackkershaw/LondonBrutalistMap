import Map from "react-map-gl/maplibre";
import "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { FeaturesData } from "../data/geoJSONData.tsx";
import FeatureWrapper from "../components/FeatureWrapper.tsx";
import MapControls from "../components/mapControls.tsx";
import LandingPage from "../components/landingPage.tsx";
import maplibregl from "maplibre-gl";

export default function MapPage() {
  const features = FeaturesData.features;
  return (
    <div>
      <LandingPage />
      <div className="h-[80vh] w-full">
        <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: -0.1276,
            latitude: 51.5074,
            zoom: 10,
          }}
          style={{ width: "100%", height: "75vh" }}
          mapStyle={"./mapstyles.json"}
        >
          <MapControls />
          {features.map((feature) => (
            <FeatureWrapper
              key={feature.id}
              feature={
                feature as GeoJSON.Feature<
                  GeoJSON.Geometry,
                  GeoJSON.GeoJsonProperties
                >
              }
            />
          ))}
        </Map>
      </div>
    </div>
  );
}
