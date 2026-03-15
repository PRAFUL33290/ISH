const recentLessons = [
  { number: 1, title: "Interface iSH", completedAt: "10 jan 2025", score: "100%" },
  { number: 2, title: "Premières commandes", completedAt: "12 jan 2025", score: "95%" },
  { number: 3, title: "Naviguer dans les dossiers", completedAt: "14 jan 2025", score: "90%" },
];

const pendingExercises = [
  { title: "Créer un script shell", level: "Intermédiaire", levelClass: "bg-blue-900 text-blue-300" },
  { title: "Organiser un espace de travail", level: "Avancé", levelClass: "bg-purple-900 text-purple-300" },
];

const badges = [
  { icon: "🏆", label: "Premiers pas", desc: "Complété la leçon 1", earned: true },
  { icon: "⭐", label: "Explorateur", desc: "Complété 3 leçons", earned: true },
  { icon: "🔥", label: "Curieux", desc: "5 connexions consécutives", earned: true },
  { icon: "🚀", label: "Avancé", desc: "Complété le niveau 2", earned: false },
  { icon: "👑", label: "Expert", desc: "Toutes les leçons terminées", earned: false },
];

const progressLevels = [
  { name: "Niveau 1 — Découverte", percent: 100, color: "bg-emerald-500", textColor: "text-emerald-400" },
  { name: "Niveau 2 — Pratique", percent: 50, color: "bg-blue-500", textColor: "text-blue-400" },
  { name: "Niveau 3 — Usage avancé", percent: 0, color: "bg-purple-500", textColor: "text-purple-400" },
];

export default function TableauDeBordPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-100 mb-1">Tableau de bord</h1>
          <p className="text-gray-500 text-sm">Suivez votre progression dans l'apprentissage d'iSH Shell</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-1 space-y-6">
            {/* User profile card */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                MD
              </div>
              <h2 className="text-gray-100 font-bold text-xl">Marie Dupont</h2>
              <div className="mt-2 mb-4">
                <span className="bg-emerald-900 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full">
                  Apprenant
                </span>
              </div>
              <div className="text-gray-500 text-sm space-y-1">
                <p>Membre depuis janvier 2025</p>
                <p>7 leçons complétées</p>
                <p>5 exercices réalisés</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex justify-around text-center">
                  <div>
                    <p className="text-blue-400 font-bold text-xl">7</p>
                    <p className="text-gray-500 text-xs">Leçons</p>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-bold text-xl">5</p>
                    <p className="text-gray-500 text-xs">Exercices</p>
                  </div>
                  <div>
                    <p className="text-purple-400 font-bold text-xl">3</p>
                    <p className="text-gray-500 text-xs">Badges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-gray-100 font-semibold mb-4">Badges obtenus</h3>
              <div className="space-y-3">
                {badges.map((badge) => (
                  <div
                    key={badge.label}
                    className={`flex items-center gap-3 p-3 rounded-lg ${badge.earned ? 'bg-gray-800' : 'opacity-40'}`}
                  >
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <p className={`text-sm font-semibold ${badge.earned ? 'text-gray-200' : 'text-gray-500'}`}>
                        {badge.label}
                      </p>
                      <p className="text-gray-500 text-xs">{badge.desc}</p>
                    </div>
                    {badge.earned && (
                      <span className="ml-auto text-emerald-400 text-xs">✓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-gray-100 font-semibold mb-5">Ma progression</h3>
              <div className="space-y-5">
                {progressLevels.map((level) => (
                  <div key={level.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">{level.name}</span>
                      <span className={`text-sm font-bold ${level.textColor}`}>{level.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${level.color} transition-all`}
                        style={{ width: `${level.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center gap-3">
                <div className="flex-1 bg-gray-800 rounded-full h-3">
                  <div className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" style={{ width: '42%' }} />
                </div>
                <span className="text-gray-300 text-sm font-semibold">42% terminé</span>
              </div>
            </div>

            {/* Recent lessons */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-gray-100 font-semibold mb-4">Leçons récentes</h3>
              <div className="space-y-3">
                {recentLessons.map((lesson) => (
                  <div key={lesson.number} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {lesson.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-200 text-sm font-medium truncate">{lesson.title}</p>
                      <p className="text-gray-500 text-xs">{lesson.completedAt}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-emerald-400 text-sm font-bold">{lesson.score}</span>
                      <p className="text-gray-500 text-xs">Score</p>
                    </div>
                    <span className="text-emerald-400 text-lg">✓</span>
                  </div>
                ))}
              </div>
              <a href="/lecons" className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm transition-colors">
                Voir toutes les leçons →
              </a>
            </div>

            {/* Exercises to resume */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-gray-100 font-semibold mb-4">Exercices à reprendre</h3>
              <div className="space-y-3">
                {pendingExercises.map((exercise) => (
                  <div key={exercise.title} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="text-gray-200 text-sm font-medium">{exercise.title}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${exercise.levelClass}`}>
                        {exercise.level}
                      </span>
                    </div>
                    <a
                      href="/exercices"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-lg transition-colors shrink-0"
                    >
                      Reprendre
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal activity */}
            <div className="bg-gray-950 border border-gray-700 rounded-xl p-5 font-mono text-sm">
              <p className="text-gray-500 mb-2"># Dernière activité — 14 jan 2025</p>
              <p><span className="text-blue-400">ipad:~$</span> <span className="text-emerald-400">cd Documents && mkdir cours && ls</span></p>
              <p className="text-gray-300 pl-4">cours/</p>
              <p className="mt-1"><span className="text-blue-400">ipad:~$</span> <span className="text-emerald-400">echo "Leçon 3 terminée !"</span></p>
              <p className="text-gray-300 pl-4">Leçon 3 terminée !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
