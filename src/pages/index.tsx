import { FeaturesData } from "../components/geoJSONData.tsx";

import { useState } from "react";
import FeatureCard from "../components/FeatureCard.tsx";

export default function Index() {
  const features = FeaturesData.features;
  const [visitedStates, setVisitedStates] = useState(
    new Array(features.length).fill(false)
  );

  const isVisited = (title: string) => {
    return localStorage.getItem(title);
  };

  const toggleVisited = (title: string, index: number) => {
    const newVisitedStates = [...visitedStates];
    if (isVisited(title)) {
      localStorage.removeItem(title);
      newVisitedStates[index] = false;
    } else {
      localStorage.setItem(title, "visited");
      newVisitedStates[index] = true;
    }
    setVisitedStates(newVisitedStates);
  };

  return (
    <section className="pb-10 mb-10 w-full">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {features.map((feature, index) => {
          const title = feature.properties.Title;
          return (
            <li key={feature.id}>
              <FeatureCard
                feature={
                  feature as import("geojson").Feature<
                    import("geojson").Geometry,
                    import("geojson").GeoJsonProperties
                  >
                }
                isVisited={isVisited(title) !== null}
                onVisitedToggle={() => toggleVisited(title, index)}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
