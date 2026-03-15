const roles = [
  {
    name: 'Visiteur',
    permissions: {
      pagesPubliques: true,
      presentationISH: true,
      catalogueLecons: true,
      compte: false,
      exercices: false,
      quiz: false,
      creerContenu: false,
      statsApprenants: false,
      admin: false,
    },
  },
  {
    name: 'Membre',
    permissions: {
      pagesPubliques: true,
      presentationISH: true,
      catalogueLecons: true,
      compte: true,
      exercices: false,
      quiz: false,
      creerContenu: false,
      statsApprenants: false,
      admin: false,
    },
  },
  {
    name: 'Apprenant',
    permissions: {
      pagesPubliques: true,
      presentationISH: true,
      catalogueLecons: true,
      compte: true,
      exercices: true,
      quiz: true,
      creerContenu: false,
      statsApprenants: false,
      admin: false,
    },
  },
  {
    name: 'Formateur',
    permissions: {
      pagesPubliques: true,
      presentationISH: true,
      catalogueLecons: true,
      compte: true,
      exercices: true,
      quiz: true,
      creerContenu: true,
      statsApprenants: true,
      admin: false,
    },
  },
  {
    name: 'Administrateur',
    permissions: {
      pagesPubliques: true,
      presentationISH: true,
      catalogueLecons: true,
      compte: true,
      exercices: true,
      quiz: true,
      creerContenu: true,
      statsApprenants: true,
      admin: true,
    },
  },
];

const permissionLabels: Record<string, string> = {
  pagesPubliques: 'Pages publiques',
  presentationISH: 'Présentation iSH',
  catalogueLecons: 'Catalogue leçons',
  compte: 'Gestion du compte',
  exercices: 'Exercices pratiques',
  quiz: 'Quiz & évaluations',
  creerContenu: 'Créer du contenu',
  statsApprenants: 'Stats apprenants',
  admin: 'Administration',
};

export default function RoleTable() {
  const permissionKeys = Object.keys(permissionLabels);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-3 px-4 text-gray-400 font-medium min-w-[160px]">Permission</th>
            {roles.map((role) => (
              <th key={role.name} className="py-3 px-4 text-center text-gray-200 font-semibold">
                {role.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {permissionKeys.map((key, idx) => (
            <tr
              key={key}
              className={`border-b border-gray-800 ${idx % 2 === 0 ? 'bg-gray-900/40' : ''}`}
            >
              <td className="py-3 px-4 text-gray-300">{permissionLabels[key]}</td>
              {roles.map((role) => {
                const allowed = role.permissions[key as keyof typeof role.permissions];
                return (
                  <td key={role.name} className="py-3 px-4 text-center">
                    {allowed ? (
                      <span className="text-emerald-400 font-bold text-base">✓</span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
