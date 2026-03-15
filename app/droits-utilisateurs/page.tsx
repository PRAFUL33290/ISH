import RoleTable from '../components/RoleTable';

export default function DroitsUtilisateursPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Droits & Utilisateurs</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Comprendre le système de rôles et de permissions du site iSH Educational,
            ainsi que les droits des utilisateurs dans un contexte iPadOS.
          </p>
        </div>

        {/* RBAC explanation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-5">Contrôle d'accès basé sur les rôles (RBAC)</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4 text-gray-300">
            <p className="leading-relaxed">
              Le <strong className="text-gray-100">RBAC</strong> (Role-Based Access Control) est un modèle de sécurité
              qui définit les droits d'accès des utilisateurs en fonction de leur rôle dans le système.
              Chaque utilisateur se voit attribuer un ou plusieurs rôles, et chaque rôle dispose
              d'un ensemble de permissions spécifiques.
            </p>
            <p className="leading-relaxed">
              Sur ce site éducatif, nous définissons <strong className="text-gray-100">5 rôles distincts</strong>,
              du visiteur anonyme à l'administrateur. Ce modèle garantit que chaque utilisateur accède
              uniquement aux ressources correspondant à son niveau.
            </p>
            <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 font-mono text-sm mt-4">
              <p className="text-gray-500"># Analogie Linux — permissions Unix</p>
              <p className="text-emerald-400 mt-1">-rw-r--r-- 1 admin apprenant 4096 Jan 2025 lecon.md</p>
              <p className="text-gray-400 text-xs mt-2">
                # propriétaire (admin) : lecture+écriture | groupe (apprenant) : lecture | autres (visiteur) : lecture
              </p>
            </div>
          </div>
        </section>

        {/* Role descriptions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Les 5 rôles du site</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { name: 'Visiteur', icon: '👁️', desc: 'Accès aux pages publiques uniquement.', color: 'gray' },
              { name: 'Membre', icon: '👤', desc: 'Compte personnel, pas encore apprenant.', color: 'blue' },
              { name: 'Apprenant', icon: '🎓', desc: 'Accès aux exercices et quiz.', color: 'emerald' },
              { name: 'Formateur', icon: '👩‍🏫', desc: 'Création de contenu et suivi apprenants.', color: 'purple' },
              { name: 'Administrateur', icon: '🛡️', desc: 'Accès complet à toutes les fonctionnalités.', color: 'orange' },
            ].map((role) => (
              <div key={role.name} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{role.icon}</div>
                <h3 className="text-gray-100 font-semibold text-sm mb-1">{role.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Permissions matrix */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-5">Matrice des permissions</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <RoleTable />
          </div>
        </section>

        {/* Linux permissions analogy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-5">Permissions Linux : l'analogie</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              Dans iSH (comme dans tout système Linux), les fichiers ont un système de permissions
              qui ressemble à notre modèle RBAC. Chaque fichier appartient à un <strong className="text-gray-100">utilisateur</strong>
              et à un <strong className="text-gray-100">groupe</strong>, avec des droits distincts pour trois catégories.
            </p>
            {[
              { cmd: "chmod 644 fichier.txt", desc: "Propriétaire : lire+écrire | Groupe : lire | Autres : lire" },
              { cmd: "chmod 755 script.sh", desc: "Propriétaire : tout | Groupe : lire+exécuter | Autres : lire+exécuter" },
              { cmd: "chmod 700 secret.txt", desc: "Propriétaire : tout | Groupe : rien | Autres : rien" },
              { cmd: "ls -la", desc: "Afficher les permissions de tous les fichiers du dossier" },
            ].map((item) => (
              <div key={item.cmd} className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                <p className="font-mono text-sm text-emerald-400 mb-1">{item.cmd}</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Apple iPad Privacy */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-100 mb-5">Confidentialité Apple & iPadOS</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              iSH s'exécute dans le <strong className="text-gray-100">sandbox iPadOS</strong>, qui protège votre vie privée
              et la sécurité de votre iPad. Voici ce que cela signifie concrètement :
            </p>
            {[
              { icon: "🔒", title: "Isolation des apps", desc: "iSH ne peut pas accéder aux données des autres applications sans permission explicite." },
              { icon: "📁", title: "Accès fichiers contrôlé", desc: "L'accès aux fichiers de votre iPad passe par le système d'autorisation d'iPadOS (app Fichiers)." },
              { icon: "🌐", title: "Réseau supervisé", desc: "Les connexions réseau d'iSH sont gérées par iPadOS et peuvent être contrôlées par votre MDM en entreprise." },
              { icon: "🔑", title: "Aucun accès root iOS", desc: "iSH ne peut pas accéder au noyau iOS ni escalader ses privilèges au-delà de la sandbox." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-gray-200 font-semibold text-sm mb-0.5">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
