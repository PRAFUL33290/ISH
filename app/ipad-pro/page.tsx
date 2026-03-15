const keyboardShortcuts = [
  { keys: "Ctrl + C", desc: "Interrompre le processus en cours" },
  { keys: "Ctrl + Z", desc: "Suspendre le processus" },
  { keys: "Ctrl + D", desc: "Fermer le shell / fin de saisie" },
  { keys: "Ctrl + A", desc: "Aller au début de la ligne" },
  { keys: "Ctrl + E", desc: "Aller à la fin de la ligne" },
  { keys: "Ctrl + L", desc: "Effacer l'écran (comme clear)" },
  { keys: "Tab", desc: "Auto-complétion des commandes et chemins" },
  { keys: "↑ / ↓", desc: "Naviguer dans l'historique des commandes" },
];

const tips = [
  {
    icon: "🖥️",
    title: "Profitez de l'écran OLED",
    description: "Réglez la taille de la police dans les réglages d'iSH pour un confort maximal. Sur l'iPad Pro M4 13\", vous pouvez afficher jusqu'à 50 lignes de terminal.",
  },
  {
    icon: "⌨️",
    title: "Magic Keyboard indispensable",
    description: "Le Magic Keyboard pour iPad Pro M4 change tout. Vous bénéficiez d'un vrai clavier physique avec trackpad intégré, parfait pour la productivité en terminal.",
  },
  {
    icon: "🪟",
    title: "Stage Manager",
    description: "Utilisez Stage Manager pour avoir iSH dans une fenêtre flottante à côté de vos autres apps. Parfait pour écrire un script tout en consultant de la documentation.",
  },
  {
    icon: "📁",
    title: "Accès à l'app Fichiers",
    description: "Montez votre stockage iCloud ou local dans iSH via la section dédiée des réglages. Vous pouvez alors accéder à vos fichiers iPad directement depuis le terminal.",
  },
  {
    icon: "🔋",
    title: "Gestion de la batterie",
    description: "iSH consomme plus de batterie que les apps classiques (émulation CPU). Branchez votre iPad Pro M4 lors de longues sessions, surtout pour les installations de paquets.",
  },
  {
    icon: "📡",
    title: "Connexion réseau",
    description: "La plupart des commandes réseau fonctionnent (apk, curl, wget). Sur iPad Pro M4 avec 5G, vous bénéficiez d'une connectivité rapide pour les mises à jour.",
  },
];

const profiles = [
  {
    icon: "🎓",
    title: "Étudiant",
    description: "Pratique les TPs Linux de son cours d'informatique directement sur son iPad, sans avoir besoin d'un ordinateur.",
    tools: ["python3", "git", "gcc (limité)", "nano"],
  },
  {
    icon: "📖",
    title: "Autodidacte",
    description: "Apprend Linux à son rythme grâce aux tutoriels en ligne, en suivant les commandes directement dans iSH.",
    tools: ["bash", "vim", "curl", "grep/awk/sed"],
  },
  {
    icon: "👩‍🏫",
    title: "Formateur",
    description: "Prépare ses cours et démos depuis son iPad, avec un environnement reproductible pour ses apprenants.",
    tools: ["Scripts de démo", "git", "markdown", "python3"],
  },
  {
    icon: "🧑‍💻",
    title: "Développeur nomade",
    description: "Maintient un accès shell minimal pour des tâches légères lors de déplacements, sans emporter son MacBook.",
    tools: ["git", "ssh", "vim", "curl/wget"],
  },
];

export default function IpadProPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-950 border border-purple-800 text-purple-300 text-sm px-4 py-1.5 rounded-full mb-6">
            iPad Pro M4 · iPadOS 18
          </div>
          <h1 className="text-4xl font-bold text-gray-100 mb-4">iSH sur iPad Pro M4</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            L'iPad Pro M4 est la plateforme idéale pour utiliser iSH. Découvrez comment tirer le meilleur
            parti de ce duo puissant pour apprendre et travailler en mobilité.
          </p>
        </div>

        {/* Screen section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Grand écran & productivité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'iPad Pro M4 11"',
                specs: "Écran Liquid Retina XDR 11 pouces · 2388×1668 px",
                desc: "Parfait pour la mobilité. Affiche confortablement 30-35 lignes de terminal. Idéal pour les étudiants et les apprenants.",
              },
              {
                title: 'iPad Pro M4 13"',
                specs: "Écran Ultra Retina XDR OLED 13 pouces · 2752×2064 px",
                desc: "L'expérience desktop sur iPad. Affichez 50+ lignes de terminal avec une grande police, ou divisez l'écran avec Stage Manager.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-blue-400 font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs mb-3 font-mono">{item.specs}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Magic Keyboard */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Magic Keyboard & raccourcis</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-5">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Le <strong className="text-gray-100">Magic Keyboard pour iPad Pro M4</strong> est un accessoire quasi-indispensable pour utiliser iSH efficacement.
              Il dispose d'un trackpad intégré, d'un vrai clavier chiclet avec touche Escape, et de touches de fonction.
              La combinaison iPad Pro M4 + Magic Keyboard rivalise avec un MacBook Air pour les tâches en terminal.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 px-3 text-gray-400">Raccourci</th>
                    <th className="text-left py-2 px-3 text-gray-400">Action dans iSH</th>
                  </tr>
                </thead>
                <tbody>
                  {keyboardShortcuts.map((shortcut) => (
                    <tr key={shortcut.keys} className="border-b border-gray-800">
                      <td className="py-2 px-3 font-mono text-blue-400 text-xs">{shortcut.keys}</td>
                      <td className="py-2 px-3 text-gray-300">{shortcut.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Multitasking */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Multitâche iPadOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "🪟",
                title: "Stage Manager",
                description: "iPadOS 16+ introduit Stage Manager. Placez iSH dans une fenêtre à côté de Safari, Notes ou votre éditeur Markdown. Redimensionnez les fenêtres librement sur iPad Pro M4.",
                tip: "Parfait pour : coder d'un côté, terminal de l'autre.",
              },
              {
                icon: "↔️",
                title: "Split View",
                description: "Divisez l'écran entre iSH et une autre app (Safari pour la doc, Notes pour prendre des notes). Disponible sur tous les iPad compatibles iPadOS.",
                tip: "Parfait pour : suivre un tutoriel et pratiquer en même temps.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-gray-100 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
                <p className="text-blue-400 text-xs font-medium">{item.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* User profiles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Profils d'utilisateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {profiles.map((profile) => (
              <div key={profile.title} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex gap-4">
                <span className="text-3xl shrink-0">{profile.icon}</span>
                <div>
                  <h3 className="text-gray-100 font-semibold mb-1">{profile.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{profile.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {profile.tools.map((tool) => (
                      <span key={tool} className="bg-gray-800 text-emerald-400 text-xs px-2 py-0.5 rounded font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Conseils pratiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-700 transition-colors">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-gray-100 font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Terminal example */}
        <div className="bg-gray-950 border border-gray-700 rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-500 mb-3"># Configuration recommandée pour iPad Pro M4</p>
          <p><span className="text-blue-400">ipad:~$</span> <span className="text-emerald-400">apk update && apk add git python3 vim curl nano</span></p>
          <p className="text-gray-300 mt-1 pl-4">OK: 5 packages installed</p>
          <p className="mt-2"><span className="text-blue-400">ipad:~$</span> <span className="text-emerald-400">echo "iPad Pro M4 + iSH = parfait !" </span></p>
          <p className="text-gray-300 pl-4">iPad Pro M4 + iSH = parfait !</p>
        </div>
      </div>
    </div>
  );
}
