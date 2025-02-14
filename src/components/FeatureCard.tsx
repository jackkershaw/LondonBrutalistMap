import VisitedCheckbox from "./visitedCheckbox";
import UnvisitedCheckbox from "./unvisitedCheckbox";
import CloseButton from "./closeButton";
import "./FeatureCard.scss";

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
    <div className="feature-card__container">
      <img
        src={`./images/buildings/${feature.properties?.Image}.webp`}
        alt={feature.properties?.Title}
        width={400}
        height={400}
        sizes="100vw"
        className="feature-card__image"
        loading="lazy"
        title={feature.properties?.Title}
      />

      <div className="feature-card__content">
        <h2 className="feature-card__title">{feature.properties?.Title}</h2>
        <div className="feature-card__info">
          <span>Designed by:</span> {feature.properties?.Designer}
        </div>
        <div className="feature-card__info">
          <span>Completed in:</span> {feature.properties?.Completed}
        </div>
        <a
          href={feature.properties?.MapURL}
          target="_blank"
          rel="noopener noreferrer"
          className="feature-card__link"
        >
          Get Directions
        </a>
        {feature.properties?.InfoURL && (
          <a
            href={feature.properties?.InfoURL}
            target="_blank"
            rel="noopener noreferrer"
            className="feature-card__link"
          >
            More Info
          </a>
        )}
      </div>
      <div
        className="feature-card__button top-2 right-2 flex flex-col items-center justify-start space-y-1"
        onClick={onVisitedToggle}
      >
        {isVisited ? <VisitedCheckbox /> : <UnvisitedCheckbox />}
        <p className="text-center">Visited?</p>
      </div>

      {onClose && (
        <div className="feature-card__button top-2 left-2" onClick={onClose}>
          <CloseButton />
          <p className="text-center">Back</p>
        </div>
      )}
    </div>
  );
};
export default FeatureCard;
