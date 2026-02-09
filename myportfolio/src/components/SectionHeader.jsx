

export default function SectionHeader({ icon: Icon, title }) {
  return (
    <div className="flex items-center mb-6">
      <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
    </div>
  );
}
