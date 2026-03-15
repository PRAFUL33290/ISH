import Link from 'next/link';
import LessonCard from './components/LessonCard';

const previewLessons = [
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

const profiles = [
  {
    icon: "🎓",
    title: "Débutant curieux",
    description: "Aucune expérience requise. Partez de zéro et découvrez le terminal Linux étape par étape grâce à des leçons simples et progressives.",
  },
  {
    icon: "🎨",
    title: "Créatif & Étudiant",
    description: "Vous utilisez votre iPad pour créer et étudier. iSH vous ouvre un monde de possibilités avec des outils de traitement de texte et de scripting.",
  },
  {
    icon: "⚙️",
    title: "Profil technique",
    description: "Vous avez déjà des notions de programmation. Approfondissez vos connaissances avec un environnement Linux complet sur votre iPad Pro M4.",
  },
];

const stats = [
  { value: "12", label: "Leçons" },
  { value: "30+", label: "Exercices" },
  { value: "3", label: "Niveaux" },
  { value: "Gratuit", label: "Accès" },
];

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 text-blue-300 text-sm px-4 py-1.5 rounded-full mb-6">
          <span className="text-emerald-400 font-mono text-xs">●</span>
          Alpine Linux sur iPad via iSH Shell
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight mb-6">
          Découvrez <span className="text-blue-400">iSH</span> sur{' '}
          <span className="text-emerald-400">iPad Pro M4</span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Apprenez à utiliser un shell Linux sur iPadOS grâce à des leçons simples,
          des exercices pratiques et un parcours progressif.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lecons"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Démarrer la Leçon 1
          </Link>
          <Link
            href="/decouvrir"
            className="border border-gray-700 hover:border-blue-600 text-gray-300 hover:text-blue-400 font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Qu'est-ce qu'iSH ?
          </Link>
        </div>
      </section>

      {/* Terminal block */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-950 border border-gray-700 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-700">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-gray-500 text-xs ml-2 font-mono">iSH — sh — 80×24</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-1">
            <p className="text-gray-500"># Bienvenue dans iSH Shell sur iPad Pro M4</p>
            <p><span className="text-blue-400">ipad:~$</span> <span className="text-emerald-400">ls -la</span></p>
            <p className="text-gray-300 pl-4">total 32</p>
            <p className="text-gray-300 pl-4">drwxr-xr-x  4 root root 4096 Jan 15 10:30 <span className="text-blue-300">.</span></p>
            <p className="text-gray-300 pl-4">drwxr-xr-x  2 root root 4096 Jan 15 10:30 <span className="text-blue-300">Documents</span></p>
            <p className="text-gray-300 pl-4">-rw-r--r--  1 root root  220 Jan 15 10:28 <span className="text-gray-200">notes.txt</span></p>
            <p className="mt-2"><span className="text-blue-400">ipad:~$</span> <span className="text-emerald-400">cd Documents</span></p>
            <p><span className="text-blue-400">ipad:~/Documents$</span> <span className="text-emerald-400">echo &quot;Bonjour iPad Pro M4&quot;</span></p>
            <p className="text-gray-300 pl-4">Bonjour iPad Pro M4</p>
            <p><span className="text-blue-400">ipad:~/Documents$</span> <span className="text-emerald-400">apk add python3</span></p>
            <p className="text-gray-300 pl-4">fetch https://dl-cdn.alpinelinux.org/...</p>
            <p className="text-gray-300 pl-4"><span className="text-emerald-400">OK:</span> python3 installed successfully</p>
            <p><span className="text-blue-400">ipad:~/Documents$</span> <span className="text-gray-500 animate-pulse">▋</span></p>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-100 text-center mb-10">Pour qui est ce site ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div key={profile.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-700 transition-colors">
              <div className="text-4xl mb-4">{profile.icon}</div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">{profile.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{profile.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-100">Premiers pas</h2>
          <Link href="/lecons" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            Voir toutes les leçons →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {previewLessons.map((lesson) => (
            <LessonCard key={lesson.number} {...lesson} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-800 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Lancez-vous dès maintenant avec la première leçon. Aucune installation requise, juste votre iPad Pro M4 et l'app iSH.
          </p>
          <Link
            href="/lecons"
            className="inline-block bg-white text-blue-900 font-bold px-10 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Démarrer la Leçon 1
          </Link>
        </div>
      </section>
    </div>
  );
}
