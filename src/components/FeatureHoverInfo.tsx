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
    className="absolute z-10 w-[400px] transform rounded-lg bg-white p-4 text-xl text-black sm:right-10 sm:top-10"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="flex items-center gap-3">
      <span className="text-2xl">🔍</span>
      <span className="px-4 text-xl font-bold">{title}</span>
    </span>
    <p className="mt-2 pl-9 text-sm">Click for more info</p>
  </div>
);

export default HoverInfo;
