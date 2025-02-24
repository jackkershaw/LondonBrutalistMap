import VisitedCheckbox from "./visitedCheckbox";
import UnvisitedCheckbox from "./unvisitedCheckbox";
import CloseButton from "./closeButton";

interface FeatureCardProps {
  feature: GeoJSON.Feature;
  isVisited: boolean;
  onVisitedToggle: () => void;
  onClose?: () => void;
  isOpen?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  isVisited,
  onVisitedToggle,
  onClose,
  isOpen = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="relative flex h-[70vh] flex-col items-center justify-center overflow-hidden sm:h-[65vh] sm:rounded-lg">
      <img
        src={`./images/buildings/${feature.properties?.Image}.webp`}
        alt={feature.properties?.Title}
        width={400}
        height={400}
        sizes="100vw"
        className="h-[45vh] w-full object-cover object-center grayscale filter"
        loading="lazy"
        title={feature.properties?.Title}
      />

      <div className="mb-2 w-full px-2 py-4">
        <h2 className="feature-card__title">{feature.properties?.Title}</h2>
        <div className="feature-card__info">
          <span>Designed by:</span> {feature.properties?.Designer}
        </div>
        <div className="mb-4 text-sm">
          <span>Completed in:</span> {feature.properties?.Completed}
        </div>
        <div className="flex justify-between">
          <a
            href={feature.properties?.MapURL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white p-1 px-4 py-3 text-sm font-bold hover:bg-gray-600"
          >
            Get Directions
          </a>
          <a
            href={
              feature.properties?.InfoURL ||
              `https://www.google.com/search?q=${encodeURIComponent(feature.properties?.Title)}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white p-1 px-4 py-3 text-sm font-bold hover:bg-gray-600"
          >
            More Info
          </a>
        </div>
      </div>
      <div
        className="absolute right-2 top-2 flex h-20 w-20 flex-col items-center justify-start rounded-lg bg-white p-2"
        onClick={onVisitedToggle}
      >
        {isVisited ? <VisitedCheckbox /> : <UnvisitedCheckbox />}
        <p className="text-center">Visited?</p>
      </div>

      {onClose && (
        <div
          className="absolute left-2 top-2 flex h-20 w-20 flex-col items-center justify-start rounded-lg bg-white p-2"
          onClick={onClose}
        >
          <CloseButton />
          <p className="text-center">Back</p>
        </div>
      )}
    </div>
  );
};
export default FeatureCard;
