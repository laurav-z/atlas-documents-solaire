# Réaudit ciblé des documents-cadres du Grand Est

Revue effectuée le **28 septembre 2026** sur les départements 08, 51, 52, 54, 67, 68 et 88. Ce fichier complète `research/grand-est.md` et propose dans `research/reaudit-est.json` des mises à jour compatibles avec le catalogue. Il ne modifie pas `data/documents.json`.

## Méthode et limite des constats

Pour chaque département, la page préfectorale de publication a été relue avec tous ses liens de téléchargement ou de cartographie. Les PDF indexés dans les recueils des actes administratifs ont été recherchés par numéro, date, intitulé et nom de fichier. Le contenu textuel des actes, listes parcellaires, cartes et annexes a été confronté aux descriptions des pages sources. Le document alsacien du Haut-Rhin a en outre été extrait localement page par page.

L’ancien site de démonstration et `research/original-documents.js` ont servi de contrôle de migration. Ils ne constituent pas une preuve juridique. Les constats ci-dessous décrivent les pièces retrouvées dans ce périmètre de recherche ; une pièce non exposée sur une page donnée n’est jamais déclarée inexistante pour ce seul motif.

## Ardennes (08)

- **Page officielle examinée :** [Document Cadre PV au sol](https://www.ardennes.gouv.fr/index.php/layout/set/print/Actions-de-l-Etat/Environnement/Energie-Climat/Les-energies-renouvelables/Document-Cadre-PV-au-sol).
- **Acte contrôlé :** arrêté n° 2025-429, signé le 4 juillet 2025 et publié au RAA n° 8-2025-073 le 8 juillet 2025. La page préfectorale dit que l’arrêté a été « pris le 8 juillet » ; le PDF publié porte bien la date de signature du 4 juillet. La proposition JSON retient les deux dates avec leur rôle respectif.
- **Composition :** l’article 1 renvoie aux parcelles de l’annexe 1. Le RAA reproduit ensuite, à partir de sa page physique 8, des planches « Annexe du document cadre — Cartographie des parcelles » pour les communes ou sites retenus. Le RAA ajoute trois pages liminaires avant le document ; le repère correspondant est donc la page physique 5 dans le PDF autonome lié par la page préfectorale. Ce fichier de 8,75 Mo est un ensemble arrêté + annexe cartographique, pas un simple acte de quelques pages.
- **Correction proposée :** préciser le numéro de l’arrêté, la date de signature et exposer l’annexe 1 dans `relatedLinks`.
- **Portée de la recherche :** page finale, page de consultation antérieure, RAA par date et numéro, nom de fichier `AP_Ardennes.pdf`. La page finale ne montre qu’un fichier combiné ; cela ne fonde aucune affirmation sur d’éventuelles données SIG détenues ailleurs.

## Marne (51)

- **Page officielle examinée :** [Document Cadre 51](https://www.marne.gouv.fr/index.php/Actions-de-l-Etat/Amenagement-du-territoire/Urbanisme/Document-Cadre-51-Photovoltaique-au-Sol-Agri-compatible).
- **Composition annoncée par la préfecture :** arrêté préfectoral, annexe AP n° 51/2025/001 listant les surfaces cartographiées, [carte interactive Geo-IDE](https://carto2.geo-ide.din.developpement-durable.gouv.fr/frontoffice/?map=91bd85a6-665b-44bc-9133-771be338d7b7) et [fiche de jeu de données](http://catalogue.geo-ide.developpement-durable.gouv.fr/catalogue/srv/fre/catalog.search#/metadata/fr-120066022-jdd-9ff3bc94-9550-49ab-a3be-f3d8f56af5f8).
- **Annexe contrôlée :** le RAA n° 51-2025-128 reproduit à partir de sa page 6 la cartographie et la liste des surfaces : commune, code INSEE, section, parcelle, caractère entier ou partiel et surface. Le même RAA précise que l’acte 51-2025-07-25-00008 annule et remplace la publication antérieure de l’arrêté n° 051/2025/001.
- **Correction proposée :** conserver le PDF final actuellement lié par la préfecture, rendre l’annexe et les deux ressources cartographiques visibles dans `relatedLinks`, et noter le remplacement de la première publication. La page source précise elle-même que la cartographie n’est pas exhaustive.
- **Portée de la recherche :** page finale, RAA correctif, projet antérieur, carte et métadonnées. Aucune conclusion n’est tirée sur des exports SIG non ouverts depuis l’interface Geo-IDE.

## Haute-Marne (52)

- **Page officielle examinée :** [Document-cadre sur le photovoltaïque au sol](https://www.haute-marne.gouv.fr/index.php/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme/Energies-renouvelables/Document-cadre-sur-le-photovoltaique-au-sol).
- **Deux fichiers finaux :** l’arrêté n° 52-2025-07-00173 et le document-cadre de 5,72 Mo. Le RAA n° 65 du 8 août 2025 reproduit l’arrêté puis son document annexé.
- **Cartes et parcelles retrouvées :** la version modifiée après consultation retient quatre sites, sur Bettancourt-la-Ferrée, Chamouilley, Rolampont et Valcourt, pour 14,87 ha. Elle contient une carte générale, quatre cartes par site et la liste des parcelles cadastrales. Dans le PDF autonome, cette séquence commence à la page physique 9.
- **Annexe paysagère retrouvée :** la fin du document porte explicitement « Annexe 1 : charte paysagère », à partir de la page physique 17 du PDF autonome. Le préambule indique que l’annexe paysagère de la charte départementale antérieure est reprise dans le document-cadre final. Il ne faut donc pas résumer ce PDF comme une simple note de méthode.
- **Ressource complémentaire :** le texte cite l’[Observatoire départemental des friches](https://www.haute-marne.gouv.fr/index.php/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme/Observatoire-departemental-des-friches), avec une liste indicative de friches susceptibles d’accueillir du photovoltaïque. Cette liste est distincte des quatre sites cadastrés du document-cadre.
- **Correction proposée :** enrichir l’entrée `52-cadre` et exposer les cartes, la liste et l’annexe paysagère dans `relatedLinks`, sans dupliquer le même PDF dans le compteur du catalogue.

## Meurthe-et-Moselle (54)

- **Page officielle examinée :** [Document-cadre agricole](https://www.meurthe-et-moselle.gouv.fr/index.php/Actions-de-l-Etat/Environnement/Energies-renouvelables/Document-cadre-agricole/Document-cadre-agricole).
- **Fichier final exposé :** un PDF signé de 5,51 Mo, intitulé `AP_signe_document_cadre_photovoltaique.pdf`.
- **Méthode contrôlée :** le [document soumis à consultation](https://www.meurthe-et-moselle.gouv.fr/contenu/telechargement/35470/267733/file/Projet_document_cadre_54v2.pdf), validé par la Chambre d’agriculture le 25 novembre 2024, conclut que le département ne retient pas de terres incultes en dehors des terrains pollués, inexploitables ou artificialisés. Il rappelle que les surfaces de l’article R.111-58 ne requièrent ni identification cadastrale ni cartographie.
- **Conséquence éditoriale :** l’absence d’atlas parcellaire sur la page n’est pas traitée comme un oubli documentaire. Elle est cohérente avec la méthode publiée. L’entrée doit expliquer que le contrôle porte sur la qualification d’un terrain au regard de R.111-58, et non promettre une carte départementale de parcelles.
- **Portée de la recherche :** page finale, fichier de consultation, avis territorial et recherches par nom de fichier. Le texte final signé reste la référence ; le projet est conservé seulement comme preuve de méthode et signalé comme version de consultation.

## Bas-Rhin (67)

- **Page officielle examinée :** [Document-cadre sur le photovoltaïque au sol](https://www.bas-rhin.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/Document-cadre-sur-le-photovoltaique-au-sol).
- **Trois pièces finales :** arrêté préfectoral, document-cadre de 4,88 Mo et avis CDPENAF. Ces trois fichiers sont déjà individualisés dans le catalogue.
- **Choix cartographique :** le dossier de consultation décrit les analyses et tests réalisés à l’échelle alsacienne. Le document-cadre conclut à la décision de ne pas retenir d’identification parcellaire complémentaire et s’appuie sur les quatorze typologies de l’article R.111-58. Un atlas cadastral n’est donc pas une annexe attendue de ce cadre tel qu’il a été conçu.
- **Correction proposée :** remplacer le tag et le résumé qui pouvaient laisser croire à une cartographie parcellaire par une description de la méthode et des justificatifs à fournir.
- **Portée de la recherche :** page finale, page de consultation et ses pièces, recherches par intitulé et nom de fichier. Ce constat n’exclut pas l’existence de données thématiques générales sans valeur d’annexe au document-cadre.

## Haut-Rhin (68)

- **Page officielle examinée :** [rubrique CDPENAF du Haut-Rhin](https://www.haut-rhin.gouv.fr/Actions-de-l-Etat/Agriculture-foret-et-developpement-rural/CDPENAF-Commission-de-preservation-des-espaces-naturels-agricoles-et-forestiers), complétée par le RAA n° 45 du 22 mai 2025.
- **Deux pièces :** l’arrêté signé du 15 mai 2025 figure dans le RAA ; le document-cadre alsacien est publié séparément.
- **Contrôle direct du PDF :** treize pages, avec une section II.c intitulée « Décision de ne pas retenir d’approche parcellaire ». Le texte conclut qu’une cartographie parcellaire complémentaire n’est pas pertinente et retient les terrains correspondant aux quatorze catégories de l’article R.111-58.
- **Identité de version :** le fichier publié sous l’identifiant `49961/352641` et l’ancien fichier de consultation `48479/340314` ont le même SHA-256 (`8e72576a9fea5a5f70c28f9856f53d4e4ff40025bb77f031859f5342e2b91ae9`). La republication ne masque donc pas une annexe cartographique ajoutée ultérieurement.
- **Correction proposée :** retirer l’étiquette cartographique trompeuse et expliquer le choix méthodologique. Cette conclusion porte sur la version officielle comparée, pas sur toute donnée géographique disponible dans le département.

## Vosges (88)

- **Page officielle examinée :** [Photovoltaïque au sol et agrivoltaïsme](https://www.vosges.gouv.fr/Actions-de-l-Etat/Agriculture-Foret/Phovoltaique-au-sol-et-agrivoltaisme).
- **Composition explicitée par la préfecture :** l’article 2 de l’arrêté n° 219/2025 répertorie les parcelles ; l’annexe les représente sous forme de graphiques. La page avertit que les entités graphiques éligibles peuvent ne pas correspondre aux parcelles cadastrales entières.
- **Publication :** l’acte 88-2025-07-23-00001 figure au RAA du 23 juillet 2025. La page finale lie un unique PDF signé : l’annexe graphique y est intégrée, et ne doit pas être recherchée comme un fichier autonome absent.
- **Correction proposée :** enrichir `88-cadre` et exposer l’annexe graphique dans `relatedLinks`. La cartographie publiée pour la consultation de juin 2025 reste une pièce historique distincte, déjà classée `ancien` sous `88-carte-2025`.
- **Portée de la recherche :** page finale, RAA, page de consultation et cartographie de consultation. Aucun fichier communal massif n’a été ajouté : l’annexe finale combinée est le niveau documentaire utile.

## Synthèse des corrections proposées

| Département | Constat utile pour le catalogue |
|---|---|
| 08 | Le PDF combine l’arrêté n° 2025-429 et l’annexe 1 cartographique. |
| 51 | L’annexe parcellaire est dans l’acte ; carte interactive et métadonnées Geo-IDE sont séparées. |
| 52 | Le document final contient cartes, liste cadastrale et annexe paysagère. |
| 54 | La méthode ne retient pas d’atlas parcellaire complémentaire ; elle repose sur R.111-58. |
| 67 | Le cadre alsacien décide de ne pas retenir d’approche parcellaire. |
| 68 | Même choix, confirmé par lecture du PDF de treize pages et comparaison binaire des versions. |
| 88 | L’annexe graphique finale est intégrée au PDF signé ; la carte de consultation reste historique. |
