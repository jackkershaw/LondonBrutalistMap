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
    className="absolute z-10 w-[300px] transform rounded-lg bg-white p-4 text-xl text-black"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="flex items-center gap-3">
      <span className="text-2xl">🔍</span>
      <span className="font-medium tracking-tight">{title}</span>
    </span>
    <p className="text-gray-600 mt-2 pl-9 text-sm">Click for more info</p>
  </div>
);

export default HoverInfo;
