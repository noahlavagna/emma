// Clés localStorage centralisées (préfixe commun pour éviter les collisions).
export const STORAGE_KEYS = {
  vocabAppris: 'emma:vocab:appris', // { [motId]: { fois: number, dernier: ISOdate } }
  revisionJours: 'emma:revision:jours', // { [jour]: { meilleur, total, fait: ISOdate } }
  programmeJours: 'emma:programme:jours', // { [jour]: { fait: ISOdate, score, total } }
  exercices: 'emma:exercices:scores', // { [exId]: { meilleur, total, fait: ISOdate } }
  eclair: 'emma:revision:eclair', // { dernier: ISOdate, sessions: number, journal: ['YYYY-MM-DD'] }
  admin: 'emma:admin', // booléen : mode test qui débloque tout
  syncCode: 'emma:sync:code', // code de synchro cloud (propre à l'appareil, jamais exporté)
}

// Toutes les clés de progression à sauvegarder/restaurer (l'admin est exclu :
// c'est un état de test local, pas une donnée d'apprentissage).
export const CLES_SAUVEGARDE = [
  STORAGE_KEYS.vocabAppris,
  STORAGE_KEYS.revisionJours,
  STORAGE_KEYS.programmeJours,
  STORAGE_KEYS.exercices,
  STORAGE_KEYS.eclair,
]
