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
    <div className="relative flex h-[500px] flex-col overflow-hidden border-2 border-black bg-white sm:rounded-lg">
      <div className="h-[300px] w-full">
        <img
          src={`./images/buildings/${feature.properties?.Image}.webp`}
          alt={feature.properties?.Title}
          width={400}
          height={400}
          sizes="100vw"
          className="h-full w-full object-cover object-center grayscale filter"
          loading="eager"
          title={feature.properties?.Title}
        />
      </div>

      <div className="flex w-full flex-1 flex-col justify-between p-4">
        <div>
          <h2 className="mb-4 text-xl font-bold">
            {feature.properties?.Title}
          </h2>
          <div className="grid grid-cols-2 gap-2 text-base">
            <span className="font-bold">Designed by:</span>
            <span className="text-right">{feature.properties?.Designer}</span>
            <span className="font-bold">Completed in:</span>
            <span className="text-right">{feature.properties?.Completed}</span>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <a
            href={feature.properties?.MapURL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray/50 px-4 py-2 text-sm font-bold hover:bg-gray/100"
            aria-label={`Get directions to ${feature.properties?.Title}`}
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
            className="rounded-lg bg-gray/50 px-4 py-2 text-sm font-bold hover:bg-gray/100"
            aria-label={`Learn more about ${feature.properties?.Title}`}
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
