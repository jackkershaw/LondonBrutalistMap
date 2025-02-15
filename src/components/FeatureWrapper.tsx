import React, { useState } from "react";
import CustomMarker from "./Marker";
import HoverInfo from "./FeatureHoverInfo";
import InfoPanel from "./FeatureFullInfo.tsx";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  setSelectedBuilding,
  clearSelectedBuilding,
} from "../store/buildingSlice";

interface FeatureWrapperProps {
  feature: GeoJSON.Feature;
}

const FeatureWrapper: React.FC<FeatureWrapperProps> = ({ feature }) => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisited, setIsVisited] = useState(false);

  const selectedBuildingId = useAppSelector(
    (state) => state.buildings.selectedBuildingId
  );
  const isSelected = selectedBuildingId === feature.id;

  return (
    <div>
      <CustomMarker
        feature={feature}
        onMouseEnter={() => {
          setIsHovered(true);
          dispatch(clearSelectedBuilding());
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setIsHovered(false);
          if (isSelected) {
            dispatch(clearSelectedBuilding());
          } else {
            dispatch(setSelectedBuilding(String(feature.id)));
          }
        }}
      />

      {isHovered && (
        <HoverInfo
          title={feature.properties?.Title}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}

      {isSelected && !isHovered && (
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
          onClose={() => dispatch(clearSelectedBuilding())}
        />
      )}
    </div>
  );
};

export default FeatureWrapper;
