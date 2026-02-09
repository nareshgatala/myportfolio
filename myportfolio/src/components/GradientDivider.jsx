export default function GradientDivider({ fromColor = 'from-indigo-500', toColor = 'to-purple-500' }) {
  return (
    <div className={`h-1 w-full bg-gradient-to-r ${fromColor} ${toColor} mb-8`} />
  );
}
