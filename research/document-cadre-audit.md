# Réaudit des documents-cadres — 28 septembre 2026

Revue complémentaire des **15 départements**, après signalement de pièces manquées. Les constats portent sur les sources examinées à cette date ; ils ne garantissent pas l’exhaustivité des archives administratives. Un échec de téléchargement ou une recherche infructueuse ne démontre jamais qu’un document n’existe pas.

## Corrections et pièces retrouvées

| Département | Résultat du réaudit |
|---|---|
| Aisne (02) | Arrêté et annexes finales ; la préfecture renvoie à un atlas de **798 liens PDF communaux** et un tableau XLSX sur Pays Aisne. L’index et le tableau sont désormais associés à la fiche des annexes. Deux chemins portent une mention technique ambiguë « obselete » : réserve conservée, sans déduire le statut. Les 798 PDF n’ont pas tous été contrôlés individuellement. |
| Ardennes (08) | Le PDF autonome contient l’arrêté et son annexe cartographique ; accès à l’annexe à la page 5. |
| Aube (10) | L’existence de l’arrêté final est confirmée par la CRE : signature le 22 juillet 2025, publication le 24 juillet. **PDF final direct encore à retrouver** ; les PDF du catalogue restent correctement étiquetés comme projets. |
| Marne (51) | Acte correctif, liste parcellaire et carte Geo-IDE retrouvés ; ressources associées ajoutées. |
| Haute-Marne (52) | Texte final, quatre sites et liste parcellaire à partir de la page 9 ; annexe paysagère à partir de la page 17. |
| Meurthe-et-Moselle (54) | Acte final retrouvé ; la méthode publiée repose sur R.111-58 sans atlas parcellaire complémentaire annoncé. |
| Meuse (55) | **Arrêté final manqué au premier passage, désormais ajouté** : AP 2025-867 du 20 mai 2025, RAA du 3 juin, pages 3–20. Liste cadastrale, carte générale, quatre cartes détaillées et document-cadre inclus. |
| Moselle (57) | Projet vérifié. La page du 13 mars 2026 annonce une approbation prochaine ; l’acte final demeure **non résolu dans les sources contrôlées**, sans conclusion d’absence. |
| Nord (59) | Projet, liste ODS et carte UMap de consultation identifiés. L’acte final demeure **non résolu dans les sources contrôlées**, sans conclusion d’absence. |
| Oise (60) | Arrêté, notice et carte Geo-IDE retrouvés ; carte associée à la fiche. |
| Pas-de-Calais (62) | Arrêté final et annexes dans le RAA du 24 décembre 2025, page 21. Carte Geo-IDE de consultation conservée avec réserve sur sa concordance avec le texte final. |
| Bas-Rhin (67) | Acte, cadre et avis CDPENAF retrouvés ; le cadre alsacien choisit de ne pas retenir d’approche parcellaire complémentaire. |
| Haut-Rhin (68) | Acte final et cadre alsacien retrouvés. Ancien et nouveau PDF du cadre byte-identiques ; ancien lien préservé pour traçabilité. |
| Somme (80) | Arrêté final, notice et carte Geo-IDE retrouvés ; carte associée à la fiche. |
| Vosges (88) | Annexe graphique intégrée au PDF signé ; carte de consultation distincte conservée comme historique. |

## Preuves et points de reprise

- [Meuse : PDF officiel du RAA, arrêté à la page 3](https://www.meuse.gouv.fr/contenu/telechargement/32381/233428/file/RAA%20n%C2%B051%20du%203%20juin%202025.pdf#page=3).
- [Aube : tableau indicatif officiel CRE, annexe 13](https://www.cre.fr/fileadmin/Documents/Appels_d_offres/2026/CDC_PPE2_Sol_P9.pdf#page=120). Les cellules vides de ce tableau ne prouvent pas une absence d’acte. [Index des RAA 2025 de l’Aube](https://www.aube.gouv.fr/Publications/Recueil-des-Actes-Administratifs-RAA2/RAA-2025) à reprendre autour du 24 juillet.
- [Aisne : index de l’atlas communal](https://pays-aisne.org/territoires/consultation-en-cours/) — ressource HTML explicitement identifiée ; chaque carte y possède son PDF propre. Aucun bouton PDF du catalogue ne cible cet index HTML.
- [Moselle : page d’approbation](https://www.moselle.gouv.fr/Actions-de-l-Etat/Energie/Energies-renouvelables/Planification-des-energies-renouvelables/Document-cadre/Arrete-approuvant-le-document-cadre) et [moteur des RAA](https://mc.moselle.gouv.fr/raa.html).
- [Nord : dossier de consultation et ressources parcellaires](https://www.nord.gouv.fr/Actions-de-l-Etat/Environnement/Information-et-participation-du-public/Les-projets-photovoltaiques/Consultation-du-public-Installation-photovoltaiques-sur-terres-agricoles-exploitees).

Les preuves détaillées, les URL et les limites de chaque lecture sont consignées dans `research/reaudit-est.md`, `research/reaudit-north.md` et `research/reaudit-uncertain.md`. Leurs JSON sont des propositions archivées ; `data/documents.json` reste la référence éditoriale.

## Migration et contrôles

Le catalogue initial a été récupéré à nouveau et comparé à l’archive locale : contenu inchangé. Ses **27 liens PDF** restent traçables dans le catalogue, directement ou via `previousPdfUrls`. Pour le Haut-Rhin, les deux téléchargements du cadre ont le SHA-256 `8e72576a9fea5a5f70c28f9856f53d4e4ff40025bb77f031859f5342e2b91ae9`.

Les annexes contenues dans un même PDF utilisent des liens `#page=N`, sans multiplier artificiellement le compteur de documents. Les cartes web et classeurs portent leur format propre dans les ressources associées. Les tentatives techniques datées sont conservées dans `research/link-checks/` ; elles sont distinctes des preuves documentaires. Des serveurs préfectoraux peuvent refuser temporairement les requêtes automatisées.
