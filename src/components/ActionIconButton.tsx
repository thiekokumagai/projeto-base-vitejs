interface ActionIconProps {
  icon: React.ElementType;
  color: string;
  text: string;
  onClick: () => void;
}

export const ActionIconButton = ({
  icon: Icon,
  color,
  text,
  onClick,
}: ActionIconProps) => {
  const DynamicIcon = Icon;
  return (
    <div
      className="flex items-center justify-center p-2 flex-col gap-1"
      onClick={onClick}
    >
      <DynamicIcon className={`size-10 ${color}`} style={{ color: color }} />
      <span className="text-[#616161] font-intro text-xs dark:text-white">{text}</span>
    </div>
  );
};
