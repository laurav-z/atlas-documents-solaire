# Atlas solaire — registre des sources

Généré le **2026-09-28T17:48:05.179Z**. Dernière recherche documentaire : **2026-09-28**. Prochaine revue documentaire conseillée : **2027-03-28**.

## Périmètre

Grand Est (08, 10, 51, 52, 54, 55, 57, 67, 68, 88) et Hauts-de-France (02, 59, 60, 62, 80), avec les références nationales utiles. **71 documents PDF**. Extension future prévue : autres régions, documents départementaux, nouvelles versions, annexes et guides thématiques. Aucune autre région n’est active dans ce MVP.

Les PDF demeurent hébergés par leurs éditeurs ; tous les assets du site et le catalogue sont locaux. Les cartes départementales servent à naviguer, pas à déterminer l’éligibilité d’une parcelle.

## Méthode et limites

- Pages officielles et documents directement consultés : préfectures, DREAL, ministères, établissements publics et chambres d’agriculture.
- Un lien de téléchargement sans extension .pdf est accepté si le serveur renvoie réellement un PDF.
- La recherche est large, pas une garantie d’exhaustivité. Les lacunes, projets de textes, documents anciens et restrictions d’accès sont conservés dans les notes de recherche.
- Le statut documentaire est distinct du contrôle technique. Une réponse HTTP 200 ne prouve ni l’actualité ni l’opposabilité d’un document. Les extraits JORF sont des versions publiées, pas nécessairement consolidées.
- Vérification technique : GET curl, redirections suivies, plage 0-4095 si supportée, signature %PDF- contrôlée, TLS vérifié. Une réussite technique ne valide pas la portée juridique..
- Dernier contrôle : **2026-09-28T17:44:19.184Z** ; **54/71** PDF reconnus. Les refus automatisés ne prouvent pas qu’un lien est cassé.

## Rafraîchir le registre

1. Exécuter `npm run check:links` avec un accès réseau ; les échecs produisent un code de sortie 1, un rapport complet et des mentions « à revérifier ». Les anciens rapports restent dans `research/link-checks/`.
2. Examiner les échecs dans un navigateur, retrouver la publication chez l’éditeur et corriger `data/documents.json`. Ne jamais inventer une URL ou remplacer le bouton PDF par une page HTML.
3. Rechercher les nouvelles versions et les arrêtés définitifs, consulter le PDF et consigner l’élément de preuve dans `evidence`. Le champ `verified` décrit la revue documentaire, le rapport JSON le contrôle réseau.
4. Exécuter `npm run sources && npm test && npm run build`. Relire les différences avant toute publication.

## Réaudit des documents-cadres — 28 septembre 2026

Revue complémentaire des **15 départements**, après signalement de pièces manquées. Les constats portent sur les sources examinées à cette date ; ils ne garantissent pas l’exhaustivité des archives administratives. Un échec de téléchargement ou une recherche infructueuse ne démontre jamais qu’un document n’existe pas.

### Corrections et pièces retrouvées

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

### Preuves et points de reprise

- [Meuse : PDF officiel du RAA, arrêté à la page 3](https://www.meuse.gouv.fr/contenu/telechargement/32381/233428/file/RAA%20n%C2%B051%20du%203%20juin%202025.pdf#page=3).
- [Aube : tableau indicatif officiel CRE, annexe 13](https://www.cre.fr/fileadmin/Documents/Appels_d_offres/2026/CDC_PPE2_Sol_P9.pdf#page=120). Les cellules vides de ce tableau ne prouvent pas une absence d’acte. [Index des RAA 2025 de l’Aube](https://www.aube.gouv.fr/Publications/Recueil-des-Actes-Administratifs-RAA2/RAA-2025) à reprendre autour du 24 juillet.
- [Aisne : index de l’atlas communal](https://pays-aisne.org/territoires/consultation-en-cours/) — ressource HTML explicitement identifiée ; chaque carte y possède son PDF propre. Aucun bouton PDF du catalogue ne cible cet index HTML.
- [Moselle : page d’approbation](https://www.moselle.gouv.fr/Actions-de-l-Etat/Energie/Energies-renouvelables/Planification-des-energies-renouvelables/Document-cadre/Arrete-approuvant-le-document-cadre) et [moteur des RAA](https://mc.moselle.gouv.fr/raa.html).
- [Nord : dossier de consultation et ressources parcellaires](https://www.nord.gouv.fr/Actions-de-l-Etat/Environnement/Information-et-participation-du-public/Les-projets-photovoltaiques/Consultation-du-public-Installation-photovoltaiques-sur-terres-agricoles-exploitees).

Les preuves détaillées, les URL et les limites de chaque lecture sont consignées dans `research/reaudit-est.md`, `research/reaudit-north.md` et `research/reaudit-uncertain.md`. Leurs JSON sont des propositions archivées ; `data/documents.json` reste la référence éditoriale.

### Migration et contrôles

Le catalogue initial a été récupéré à nouveau et comparé à l’archive locale : contenu inchangé. Ses **27 liens PDF** restent traçables dans le catalogue, directement ou via `previousPdfUrls`. Pour le Haut-Rhin, les deux téléchargements du cadre ont le SHA-256 `8e72576a9fea5a5f70c28f9856f53d4e4ff40025bb77f031859f5342e2b91ae9`.

Les annexes contenues dans un même PDF utilisent des liens `#page=N`, sans multiplier artificiellement le compteur de documents. Les cartes web et classeurs portent leur format propre dans les ressources associées. Les tentatives techniques datées sont conservées dans `research/link-checks/` ; elles sont distinctes des preuves documentaires. Des serveurs préfectoraux peuvent refuser temporairement les requêtes automatisées.


## Entrées et preuves

<a id="02-annexes-cadre"></a>

### 02-annexes-cadre — Liste signée des annexes à l’arrêté TE-26-002

- Territoire : Hauts-de-France / 02. Organisme : Préfecture de l’Aisne / DDT. Année : 2026. Type : Annexe au document-cadre.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.aisne.gouv.fr/contenu/telechargement/49997/370574/file/LISTE_ANNEXES_TE_26_002_SIGNEE.pdf)
- [Page source / provenance](https://www.aisne.gouv.fr/Actions-de-l-Etat/Consultations-et-Enquetes-publiques/Consultations-publiques/Energie/Document-cadre-photovoltaique/Document-cadre-photovoltaique)
- [Atlas cartographique communal — index des 798 PDF](https://pays-aisne.org/territoires/consultation-en-cours/) — Atlas PDF par commune ; revue : 2026-09-28.
- [Tableau identifiant les parcelles éligibles](https://pays-aisne.org/fileadmin/user_upload/329_pays_aisne/Fichiers_doc_cadre/Document_cadre_version_definitive/Tableau_identifiant_les_parcelles_eligibles_aux_installations_photovoltaiques.xlsx) — Tableur XLSX ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.337Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Bordereau signé qui énumère les cinq annexes validées : note explicative, notice réglementaire, rapport de synthèse, atlas cartographique et tableau parcellaire.
- Utilité : Contrôler la composition du document-cadre et accéder à l’atlas communal et au tableau parcellaire publiés séparément.
- Preuve / réserve : PDF officiel d’une page ouvert et reconnu par signature. La page préfectorale renvoie expressément vers Pays Aisne pour les cartes. Cette page publie un tableau parcellaire XLSX et 798 liens PDF libellés par commune : 796 sous Atlas_cartographique et deux liens courants dont le chemin de stockage contient Cartes__obselete_. Ce nom de dossier ne suffit pas à déclarer ces deux cartes périmées, puisqu’elles restent proposées dans la liste courante.

<a id="02-cadre"></a>

### 02-cadre — Arrêté n° TE-26-002 établissant le document-cadre photovoltaïque de l’Aisne

- Territoire : Hauts-de-France / 02. Organisme : Préfecture de l’Aisne / DDT. Année : 2026. Type : Arrêté préfectoral.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.aisne.gouv.fr/contenu/telechargement/49996/370569/file/ARRETE_TE_26_002_SIGNE.pdf)
- [Page source / provenance](https://www.aisne.gouv.fr/Actions-de-l-Etat/Consultations-et-Enquetes-publiques/Consultations-publiques/Energie/Document-cadre-photovoltaique/Document-cadre-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:20.486Z ; HTTP 206 ; type application/pdf.
- Résumé : Arrêté préfectoral qui approuve le document-cadre identifiant les surfaces agricoles, naturelles ou forestières ouvertes au photovoltaïque au sol dans l’Aisne.
- Utilité : Point d’entrée juridique du document-cadre ; à lire avec la liste signée des annexes, la note et la notice réglementaire.
- Preuve / réserve : PDF officiel de 4 pages ouvert ; intitulé TE-26-002 en page 1 et signature de la préfète datée du 26 mai 2026 en page 4.

<a id="02-notice"></a>

### 02-notice — Document-cadre de l’Aisne — note explicative, version définitive

- Territoire : Hauts-de-France / 02. Organisme : Préfecture de l’Aisne / Chambre d’agriculture de l’Aisne. Année : 2026. Type : Notice.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.aisne.gouv.fr/contenu/telechargement/49998/370579/file/Document%20cadre%20-%20Note%20explicative%20-%20version%20d%C3%A9finitive.pdf)
- [Page source / provenance](https://www.aisne.gouv.fr/Actions-de-l-Etat/Consultations-et-Enquetes-publiques/Consultations-publiques/Energie/Document-cadre-photovoltaique/Document-cadre-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:20.468Z ; HTTP 206 ; type application/pdf.
- Résumé : Note de 18 pages décrivant le champ du document-cadre, les catégories de surfaces retenues et la méthode de sélection.
- Utilité : Comprendre ce que signifie l’identification d’une parcelle et les limites de la cartographie avant tout prédiagnostic foncier.
- Preuve / réserve : PDF officiel ouvert ; couverture « version définitive », édition du 13 mai 2026, 18 pages.

<a id="02-notice-reglementaire"></a>

### 02-notice-reglementaire — Document-cadre de l’Aisne — notice réglementaire, version définitive

- Territoire : Hauts-de-France / 02. Organisme : Préfecture de l’Aisne / DDT. Année : 2026. Type : Notice réglementaire.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.aisne.gouv.fr/contenu/telechargement/49999/370584/file/Document%20cadre%20-%20Notice%20r%C3%A9glementaire%20-%20version%20d%C3%A9finitive.pdf)
- [Page source / provenance](https://www.aisne.gouv.fr/Actions-de-l-Etat/Consultations-et-Enquetes-publiques/Consultations-publiques/Energie/Document-cadre-photovoltaique/Document-cadre-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:20.483Z ; HTTP 206 ; type application/pdf.
- Résumé : Synthèse du régime des installations agrivoltaïques et des installations photovoltaïques compatibles sur terrains agricoles, naturels ou forestiers.
- Utilité : Distinguer les deux régimes et repérer les références juridiques et autorisations à instruire.
- Preuve / réserve : PDF officiel ouvert ; 3 pages et référence explicite aux articles L.111-29, L.111-30 et R.111-56 à R.111-64.

<a id="02-synthese-concertation"></a>

### 02-synthese-concertation — Document-cadre de l’Aisne — rapport de synthèse de la concertation, version définitive

- Territoire : Hauts-de-France / 02. Organisme : Préfecture de l’Aisne / Chambre d’agriculture de l’Aisne. Année : 2026. Type : Rapport de synthèse.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.aisne.gouv.fr/contenu/telechargement/50000/370589/file/Document%20cadre%20-%20Rapport%20de%20synth%C3%A8se%20-%20version%20d%C3%A9finitive.pdf)
- [Page source / provenance](https://www.aisne.gouv.fr/Actions-de-l-Etat/Consultations-et-Enquetes-publiques/Consultations-publiques/Energie/Document-cadre-photovoltaique/Document-cadre-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:20.809Z ; HTTP 206 ; type application/pdf.
- Résumé : Rapport très bref présentant la portée de la cartographie et les suites données aux observations de la concertation.
- Utilité : Repérer les réserves exprimées pendant l’élaboration et les limites d’interprétation de la carte.
- Preuve / réserve : PDF officiel ouvert ; 2 pages, intitulé version définitive et date d’édition interne du 8 septembre 2026.

<a id="08-cadre"></a>

### 08-cadre — Arrêté n° 2025-429 établissant le document-cadre photovoltaïque au sol des Ardennes

- Territoire : Grand Est / 08. Organisme : Préfecture des Ardennes / DDT des Ardennes. Année : 2025. Type : Arrêté et document-cadre.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.ardennes.gouv.fr/index.php/contenu/telechargement/14503/102929/file/AP_Ardennes.pdf)
- [Page source / provenance](https://www.ardennes.gouv.fr/index.php/layout/set/print/Actions-de-l-Etat/Environnement/Energie-Climat/Les-energies-renouvelables/Document-Cadre-PV-au-sol)
- [Annexe 1 — cartographies des parcelles (dans le PDF combiné)](https://www.ardennes.gouv.fr/index.php/contenu/telechargement/14503/102929/file/AP_Ardennes.pdf#page=5) — Annexe PDF ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.324Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : L’arrêté signé le 4 juillet 2025, publié le 8 juillet, comprend l’annexe 1 cartographiant à l’échelle parcellaire les surfaces retenues après consultation.
- Utilité : Lire les articles de l’arrêté puis les planches de l’annexe 1 pour identifier l’entité graphique retenue ; la carte ne dispense pas de l’instruction du projet.
- Preuve / réserve : Le RAA n° 8-2025-073 identifie l’acte 8-2025-07-04-00020, arrêté n° 2025-429. Son article 1 renvoie à l’annexe 1 ; les pages suivantes sont des planches intitulées « Annexe du document cadre — Cartographie des parcelles ». La page préfectorale ne publie qu’un PDF combiné de 8,75 Mo.

<a id="08-cdpenaf-consultations"></a>

### 08-cdpenaf-consultations — Cas de consultation de la CDPENAF des Ardennes

- Territoire : Grand Est / 08. Organisme : DDT des Ardennes. Année : 2021. Type : Fiche CDPENAF.
- Statut documentaire : **ancien**.
- [PDF direct](https://www.ardennes.gouv.fr/contenu/telechargement/4866/43159/file/annexe_ri_consult_cdpenaf_2021_adopte.pdf)
- [Page source / provenance](https://www.ardennes.gouv.fr/layout/set/print/Actions-de-l-Etat/Amenagement-du-territoire.-construction-et-logement/Amenagement-et-urbanisme/La-commission-departementale-de-la-preservation-des-espaces-naturels.-agricoles-et-forestiers/La-commission-departementale-de-la-preservation-des-espaces-naturels.-agricoles-et-forestiers)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:21.194Z ; HTTP 206 ; type application/pdf.
- Résumé : Tableau des cas de saisine, délais et nature des avis de la CDPENAF.
- Utilité : Repère procédural à confronter aux règles APER et au décret de 2024.
- Preuve / réserve : PDF ouvert ; annexe au règlement intérieur adoptée en 2021, donc signalée comme ancienne.

<a id="08-charte"></a>

### 08-charte — Charte pour un développement maîtrisé des projets photovoltaïques en secteur agricole — Ardennes

- Territoire : Grand Est / 08. Organisme : Chambre d’agriculture des Ardennes et signataires. Année : 2023. Type : Charte.
- Statut documentaire : **recommandation**.
- [PDF direct](https://ardennes.chambres-agriculture.fr/fileadmin/user_upload/269_chambre_dagriculture_des_ardennes/Actualites/2025/CHARTE_PV_08_signee_le_28_nov_2023_signature_Cretes.pdf)
- [Page source / provenance](https://ardennes.chambres-agriculture.fr/fileadmin/user_upload/269_chambre_dagriculture_des_ardennes/Actualites/2025/CHARTE_PV_08_signee_le_28_nov_2023_signature_Cretes.pdf)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:20.961Z ; HTTP 206 ; type application/pdf.
- Résumé : Charte professionnelle signée le 28 novembre 2023 pour encadrer le développement solaire en secteur agricole.
- Utilité : Identifier les attentes de la profession agricole en complément du cadre légal de 2024-2025.
- Preuve / réserve : PDF signé ouvert ; document antérieur au document-cadre départemental.

<a id="10-projet"></a>

### 10-projet — Note de présentation du projet d’arrêté portant approbation du document-cadre de l’Aube

- Territoire : Grand Est / 10. Organisme : DDT de l’Aube. Année : 2025. Type : Note de présentation.
- Statut documentaire : **projet**.
- [PDF direct](https://www.aube.gouv.fr/contenu/telechargement/41475/294807/file/Projet%20d%27arr%C3%AAt%C3%A9%20portant%20approbation%20du%20document-cadre_note%20de%20pr%C3%A9sentation.pdf)
- [Page source / provenance](https://www.aube.gouv.fr/contenu/telechargement/41475/294807/file/Projet%20d%27arr%C3%AAt%C3%A9%20portant%20approbation%20du%20document-cadre_note%20de%20pr%C3%A9sentation.pdf)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:21.132Z ; HTTP 206 ; type application/pdf.
- Résumé : Note relative à la consultation du 30 avril au 23 mai 2025 ; elle annonce treize sites proposés.
- Utilité : Comprendre la genèse du projet ; ne pas l’utiliser comme décision opposable.
- Preuve / réserve : PDF ouvert ; le titre et le corps indiquent explicitement « projet » et une consultation publique.

<a id="10-projet-arrete"></a>

### 10-projet-arrete — Projet d’arrêté portant approbation du document-cadre de l’Aube au titre de l’article L.111-29

- Territoire : Grand Est / 10. Organisme : DDT de l’Aube. Année : 2025. Type : Projet d’arrêté et document-cadre.
- Statut documentaire : **projet**.
- [PDF direct](https://www.aube.gouv.fr/contenu/telechargement/41471/294787/file/Projet%20d%27arr%C3%AAt%C3%A9%20portant%20approbationdu%20document-cadre%20au%20titre%20de%20l%27article%20L.111-29%20du%20Code%20de%20l%27urbanisme.pdf)
- [Page source / provenance](https://www.aube.gouv.fr/contenu/telechargement/41471/294787/file/Projet%20d%27arr%C3%AAt%C3%A9%20portant%20approbationdu%20document-cadre%20au%20titre%20de%20l%27article%20L.111-29%20du%20Code%20de%20l%27urbanisme.pdf)
- [CRE — dates de signature et publication de l’arrêté final](https://www.cre.fr/fileadmin/Documents/Appels_d_offres/2026/CDC_PPE2_Sol_P9.pdf#page=120) — PDF de référence ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.355Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Projet de 32 pages comprenant les critères et les treize sites proposés après les consultations préalables. Un arrêté définitif distinct a ensuite été signé le 22 juillet 2025 et publié le 24 juillet 2025.
- Utilité : Conserver ce PDF comme version de consultation ; retrouver le PDF final publié au RAA avant de l’utiliser comme décision.
- Preuve / réserve : Le PDF préfectoral est explicitement un projet, avec numéro incomplet et sans signature. L’annexe 13 du cahier des charges CRE PPE2 Sol P9 (PDF officiel publié en 2026, p. 120 du fichier / p. 118 imprimée) donne pour l’Aube : signature du premier arrêté le 22/07/2025 et publication le 24/07/2025. La précédente formule « aucune version signée retrouvée » ne doit donc pas être transformée en constat d’absence ; le PDF final direct du RAA reste à localiser.

<a id="51-cadre"></a>

### 51-cadre — Arrêté n° 51-2025-001 — Document Cadre 51, photovoltaïque au sol agri-compatible

- Territoire : Grand Est / 51. Organisme : Préfecture de la Marne / DDT de la Marne. Année : 2025. Type : Arrêté et document-cadre.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.marne.gouv.fr/index.php/contenu/telechargement/51307/365966/file/ap-051-2025-001-Marne.pdf)
- [Page source / provenance](https://www.marne.gouv.fr/index.php/Actions-de-l-Etat/Amenagement-du-territoire/Urbanisme/Document-Cadre-51-Photovoltaique-au-Sol-Agri-compatible)
- [Annexe AP n° 51/2025/001 — liste des parcelles (RAA n° 51-2025-128, p. 6)](https://www.marne.gouv.fr/contenu/telechargement/50309/360059/file/recueil-51-2025-128-recueil-des-actes-administratifs-1.pdf#page=6) — Annexe PDF ; revue : 2026-09-28.
- [Cartographie interactive du document-cadre](https://carto2.geo-ide.din.developpement-durable.gouv.fr/frontoffice/?map=91bd85a6-665b-44bc-9133-771be338d7b7) — Carte interactive ; revue : 2026-09-28.
- [Métadonnées et accès au jeu de données Geo-IDE](http://catalogue.geo-ide.developpement-durable.gouv.fr/catalogue/srv/fre/catalog.search#/metadata/fr-120066022-jdd-9ff3bc94-9550-49ab-a3be-f3d8f56af5f8) — Jeu de données ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.371Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : L’acte publié réunit les critères littéraux et l’annexe AP n° 51/2025/001 qui liste les surfaces cartographiées ; la carte interactive et la fiche de jeu de données sont publiées séparément.
- Utilité : Confronter la liste parcellaire à la carte Geo-IDE et aux critères littéraux, la page officielle précisant que la cartographie n’est pas exhaustive.
- Preuve / réserve : La page préfectorale énumère trois composantes : arrêté, annexe listant les surfaces et cartographie. Le RAA n° 51-2025-128 contient l’annexe à partir de la page 6 et précise que l’acte 51-2025-07-25-00008 annule et remplace la publication antérieure. Entrée en vigueur annoncée au 4 septembre 2025.

<a id="51-cdpenaf-pv"></a>

### 51-cdpenaf-pv — Règles de compétence et d’avis CDPENAF pour les installations agrivoltaïques et photovoltaïques

- Territoire : Grand Est / 51. Organisme : DDT de la Marne. Année : 2025. Type : Fiche CDPENAF.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.marne.gouv.fr/index.php/contenu/telechargement/51483/367074/file/qu%27est%2Bce%2Bque%2Bla%2BCDPENAF.pdf)
- [Page source / provenance](https://www.marne.gouv.fr/index.php/layout/set/print/Actions-de-l-Etat/Amenagement-du-territoire/Urbanisme/Procedures-d-amenagement/Commission-Departementale-de-la-Preservation-des-Espaces-Naturels-Agricoles-et-Forestiers-CDPENAF)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:21.489Z ; HTTP 206 ; type application/pdf.
- Résumé : Tableau synthétique de l’autorité compétente, du type d’avis, de l’audition et des délais selon le type d’installation solaire.
- Utilité : Sécuriser le calendrier et la stratégie de présentation devant la CDPENAF.
- Preuve / réserve : PDF ouvert ; il cite la loi APER et le décret du 8 avril 2024.

<a id="52-cadre"></a>

### 52-cadre — Document-cadre photovoltaïque de la Haute-Marne — texte, cartes, liste parcellaire et annexe paysagère

- Territoire : Grand Est / 52. Organisme : Préfecture de la Haute-Marne / Chambre d’agriculture Aube & Haute-Marne. Année : 2025. Type : Document-cadre.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.haute-marne.gouv.fr/index.php/contenu/telechargement/29605/223913/file/20250627_Document%20cadre%20Art%20L111-29%20-%20Haute%20Marne.pdf)
- [Page source / provenance](https://www.haute-marne.gouv.fr/index.php/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme/Energies-renouvelables/Document-cadre-sur-le-photovoltaique-au-sol)
- [Cartographie générale, cartes par site et liste cadastrale (dans le PDF)](https://www.haute-marne.gouv.fr/index.php/contenu/telechargement/29605/223913/file/20250627_Document%20cadre%20Art%20L111-29%20-%20Haute%20Marne.pdf#page=9) — Annexe PDF ; revue : 2026-09-28.
- [Annexe 1 — charte paysagère (dans le PDF)](https://www.haute-marne.gouv.fr/index.php/contenu/telechargement/29605/223913/file/20250627_Document%20cadre%20Art%20L111-29%20-%20Haute%20Marne.pdf#page=17) — Annexe PDF ; revue : 2026-09-28.
- [Observatoire départemental des friches cité par le document-cadre](https://www.haute-marne.gouv.fr/index.php/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme/Observatoire-departemental-des-friches) — Carte interactive ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.514Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Version modifiée après consultation : méthode, quatre sites totalisant 14,87 ha, carte générale, cartes par site, liste des parcelles cadastrales et annexe 1 consacrée à l’intégration paysagère.
- Utilité : Identifier les quatre entités retenues, leurs parcelles et surfaces, puis appliquer les recommandations paysagères annexées au document final.
- Preuve / réserve : Le RAA n° 65 du 8 août 2025 reproduit l’arrêté n° 52-2025-07-00173 et son document annexé. Celui-ci annonce quatre sites sur Bettancourt-la-Ferrée, Chamouilley, Rolampont et Valcourt, comporte une cartographie générale, quatre cartes de site, une liste cadastrale et l’« Annexe 1 : charte paysagère ». La page officielle fournit séparément l’arrêté et le document-cadre de 5,72 Mo.

<a id="52-cadre-arrete"></a>

### 52-cadre-arrete — Arrêté n° 52-2025-07-00173 approuvant le document-cadre photovoltaïque de la Haute-Marne

- Territoire : Grand Est / 52. Organisme : Préfecture de la Haute-Marne. Année : 2025. Type : Arrêté préfectoral.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.haute-marne.gouv.fr/index.php/contenu/telechargement/29608/223928/file/20250721_AP_document_cadre.pdf)
- [Page source / provenance](https://www.haute-marne.gouv.fr/index.php/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme/Energies-renouvelables/Document-cadre-sur-le-photovoltaique-au-sol)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:21.502Z ; HTTP 206 ; type application/pdf.
- Résumé : Acte préfectoral signé approuvant le document-cadre départemental.
- Utilité : Établir la base juridique du document-cadre et sa date d’approbation.
- Preuve / réserve : PDF d’arrêté ouvert ; la page officielle le désigne comme arrêté d’approbation.

<a id="52-charte"></a>

### 52-charte — Charte départementale pour un développement maîtrisé et concerté des projets photovoltaïques au sol en Haute-Marne

- Territoire : Grand Est / 52. Organisme : Préfecture, Chambre d’agriculture et signataires de Haute-Marne. Année : 2022. Type : Charte.
- Statut documentaire : **ancien**.
- [PDF direct](https://www.haute-marne.gouv.fr/contenu/telechargement/21256/174121/file/221201_Charte_Signee.pdf)
- [Page source / provenance](https://www.haute-marne.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme/Energies-renouvelables/Ressources-utiles/Signature-de-la-charte-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:21.703Z ; HTTP 206 ; type application/pdf.
- Résumé : Charte signée le 1er décembre 2022, antérieure au régime APER et au document-cadre 2025.
- Utilité : Comprendre les attentes historiques de concertation et de préservation des terres.
- Preuve / réserve : PDF signé ouvert ; à lire avec ses trois annexes et à confronter au cadre 2025.

<a id="52-charte-carte"></a>

### 52-charte-carte — Annexe 3 à la charte photovoltaïque de Haute-Marne — cartographie

- Territoire : Grand Est / 52. Organisme : Préfecture de la Haute-Marne. Année : 2022. Type : Annexe cartographique.
- Statut documentaire : **ancien**.
- [PDF direct](https://www.haute-marne.gouv.fr/contenu/telechargement/21259/174136/file/2022_annexe3_carte-compress%C3%A9.pdf)
- [Page source / provenance](https://www.haute-marne.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme/Energies-renouvelables/Ressources-utiles/Signature-de-la-charte-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:21.783Z ; HTTP 206 ; type application/pdf.
- Résumé : Cartographie annexée à la charte départementale de 2022.
- Utilité : Contexte territorial historique ; ne pas substituer à la cartographie du document-cadre 2025.
- Preuve / réserve : PDF cartographique ouvert ; signalé comme ancien car antérieur au document-cadre approuvé.

<a id="52-charte-paysage"></a>

### 52-charte-paysage — Annexe 1 à la charte photovoltaïque de Haute-Marne — recommandations paysagères

- Territoire : Grand Est / 52. Organisme : Préfecture de la Haute-Marne. Année : 2022. Type : Annexe paysagère.
- Statut documentaire : **ancien**.
- [PDF direct](https://www.haute-marne.gouv.fr/contenu/telechargement/21257/174126/file/2022_annexe1_paysage.pdf)
- [Page source / provenance](https://www.haute-marne.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme/Energies-renouvelables/Ressources-utiles/Signature-de-la-charte-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:21.863Z ; HTTP 206 ; type application/pdf.
- Résumé : Annexe technique consacrée à l’insertion paysagère des centrales au sol.
- Utilité : Préparer le choix du site, les vues et les mesures d’insertion.
- Preuve / réserve : PDF ouvert depuis la page officielle de la charte 2022.

<a id="52-charte-sols"></a>

### 52-charte-sols — Annexe 2 à la charte photovoltaïque de Haute-Marne — analyse des sols

- Territoire : Grand Est / 52. Organisme : Préfecture de la Haute-Marne. Année : 2022. Type : Annexe pédologique.
- Statut documentaire : **ancien**.
- [PDF direct](https://www.haute-marne.gouv.fr/contenu/telechargement/21258/174131/file/2022_Annexe2_analyse_sols.pdf)
- [Page source / provenance](https://www.haute-marne.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-urbanisme/Energies-renouvelables/Ressources-utiles/Signature-de-la-charte-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:21.823Z ; HTTP 206 ; type application/pdf.
- Résumé : Méthode historique d’analyse pédologique et agronomique liée à la charte.
- Utilité : Documenter la qualité agricole d’un site, avec prudence depuis le cadre APER.
- Preuve / réserve : PDF ouvert depuis la page officielle de la charte 2022.

<a id="54-agri"></a>

### 54-agri — Agrivoltaïsme en Meurthe-et-Moselle — prescriptions et conditions des organisations professionnelles agricoles

- Territoire : Grand Est / 54. Organisme : Chambre d’agriculture de Meurthe-et-Moselle et organisations professionnelles agricoles. Année : 2024. Type : Guide professionnel.
- Statut documentaire : **recommandation**.
- [PDF direct](https://meurthe-et-moselle.chambres-agriculture.fr/fileadmin/user_upload/274_chambre_dagriculture_de_meurthe-et-moselle/Environnement/Energies/Planche_Agrivoltaisme_en_Meurthe-et-Moselle_Prescriptions_et_conditions_des_organisations_professionnelles_agricoles.pdf)
- [Page source / provenance](https://meurthe-et-moselle.chambres-agriculture.fr/sinformer/ressources-documentation/environnement/energies/agrivoltaisme)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:21.904Z ; HTTP 206 ; type application/pdf.
- Résumé : Prescriptions professionnelles agricoles datées de novembre 2024.
- Utilité : Orienter la conception et la concertation avec la profession agricole.
- Preuve / réserve : PDF ouvert depuis la page de la Chambre d’agriculture.

<a id="54-cadre"></a>

### 54-cadre — Arrêté approuvant le document-cadre photovoltaïque de Meurthe-et-Moselle

- Territoire : Grand Est / 54. Organisme : Préfecture de Meurthe-et-Moselle / Chambre d’agriculture de Meurthe-et-Moselle. Année : 2026. Type : Arrêté et document-cadre.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.meurthe-et-moselle.gouv.fr/index.php/contenu/telechargement/36375/274404/file/AP_signe_document_cadre_photovoltaique.pdf)
- [Page source / provenance](https://www.meurthe-et-moselle.gouv.fr/index.php/Actions-de-l-Etat/Environnement/Energies-renouvelables/Document-cadre-agricole/Document-cadre-agricole)
- [Texte méthodologique soumis à consultation en 2025](https://www.meurthe-et-moselle.gouv.fr/contenu/telechargement/35470/267733/file/Projet_document_cadre_54v2.pdf) — Version de consultation ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.482Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Le document-cadre conclut que le département ne retient pas de surfaces cadastrales supplémentaires comme terres incultes ; le périmètre repose sur les catégories de l’article R.111-58, dont l’identification cadastrale n’est pas requise.
- Utilité : Comprendre la méthode départementale et vérifier qu’un terrain relève effectivement d’une catégorie de l’article R.111-58, sans attendre un atlas parcellaire qui n’est pas prévu par cette méthode.
- Preuve / réserve : La page officielle publie un unique PDF signé de 5,51 Mo. Le document-cadre de la Chambre d’agriculture, validé en session le 25 novembre 2024 et publié dans le dossier de consultation, indique qu’aucune terre inculte n’a été retenue hors terrains pollués, inexploitables ou artificialisés et rappelle l’exemption de cartographie des surfaces de l’article R.111-58. La recherche n’établit donc pas l’existence d’un atlas cadastral séparé et n’en affirme pas l’absence absolue.

<a id="55-charte"></a>

### 55-charte — Charte relative à la production d’énergie photovoltaïque au sol en Meuse

- Territoire : Grand Est / 55. Organisme : Signataires de la charte / Association des maires de Meuse. Année : 2022. Type : Charte.
- Statut documentaire : **ancien**.
- [PDF direct](https://www.mairesdemeuse.com/userfile/fichier-telechargement/1728553367-Charte-Photovoltaique-Meuse---2022.pdf)
- [Page source / provenance](https://www.mairesdemeuse.com/environnement-et-developpement-durable)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:44:19.549Z ; HTTP 206 ; type application/pdf.
- Résumé : Charte signée en septembre 2022, antérieure à la loi APER et à son décret d’application.
- Utilité : Comprendre la doctrine locale historique en la distinguant du document-cadre préfectoral de 2025.
- Preuve / réserve : PDF signé de quatre pages ouvert. La réserve antérieure selon laquelle aucune décision document-cadre n’avait été retrouvée est périmée : l’arrêté préfectoral n° 2025-867 du 20 mai 2025 figure au RAA n° 51 du 3 juin 2025.

<a id="55-livret"></a>

### 55-livret — Loi APER et photovoltaïque — guide à destination des collectivités de Meuse

- Territoire : Grand Est / 55. Organisme : Chambre d’agriculture de la Meuse. Année : 2025. Type : Guide.
- Statut documentaire : **recommandation**.
- [PDF direct](https://meuse.chambres-agriculture.fr/fileadmin/user_upload/275_chambre_dagriculture_de_meuse/Energies/Livret-DC_loiAPERetphotovoltaique.pdf)
- [Page source / provenance](https://meuse.chambres-agriculture.fr/fileadmin/user_upload/275_chambre_dagriculture_de_meuse/Energies/Livret-DC_loiAPERetphotovoltaique.pdf)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:22.056Z ; HTTP 206 ; type application/pdf.
- Résumé : Livret pédagogique sur la loi APER, le document-cadre et les projets photovoltaïques destiné aux collectivités.
- Utilité : Présenter le nouveau cadre aux élus et préparer les échanges territoriaux.
- Preuve / réserve : PDF ouvert sur le domaine officiel de la Chambre d’agriculture de la Meuse.

<a id="57-cahier"></a>

### 57-cahier — Cahier des charges de présentation des projets photovoltaïques sur terres agricoles en Moselle

- Territoire : Grand Est / 57. Organisme : Préfecture de la Moselle / CDPENAF. Année : 2024. Type : Cahier des charges.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.moselle.gouv.fr/contenu/telechargement/32371/250718/file/2024%2006%2020%20CdC%20CDPENAF%20projets%20PV%20terresA%20final.pdf)
- [Page source / provenance](https://www.moselle.gouv.fr/Actions-de-l-Etat/Energie/Energies-renouvelables/Accompagnement-des-porteurs-de-projets/Photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:22.143Z ; HTTP 206 ; type application/pdf.
- Résumé : Liste des pièces et informations attendues pour présenter un projet solaire sur terres agricoles.
- Utilité : Préparer un dossier conforme aux attentes locales de la CDPENAF.
- Preuve / réserve : PDF final ouvert ; la page préfectorale précise une modification après la CDPENAF du 11 juin 2024.

<a id="57-consult"></a>

### 57-consult — Projet de document-cadre photovoltaïque au sol en Moselle

- Territoire : Grand Est / 57. Organisme : Préfecture de la Moselle / Chambre d’agriculture de la Moselle. Année : 2026. Type : Projet de document-cadre.
- Statut documentaire : **projet**.
- [PDF direct](https://www.moselle.gouv.fr/contenu/telechargement/36137/276285/file/20250519_PROJET_DOCUMENT_CADRE_MOSELLE.pdf)
- [Page source / provenance](https://www.moselle.gouv.fr/Actions-de-l-Etat/Energie/Energies-renouvelables/Planification-des-energies-renouvelables/Document-cadre/Consultation-du-document-cadre)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.541Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Projet cartographique validé par le bureau de la Chambre d’agriculture le 19 décembre 2024 et soumis à consultation par la préfecture.
- Utilité : Source de travail provisoire ; contrôler la page préfectorale et le RAA avant tout usage comme cadre approuvé.
- Preuve / réserve : PDF officiel de 49 pages ouvert ; il indique que le cadre doit être établi par arrêté préfectoral. La page préfectorale « Arrêté approuvant le document cadre », mise à jour le 13/03/2026, emploie encore le futur (« sera approuvé prochainement »). Le tableau indicatif CRE publié en 2026 ne donne pas de date pour la Moselle. Ces contrôles bornent l’incertitude mais ne prouvent pas qu’aucun acte n’a été pris ou publié ailleurs depuis.

<a id="59-cdpenaf-aper-2024"></a>

### 59-cdpenaf-aper-2024 — Loi APER et décret du 8 avril 2024 — présentation photovoltaïque à la CDPENAF du Nord

- Territoire : Hauts-de-France / 59. Organisme : DDTM du Nord. Année : 2024. Type : Support CDPENAF.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.nord.gouv.fr/contenu/telechargement/97283/691767/file/annexe_PV_CDPENAF_11072024_decret%208%20avril%202024.pdf)
- [Page source / provenance](https://www.nord.gouv.fr/contenu/telechargement/97283/691767/file/annexe_PV_CDPENAF_11072024_decret%208%20avril%202024.pdf)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:22.294Z ; HTTP 206 ; type application/pdf.
- Résumé : Présentation de la DDTM sur le décret agrivoltaïque, les installations compatibles, le document-cadre et des décisions de jurisprudence administrative.
- Utilité : Lire la grille d’analyse locale employée devant la CDPENAF et les points de vigilance sur la réalité et la pérennité de l’activité agricole.
- Preuve / réserve : PDF officiel de 13 pages ouvert ; en-tête DDTM et contenu explicitement structuré autour des quatre régimes d’installation.

<a id="59-consult"></a>

### 59-consult — Fascicule accompagnant la proposition de document-cadre photovoltaïque au sol du Nord

- Territoire : Hauts-de-France / 59. Organisme : Chambre d’agriculture Nord–Pas-de-Calais. Année : 2024. Type : Projet de document-cadre.
- Statut documentaire : **projet**.
- [PDF direct](https://www.nord.gouv.fr/contenu/telechargement/101867/719881/file/20241125%20fascicule%20justifiant%20la%20proposition%20de%20document%20cadre%20de%20la%20CA%20%28Nord%29%20pptx-1.pdf)
- [Page source / provenance](https://www.nord.gouv.fr/Actions-de-l-Etat/Environnement/Information-et-participation-du-public/Les-projets-photovoltaiques/Consultation-du-public-Installation-photovoltaiques-sur-terres-agricoles-exploitees)
- [Carte dynamique du projet soumis à consultation](https://umap.openstreetmap.fr/fr/map/photovoltaique-au-sol_1230518#9/50.5667/3.1256) — Carte interactive ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.675Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Fascicule de la Chambre d’agriculture justifiant la proposition cartographique soumise à consultation dans le Nord.
- Utilité : Lire avec la liste parcellaire ODS et la carte dynamique publiées sur la même page ; ne pas le traiter comme l’arrêté final.
- Preuve / réserve : PDF officiel de 18 pages ouvert, daté du 25 novembre 2024. La page de consultation publie aussi une liste des parcelles au format ODS, une carte dynamique (https://umap.openstreetmap.fr/fr/map/photovoltaique-au-sol_1230518#9/50.5667/3.1256), un projet d’arrêté et un avis de participation signé. Le tableau indicatif CRE publié en 2026 ne donne pas de date pour le Nord. L’acte final reste donc non résolu dans ce réaudit, sans conclusion d’inexistence.

<a id="59-projet-arrete"></a>

### 59-projet-arrete — Projet d’arrêté préfectoral approuvant le document-cadre photovoltaïque du Nord

- Territoire : Hauts-de-France / 59. Organisme : Préfecture du Nord / DDTM. Année : 2025. Type : Projet d’arrêté.
- Statut documentaire : **projet**.
- [PDF direct](https://www.nord.gouv.fr/contenu/telechargement/101730/719089/file/25%2007%2010%20Projet%20AP%20Document%20Cadre.pdf)
- [Page source / provenance](https://www.nord.gouv.fr/Actions-de-l-Etat/Environnement/Information-et-participation-du-public/Les-projets-photovoltaiques/Consultation-du-public-Installation-photovoltaiques-sur-terres-agricoles-exploitees)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.674Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Projet d’arrêté mis à disposition lors de la consultation du public de 2025, mentionnant l’avis favorable de la CDPENAF du 15 mai 2025.
- Utilité : Documenter l’état avancé de la procédure tout en recherchant une version signée et sa publication au RAA.
- Preuve / réserve : PDF officiel de deux pages ouvert ; le fichier est explicitement nommé « Projet AP » et ne comporte ni date d’arrêté ni signature. La page source demeure une consultation et le tableau indicatif CRE publié en 2026 ne donne pas de date pour le Nord. Cela justifie le statut « projet » de ce fichier précis, mais pas une affirmation générale d’absence d’arrêté.

<a id="60-ads-agrivoltaisme"></a>

### 60-ads-agrivoltaisme — Note ADS n°106 — agrivoltaïsme et photovoltaïque compatible

- Territoire : Hauts-de-France / 60. Organisme : DDT de l’Oise. Année : 2025. Type : Doctrine DDT.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.oise.gouv.fr/contenu/telechargement/88396/638710/file/A_106_%20%20agrivolta%C3%AFsme%20et%20PV%20compatibles.pdf)
- [Page source / provenance](https://www.oise.gouv.fr/Actions-de-l-Etat/Amenagement-durable-du-territoire/Application-du-droit-des-sols-ADS-dans-l-Oise/Note-ADS/L-agrivoltaisme-et-le-PV-compatible)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:22.627Z ; HTTP 206 ; type application/pdf.
- Résumé : Fiche opérationnelle de la DDT sur les critères de qualification, la compétence d’autorisation, les garanties financières, le contrôle et la remise en état.
- Utilité : Préparer un dossier d’urbanisme dans l’Oise et vérifier si le projet relève de l’agrivoltaïsme ou du photovoltaïque compatible.
- Preuve / réserve : PDF officiel de 6 pages ouvert ; note n°106 actualisée le 3 février 2025.

<a id="60-cadre"></a>

### 60-cadre — Arrêté préfectoral approuvant le document-cadre photovoltaïque de l’Oise

- Territoire : Hauts-de-France / 60. Organisme : Préfecture de l’Oise / DDT. Année : 2025. Type : Arrêté préfectoral.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.oise.gouv.fr/contenu/telechargement/89724/647126/file/AP%20concernant%20le%20document%20cadre%20photovolta%C3%AFque.pdf)
- [Page source / provenance](https://www.oise.gouv.fr/Actions-de-l-Etat/Amenagement-durable-du-territoire/Transition-Ecologique-et-Energetique/Document-cadre-photovoltaique/Le-document-cadre-photovoltaique)
- [Webcartographie du document-cadre de l’Oise](https://carto2.geo-ide.din.developpement-durable.gouv.fr/frontoffice/?map=211bd9a4-c130-4639-b52e-6b6838900589) — Carte interactive ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.709Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Arrêté qui approuve le document-cadre et sa cartographie pour l’Oise.
- Utilité : Base juridique pour vérifier l’éligibilité foncière d’un projet non agrivoltaïque, avec la notice et la webcartographie officielles.
- Preuve / réserve : PDF officiel de deux pages, signé à Beauvais le 12 juin 2025, reconnu par signature. La page finale de la préfecture énumère séparément la webcartographie, l’arrêté signé et la notice ; la carte Geo-IDE répondait en HTTP 200 le 28 septembre 2026.

<a id="60-charte-photovoltaique-2025"></a>

### 60-charte-photovoltaique-2025 — Charte pour le développement de projets photovoltaïques dans l’Oise

- Territoire : Hauts-de-France / 60. Organisme : Chambre d’agriculture de l’Oise et organisations signataires. Année : 2025. Type : Charte.
- Statut documentaire : **recommandation**.
- [PDF direct](https://hautsdefrance.chambres-agriculture.fr/fileadmin/user_upload/249_chambres_dagriculture_des_hauts-de-france_/1-Actualites/2025/Charte_photovoltaique_OISE_2025-10-20.pdf)
- [Page source / provenance](https://hautsdefrance.chambres-agriculture.fr/actualites/actualite/la-profession-agricole-de-loise-signe-sa-charte-departementale-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:22.506Z ; HTTP 206 ; type application/pdf.
- Résumé : Charte agricole fixant l’ordre de priorité des implantations et des garde-fous sur la taille, le portage, les contrats, le partage de valeur et le suivi.
- Utilité : Confronter un projet aux attentes concertées de la profession agricole et de partenaires départementaux avant saisine des services.
- Preuve / réserve : PDF officiel de 12 pages ouvert ; article de la Chambre mis à jour le 14 novembre 2025 et indiquant une signature le 20 octobre 2025.

<a id="60-notice-cadre"></a>

### 60-notice-cadre — Document-cadre photovoltaïque de l’Oise — notice explicative

- Territoire : Hauts-de-France / 60. Organisme : Préfecture de l’Oise / Chambre d’agriculture de l’Oise. Année : 2024. Type : Notice.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.oise.gouv.fr/contenu/telechargement/89725/647131/file/Notice%20document%20cadre%2060.pdf)
- [Page source / provenance](https://www.oise.gouv.fr/Actions-de-l-Etat/Amenagement-durable-du-territoire/Transition-Ecologique-et-Energetique/Document-cadre-photovoltaique/Le-document-cadre-photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:22.698Z ; HTTP 206 ; type application/pdf.
- Résumé : Notice de décembre 2024 décrivant la portée, les catégories de terrains et la méthode d’élaboration du document-cadre de l’Oise.
- Utilité : Interpréter correctement la cartographie approuvée et connaître les critères appliqués aux surfaces proposées.
- Preuve / réserve : PDF officiel de 19 pages ouvert ; couverture « Décembre 2024 » et renvoi explicite à l’article L.111-29.

<a id="62-cadre"></a>

### 62-cadre — Arrêté n°62-2025-12-19-00006 du 19 décembre 2025 relatif au document-cadre photovoltaïque du Pas-de-Calais

- Territoire : Hauts-de-France / 62. Organisme : Préfecture du Pas-de-Calais. Année : 2025. Type : Arrêté préfectoral et annexes.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.pas-de-calais.gouv.fr/index.php/contenu/telechargement/83896/526887/file/Recueil%20des%20actes%20administratifs%20n%C2%B0352%20en%20date%20du%2024%20d%C3%A9cembre%202025.pdf#page=21)
- [Page source / provenance](https://www.pas-de-calais.gouv.fr/index.php/Actions-de-l-Etat/Environnement-developpement-durable/Energie/Photovoltaique/Document-cadre)
- [Cartographie dynamique publiée lors de la consultation](https://carto2.geo-ide.din.developpement-durable.gouv.fr/frontoffice/?map=43f90ee9-1138-4a0f-b852-7d4d04c9cc99) — Carte interactive — consultation ; revue : 2026-09-28.
- [Dossier de consultation et tableau des parcelles](https://www.pas-de-calais.gouv.fr/Publications/Consultation-du-public/Participation-du-public-par-voie-electronique/Projets-photovoltaiques-dans-le-Pas-de-Calais) — Page de consultation ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.723Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Arrêté final et annexes du document-cadre, publiés au recueil des actes administratifs n°62-2025-352.
- Utilité : Remplace le projet soumis à consultation ; le bloc utile commence à la page 21 du recueil PDF.
- Preuve / réserve : Recueil PDF officiel de 47 pages reconnu par signature ; son sommaire et la page 21 identifient l’arrêté final 62-2025-12-19-00006, publié le 24 décembre 2025. La page de consultation antérieure publie cinq PDF, annonce un tableau des parcelles et donne une carte Geo-IDE qui répondait en HTTP 200 le 28 septembre 2026. Cette carte reste qualifiée ici de carte de consultation tant que le recueil final ne confirme pas explicitement que son contenu est inchangé.

<a id="62-paysage"></a>

### 62-paysage — Guide photovoltaïque & paysage — les paysages de l’énergie solaire dans le Pas-de-Calais

- Territoire : Hauts-de-France / 62. Organisme : Préfecture du Pas-de-Calais / DDTM. Année : 2025. Type : Guide.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.pas-de-calais.gouv.fr/contenu/telechargement/81437/511892/file/GUIDE%20PHOTOVOLTA%C3%8FQUE%20%26%20PAYSAGE.pdf)
- [Page source / provenance](https://www.pas-de-calais.gouv.fr/Actions-de-l-Etat/Environnement-developpement-durable/Energie/Photovoltaique)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:22.900Z ; HTTP 206 ; type application/pdf.
- Résumé : Guide illustré sur le choix du site, les structures paysagères, l’implantation, les limites, les accès, les plantations et les différentes formes de solaire.
- Utilité : Anticiper les attentes paysagères du département dès la conception et préparer l’étude d’impact.
- Preuve / réserve : PDF officiel de 55 pages ouvert ; fichier publié sur la page photovoltaïque préfectorale le 21 mai 2025.

<a id="67-cadre"></a>

### 67-cadre — Document-cadre photovoltaïque au sol du Bas-Rhin

- Territoire : Grand Est / 67. Organisme : Préfecture du Bas-Rhin / Chambre d’agriculture d’Alsace. Année : 2025. Type : Document-cadre.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.bas-rhin.gouv.fr/contenu/telechargement/58922/422368/file/Document-cadre%20PV.pdf)
- [Page source / provenance](https://www.bas-rhin.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/Document-cadre-sur-le-photovoltaique-au-sol)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.829Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Document-cadre alsacien final : après tests cartographiques, il ne retient pas d’identification parcellaire complémentaire et ouvre les seules typologies de terrains de l’article R.111-58, sous réserve des conditions d’inculture ou de non-exploitation.
- Utilité : Qualifier le terrain par ses caractéristiques réglementaires et produire les justificatifs demandés ; le document ne fournit pas un atlas parcellaire à consulter.
- Preuve / réserve : La page finale du Bas-Rhin publie séparément l’arrêté, le document-cadre et l’avis CDPENAF. La proposition alsacienne annexée à la consultation expose les tests cartographiques et la décision de ne pas retenir d’approche parcellaire, faute de sites assurément incultes ou non exploités depuis dix ans hors catégories de l’article R.111-58. Aucun constat d’absence générale de données n’est formulé.

<a id="67-cadre-arrete"></a>

### 67-cadre-arrete — Arrêté établissant le document-cadre photovoltaïque au sol du Bas-Rhin

- Territoire : Grand Est / 67. Organisme : Préfecture du Bas-Rhin. Année : 2025. Type : Arrêté préfectoral.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.bas-rhin.gouv.fr/contenu/telechargement/58921/422363/file/Arret%C3%A9%20document-cadre%20PV%20au%20sol%20-%20Bas-Rhin.pdf)
- [Page source / provenance](https://www.bas-rhin.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/Document-cadre-sur-le-photovoltaique-au-sol)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:23.075Z ; HTTP 206 ; type application/pdf.
- Résumé : Arrêté préfectoral publié avec le document-cadre final.
- Utilité : Établir l’acte d’approbation et les conditions juridiques de publication.
- Preuve / réserve : PDF officiel de 1,27 Mo ouvert ; distinct du projet d’arrêté publié lors de la consultation.

<a id="67-cadre-cdpenaf"></a>

### 67-cadre-cdpenaf — Avis de la CDPENAF du Bas-Rhin relatif au document-cadre photovoltaïque

- Territoire : Grand Est / 67. Organisme : CDPENAF du Bas-Rhin. Année : 2025. Type : Avis CDPENAF.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.bas-rhin.gouv.fr/contenu/telechargement/58923/422373/file/20250204_avis_cdpenaf_Document-cadre.pdf)
- [Page source / provenance](https://www.bas-rhin.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/Document-cadre-sur-le-photovoltaique-au-sol)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:23.140Z ; HTTP 206 ; type application/pdf.
- Résumé : Avis de la CDPENAF sur la proposition de document-cadre alsacien.
- Utilité : Retracer l’examen agricole du cadre final et ses éventuelles réserves.
- Preuve / réserve : PDF de 0,73 Mo ouvert depuis la page officielle du document-cadre final.

<a id="67-cap"></a>

### 67-cap — Notice de la carte de sensibilité ornithologique des gravières et plans d’eau du Bas-Rhin

- Territoire : Grand Est / 67. Organisme : DDT du Bas-Rhin / LPO Alsace. Année : 2025. Type : Notice cartographique.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.bas-rhin.gouv.fr/contenu/telechargement/58722/421205/file/NoticeCarte_V6.pdf)
- [Page source / provenance](https://www.bas-rhin.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/CAP-Solaire67-Connaissances-et-recommandations)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:23.205Z ; HTTP 206 ; type application/pdf.
- Résumé : Méthode accompagnant la cartographie de sensibilité ornithologique des gravières et plans d’eau.
- Utilité : Prédiagnostiquer les projets flottants et orienter les inventaires avifaune.
- Preuve / réserve : PDF de 3,24 Mo ouvert ; la page CAP Solaire67 attribue l’élaboration à la DDT avec la LPO Alsace.

<a id="67-feux-foret"></a>

### 67-feux-foret — Étude technique — parcs photovoltaïques et feux de forêt

- Territoire : Grand Est / 67. Organisme : Services de l’État / CAP Solaire67. Année : 2023. Type : Étude technique.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.bas-rhin.gouv.fr/contenu/telechargement/58045/416802/file/Etude%20technique%20Parcs%20PV%20et%20Feux%20de%20for%C3%AAt_V19_06_2023.pdf)
- [Page source / provenance](https://www.bas-rhin.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/CAP-Solaire67-Connaissances-et-recommandations)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:23.288Z ; HTTP 206 ; type application/pdf.
- Résumé : Étude des interactions entre centrales photovoltaïques au sol et risque de feu de forêt.
- Utilité : Préparer la défense incendie, les accès et l’implantation en contexte boisé.
- Preuve / réserve : PDF de 3,82 Mo ouvert depuis la page officielle CAP Solaire67.

<a id="67-retenue-barrage"></a>

### 67-retenue-barrage — Note relative aux panneaux photovoltaïques sur retenue d’eau ou barrage

- Territoire : Grand Est / 67. Organisme : Ministère de la Transition écologique / DGPR. Année : 2023. Type : Note technique.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.bas-rhin.gouv.fr/contenu/telechargement/58043/416792/file/Note%20panneaux%20PV%20sur%20retenue%20d%27eau%20ou%20barrage%20.pdf)
- [Page source / provenance](https://www.bas-rhin.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/CAP-Solaire67-Connaissances-et-recommandations)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:23.448Z ; HTTP 206 ; type application/pdf.
- Résumé : Note technique consacrée aux installations solaires sur retenues d’eau et barrages.
- Utilité : Identifier les vérifications de sûreté et de compatibilité d’un projet flottant.
- Preuve / réserve : PDF de 4,03 Mo ouvert depuis la page officielle CAP Solaire67.

<a id="67-risques-dgpr"></a>

### 67-risques-dgpr — Instruction DGPR du 1er juin 2023 — panneaux photovoltaïques en zone à risque

- Territoire : Grand Est / 67. Organisme : Ministère de la Transition écologique / DGPR. Année : 2023. Type : Instruction.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.bas-rhin.gouv.fr/contenu/telechargement/58044/416797/file/Instruction%20DGPR%20du%201er%20juin%202023%20-%20panneaux%20PV%20en%20zone%20%C3%A0%20risque%20.PDF)
- [Page source / provenance](https://www.bas-rhin.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/CAP-Solaire67-Connaissances-et-recommandations)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:23.447Z ; HTTP 206 ; type application/pdf.
- Résumé : Instruction sur l’implantation en zone inondable, sur retenue d’eau ou en zone exposée au feu de forêt ou de végétation.
- Utilité : Cadrer le prédiagnostic risques et la consultation des services compétents.
- Preuve / réserve : PDF de 5,57 Mo ouvert depuis la page officielle CAP Solaire67.

<a id="68-cadre"></a>

### 68-cadre — Document-cadre pour le développement des installations photovoltaïques au sol en Alsace — Haut-Rhin

- Territoire : Grand Est / 68. Organisme : Préfecture du Haut-Rhin / Chambre d’agriculture d’Alsace. Année : 2025. Type : Document-cadre.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.haut-rhin.gouv.fr/contenu/telechargement/49961/352641/file/Document_cadre_alsace_V1_08jan2025.pdf)
- [Page source / provenance](https://www.haut-rhin.gouv.fr/Actions-de-l-Etat/Agriculture-foret-et-developpement-rural/CDPENAF-Commission-de-preservation-des-espaces-naturels-agricoles-et-forestiers)
- [Ancien lien conservé pour traçabilité](https://www.haut-rhin.gouv.fr/contenu/telechargement/48479/340314/file/document_cadre_alsace_V1_08jan2025.pdf)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.836Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Document-cadre alsacien de treize pages : les tests cartographiques conduisent à ne retenir aucune approche parcellaire complémentaire ; les terrains ouverts sont ceux des quatorze typologies de l’article R.111-58.
- Utilité : Qualifier le terrain au regard des typologies et exclusions du document, sans interpréter l’absence de carte parcellaire comme une pièce manquante.
- Preuve / réserve : PDF officiel de treize pages ouvert et extrait. La section II.c est intitulée « Décision de ne pas retenir d’approche parcellaire » et précise qu’une cartographie parcellaire ne serait pas pertinente. Le fichier publié est byte-identique au fichier de consultation d’avril 2025 ; l’arrêté final du 15 mai 2025 est établi séparément au RAA du 22 mai.

<a id="68-projet"></a>

### 68-projet — Arrêté du 15 mai 2025 établissant le document-cadre photovoltaïque du Haut-Rhin

- Territoire : Grand Est / 68. Organisme : Préfecture du Haut-Rhin. Année : 2025. Type : Arrêté préfectoral publié au RAA.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.haut-rhin.gouv.fr/contenu/telechargement/48832/343397/file/RAA%20n%C2%B045%20du%2022%20mai%202025.pdf#page=125)
- [Page source / provenance](https://www.haut-rhin.gouv.fr/Actions-de-l-Etat/Agriculture-foret-et-developpement-rural/CDPENAF-Commission-de-preservation-des-espaces-naturels-agricoles-et-forestiers)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:23.647Z ; HTTP 206 ; type application/pdf.
- Résumé : Le RAA n° 45 du 22 mai 2025 publie, à partir de la page 125, l’arrêté signé du 15 mai 2025.
- Utilité : Remplace l’incertitude du projet soumis à consultation en avril 2025.
- Preuve / réserve : PDF du RAA ouvert ; sommaire et texte confirment l’arrêté du 15 mai 2025 relatif au document-cadre.

<a id="80-cadre"></a>

### 80-cadre — Arrêté portant approbation du document-cadre photovoltaïque au sol dans la Somme

- Territoire : Hauts-de-France / 80. Organisme : Préfecture de la Somme / DDTM. Année : 2025. Type : Arrêté préfectoral.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.somme.gouv.fr/contenu/telechargement/54397/357943/file/document_cadre_Somme_approuve_03122025.pdf)
- [Page source / provenance](https://www.somme.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/Participations-du-public-par-voie-electronique-et-decisions/Document-cadre-relatif-aux-installations-photovoltaiques-au-sol)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:23.845Z ; HTTP 206 ; type application/pdf.
- Résumé : Arrêté qui approuve le document-cadre relatif aux installations photovoltaïques au sol dans la Somme.
- Utilité : Base juridique départementale ; à lire avec la notice et la cartographie officielle.
- Preuve / réserve : PDF officiel de 3 pages ouvert ; signature du préfet datée du 3 décembre 2025 et décision d’approbation indiquée sur la page source.

<a id="80-notice"></a>

### 80-notice — Notice et cartographie des zones d’implantation photovoltaïque au sol dans la Somme

- Territoire : Hauts-de-France / 80. Organisme : Chambre d’agriculture de la Somme / Préfecture de la Somme. Année : 2025. Type : Notice.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.somme.gouv.fr/contenu/telechargement/54398/357948/file/2025_0808_V2_Doc_Cadre_80_SOMME_Notice_2024.pdf)
- [Page source / provenance](https://www.somme.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/Participations-du-public-par-voie-electronique-et-decisions/Document-cadre-relatif-aux-installations-photovoltaiques-au-sol)
- [Cartographie dynamique du document-cadre de la Somme](https://carto2.geo-ide.din.developpement-durable.gouv.fr/frontoffice/?map=47ea9192-d308-48e8-9ebd-407dea38ba57) — Carte interactive ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.866Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Notice de 22 pages intégrée au document-cadre, avec méthode de sélection, catégories de terrains, conditions et cartes départementales.
- Utilité : Interpréter la carte et comprendre les critères qui s’imposent aux porteurs de projets.
- Preuve / réserve : PDF officiel de 22 pages reconnu par signature et republié sur la page de décision avec l’arrêté approuvé le 3 décembre 2025. La même page expose la carte Geo-IDE du dossier ; elle répondait en HTTP 200 le 28 septembre 2026.

<a id="88-cadre"></a>

### 88-cadre — Arrêté n° 219/2025 établissant le document-cadre photovoltaïque au sol des Vosges

- Territoire : Grand Est / 88. Organisme : Préfecture des Vosges / DDT des Vosges. Année : 2025. Type : Arrêté et document-cadre.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.vosges.gouv.fr/contenu/telechargement/32590/255398/file/20252307%20ARRETE%20SIGNE.pdf)
- [Page source / provenance](https://www.vosges.gouv.fr/Actions-de-l-Etat/Agriculture-Foret/Phovoltaique-au-sol-et-agrivoltaisme)
- [Annexe graphique des entités éligibles (dans le PDF signé)](https://www.vosges.gouv.fr/contenu/telechargement/32590/255398/file/20252307%20ARRETE%20SIGNE.pdf) — Annexe PDF ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:19.877Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : L’arrêté 219/2025 répertorie les parcelles à l’article 2 et contient une annexe graphique qui délimite les entités éligibles, lesquelles peuvent ne pas coïncider avec les parcelles cadastrales entières.
- Utilité : Lire ensemble l’article 2 et l’annexe graphique avant toute vérification foncière ; la page officielle avertit que les contours éligibles peuvent être infraparcellaires.
- Preuve / réserve : La page préfectorale indique explicitement que l’annexe de l’arrêté identifie les entités éligibles sous forme de graphiques. Le RAA du 23 juillet 2025 publie l’acte 88-2025-07-23-00001. La page ne présente pas l’annexe comme un fichier séparé : elle est comprise dans le PDF signé.

<a id="88-carte-2025"></a>

### 88-carte-2025 — Projet de document-cadre photovoltaïque — localisation des sites dans les Vosges

- Territoire : Grand Est / 88. Organisme : Préfecture des Vosges. Année : 2025. Type : Cartographie de consultation.
- Statut documentaire : **ancien**.
- [PDF direct](https://www.vosges.gouv.fr/index.php/contenu/telechargement/30270/238211/file/Document_cadre.pdf)
- [Page source / provenance](https://www.vosges.gouv.fr/Actions-de-l-Etat/Enquetes-publiques-et-consultations-du-public/Consultation-dematerialisee-du-public/Consultation-du-public-projet-document-cadre-Photovoltaisme)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.077Z ; HTTP 206 ; type application/pdf.
- Résumé : Cartographie de six pages publiée pour la consultation de juin 2025.
- Utilité : Conserver la trace de la consultation ; utiliser l’arrêté 219/2025 pour la décision finale.
- Preuve / réserve : PDF ouvert ; identifié explicitement comme pièce de consultation et donc classé ancien.

<a id="88-cdpenaf-fiche"></a>

### 88-cdpenaf-fiche — Fiche de consultation de la CDPENAF pour les projets photovoltaïques et agrivoltaïques dans les Vosges

- Territoire : Grand Est / 88. Organisme : DDT des Vosges / CDPENAF. Année : 2026. Type : Fiche CDPENAF.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.vosges.gouv.fr/contenu/telechargement/32588/255388/file/fiche%20consultation%20CDPENAF.pdf)
- [Page source / provenance](https://www.vosges.gouv.fr/Actions-de-l-Etat/Agriculture-Foret/Phovoltaique-au-sol-et-agrivoltaisme)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.107Z ; HTTP 206 ; type application/pdf.
- Résumé : Résumé de la pièce 51 du permis de construire à présenter devant la CDPENAF.
- Utilité : Vérifier que les données agricoles et techniques nécessaires à l’avis sont réunies.
- Preuve / réserve : PDF ouvert ; publié dans la rubrique officielle le 3 juillet 2026.

<a id="88-charte"></a>

### 88-charte — Charte agrivoltaïque dans les Vosges — profession agricole

- Territoire : Grand Est / 88. Organisme : Chambre d’agriculture des Vosges. Année : 2025. Type : Charte.
- Statut documentaire : **recommandation**.
- [PDF direct](https://vosges.chambres-agriculture.fr/fileadmin/user_upload/272_chambre_dagriculture_des_vosges/RUBR_1_-_S_informer/Produire/Energies/Charte_agrivoltaique_Chambre_agriculture_Vosges.pdf)
- [Page source / provenance](https://vosges.chambres-agriculture.fr/fileadmin/user_upload/272_chambre_dagriculture_des_vosges/RUBR_1_-_S_informer/Produire/Energies/Charte_agrivoltaique_Chambre_agriculture_Vosges.pdf)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.056Z ; HTTP 206 ; type application/pdf.
- Résumé : Charte professionnelle de huit pages publiée en juillet 2025.
- Utilité : Connaître les engagements et recommandations de la profession agricole vosgienne.
- Preuve / réserve : PDF ouvert sur le domaine officiel de la Chambre d’agriculture des Vosges.

<a id="88-guide"></a>

### 88-guide — Guide à l’attention des porteurs de projets photovoltaïques dans les Vosges

- Territoire : Grand Est / 88. Organisme : DDT des Vosges. Année : 2025. Type : Guide porteurs de projets.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.vosges.gouv.fr/contenu/telechargement/32589/255393/file/guide.pdf)
- [Page source / provenance](https://www.vosges.gouv.fr/Actions-de-l-Etat/Agriculture-Foret/Phovoltaique-au-sol-et-agrivoltaisme)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.137Z ; HTTP 206 ; type application/pdf.
- Résumé : Guide départemental synthétique sur l’éligibilité au document-cadre et les pièces attendues.
- Utilité : Cadrer le choix du site et le contenu du dossier avant dépôt.
- Preuve / réserve : PDF ouvert ; la page préfectorale le présente comme le guide des conditions d’éligibilité.

<a id="ge-cerema-flottant"></a>

### ge-cerema-flottant — Solaire flottant en Région Grand-Est — Synthèse des études d’impact et recommandations opérationnelles pour la biodiversité (synthèse du rapport)

- Territoire : Grand Est / regional. Organisme : Cerema / Région Grand Est. Année : 2025. Type : Rapport d’étude.
- Statut documentaire : **étude et recommandations — non réglementaire**.
- [PDF direct](https://www.bourgogne-franche-comte.developpement-durable.gouv.fr/IMG/pdf/250601_recommandation_cerema_synthese.pdf)
- [Page source / provenance](https://www.cerema.fr/fr/projets/solaire-flottant-region-grand-est)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.308Z ; HTTP 206 ; type application/pdf.
- Résumé : Synthèse de dix pages issue de l’analyse de 24 études d’impact régionales : degré d’artificialisation, herbiers, couverture de la zone pélagique, substances chimiques et suivi.
- Utilité : Référence opérationnelle pour sélectionner un plan d’eau, concevoir l’état initial et discuter le taux de couverture; le rapport complet de 82 pages reste à consulter pour les justifications.
- Preuve / réserve : PDF public ouvert : Cerema, Région Grand-Est, version définitive du 25 juin 2025, dix pages. La page projet Cerema confirme la mission, les 24 plans d’eau étudiés et quatre recommandations principales. Le PDF est hébergé sur un miroir DREAL officiel.

<a id="ge-csrpn-2022-109"></a>

### ge-csrpn-2022-109 — Avis n° 2022-109 du CSRPN Grand Est — Contribution au développement du photovoltaïque et à la préservation de la biodiversité

- Territoire : Grand Est / regional. Organisme : Conseil scientifique régional du patrimoine naturel Grand Est. Année : 2022. Type : Avis.
- Statut documentaire : **avis scientifique consultatif — non réglementaire**.
- [PDF direct](https://www.grand-est.developpement-durable.gouv.fr/IMG/pdf/avis2022-109-photovoltaique_et_biodiversite.pdf)
- [Page source / provenance](https://www.grand-est.developpement-durable.gouv.fr/IMG/pdf/avis2022-109-photovoltaique_et_biodiversite.pdf)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.272Z ; HTTP 206 ; type application/pdf.
- Résumé : Avis régional scientifique de 20 pages sur les milieux à éviter, la hiérarchisation des implantations et la prise en compte de la biodiversité dans le développement photovoltaïque.
- Utilité : Anticiper les positions scientifiques régionales mobilisables lors de l’instruction et renforcer la démonstration d’évitement à l’échelle territoriale.
- Preuve / réserve : PDF officiel DREAL ouvert : 20 pages, référence Avis n°2022-109. Il est aussi cité par la délibération nationale du CNPN et par le guide zones humides de la DREAL Grand Est.

<a id="ge-flottant"></a>

### ge-flottant — Recommandations régionales pour le développement de projets « Photovoltaïque flottant »

- Territoire : Grand Est / regional. Organisme : DREAL Grand Est. Année : 2026. Type : Recommandations.
- Statut documentaire : **porter à connaissance régional — non réglementaire**.
- [PDF direct](https://www.grand-est.developpement-durable.gouv.fr/IMG/pdf/251014_pvflottant_recommandation_externe.pdf)
- [Page source / provenance](https://www.grand-est.developpement-durable.gouv.fr/recommandations-regionales-pour-le-developpement-a23833.html)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.306Z ; HTTP 206 ; type application/pdf.
- Résumé : Note régionale de cinq pages sur les enjeux d’un projet flottant, la recherche d’alternatives, la biodiversité, le paysage et la préparation de la demande d’autorisation.
- Utilité : Cadrage bref à lire avant le prédiagnostic d’un plan d’eau; renvoie à l’étude Cerema détaillée.
- Preuve / réserve : Page DREAL publiée le 17 avril 2026; le PDF officiel de cinq pages a été ouvert et renvoie explicitement à l’étude Cerema et à la synthèse OFB.

<a id="ge-guide"></a>

### ge-guide — Guide réglementaire pour le déploiement de projets photovoltaïques au sol

- Territoire : Grand Est / regional. Organisme : DREAL Grand Est. Année : 2026. Type : Guide.
- Statut documentaire : **recommandation — synthèse régionale publiée en avril 2026**.
- [PDF direct](https://www.grand-est.developpement-durable.gouv.fr/IMG/pdf/20260316-guide-reglementaire_sol-web.pdf)
- [Page source / provenance](https://www.grand-est.developpement-durable.gouv.fr/guide-reglementaire-pour-le-deploiement-de-projets-a23190.html)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.319Z ; HTTP 206 ; type application/pdf.
- Résumé : Guide synthétique régional de 20 pages sur les autorisations d’urbanisme, procédures environnementales, raccordement, soutien et cas des terrains agricoles.
- Utilité : Point d’entrée régional prioritaire pour ordonner les démarches et identifier les services compétents avant le dépôt.
- Preuve / réserve : La page DREAL est publiée le 3 avril 2026 et mise à jour le 7 avril; elle décrit précisément les thèmes du guide. Le PDF de 20 pages a été ouvert depuis son lien officiel.

<a id="ge-humides"></a>

### ge-humides — Guide de recommandations aux services instructeurs pour la prise en compte des zones humides dans les projets photovoltaïques en Grand Est

- Territoire : Grand Est / regional. Organisme : DREAL Grand Est, DDT, Cerema et OFB. Année : 2025. Type : Guide.
- Statut documentaire : **recommandation régionale aux services instructeurs**.
- [PDF direct](https://www.grand-est.developpement-durable.gouv.fr/IMG/pdf/guide_photovoltaique_et_zones_humides-v2.pdf)
- [Page source / provenance](https://www.grand-est.developpement-durable.gouv.fr/guide-de-recommandations-aux-services-instructeurs-a23429.html)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.498Z ; HTTP 206 ; type application/pdf.
- Résumé : Guide de 26 pages sur la délimitation, la qualification des impacts directs et indirects, les seuils IOTA, l’évitement, la réduction, la compensation et la remise en état.
- Utilité : Détecter très tôt un risque de zone humide, dimensionner les investigations et comparer des solutions d’évitement avant de figer le plan de masse.
- Preuve / réserve : PDF DREAL ouvert : version V6.0 de juin 2025, 26 pages, rédaction DREAL-DDT-Cerema-OFB. La page DREAL, publiée le 15 juillet 2025, explicite son objectif d’homogénéiser l’instruction IOTA 3.3.1.0.

<a id="ge-paysage"></a>

### ge-paysage — Fiche « Paysage et photovoltaïque »

- Territoire : Grand Est / regional. Organisme : DREAL Grand Est. Année : 2025. Type : Fiche.
- Statut documentaire : **recommandation régionale**.
- [PDF direct](https://www.grand-est.developpement-durable.gouv.fr/IMG/pdf/20240213_paysage_pv_web-3.pdf)
- [Page source / provenance](https://www.grand-est.developpement-durable.gouv.fr/fiche-paysage-et-photovoltaique-a23242.html)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.483Z ; HTTP 206 ; type application/pdf.
- Résumé : Fiche de 16 pages sur la conception par le paysage, les grands enjeux régionaux, les principes d’implantation et l’insertion des projets.
- Utilité : Orienter le choix du site, le plan de masse, les photomontages et la stratégie d’insertion avant l’étude paysagère complète.
- Preuve / réserve : Page DREAL publiée le 5 mars 2025; le PDF officiel de 16 pages a été ouvert et porte le titre de fiche pratique Paysage & photovoltaïque.

<a id="ge-paysage-amont"></a>

### ge-paysage-amont — Note relative aux projets photovoltaïques — consultation amont — volet paysages

- Territoire : Grand Est / regional. Organisme : DREAL Grand Est. Année : 2025. Type : Note de cadrage.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.grand-est.developpement-durable.gouv.fr/IMG/pdf/2025_06_no_psp_photovoltaique-2.pdf)
- [Page source / provenance](https://www.grand-est.developpement-durable.gouv.fr/donnees-utiles-a-l-amont-d-un-projet-enr-a23186.html)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.510Z ; HTTP 206 ; type application/pdf.
- Résumé : Note de consultation amont du pôle Sites et Paysages pour les projets photovoltaïques.
- Utilité : Préparer une saisine amont utile et les pièces paysagères attendues.
- Preuve / réserve : PDF ouvert depuis la rubrique DREAL « Données utiles à l’amont d’un projet ENR ».

<a id="hdf-cadrage-pv-2022"></a>

### hdf-cadrage-pv-2022 — Note de cadrage des services de l’État pour l’instruction des projets solaires photovoltaïques dans les Hauts-de-France

- Territoire : Hauts-de-France / regional. Organisme : DREAL Hauts-de-France. Année : 2022. Type : Doctrine d’instruction.
- Statut documentaire : **ancien**.
- [PDF direct](https://www.hauts-de-france.developpement-durable.gouv.fr/IMG/pdf/note_de_cadrage_hdf_-_instruction_des_projets_phtotovoltaiques_.pdf)
- [Page source / provenance](https://www.hauts-de-france.developpement-durable.gouv.fr/panorama-du-solaire-a15976.html)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.553Z ; HTTP 206 ; type application/pdf.
- Résumé : Doctrine régionale pré-APER sur le choix des sites, l’instruction, l’étude d’impact, la biodiversité, l’eau, les sols et le paysage.
- Utilité : Référence utile pour les attentes environnementales régionales, à compléter impérativement par le cadre juridique de 2024 et les documents-cadres départementaux.
- Preuve / réserve : PDF DREAL de 20 pages ouvert ; édition mars 2022, ISBN 978-2-11-167093-8.

<a id="hdf-doctrine-npdc-2023"></a>

### hdf-doctrine-npdc-2023 — Doctrine agricole sur le photovoltaïque en Nord–Pas-de-Calais

- Territoire : Hauts-de-France / regional. Organisme : Chambre d’agriculture Nord–Pas-de-Calais. Année : 2023. Type : Doctrine agricole.
- Statut documentaire : **ancien**.
- [PDF direct](https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=203686)
- [Page source / provenance](https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=203686)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:25.077Z ; HTTP 200 ; type application/pdf.
- Résumé : Position professionnelle couvrant le Nord et le Pas-de-Calais : priorités d’implantation, critères agricoles, foncier, contrats, suivi et retombées locales.
- Utilité : Comprendre les attentes de la profession agricole dans les départements 59 et 62 ; vérifier chaque point au regard du décret et de l’arrêté de 2024.
- Preuve / réserve : PDF OPERA de 14 pages ouvert, daté de septembre 2023 et attribué à la Chambre d’agriculture Nord–Pas-de-Calais.

<a id="hdf-guide-services-ecosystemiques"></a>

### hdf-guide-services-ecosystemiques — Guide pour la prise en compte des services écosystémiques dans les évaluations des incidences sur l’environnement

- Territoire : Hauts-de-France / regional. Organisme : DREAL Hauts-de-France / INRAE. Année : 2021. Type : Guide biodiversité.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.hauts-de-france.developpement-durable.gouv.fr/IMG/pdf/guidese_eie_vfinale_update.pdf)
- [Page source / provenance](https://www.hauts-de-france.developpement-durable.gouv.fr/?Evaluer-les-services-ecosystemiques=)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.695Z ; HTTP 206 ; type application/pdf.
- Résumé : Méthode régionale pour identifier, évaluer et intégrer les services écosystémiques dans l’évaluation environnementale des projets, plans et programmes.
- Utilité : Renforcer le volet biodiversité d’une étude d’impact solaire et relier les effets du projet aux fonctions rendues par les milieux.
- Preuve / réserve : PDF DREAL de 134 pages ouvert ; version 1 de novembre 2021, guide méthodologique attribué à C. S. Campagne et P. K. Roche.

<a id="hdf-panorama-solaire-2021"></a>

### hdf-panorama-solaire-2021 — Développement de l’énergie solaire photovoltaïque en Hauts-de-France — données au 31 mars 2021

- Territoire : Hauts-de-France / regional. Organisme : DREAL Hauts-de-France. Année : 2022. Type : Panorama.
- Statut documentaire : **ancien**.
- [PDF direct](https://www.hauts-de-france.developpement-durable.gouv.fr/IMG/pdf/pv-2021_v31o.pdf)
- [Page source / provenance](https://www.hauts-de-france.developpement-durable.gouv.fr/panorama-du-solaire-a15976.html)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.751Z ; HTTP 206 ; type application/pdf.
- Résumé : Panorama régional et volets départementaux sur le parc photovoltaïque, les objectifs régionaux et les projets connus, sur des données arrêtées au 31 mars 2021.
- Utilité : Conserver comme état historique et source de contexte territorial ; ne pas employer comme état actuel du parc.
- Preuve / réserve : PDF DREAL de 16 pages ouvert ; couverture datée janvier 2022 avec données arrêtées au 31 mars 2021.

<a id="nat-arrete"></a>

### nat-arrete — Arrêté du 5 juillet 2024 relatif au développement de l’agrivoltaïsme et aux conditions d’implantation des installations photovoltaïques sur terrains agricoles, naturels ou forestiers (extrait authentifié du Journal officiel)

- Territoire : National / national. Organisme : Légifrance / Journal officiel. Année : 2024. Type : Arrêté.
- Statut documentaire : **texte publié au JORF — version initiale, non consolidée**.
- [PDF direct](https://www.lozere.gouv.fr/contenu/telechargement/33858/287100/file/joe_20240707_0160_0015.pdf)
- [Page source / provenance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049891545)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:21:52.467Z ; HTTP 206 ; type application/pdf.
- Résumé : Précisions techniques sur les garanties financières, les rapports de contrôle, le calcul de la production agricole significative et du revenu durable, et le contenu du suivi agrivoltaïque.
- Utilité : Construire les hypothèses agronomiques, le dispositif témoin ou référentiel, les indicateurs de suivi et les pièces de contrôle du projet.
- Preuve / réserve : La page Légifrance indique « Version INITIALE », JORF n°0160 du 7 juillet 2024, texte n°15 et demeure la provenance juridique de référence. Le champ PDF utilise la copie servie par la préfecture de Lozère : curl suit le lien sans erreur, la signature est %PDF-, les métadonnées portent le titre DILA « Journal officiel de la République française - N° 160 du 7 juillet 2024 » et la première page porte l’arrêté ainsi que le NOR ECOR2404313A.

<a id="nat-clotures-ofb"></a>

### nat-clotures-ofb — Impacts écologiques des clôtures et solutions de remédiation possibles — bonnes pratiques spécifiques aux centrales photovoltaïques au sol

- Territoire : National / national. Organisme : Cabinet X-AEQUO avec le soutien de l’OFB. Année : 2023. Type : Guide technique.
- Statut documentaire : **recommandation**.
- [PDF direct](https://www.trameverteetbleue.fr/sites/default/files/references_bibliographiques/impacts_ecologiques_des_clotures_bp_cpv_2023-07-28.pdf)
- [Page source / provenance](https://www.trameverteetbleue.fr/documentation/references-bibliographiques/impacts-ecologiques-des-clotures-et-solutions-de)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:24.960Z ; HTTP 206 ; type application/pdf.
- Résumé : Guide de 128 pages proposant une démarche d’évaluation des incidences des clôtures et des solutions techniques pour réduire mortalité, blessures et effet barrière.
- Utilité : Choisir le tracé, les mailles, passages à faune, dispositifs de visibilité et modalités de suivi des clôtures du parc.
- Preuve / réserve : Le PDF a été identifié comme application/pdf et son texte indexé contient le sommaire complet. La fiche nationale Trame verte et bleue indique l’auteur Caryl Buton, 128 pages, juillet 2023 et le soutien de l’OFB.

<a id="nat-cnpn-2024"></a>

### nat-cnpn-2024 — Autosaisine du CNPN relative à la politique de déploiement du photovoltaïque et ses impacts sur la biodiversité — Délibération n° 2024-16

- Territoire : National / national. Organisme : Conseil national de la protection de la nature. Année : 2024. Type : Avis.
- Statut documentaire : **avis scientifique consultatif — non réglementaire**.
- [PDF direct](https://www.avis-biodiversite.developpement-durable.gouv.fr/IMG/pdf/2024-16_avis_deploiement-photovoltaique-impacts-biodiversite_cnpn_du_19_06_2024_vf.pdf)
- [Page source / provenance](https://www.avis-biodiversite.developpement-durable.gouv.fr/IMG/pdf/2024-16_avis_deploiement-photovoltaique-impacts-biodiversite_cnpn_du_19_06_2024_vf.pdf)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:25.019Z ; HTTP 206 ; type application/pdf.
- Résumé : Avis de 90 pages couvrant planification, procédures environnementales, typologies de sites, raccordement, groupes biologiques et séquence ERC.
- Utilité : Anticiper le niveau d’exigence scientifique susceptible d’être mobilisé lors des avis espèces protégées, notamment sur l’évitement amont et les inventaires.
- Preuve / réserve : PDF officiel ouvert : 90 pages, séance du 19 juin 2024, délibération n°2024-16. Le sommaire couvre permis, évaluation environnementale, dérogation espèces protégées, raccordement, biodiversité et ERC.

<a id="nat-decret"></a>

### nat-decret — Décret n° 2024-318 du 8 avril 2024 relatif au développement de l’agrivoltaïsme et aux conditions d’implantation des installations photovoltaïques sur des terrains agricoles, naturels ou forestiers (extrait authentifié du Journal officiel)

- Territoire : National / national. Organisme : Légifrance / Journal officiel. Année : 2024. Type : Décret.
- Statut documentaire : **texte publié au JORF — version initiale; la notice annonce une entrée en vigueur le 10 avril 2024**.
- [PDF direct](https://www.legifrance.gouv.fr/download/file/HUcW0TmIZuZbzhlFcykQB1W5kS9SQ-G5RyHd65U5QAE=/JOE_TEXTE)
- [Page source / provenance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049386027)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:15:25.137Z ; HTTP 403 ; type text/html; charset=UTF-8.
- Anomalie : HTTP 403 ; text/html; charset=UTF-8 ; signature PDF absente
- Résumé : Décret d’application de l’article 54 de la loi APER : services agricoles rendus, production significative, zone témoin, taux de couverture, autorisations, contrôles, sanctions et remise en état.
- Utilité : Base réglementaire de qualification et de conception d’un projet agrivoltaïque ou photovoltaïque sur terrain agricole, naturel ou forestier; utiliser aussi l’arrêté de juillet 2024 et l’instruction de février 2025.
- Preuve / réserve : La page Légifrance indique « Version INITIALE », JORF n°0083 du 9 avril 2024, texte n°2, lien vers l’extrait authentifié de 308,3 Ko et précise dans sa notice que le texte entre en vigueur le lendemain de sa publication. Au contrôle du 28 septembre 2026, cet endpoint PDF officiel renvoie HTTP 403 à curl. Deux copies tierces strictement identiques entre elles ont permis de contrôler le titre DILA, les 9 pages et le NOR ECOR2321918D, mais aucune copie institutionnelle stable n’a été trouvée; le lien Légifrance est donc conservé avec cette réserve explicite.

<a id="nat-guide-impact-pv-sol"></a>

### nat-guide-impact-pv-sol — Installations photovoltaïques au sol — Guide de l’étude d’impact

- Territoire : National / national. Organisme : Ministères chargés de l’Écologie et de l’Énergie. Année : 2011. Type : Guide.
- Statut documentaire : **guide méthodologique ancien — cadre réglementaire et seuils à revalider**.
- [PDF direct](https://www.ecologie.gouv.fr/sites/default/files/documents/Guide_EI_Installations-photovolt-au-sol_DEF_19-04-11.pdf)
- [Page source / provenance](https://www.ecologie.gouv.fr/politiques-publiques/solaire)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:25.230Z ; HTTP 206 ; type application/pdf.
- Résumé : Guide national très détaillé pour cadrer l’état initial, l’analyse des effets, les variantes et les mesures ERC d’une centrale photovoltaïque au sol.
- Utilité : Conserver comme trame technique d’étude d’impact; compléter par le guide biodiversité ADEME-OFB, l’avis CNPN et les règles en vigueur.
- Preuve / réserve : Le serveur ministériel renvoie un PDF d’environ 19 Mo; son contenu indexé porte le titre exact et traite explicitement faune, flore, biodiversité, paysage, eaux, risques et mesures. La taille a empêché une extraction intégrale, pas l’identification du PDF.

<a id="nat-guide-parking"></a>

### nat-guide-parking — Guide parcs de stationnement — mise en œuvre de la réglementation relative aux dispositifs de gestion des eaux pluviales et d’ombrage

- Territoire : National / national. Organisme : Ministère de la Transition écologique / DHUP. Année : 2024. Type : Guide.
- Statut documentaire : **recommandation — version de mai 2024, périmètre juridique explicitement limité**.
- [PDF direct](https://www.ecologie.gouv.fr/sites/default/files/documents/Guide-parcs-de-stationnement-WEB.pdf)
- [Page source / provenance](https://www.ecologie.gouv.fr/politiques-publiques/parcs-stationnement)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:25.228Z ; HTTP 206 ; type application/pdf.
- Résumé : Guide de 62 pages sur le calcul des surfaces, l’ombrage, les eaux pluviales, les exonérations, l’instruction et le contrôle des obligations applicables aux parkings.
- Utilité : Cadrer les ombrières et la gestion de l’eau dès la faisabilité; actualiser l’analyse sur l’article 40 APER car le guide annonce lui-même une future mise à jour.
- Preuve / réserve : PDF ministériel ouvert : 62 pages. La page officielle, mise à jour le 9 juillet 2025, précise que la version de mai 2024 se concentre sur les obligations issues de la loi Climat et résilience et doit être mise à jour pour les textes d’application de l’article 40 APER.

<a id="nat-guide-urbanisme-pv-sol"></a>

### nat-guide-urbanisme-pv-sol — L’instruction des demandes d’autorisations d’urbanisme pour les centrales solaires au sol

- Territoire : National / national. Organisme : Ministère de la Transition écologique. Année : 2020. Type : Guide.
- Statut documentaire : **recommandation ancienne — à actualiser avec APER et les textes de 2024-2025**.
- [PDF direct](https://www.ecologie.gouv.fr/sites/default/files/documents/Guide%20instruction%20demandes%20autorisation%20urbanisme%20-%20PV%20au%20sol.pdf)
- [Page source / provenance](https://www.ecologie.gouv.fr/politiques-publiques/solaire)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:25.268Z ; HTTP 206 ; type application/pdf.
- Résumé : Guide de 61 pages sur le choix des secteurs, les règles d’implantation, les procédures d’urbanisme et les procédures complémentaires : étude préalable agricole, CDPENAF, espèces protégées et défrichement.
- Utilité : Structurer la stratégie d’autorisation et la préparation du dossier; vérifier tous les seuils et références normatives dans les codes et guides récents.
- Preuve / réserve : PDF ministériel ouvert : 61 pages, millésime 2020, sommaire détaillé et recommandations destinées aux porteurs de projets et services de l’État. La page ministérielle Solaire expose encore ce téléchargement.

<a id="nat-instruction-2025-93"></a>

### nat-instruction-2025-93 — Instruction technique DGPE/SDPE/2025-93 — Application des dispositions réglementaires relatives aux installations agrivoltaïques et photovoltaïques au sol dans les espaces naturels, agricoles et forestiers

- Territoire : National / national. Organisme : Ministère de l’Agriculture / DGPE, DGEC et DHUP. Année : 2025. Type : Instruction technique.
- Statut documentaire : **instruction indiquée « En vigueur » par le Bulletin officiel de l’Agriculture**.
- [PDF direct](https://info.agriculture.gouv.fr/boagri/instruction-2025-93/telechargement)
- [Page source / provenance](https://info.agriculture.gouv.fr/boagri/instruction-2025-93)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:25.658Z ; HTTP 206 ; type application/pdf.
- Résumé : Ordre de méthode interministériel du 18 février 2025, avec cinq annexes, destiné aux préfets, DDT(M), DAAF et services instructeurs pour appliquer le décret et l’arrêté de 2024.
- Utilité : Document opérationnel prioritaire pour comprendre l’interprétation administrative attendue, les pièces, les régimes de projet et la construction des documents-cadres.
- Preuve / réserve : Le PDF officiel est directement servi par la route « /telechargement » du BO Agri. Le résultat contrôlé porte la référence DGPE/SDPE/2025-93, la date du 18/02/2025, l’objet exact et cinq annexes; le sommaire officiel du BO Agri le qualifie d’en vigueur et non caduc.

<a id="nat-loi"></a>

### nat-loi — Loi n° 2023-175 du 10 mars 2023 relative à l’accélération de la production d’énergies renouvelables (extrait authentifié du Journal officiel)

- Territoire : National / national. Organisme : Légifrance / Journal officiel. Année : 2023. Type : Loi.
- Statut documentaire : **texte publié au JORF — version initiale, non consolidée**.
- [PDF direct](https://faolex.fao.org/docs/pdf/fra225220.pdf)
- [Page source / provenance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047294244)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:21:52.348Z ; HTTP 206 ; type application/pdf.
- Résumé : Texte publié au JORF du 11 mars 2023. Il fonde notamment les zones d’accélération, le cadre de l’agrivoltaïsme, les documents-cadres départementaux et plusieurs obligations de solarisation.
- Utilité : Lire le texte publié pour l’historique et les dispositions APER, puis contrôler les articles codifiés dans leur version consolidée sur Légifrance avant toute conclusion juridique.
- Preuve / réserve : La page Légifrance indique « Version INITIALE », JORF n°0060 du 11 mars 2023, texte n°1, et demeure la provenance juridique de référence. Le champ PDF utilise la copie intégrale conservée par FAOLEX, base juridique officielle de la FAO : curl suit le lien sans erreur, la signature est %PDF-, le fichier compte 48 pages et sa première page porte « LOI no 2023-175 », NOR ENER2223572L.

<a id="nat-synthese-lpo-ofb"></a>

### nat-synthese-lpo-ofb — Centrales photovoltaïques et biodiversité — Synthèse des connaissances sur les impacts potentiels et les moyens pour les atténuer

- Territoire : National / national. Organisme : LPO, avec soutien ADEME / OFB. Année : 2022. Type : Synthèse bibliographique.
- Statut documentaire : **état des connaissances — non réglementaire**.
- [PDF direct](https://www.expertises-territoires.fr/upload/docs/application/pdf/2023-07/2022_pv_synthese_lpo.pdf)
- [Page source / provenance](https://www.documentation.eauetbiodiversite.fr/fr/notice/centrales-photovoltaiques-et-biodiversite-synthese-des-connaissances-sur-les-impacts-et-les-moyens-de-les-attenuer-28540)
- Revue documentaire : 2026-09-28.
- Contrôle technique : **PDF reconnu** — 2026-09-28T17:15:25.534Z ; HTTP 206 ; type application/pdf.
- Résumé : Revue de 151 références scientifiques sur les incidences des centrales au sol, flottantes et agrivoltaïques, les mesures d’atténuation et les limites des connaissances.
- Utilité : Justifier le protocole d’état initial, identifier les groupes biologiques sensibles et éviter de présenter comme certaines des conclusions encore peu étayées.
- Preuve / réserve : La notice du portail Eau et biodiversité confirme l’identifiant OFB DOC00085800, l’accès libre, l’auteur LPO et 73 pages. Le PDF miroir sur la plateforme publique Expertises Territoires a été indexé comme PDF et son contenu correspond au titre.

<a id="55-cadre"></a>

### 55-cadre — Arrêté préfectoral n° 2025-867 établissant le document-cadre photovoltaïque de la Meuse

- Territoire : Grand Est / 55. Organisme : Préfecture de la Meuse / Chambre d’agriculture de la Meuse. Année : 2025. Type : Arrêté et document-cadre.
- Statut documentaire : **publié — portée à vérifier**.
- [PDF direct](https://www.meuse.gouv.fr/contenu/telechargement/32381/233428/file/RAA%20n%C2%B051%20du%203%20juin%202025.pdf#page=3)
- [Page source / provenance](https://www.meuse.gouv.fr/index.php/Publications/Recueil-des-Actes-Administratifs-RAA/RAA-annee-2025)
- [Liste cadastrale et cartes signées](https://www.meuse.gouv.fr/contenu/telechargement/32381/233428/file/RAA%20n%C2%B051%20du%203%20juin%202025.pdf#page=6) — Annexe PDF ; revue : 2026-09-28.
- [Document-cadre de la Chambre d’agriculture](https://www.meuse.gouv.fr/contenu/telechargement/32381/233428/file/RAA%20n%C2%B051%20du%203%20juin%202025.pdf#page=12) — Annexe PDF ; revue : 2026-09-28.
- [Arrêté et annexes — copie communale de 18 pages](https://www.ourches-sur-meuse.fr/userfile/fichier-telechargement/1750080827-2025_05_20_ap_n2025-867_signe_prefet.pdf) — PDF ; revue : 2026-09-28.
- Revue documentaire : 2026-09-28.
- Contrôle technique : **à revérifier** — 2026-09-28T17:44:20.016Z ; HTTP inconnu ; type inconnu.
- Anomalie : curl: (92) HTTP/2 stream 1 was not closed cleanly: ENHANCE_YOUR_CALM (err 11)
- Résumé : Arrêté signé du 20 mai 2025, liste parcellaire, carte départementale, quatre cartes de détail et document-cadre de la Chambre d’agriculture réunis dans le RAA du 3 juin 2025.
- Utilité : Lire l’arrêté avec ses annexes signées pour identifier les quatre secteurs retenus et les conditions d’implantation.
- Preuve / réserve : PDF officiel du RAA n° 51 reconnu (%PDF, 62 pages, 8,42 Mo). Les pages PDF 3 à 20 contiennent l’arrêté n° 2025-867 signé le 20 mai 2025, l’annexe 1 (Dieue-sur-Meuse, Euville, Muzeray et Neuville-sur-Ornain), l’annexe 2 avec carte générale et quatre cartes détaillées, puis le document-cadre. L’article 2 prévoit l’entrée en vigueur un mois après publication. Un PDF autonome de 18 pages, identique pour ces pièces et publié par la commune d’Ourches-sur-Meuse, a aussi été ouvert : https://www.ourches-sur-meuse.fr/userfile/fichier-telechargement/1750080827-2025_05_20_ap_n2025-867_signe_prefet.pdf

## Sources de départ et dossiers de recherche

- [Site initial](https://bibliotheque-solaire-grand-est-hdf.lvz-rzc.chatgpt.site/)
- [Conversation partagée](https://chatgpt.com/share/6aba9824-7bb4-83eb-90f9-6d440073ea6a)
- Notes détaillées dans `research/grand-est.md`, `research/hauts-de-france.md`, `research/national.md`.
- Le catalogue original de 34 notices est conservé dans `research/original-documents.js`. Les notices sans PDF ne sont pas affichées comme des documents téléchargeables.
- Fond cartographique : Etalab, contours administratifs 2021 simplifiés à 1000 m, stocké dans `assets/departements.geojson` ; voir `assets/README.md`.
