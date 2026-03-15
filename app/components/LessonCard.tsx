import Link from 'next/link';

type Level = 'debutant' | 'intermediaire' | 'avance';

interface LessonCardProps {
  number: number;
  title: string;
  duration: string;
  level: Level;
  description: string;
  href: string;
}

const levelConfig: Record<Level, { label: string; className: string }> = {
  debutant: { label: 'Débutant', className: 'bg-emerald-900 text-emerald-300' },
  intermediaire: { label: 'Intermédiaire', className: 'bg-blue-900 text-blue-300' },
  avance: { label: 'Avancé', className: 'bg-purple-900 text-purple-300' },
};

export default function LessonCard({ number, title, duration, level, description, href }: LessonCardProps) {
  const { label, className } = levelConfig[level];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-700 transition-colors flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
            {number}
          </span>
          <h3 className="text-gray-100 font-semibold leading-tight">{title}</h3>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${className}`}>
          {label}
        </span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-gray-500 text-xs flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </span>
        <Link
          href={href}
          className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg transition-colors"
        >
          Commencer
        </Link>
      </div>
    </div>
  );
}
