'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  questions: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: "Général",
    questions: [
      {
        question: "Qu'est-ce qu'iSH ?",
        answer: "iSH est une application gratuite disponible sur l'App Store qui émule un environnement Linux sur iPad. Elle utilise un interpréteur en mode utilisateur pour exécuter un shell Alpine Linux directement sur votre appareil, sans serveur distant ni jailbreak.",
      },
      {
        question: "Comment fonctionne iSH ?",
        answer: "iSH traduit les instructions x86 32 bits en appels système ARM compatibles avec iPadOS. Il embarque Alpine Linux avec son gestionnaire de paquets apk. Tout s'exécute localement sur votre iPad, dans la sandbox sécurisée d'iOS.",
      },
      {
        question: "iSH est-il gratuit ?",
        answer: "Oui, iSH est entièrement gratuit et open source. L'application est disponible gratuitement sur l'App Store. Il n'y a pas d'abonnement, pas d'achats intégrés requis pour les fonctionnalités de base.",
      },
      {
        question: "Sur quels iPads fonctionne iSH ?",
        answer: "iSH fonctionne sur tous les iPad compatibles avec iOS/iPadOS 14 ou supérieur. Cela inclut l'iPad Pro M4, l'iPad Air M2, l'iPad (10e génération et plus récent), et l'iPad mini. Plus l'iPad est récent, plus l'expérience est fluide.",
      },
      {
        question: "Puis-je utiliser iSH sans connexion internet ?",
        answer: "Oui ! iSH fonctionne entièrement hors ligne pour les commandes de base. Vous n'avez besoin d'internet que pour installer des paquets via apk (apk add) ou pour des commandes réseau comme curl et wget.",
      },
    ],
  },
  {
    title: "Installation",
    questions: [
      {
        question: "Comment télécharger iSH ?",
        answer: "Recherchez 'iSH Shell' sur l'App Store de votre iPad. L'application est développée par Theodore Dubois et est entièrement gratuite. Après installation, lancez-la et vous avez immédiatement accès à un shell Alpine Linux.",
      },
      {
        question: "Faut-il jailbreaker l'iPad ?",
        answer: "Non, absolument pas ! iSH fonctionne sur des iPad standard, sans jailbreak. C'est l'un de ses grands avantages : vous bénéficiez d'un environnement Linux tout en restant dans la sécurité et la garantie d'Apple.",
      },
      {
        question: "iSH prend-il beaucoup d'espace ?",
        answer: "L'application de base est légère (environ 20-30 Mo). Cependant, selon les paquets Alpine que vous installez (python3, git, etc.), la taille peut augmenter. Comptez 200-500 Mo pour une installation avec les outils courants.",
      },
    ],
  },
  {
    title: "Utilisation",
    questions: [
      {
        question: "Comment copier-coller dans iSH ?",
        answer: "Avec le clavier virtuel : appuyez longuement sur le terminal pour faire apparaître le menu copier/coller. Avec un clavier externe (Magic Keyboard) : utilisez Cmd+C et Cmd+V comme sur Mac. iSH supporte également le glisser-déposer de texte sur iPadOS.",
      },
      {
        question: "Puis-je utiliser un clavier externe ?",
        answer: "Oui, et c'est fortement recommandé ! Le Magic Keyboard pour iPad Pro fonctionne parfaitement avec iSH. Vous bénéficiez de toutes les combinaisons de touches (Ctrl+C, Ctrl+Z, Tab pour l'autocomplétion, flèches pour l'historique, etc.).",
      },
      {
        question: "Comment accéder aux fichiers iPad ?",
        answer: "Dans les réglages d'iSH, vous pouvez monter l'app Fichiers d'iPadOS. Cela permet d'accéder à votre dossier iCloud Drive et aux dossiers locaux directement depuis le terminal iSH, et vice versa.",
      },
      {
        question: "Quels éditeurs de texte sont disponibles ?",
        answer: "Via apk, vous pouvez installer vim (apk add vim), nano (apk add nano), ou neovim (apk add neovim). Nano est recommandé pour les débutants car il est plus intuitif. Pour les avancés, vim et ses nombreux plugins sont disponibles.",
      },
    ],
  },
  {
    title: "Limites",
    questions: [
      {
        question: "Puis-je exécuter des applications graphiques ?",
        answer: "Non, iSH ne supporte pas les interfaces graphiques (GUI). Il s'agit uniquement d'un environnement en ligne de commande (CLI). Vous ne pouvez pas lancer Firefox, GIMP ou d'autres applications avec interface visuelle.",
      },
      {
        question: "iSH supporte-t-il tous les packages Linux ?",
        answer: "iSH utilise Alpine Linux, donc seuls les paquets du dépôt Alpine (apk) sont disponibles. De plus, comme iSH émule du x86 32 bits, certains paquets modernes compilés uniquement en 64 bits peuvent ne pas fonctionner.",
      },
      {
        question: "Y a-t-il des limitations réseau ?",
        answer: "La plupart des outils réseau de base fonctionnent (curl, wget, apk, ssh client). Cependant, les serveurs et les connexions entrantes sont limités par la sandbox iPadOS. Vous ne pouvez pas héberger un serveur web accessible depuis l'extérieur.",
      },
    ],
  },
  {
    title: "Sécurité & confidentialité",
    questions: [
      {
        question: "iSH est-il sécurisé ?",
        answer: "Oui. iSH s'exécute entièrement dans la sandbox sécurisée d'iPadOS. Il ne peut pas accéder aux données des autres applications ni au système iOS. Vous pouvez considérer iSH comme un bac à sable Linux sécurisé, isolé du reste de votre iPad.",
      },
      {
        question: "Mes données sont-elles protégées ?",
        answer: "Vos fichiers dans iSH sont stockés dans le conteneur isolé de l'application, accessible uniquement par iSH. Apple chiffre ces données avec les protections standard d'iOS. Si vous utilisez iCloud avec iSH, les données transitent via les serveurs Apple chiffrés.",
      },
      {
        question: "Puis-je utiliser iSH en entreprise ?",
        answer: "Oui, avec quelques précautions. iSH peut être géré via MDM (Mobile Device Management). Les administrateurs IT peuvent contrôler les accès réseau et les politiques d'utilisation. Vérifiez les politiques BYOD de votre entreprise avant utilisation.",
      },
    ],
  },
];

function AccordionItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        className="w-full text-left py-4 flex items-center justify-between gap-4 hover:text-blue-400 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-200 font-medium text-sm">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-4 text-gray-400 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function AidePage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Aide & FAQ</h1>
          <p className="text-gray-400 text-lg">
            Trouvez les réponses à vos questions sur iSH Shell et ce site éducatif.
          </p>
        </div>

        {/* Quick help */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-10 flex items-start gap-4">
          <span className="text-2xl shrink-0">💡</span>
          <div>
            <h3 className="text-gray-200 font-semibold mb-1">Commande rapide</h3>
            <p className="text-gray-400 text-sm">Dans iSH, tapez <code className="bg-gray-800 text-emerald-400 px-1 rounded font-mono">man commande</code> pour afficher l'aide d'une commande, ou <code className="bg-gray-800 text-emerald-400 px-1 rounded font-mono">commande --help</code> pour une aide rapide.</p>
          </div>
        </div>

        {/* FAQ sections */}
        <div className="space-y-8">
          {faqData.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-400 rounded-full inline-block"></span>
                {section.title}
              </h2>
              <div className="bg-gray-900 border border-gray-800 rounded-xl px-6">
                {section.questions.map((item) => (
                  <AccordionItem key={item.question} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 bg-blue-950 border border-blue-800 rounded-xl p-6 text-center">
          <h3 className="text-blue-200 font-semibold text-lg mb-2">Vous n'avez pas trouvé votre réponse ?</h3>
          <p className="text-blue-300 text-sm">
            Explorez nos <a href="/lecons" className="underline hover:text-white">leçons détaillées</a> ou
            consultez la <a href="https://github.com/ish-app/ish" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">documentation officielle d'iSH sur GitHub</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
