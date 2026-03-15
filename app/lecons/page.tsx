import LessonCard from '../components/LessonCard';

const level1 = [
  {
    number: 1,
    title: "Interface iSH",
    duration: "15 min",
    level: "debutant" as const,
    description: "Découvrez l'interface de l'application iSH et ses premières fonctionnalités.",
    href: "/lecons",
  },
  {
    number: 2,
    title: "Premières commandes",
    duration: "20 min",
    level: "debutant" as const,
    description: "Apprenez les commandes essentielles : ls, pwd, echo, clear.",
    href: "/lecons",
  },
  {
    number: 3,
    title: "Naviguer dans les dossiers",
    duration: "20 min",
    level: "debutant" as const,
    description: "Maîtrisez cd, mkdir, rmdir et la navigation dans l'arborescence.",
    href: "/lecons",
  },
  {
    number: 4,
    title: "Lire/créer/modifier un fichier texte",
    duration: "25 min",
    level: "debutant" as const,
    description: "Utilisez cat, touch, nano et echo pour gérer vos fichiers.",
    href: "/lecons",
  },
];

const level2 = [
  {
    number: 5,
    title: "Installer des paquets",
    duration: "30 min",
    level: "intermediaire" as const,
    description: "Utilisez apk pour installer des outils comme git, python3, curl.",
    href: "/lecons",
  },
  {
    number: 6,
    title: "Gérer fichiers et dossiers",
    duration: "25 min",
    level: "intermediaire" as const,
    description: "Maîtrisez cp, mv, rm, find et les opérations avancées.",
    href: "/lecons",
  },
  {
    number: 7,
    title: "Permissions de base Linux",
    duration: "30 min",
    level: "intermediaire" as const,
    description: "Comprenez chmod, chown et le système de permissions Unix.",
    href: "/lecons",
  },
  {
    number: 8,
    title: "Scripts shell simples",
    duration: "35 min",
    level: "intermediaire" as const,
    description: "Créez vos premiers scripts bash avec variables et conditions.",
    href: "/lecons",
  },
];

const level3 = [
  {
    number: 9,
    title: "Workflow avec l'app Fichiers",
    duration: "30 min",
    level: "avance" as const,
    description: "Intégrez iSH avec l'application Fichiers d'iPadOS.",
    href: "/lecons",
  },
  {
    number: 10,
    title: "Mini environnement de travail",
    duration: "35 min",
    level: "avance" as const,
    description: "Organisez un espace de travail productif sur votre iPad.",
    href: "/lecons",
  },
  {
    number: 11,
    title: "Clavier externe & raccourcis",
    duration: "25 min",
    level: "avance" as const,
    description: "Optimisez votre flux avec le Magic Keyboard et les raccourcis.",
    href: "/lecons",
  },
  {
    number: 12,
    title: "Limites, sécurité & bonnes pratiques",
    duration: "30 min",
    level: "avance" as const,
    description: "Comprenez les limites d'iSH et les bonnes pratiques de sécurité.",
    href: "/lecons",
  },
];

export default function LeconsPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Catalogue des leçons</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            12 leçons progressives pour maîtriser iSH Shell sur iPad Pro M4, du débutant à l'utilisateur avancé.
          </p>
        </div>

        {/* Progress overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            { label: 'Niveau 1 — Découverte', count: 4, color: 'emerald', badge: 'Débutant' },
            { label: 'Niveau 2 — Pratique', count: 4, color: 'blue', badge: 'Intermédiaire' },
            { label: 'Niveau 3 — Usage avancé', count: 4, color: 'purple', badge: 'Avancé' },
          ].map((level) => (
            <div key={level.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
                ${level.color === 'emerald' ? 'bg-emerald-900 text-emerald-300' : ''}
                ${level.color === 'blue' ? 'bg-blue-900 text-blue-300' : ''}
                ${level.color === 'purple' ? 'bg-purple-900 text-purple-300' : ''}
              `}>
                {level.count}
              </div>
              <div>
                <p className="text-gray-200 font-semibold text-sm">{level.label}</p>
                <p className="text-gray-500 text-xs">{level.count} leçons · {level.badge}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Level 1 */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-emerald-900 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">Niveau 1</span>
            <h2 className="text-xl font-bold text-gray-100">Découverte</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {level1.map((lesson) => <LessonCard key={lesson.number} {...lesson} />)}
          </div>
        </section>

        {/* Level 2 */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">Niveau 2</span>
            <h2 className="text-xl font-bold text-gray-100">Pratique</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {level2.map((lesson) => <LessonCard key={lesson.number} {...lesson} />)}
          </div>
        </section>

        {/* Level 3 */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-900 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">Niveau 3</span>
            <h2 className="text-xl font-bold text-gray-100">Usage avancé sur iPad</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {level3.map((lesson) => <LessonCard key={lesson.number} {...lesson} />)}
          </div>
        </section>

        {/* Terminal tip */}
        <div className="bg-gray-950 border border-gray-700 rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-500 mb-2"># Conseil : commencez toujours par la leçon 1 !</p>
          <p><span className="text-blue-400">ipad:~$</span> <span className="text-emerald-400">echo "Bonne chance dans votre apprentissage !"</span></p>
          <p className="text-gray-300 pl-4">Bonne chance dans votre apprentissage !</p>
        </div>
      </div>
    </div>
  );
}
