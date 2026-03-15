import ExerciseCard from '../components/ExerciseCard';

const exercises = [
  {
    title: "Créer un dossier 'cours'",
    objective: "Créer un dossier nommé 'cours' dans le répertoire personnel et s'y déplacer.",
    level: "debutant" as const,
    prerequisites: "Leçon 3 — Naviguer dans les dossiers",
    instructions: [
      "Ouvrez iSH sur votre iPad Pro M4.",
      "Tapez la commande pour créer un dossier nommé 'cours' dans votre répertoire personnel.",
      "Déplacez-vous dans ce dossier avec la commande cd.",
      "Vérifiez votre emplacement actuel avec la commande pwd.",
    ],
    solution: ["mkdir ~/cours", "cd ~/cours", "pwd"],
  },
  {
    title: "Créer et écrire dans un fichier texte",
    objective: "Créer un fichier notes.txt et y écrire du contenu, puis l'afficher.",
    level: "debutant" as const,
    prerequisites: "Leçon 4 — Lire/créer/modifier un fichier texte",
    instructions: [
      "Créez un fichier vide nommé 'notes.txt' avec la commande touch.",
      "Écrivez 'Bonjour depuis iSH !' dans le fichier avec echo et la redirection >.",
      "Affichez le contenu du fichier avec la commande cat.",
    ],
    solution: ["touch notes.txt", 'echo "Bonjour depuis iSH !" > notes.txt', "cat notes.txt"],
  },
  {
    title: "Lister les contenus d'un dossier",
    objective: "Utiliser différentes options de ls pour afficher les fichiers et leurs détails.",
    level: "debutant" as const,
    prerequisites: "Leçon 2 — Premières commandes",
    instructions: [
      "Listez les fichiers du répertoire courant avec ls.",
      "Affichez la liste détaillée (permissions, taille, date) avec ls -la.",
      "Affichez avec des tailles lisibles en Ko/Mo avec ls -lh.",
    ],
    solution: ["ls", "ls -la", "ls -lh"],
  },
  {
    title: "Déplacer et copier un fichier",
    objective: "Copier, déplacer et supprimer des fichiers avec cp, mv et rm.",
    level: "intermediaire" as const,
    prerequisites: "Leçon 6 — Gérer fichiers et dossiers",
    instructions: [
      "Créez un fichier test.txt avec touch test.txt.",
      "Copiez-le sous le nom backup.txt avec la commande cp.",
      "Déplacez backup.txt dans un sous-dossier 'archives/' (créez-le d'abord).",
      "Supprimez le fichier test.txt original avec rm.",
    ],
    solution: [
      "touch test.txt",
      "cp test.txt backup.txt",
      "mkdir archives && mv backup.txt archives/",
      "rm test.txt",
    ],
  },
  {
    title: "Installer un paquet Alpine Linux",
    objective: "Mettre à jour les dépôts et installer le paquet curl, puis tester son installation.",
    level: "intermediaire" as const,
    prerequisites: "Leçon 5 — Installer des paquets",
    instructions: [
      "Mettez à jour la liste des paquets avec apk update.",
      "Installez le paquet curl avec apk add curl.",
      "Vérifiez que curl est bien installé en affichant sa version.",
    ],
    solution: ["apk update", "apk add curl", "curl --version"],
  },
  {
    title: "Écrire un script shell qui affiche un message",
    objective: "Créer un script shell exécutable qui affiche 'Bonjour iPad Pro M4 !'",
    level: "intermediaire" as const,
    prerequisites: "Leçon 8 — Scripts shell simples",
    instructions: [
      "Créez un fichier script.sh avec touch.",
      "Ajoutez le shebang #!/bin/sh et un echo dans le fichier avec nano ou echo.",
      "Rendez le script exécutable avec chmod +x script.sh.",
      "Exécutez le script avec ./script.sh.",
    ],
    solution: [
      "touch script.sh",
      'printf "#!/bin/sh\\necho \\"Bonjour iPad Pro M4 !\\"" > script.sh',
      "chmod +x script.sh",
      "./script.sh",
    ],
  },
  {
    title: "Organiser un espace de travail",
    objective: "Créer une arborescence de dossiers pour organiser un projet de développement.",
    level: "avance" as const,
    prerequisites: "Leçon 10 — Mini environnement de travail",
    instructions: [
      "Créez un dossier racine 'projet' dans votre répertoire personnel.",
      "À l'intérieur, créez les sous-dossiers : src, docs, scripts et tests.",
      "Créez un fichier README.txt dans le dossier projet avec une description.",
      "Listez l'arborescence complète avec ls -R projet/.",
    ],
    solution: [
      "mkdir -p ~/projet/{src,docs,scripts,tests}",
      'echo "Mon projet iSH" > ~/projet/README.txt',
      "ls -R ~/projet/",
    ],
  },
  {
    title: "Gérer les permissions d'un fichier",
    objective: "Modifier les permissions d'un fichier pour le rendre lisible, modifiable ou exécutable.",
    level: "avance" as const,
    prerequisites: "Leçon 7 — Permissions de base Linux",
    instructions: [
      "Créez un fichier secret.txt et vérifiez ses permissions avec ls -la.",
      "Retirez les droits de lecture/écriture pour les autres (chmod 644).",
      "Créez un script run.sh et rendez-le exécutable uniquement par le propriétaire (chmod 700).",
      "Vérifiez les nouvelles permissions avec ls -la.",
    ],
    solution: [
      "touch secret.txt && ls -la secret.txt",
      "chmod 644 secret.txt",
      "touch run.sh && chmod 700 run.sh",
      "ls -la secret.txt run.sh",
    ],
  },
];

export default function ExercicesPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Exercices pratiques</h1>
          <p className="text-gray-400 text-lg">
            Mettez en pratique vos connaissances avec ces exercices progressifs. Essayez par vous-même avant de consulter la solution !
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-4 mb-10">
          {[
            { label: 'Débutant', count: 3, className: 'bg-emerald-900 text-emerald-300' },
            { label: 'Intermédiaire', count: 3, className: 'bg-blue-900 text-blue-300' },
            { label: 'Avancé', count: 2, className: 'bg-purple-900 text-purple-300' },
          ].map((item) => (
            <span key={item.label} className={`px-3 py-1.5 rounded-full text-sm font-medium ${item.className}`}>
              {item.count} exercices {item.label}
            </span>
          ))}
        </div>

        {/* Exercises */}
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.title} {...exercise} />
          ))}
        </div>

        {/* Tip */}
        <div className="mt-12 bg-gray-950 border border-gray-700 rounded-xl p-5 font-mono text-sm">
          <p className="text-gray-500"># Astuce : utilisez la touche Tab pour l'auto-complétion dans iSH</p>
          <p className="text-emerald-400 mt-1"><span className="text-blue-400">ipad:~$</span> cd Doc<span className="border-r border-emerald-400 animate-pulse ml-0.5"> </span></p>
          <p className="text-gray-400 text-xs mt-2"># → Tab complète automatiquement en "Documents/"</p>
        </div>
      </div>
    </div>
  );
}
