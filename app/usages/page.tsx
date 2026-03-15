const useCases = [
  {
    icon: "📚",
    title: "Apprendre Linux",
    description: "Découvrez les bases de Linux dans un environnement sécurisé sur votre iPad. Explorez le système de fichiers, les commandes essentielles et la philosophie Unix sans risquer votre système principal.",
    examples: ["ls, cd, mkdir, rm", "cat, echo, grep", "Système de fichiers Unix"],
    level: "Débutant",
    levelClass: "bg-emerald-900 text-emerald-300",
  },
  {
    icon: "💻",
    title: "Comprendre le terminal",
    description: "Familiarisez-vous avec la ligne de commande sans risquer votre système. iSH est un espace bac à sable idéal pour expérimenter librement et apprendre de ses erreurs.",
    examples: ["Pipes et redirections", "Variables d'environnement", "Raccourcis clavier shell"],
    level: "Débutant",
    levelClass: "bg-emerald-900 text-emerald-300",
  },
  {
    icon: "⚙️",
    title: "S'initier au scripting",
    description: "Créez vos premiers scripts shell et automatisez des tâches simples. Maîtrisez les variables, les conditions, les boucles et les fonctions en bash.",
    examples: ["Scripts bash (.sh)", "Conditions et boucles", "Automatisation de tâches"],
    level: "Intermédiaire",
    levelClass: "bg-blue-900 text-blue-300",
  },
  {
    icon: "📝",
    title: "Manipuler des fichiers texte",
    description: "Éditez, transformez et organisez vos fichiers de texte efficacement. Utilisez vim, nano, sed, awk et grep pour travailler avec du texte comme un pro.",
    examples: ["vim / nano", "grep, sed, awk", "Conversion et traitement"],
    level: "Intermédiaire",
    levelClass: "bg-blue-900 text-blue-300",
  },
  {
    icon: "🧪",
    title: "Tests dev légers",
    description: "Testez du code Python, Ruby ou des scripts dans un environnement isolé. Installez des interpréteurs, des bibliothèques et expérimentez sans impacter votre système.",
    examples: ["Python 3 + pip", "Ruby / Perl", "Node.js (limité)"],
    level: "Intermédiaire",
    levelClass: "bg-blue-900 text-blue-300",
  },
  {
    icon: "🚀",
    title: "Travailler en mobilité",
    description: "Emportez votre environnement de développement partout avec votre iPad Pro M4. Travaillez dans le train, en café ou en voyage avec un vrai shell Linux dans votre poche.",
    examples: ["iPad Pro M4 + Magic Keyboard", "Hors connexion possible", "Intégration app Fichiers"],
    level: "Avancé",
    levelClass: "bg-purple-900 text-purple-300",
  },
];

export default function UsagesPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Usages d'iSH sur iPad</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            iSH sur iPad Pro M4 ouvre de nombreuses possibilités. Découvrez les cas d'usage les plus courants
            et trouvez celui qui correspond à vos besoins.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-700 transition-colors flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="text-4xl">{useCase.icon}</div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${useCase.levelClass}`}>
                  {useCase.level}
                </span>
              </div>
              <h3 className="text-gray-100 font-semibold text-xl">{useCase.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{useCase.description}</p>
              <div className="pt-2 border-t border-gray-800">
                <p className="text-gray-500 text-xs mb-2">Exemples pratiques :</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((ex) => (
                    <span key={ex} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded font-mono">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community section */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">iSH dans la communauté</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "Étudiants",
                description: "Des milliers d'étudiants utilisent iSH pour leurs cours d'informatique, pratiquer Linux ou rendre des travaux directement depuis leur iPad.",
              },
              {
                icon: "👩‍🏫",
                title: "Formateurs",
                description: "Les enseignants recommandent iSH comme environnement de TP : simple à installer, identique pour tous les étudiants, sans risque.",
              },
              {
                icon: "🧑‍💻",
                title: "Développeurs nomades",
                description: "Les professionnels qui voyagent utilisent iSH pour maintenir un accès shell même sans leur MacBook, directement depuis leur iPad Pro M4.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-gray-200 font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Getting started CTA */}
        <div className="mt-10 bg-gray-950 border border-gray-700 rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-500 mb-3"># Prêt à explorer iSH ? Installez l'app depuis l'App Store !</p>
          <p><span className="text-blue-400">ipad:~$</span> <span className="text-emerald-400">apk update && apk add git python3 curl vim</span></p>
          <p className="text-gray-300 mt-1 pl-4">Fetching... <span className="text-emerald-400">OK</span> — 4 packages installed</p>
          <p className="mt-2"><span className="text-blue-400">ipad:~$</span> <span className="text-gray-400">echo "Bienvenue dans le monde Linux sur iPad !"</span></p>
        </div>
      </div>
    </div>
  );
}
