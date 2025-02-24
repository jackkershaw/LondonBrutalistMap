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
        loading="eager"
        title={feature.properties?.Title}
      />

      <div className="mb-2 w-full rounded-bl-lg rounded-br-lg bg-white px-2 py-4">
        <h2 className="px-4 text-xl font-bold">{feature.properties?.Title}</h2>
        <div className="flex flex-col space-y-3 py-4 text-base">
          <div className="grid grid-cols-2 gap-2 px-4">
            <span className="text-gray-800 font-bold">Designed by:</span>
            <span className="text-gray-600 text-right">
              {feature.properties?.Designer}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 px-4">
            <span className="text-gray-800 font-bold">Completed in:</span>
            <span className="text-gray-600 text-right">
              {feature.properties?.Completed}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <a
            href={feature.properties?.MapURL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray/50 p-1 px-4 py-3 text-sm font-bold hover:bg-gray/100"
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
            className="rounded-lg bg-gray/50 p-1 px-4 py-3 text-sm font-bold hover:bg-gray/100"
          >
            More Info
          </a>
        </div>
      </div>
      <div
        className="absolute right-2 top-2 flex h-20 w-20 flex-col items-center justify-start rounded-lg bg-white p-2 hover:bg-gray"
        onClick={onVisitedToggle}
      >
        {isVisited ? <VisitedCheckbox /> : <UnvisitedCheckbox />}
        <p className="text-center">Visited?</p>
      </div>

      {onClose && (
        <div
          className="absolute left-2 top-2 flex h-20 w-20 flex-col items-center justify-start rounded-lg bg-white p-2 hover:bg-gray"
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
