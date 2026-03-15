import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 text-xl font-bold mb-3">
              <span className="text-emerald-400 font-mono">$</span>
              <span className="text-blue-400">iSH</span>
            </div>
            <p className="text-gray-400 text-sm">Apprendre Linux sur iPad Pro M4</p>
            <p className="text-gray-500 text-sm mt-2">
              Un environnement éducatif pour découvrir le terminal Linux grâce à iSH Shell sur iPadOS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-3">Contenu</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/decouvrir', label: 'Découvrir iSH' },
                { href: '/lecons', label: 'Leçons' },
                { href: '/exercices', label: 'Exercices' },
                { href: '/usages', label: 'Usages iPad' },
                { href: '/blog', label: 'Blog' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-3">Ressources</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/ipad-pro', label: 'iPad Pro M4' },
                { href: '/droits-utilisateurs', label: 'Droits & Utilisateurs' },
                { href: '/aide', label: 'Aide & FAQ' },
                { href: '/tableau-de-bord', label: 'Tableau de bord' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 iSH Educational — Apprendre Linux sur iPad Pro M4. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
