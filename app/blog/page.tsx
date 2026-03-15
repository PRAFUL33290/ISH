const blogPosts = [
  {
    title: "Premier pas avec iSH sur iPad Pro M4",
    date: "15 janvier 2025",
    category: "Tutoriel",
    categoryClass: "bg-emerald-900 text-emerald-300",
    excerpt:
      "Vous venez de télécharger iSH sur votre iPad Pro M4 et vous ne savez pas par où commencer ? Cet article vous guide pas à pas depuis l'installation jusqu'aux premières commandes, avec des conseils spécifiques pour tirer profit de l'écran OLED et du Magic Keyboard.",
    readTime: "8 min de lecture",
    author: "Équipe iSH Educational",
    tags: ["débutant", "installation", "iPad Pro M4"],
  },
  {
    title: "Configurer un environnement Python avec iSH",
    date: "22 janvier 2025",
    category: "Développement",
    categoryClass: "bg-blue-900 text-blue-300",
    excerpt:
      "Python 3 est l'un des langages les plus populaires pour l'apprentissage de la programmation. Découvrez comment installer Python 3 via apk, créer des environnements virtuels avec venv, installer des bibliothèques avec pip, et écrire vos premiers scripts Python directement dans iSH sur iPad.",
    readTime: "12 min de lecture",
    author: "Équipe iSH Educational",
    tags: ["python3", "apk", "scripting", "intermédiaire"],
  },
  {
    title: "iSH vs Termius vs SSH : quel outil choisir ?",
    date: "5 février 2025",
    category: "Comparatif",
    categoryClass: "bg-purple-900 text-purple-300",
    excerpt:
      "Il existe plusieurs façons d'accéder à un shell Linux depuis votre iPad : iSH (local), Termius (SSH vers un serveur distant) ou une connexion SSH directe. Cet article compare ces trois approches en détail, avec des cas d'usage concrets pour choisir la solution adaptée à vos besoins.",
    readTime: "15 min de lecture",
    author: "Équipe iSH Educational",
    tags: ["comparatif", "SSH", "Termius", "avancé"],
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Blog</h1>
          <p className="text-gray-400 text-lg">
            Articles, tutoriels et comparatifs sur iSH Shell et l'utilisation de Linux sur iPad Pro M4.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-700 transition-colors">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${post.categoryClass}`}>
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-600 text-sm">·</span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-100 mb-3 hover:text-blue-400 cursor-pointer transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-400 leading-relaxed mb-5 text-sm">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <span className="text-gray-500 text-sm">{post.author}</span>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  Lire l'article →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-14 bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-3">Restez informé</h2>
          <p className="text-gray-400 mb-6 text-sm">
            De nouveaux articles sur iSH et Linux sur iPad arrivent régulièrement. Revenez souvent !
          </p>
          <div className="bg-gray-950 border border-gray-700 rounded-xl p-5 font-mono text-sm text-left max-w-md mx-auto">
            <p className="text-gray-500"># Prochain article</p>
            <p className="text-emerald-400 mt-1">echo "Git et GitHub depuis iSH"</p>
            <p className="text-gray-300 mt-0.5 pl-4">→ Bientôt disponible...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
