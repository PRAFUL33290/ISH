import Link from 'next/link';

const canDo = [
  "Installer des paquets Alpine Linux via apk",
  "Exécuter des scripts bash et shell",
  "Utiliser vim, nano pour éditer des fichiers",
  "Apprendre les commandes Linux de base",
  "Exécuter Python 3, Ruby, Perl",
  "Utiliser git pour la gestion de versions",
  "Travailler avec des pipes, redirections, etc.",
  "Accéder aux fichiers via l'app Fichiers d'iPadOS",
  "Écrire et automatiser des scripts simples",
  "Utiliser curl, wget pour des requêtes HTTP",
];

const cannotDo = [
  "Accès root au noyau iOS/iPadOS",
  "Exécuter des applications graphiques (GUI)",
  "Utiliser le GPU ou l'accélération matérielle",
  "Réseau complet (certaines connexions sont limitées)",
  "Exécuter des processus démons en arrière-plan persistants",
  "Monter des systèmes de fichiers",
  "Accéder à /dev, /proc comme sur un vrai Linux",
  "Virtualisation ou conteneurs Docker",
  "Support complet de toutes les architectures CPU",
];

const comparisons = [
  {
    aspect: "Noyau",
    mac: "macOS XNU kernel (Unix)",
    ish: "Émulation x86 en user-mode",
    linux: "Noyau Linux complet",
  },
  {
    aspect: "Paquets",
    mac: "Homebrew / MacPorts",
    ish: "apk (Alpine Linux)",
    linux: "apt, yum, dnf, pacman…",
  },
  {
    aspect: "Accès root",
    mac: "Oui (avec sudo)",
    ish: "Partiel (sandboxé)",
    linux: "Complet",
  },
  {
    aspect: "Performances",
    mac: "Natif (M-series)",
    ish: "Ralenti (émulation)",
    linux: "Natif",
  },
  {
    aspect: "Sécurité",
    mac: "SIP & Gatekeeper",
    ish: "Sandbox iPadOS",
    linux: "Configurable",
  },
];

export default function DecouvrirPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 text-blue-300 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="font-mono text-emerald-400">$</span> man iSH
          </div>
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Découvrir iSH</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            iSH est une application qui émule un environnement Linux directement sur votre iPad,
            sans jailbreak et sans connexion à un serveur distant.
          </p>
        </div>

        {/* What is iSH */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Qu'est-ce qu'iSH ?</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed space-y-3">
            <p>
              <strong className="text-gray-100">iSH</strong> est une application gratuite disponible sur l'App Store qui fait tourner
              un interpréteur de commandes Linux (shell) directement sur votre iPad. Elle utilise un interpréteur
              en mode utilisateur (<em>user-mode</em>) pour émuler un processeur x86 32 bits, permettant
              d'exécuter des binaires Linux compilés pour cette architecture.
            </p>
            <p>
              Sous le capot, iSH embarque une distribution <strong className="text-blue-300">Alpine Linux</strong>,
              une distribution légère et sécurisée qui utilise le gestionnaire de paquets <code className="text-emerald-400 bg-gray-800 px-1 rounded">apk</code>.
              Alpine Linux est idéal pour l'apprentissage car il est minimaliste, rapide à installer et bien documenté.
            </p>
            <p>
              Toute l'exécution se passe <strong className="text-gray-100">localement sur votre iPad</strong> —
              pas de serveur distant, pas de connexion internet nécessaire pour les commandes de base.
              C'est un outil parfait pour apprendre Linux en toute sécurité.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Comment ça fonctionne ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🔄",
                title: "Émulation x86",
                description: "iSH traduit les instructions x86 32 bits en appels système ARM acceptés par iPadOS, en temps réel.",
              },
              {
                icon: "📦",
                title: "Paquets Alpine",
                description: "Via la commande apk, vous installez des milliers d'outils (git, python3, curl, vim…) depuis les dépôts Alpine.",
              },
              {
                icon: "🔒",
                title: "Sandbox iPadOS",
                description: "L'application s'exécute dans la sandbox d'iPadOS. Vos données iOS restent protégées et inaccessibles.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-gray-100 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Can / Cannot */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Possibilités et limites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-emerald-400 font-semibold text-lg mb-4 flex items-center gap-2">
                <span>✅</span> Ce que vous pouvez faire
              </h3>
              <ul className="space-y-2">
                {canDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-red-400 font-semibold text-lg mb-4 flex items-center gap-2">
                <span>❌</span> Limitations
              </h3>
              <ul className="space-y-2">
                {cannotDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">iSH vs Terminal Mac vs Linux réel</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-800">
                  <th className="text-left py-3 px-5 text-gray-400 font-medium">Aspect</th>
                  <th className="py-3 px-5 text-center text-gray-200 font-semibold">Terminal Mac</th>
                  <th className="py-3 px-5 text-center text-blue-400 font-semibold">iSH (iPad)</th>
                  <th className="py-3 px-5 text-center text-gray-200 font-semibold">Linux réel</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={row.aspect} className={`border-t border-gray-800 ${idx % 2 === 0 ? 'bg-gray-900/60' : ''}`}>
                    <td className="py-3 px-5 text-gray-300 font-medium">{row.aspect}</td>
                    <td className="py-3 px-5 text-center text-gray-400">{row.mac}</td>
                    <td className="py-3 px-5 text-center text-blue-300">{row.ish}</td>
                    <td className="py-3 px-5 text-center text-gray-400">{row.linux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why iPad Pro M4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Pourquoi l'iPad Pro M4 ?</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
            {[
              { icon: "⚡", title: "Puce M4 ultra-rapide", desc: "Même si iSH émule x86, la puissance du M4 rend l'expérience fluide et réactive." },
              { icon: "🖥️", title: "Grand écran OLED", desc: "L'écran 11\" ou 13\" offre un confort de lecture idéal pour le code et le terminal." },
              { icon: "⌨️", title: "Magic Keyboard", desc: "Avec le Magic Keyboard pour iPad Pro, vous avez un vrai clavier avec trackpad — parfait pour le terminal." },
              { icon: "📱", title: "Mobilité totale", desc: "Emportez votre environnement Linux partout. Batterie longue durée et connectivité 5G optionnelle." },
              { icon: "🔗", title: "Intégration iPadOS", desc: "Accès à l'app Fichiers d'iPadOS, partage entre apps, et Stage Manager pour le multitâche." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-gray-200 font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/lecons"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-xl transition-colors"
          >
            Commencer les leçons →
          </Link>
        </div>
      </div>
    </div>
  );
}
