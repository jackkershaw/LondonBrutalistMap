import FeatureCard from "./FeatureCard";

interface InfoPanelProps {
  feature: GeoJSON.Feature;
  onClose: () => void;
  isVisited: boolean;
  onVisitedToggle: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  feature,
  onClose,
  isVisited,
  onVisitedToggle,
}) => (
  <div className="tooltip bg-gray-100 absolute z-10 h-[100vh] w-full sm:right-10 sm:top-10 sm:h-auto sm:w-[400px] sm:rounded-lg sm:p-2">
    <FeatureCard
      feature={feature}
      isVisited={isVisited}
      onVisitedToggle={onVisitedToggle}
      onClose={onClose}
    />
  </div>
);
export default InfoPanel;
