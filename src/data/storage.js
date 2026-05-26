// Clés localStorage centralisées (préfixe commun pour éviter les collisions).
export const STORAGE_KEYS = {
  vocabAppris: 'emma:vocab:appris', // { [motId]: { fois: number, dernier: ISOdate } }
  revisionJours: 'emma:revision:jours', // { [jour]: { meilleur, total, fait: ISOdate } }
  programmeJours: 'emma:programme:jours', // { [jour]: { fait: ISOdate, score, total } }
  exercices: 'emma:exercices:scores', // { [exId]: { meilleur, total, fait: ISOdate } }
  admin: 'emma:admin', // booléen : mode test qui débloque tout
}
