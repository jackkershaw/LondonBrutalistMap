interface HoverInfoProps {
  title: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const HoverInfo: React.FC<HoverInfoProps> = ({
  title,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="absolute z-10 w-[400px] rounded-lg bg-white p-5 text-2xl text-black shadow-lg shadow-black sm:right-10 sm:top-10"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="flex items-center">
      <span className="mr-2">🔍</span>
      {title}
    </span>
    <p className="px-8 pt-3 text-sm">Click for more info</p>
  </div>
);

export default HoverInfo;
