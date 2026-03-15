# iSH Educational — Apprendre Linux sur iPad Pro M4

Un site éducatif complet pour découvrir et maîtriser **iSH Shell** sur iPadOS, conçu comme un vrai parcours d'apprentissage.

## 🚀 Stack technique

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**

## 📚 Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — Hero, terminal mockup, aperçu des leçons |
| `/decouvrir` | Comprendre iSH — Ce qu'il fait, ses limites |
| `/lecons` | 12 leçons en 3 niveaux (Débutant → Avancé) |
| `/exercices` | 8 exercices pratiques avec solutions |
| `/usages` | Cas d'usage sur iPad |
| `/ipad-pro` | Spécificités iPad Pro M4 |
| `/droits-utilisateurs` | RBAC : 5 rôles et matrice des permissions |
| `/aide` | FAQ et aide |
| `/blog` | Blog et actualités |
| `/tableau-de-bord` | Tableau de bord utilisateur |

## 🎨 Design

- Thème sombre inspiré du terminal
- Accent bleu électrique (`#3b82f6`) et vert terminal (`#10b981`)
- iPad-first (11" et 13"), tactile + clavier + trackpad
- Compatible Safari iPadOS

## 🏃 Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans Safari sur iPad ou navigateur.

## 🔐 Rôles utilisateurs

| Rôle | Accès |
|------|-------|
| Visiteur | Pages publiques |
| Membre | Compte, progression, favoris |
| Apprenant | Exercices, quiz, corrigés |
| Formateur | Créer leçons & exercices |
| Administrateur | Accès complet |
