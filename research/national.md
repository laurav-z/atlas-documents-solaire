# Recherche nationale et Grand Est — PDF institutionnels photovoltaïque / agrivoltaïsme

Vérification menée le 28 septembre 2026. Le fichier `national.json` contient 16 documents : 10 nationaux et 6 régionaux Grand Est. Quinze liens `pdf` ont été ouverts ou contrôlés comme PDF avec succès. Le seul endpoint qui reste bloqué en vérification automatisée est l’extrait Légifrance du décret n°2024-318, qui renvoie HTTP 403 à `curl`; il est conservé parce qu’aucune copie institutionnelle stable n’a été trouvée et que la page Légifrance en confirme la nature. Le guide ADEME-OFB de 2023 a été exclu du JSON plutôt que de publier son lien OFB pris dans une boucle de redirections.

## Statut des trois textes nationaux de base

Les trois documents sont les **extraits du Journal officiel**, donc la photographie du texte publié :

- loi n° 2023-175 : JORF n°0060 du 11 mars 2023, texte n°1, PDF de 48 pages;
- décret n° 2024-318 : JORF n°0083 du 9 avril 2024, texte n°2, extrait annoncé à 308,3 Ko;
- arrêté du 5 juillet 2024 : JORF n°0160 du 7 juillet 2024, texte n°15, extrait annoncé à 210,9 Ko.

Les pages de provenance restent celles de Légifrance. Pour éviter deux endpoints Légifrance qui renvoyaient HTTP 403 à `curl`, le lien PDF de la loi pointe vers la copie intégrale conservée par FAOLEX, base juridique officielle de la FAO, et celui de l’arrêté vers la copie publiée par la préfecture de Lozère. Leur signature `%PDF-`, leur première page, leur NOR et leurs métadonnées ont été contrôlés. Le lien PDF du décret reste celui de Légifrance : deux copies tierces identiques ont permis d’en vérifier le titre DILA, les neuf pages et le NOR ECOR2321918D, mais elles n’ont pas été retenues comme liens principaux faute de provenance institutionnelle.

Ces PDF ne sont pas des versions consolidées. Les pages Légifrance affichent explicitement « Version INITIALE » et proposent un lien distinct vers la version consolidée. Pour une note juridique, une promesse foncière ou un dossier à déposer, il faut donc vérifier les articles codifiés et la version consolidée à la date pertinente. Le champ `status` n’emploie pas « en vigueur » sur la seule foi du titre d’une page. Une exception documentée concerne l’instruction DGPE/SDPE/2025-93 : le Bulletin officiel de l’Agriculture l’indique expressément « En vigueur » et non caduque.

L’instruction technique du 18 février 2025 est un complément particulièrement utile : elle traduit le décret et l’arrêté en ordre de méthode pour les préfets, DDT(M), DAAF et services instructeurs, avec cinq annexes. Elle n’a pas la même nature qu’une loi ou un décret, mais elle renseigne directement sur la lecture administrative attendue.

## Couverture obtenue

### Droit, agriculture et instruction

- loi APER, décret agrivoltaïsme, arrêté technique et instruction interministérielle 2025;
- guide ministériel d’instruction des autorisations d’urbanisme au sol;
- guide national de l’étude d’impact;
- guide ministériel des parkings, eaux pluviales et ombrage.

Les guides de 2011 et 2020 restent utiles comme trames de méthode et de procédure, mais ils précèdent la loi APER et les textes de 2024-2025. Le guide parking de mai 2024 indique lui-même qu’il se concentre sur la loi Climat et résilience et qu’une mise à jour doit intégrer les textes d’application de l’article 40 APER. Ils ne doivent donc pas être utilisés seuls pour affirmer un seuil ou une obligation actuelle.

### Biodiversité et évaluation environnementale

- guide OFB/X-AEQUO sur les clôtures;
- synthèse bibliographique LPO soutenue par l’ADEME et l’OFB;
- délibération CNPN n°2024-16;
- avis CSRPN Grand Est n°2022-109;
- guide régional zones humides, construit avec les DDT, le Cerema et l’OFB.

Ces sources n’ont pas toutes la même portée. Les guides, synthèses et avis scientifiques n’ajoutent pas à eux seuls une obligation réglementaire. Ils sont néanmoins précieux pour anticiper la qualité attendue de l’état initial, de la recherche d’alternatives, de la séquence ERC, du dessin des clôtures et d’une éventuelle demande de dérogation espèces protégées.

### Grand Est

Les quatre entrées DREAL déjà présentes dans le corpus source ont été conservées et enrichies : guide réglementaire 2026, zones humides 2025, recommandations flottant 2026 et paysage 2025. Deux documents complémentaires ont été ajoutés :

- la synthèse Cerema/Région Grand Est sur 24 projets de solaire flottant, avec quatre recommandations opérationnelles et un PDF officiel de dix pages;
- l’avis CSRPN Grand Est n°2022-109 sur photovoltaïque et biodiversité.

Le rapport Cerema complet sur le solaire flottant compte 82 pages et est annoncé sur CeremaDoc/HAL. La synthèse directe de dix pages a été retenue parce qu’elle est librement accessible sur un serveur DREAL et a pu être ouverte. Elle signale elle-même qu’il faut consulter le rapport complet pour les justifications détaillées.

## Preuves et contrôle des liens

Les vérifications ont porté sur le type de contenu, la signature `%PDF-`, le titre dans le PDF, le nombre de pages lorsque disponible, l’identité de l’éditeur et la cohérence entre la page de présentation et le fichier. Les liens les plus solides sont ceux des services de l’État, du ministère de la Transition écologique, de la DREAL Grand Est, du Bulletin officiel de l’Agriculture et du site officiel des avis biodiversité. FAOLEX sert ici de miroir institutionnel du texte JORF de la loi, tandis que Légifrance reste la page de provenance juridique.

La synthèse LPO 2022 est accessible sur une plateforme publique Expertises Territoires et sa notice est cataloguée en accès libre par le portail Eau et biodiversité/OFB. Le guide clôtures est servi par le centre de ressources Trame verte et bleue, ressource nationale soutenue par l’OFB. Le rapport Cerema flottant est une copie sur un serveur DREAL Bourgogne-Franche-Comté, mais le PDF identifie bien Cerema et la Région Grand Est et la page projet Cerema confirme le contenu.

## Lacunes conservées plutôt que masquées

- **Incendie / SDIS** : aucun guide national récent, stable, librement accessible et spécifiquement consacré à la sécurité incendie des centrales photovoltaïques au sol n’a été trouvé sur un domaine ministériel. Le guide d’étude d’impact de 2011 traite le risque incendie, et le guide DREAL Grand Est rappelle les procédures, mais les prescriptions concrètes doivent être demandées au SDIS du département concerné dès le prédiagnostic.
- **Raccordement** : le guide réglementaire DREAL Grand Est comprend un volet raccordement. Enedis publie des pages et référentiels versionnés, mais la recherche n’a pas fait émerger un guide PDF générique stable couvrant tout le parcours d’un développeur; aucun chemin n’a été fabriqué.
- **Toitures** : le guide CSTB/ministériel 2024 pour installer des systèmes photovoltaïques est bien référencé par une page officielle ÉcoCités, mais l’URL PDF ministérielle trouvée renvoie actuellement 404. Il est donc exclu du JSON. Le guide parking, vérifié, couvre les ombrières et l’articulation avec certaines obligations de bâtiment.
- **ADEME — bilan GES et CAT’EnR** : les fiches et outils sont pertinents, mais les pages ADEME demandent une adresse électronique ou renvoient vers plusieurs fichiers sans URL directe stable exposée. Ils n’ont pas été inclus car la consigne impose un lien PDF réel et librement accessible.
- **ADEME-OFB — « Photovoltaïque, sol et biodiversité »** : la fiche ADEME confirme la référence 011867, 40 pages et un PDF de 9,74 Mo. Son endpoint OFB effectue toutefois plus de 50 redirections, et la fiche ADEME impose désormais un formulaire pour obtenir le fichier. L’entrée a été retirée du JSON jusqu’à la publication d’un lien direct officiel stable.
- **OFB — photovoltaïque flottant 2025** : la notice officielle est disponible, mais aucun lien PDF officiel direct et stable n’a été exposé par la page lors du contrôle. Le corpus régional contient déjà la synthèse Cerema et le porter à connaissance DREAL; l’entrée OFB n’a pas été forcée.
- **Données utiles à l’amont d’un projet ENR** : la page DREAL Grand Est est une ressource web et SIG, pas un document PDF unique. Elle n’entre pas dans ce lot strictement PDF.

## Ordre de lecture conseillé pour un projet

1. Vérifier la loi, le décret, l’arrêté et les articles consolidés applicables.
2. Lire l’instruction DGPE/SDPE/2025-93 et le guide réglementaire DREAL Grand Est.
3. Examiner le document-cadre départemental et les doctrines locales du département concerné.
4. Écarter très tôt les contraintes fortes : zones humides, habitats et espèces, paysage, forêt, eau et risque incendie.
5. Utiliser les guides biodiversité, clôtures, CNPN/CSRPN et, le cas échéant, Cerema flottant pour bâtir les variantes et la séquence ERC.
6. Confirmer avec la DDT(M), la DREAL, le SDIS et le gestionnaire de réseau les attendus et versions applicables avant le dépôt.
