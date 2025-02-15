import React, { useState } from "react";
import CustomMarker from "./Marker";
import HoverInfo from "./FeatureHoverInfo";
import InfoPanel from "./FeatureFullInfo.tsx";

interface FeatureWrapperProps {
  feature: GeoJSON.Feature;
}

const FeatureWrapper: React.FC<FeatureWrapperProps> = ({ feature }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisited, setIsVisited] = useState(false);

  return (
    <div>
      <CustomMarker
        feature={feature}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setIsClicked(true);
          setIsHovered(false);
        }}
      />

      {isHovered && (
        <HoverInfo
          title={feature.properties?.Title}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}

      {isClicked && (
        <InfoPanel
          feature={feature}
          isVisited={isVisited}
          onVisitedToggle={() => {
            if (localStorage.getItem(feature.properties?.Title)) {
              localStorage.removeItem(feature.properties?.Title);
              setIsVisited(false);
            } else {
              localStorage.setItem(feature.properties?.Title, "visited");
              setIsVisited(true);
            }
          }}
          onClose={() => setIsClicked(false)}
        />
      )}
    </div>
  );
};
export default FeatureWrapper;
