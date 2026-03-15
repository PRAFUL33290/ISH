'use client';

import { useState } from 'react';

type Level = 'debutant' | 'intermediaire' | 'avance';

interface ExerciseCardProps {
  title: string;
  objective: string;
  level: Level;
  prerequisites: string;
  instructions: string[];
  solution: string[];
}

const levelConfig: Record<Level, { label: string; className: string }> = {
  debutant: { label: 'Débutant', className: 'bg-emerald-900 text-emerald-300' },
  intermediaire: { label: 'Intermédiaire', className: 'bg-blue-900 text-blue-300' },
  avance: { label: 'Avancé', className: 'bg-purple-900 text-purple-300' },
};

export default function ExerciseCard({ title, objective, level, prerequisites, instructions, solution }: ExerciseCardProps) {
  const [showSolution, setShowSolution] = useState(false);
  const { label, className } = levelConfig[level];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-gray-100 font-semibold text-lg">{title}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${className}`}>
          {label}
        </span>
      </div>

      <div>
        <p className="text-gray-300 text-sm"><span className="font-semibold text-blue-400">Objectif :</span> {objective}</p>
        {prerequisites && (
          <p className="text-gray-400 text-sm mt-1"><span className="font-semibold">Prérequis :</span> {prerequisites}</p>
        )}
      </div>

      <div>
        <h4 className="text-gray-200 text-sm font-semibold mb-2">Instructions :</h4>
        <ol className="space-y-2">
          {instructions.map((instruction, idx) => (
            <li key={idx} className="text-sm text-gray-400 flex gap-2">
              <span className="text-blue-400 font-mono shrink-0">{idx + 1}.</span>
              <span>{instruction}</span>
            </li>
          ))}
        </ol>
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="self-start text-sm bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors"
      >
        {showSolution ? 'Masquer la solution' : 'Voir la solution'}
      </button>

      {showSolution && (
        <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
          <p className="text-emerald-400 text-xs font-mono mb-2"># Solution</p>
          {solution.map((line, idx) => (
            <p key={idx} className="font-mono text-emerald-400 text-sm">
              <span className="text-gray-500">$ </span>{line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
