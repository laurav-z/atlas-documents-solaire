# Réaudit des documents-cadres — Hauts-de-France hors Nord

Date de vérification : **2026-09-28**

Périmètre : **Aisne (02), Oise (60), Pas-de-Calais (62), Somme (80)**. Le Nord (59) est traité séparément.

## Conclusion opérationnelle

Les quatre départements ont bien une décision finale publiée. Les publications cartographiques ne prennent pas toutes la forme d’un PDF départemental unique : l’Aisne diffuse un atlas sous forme de PDF commune par commune et un tableau XLSX ; l’Oise et la Somme diffusent une carte Geo-IDE ; le Pas-de-Calais a publié une carte Geo-IDE et un tableau parcellaire pendant la consultation, puis l’arrêté final avec ses annexes dans le RAA. Ces disponibilités ne doivent donc pas être décrites comme absentes au seul motif qu’elles ne correspondent pas à un bouton PDF unique.

Le fichier `reaudit-north.json` propose quatre mises à jour d’entrées existantes. Les ressources non PDF sont placées dans `relatedLinks`, jamais dans `pdf`.

## Aisne (02)

Source préfectorale finale : [Document-cadre photovoltaïque — Préfecture de l’Aisne](https://www.aisne.gouv.fr/Actions-de-l-Etat/Consultations-et-Enquetes-publiques/Consultations-publiques/Energie/Document-cadre-photovoltaique/Document-cadre-photovoltaique), mise à jour le 1er juin 2026.

La page publie six PDF : l’arrêté TE-26-002 signé, la liste signée des annexes, la note explicative définitive, la notice réglementaire définitive, le rapport de synthèse définitif et une analyse des observations. La liste signée rattache cinq annexes à l’arrêté : note explicative, notice réglementaire, rapport de synthèse, atlas cartographique et tableau parcellaire.

La phrase précédente de `research/hauts-de-france.md` selon laquelle aucun accès à l’atlas ou au tableau n’était fourni doit être corrigée. La préfecture écrit que les cartes retenues pour chaque commune sont disponibles sur [la page « Document cadre de l’Aisne » de Pays Aisne](https://pays-aisne.org/territoires/consultation-en-cours/). Cette page de la Chambre d’agriculture publie :

- le [tableau identifiant les parcelles éligibles au format XLSX](https://pays-aisne.org/fileadmin/user_upload/329_pays_aisne/Fichiers_doc_cadre/Document_cadre_version_definitive/Tableau_identifiant_les_parcelles_eligibles_aux_installations_photovoltaiques.xlsx) ;
- **798 liens PDF libellés par commune**, dont 796 sous le répertoire `Atlas_cartographique` ;
- deux liens supplémentaires, Bruyères-sur-Fère et Vincy-Reuil-et-Magny, dont le chemin de stockage contient `Cartes__obselete_` mais qui restent proposés dans la liste courante.

Le classeur répond avec la signature ZIP/XLSX `PK`. Les PDF échantillonnés Abbecourt et Bruyères-sur-Fère répondent avec `%PDF-1.4`. Le nom technique `Cartes__obselete_` ne suffit pas à déclarer ces deux cartes périmées : la page courante les expose encore comme les cartes de ces communes. Il faut conserver cette réserve tant que l’éditeur ne précise pas leur statut.

L’atlas n’est donc pas un PDF unique manquant ; c’est un corpus distribué par commune. Le catalogue doit pointer vers l’index de l’atlas et le classeur comme ressources associées, sans placer le XLSX dans le champ `pdf`.

## Oise (60)

Source finale : [Le document-cadre photovoltaïque — Préfecture de l’Oise](https://www.oise.gouv.fr/Actions-de-l-Etat/Amenagement-durable-du-territoire/Transition-Ecologique-et-Energetique/Document-cadre-photovoltaique/Le-document-cadre-photovoltaique).

La page annonce explicitement trois composantes : la webcartographie, [l’arrêté préfectoral signé du 12 juin 2025](https://www.oise.gouv.fr/contenu/telechargement/89724/647126/file/AP%20concernant%20le%20document%20cadre%20photovolta%C3%AFque.pdf) et [la notice du document-cadre](https://www.oise.gouv.fr/contenu/telechargement/89725/647131/file/Notice%20document%20cadre%2060.pdf). La [carte Geo-IDE](https://carto2.geo-ide.din.developpement-durable.gouv.fr/frontoffice/?map=211bd9a4-c130-4639-b52e-6b6838900589) est également citée dans une décision officielle du Parc naturel régional Oise–Pays de France consacrée à ce document-cadre ; elle répond en HTTP 200.

Les deux PDF officiels sont reconnus par signature dans le contrôle de liens du 28 septembre 2026. La page finale ne présente pas l’atlas comme un PDF statique séparé : la cartographie officielle est un service web. Cette observation est bornée à la page finale consultée et ne constitue pas une affirmation d’absence dans toutes les archives administratives.

## Pas-de-Calais (62)

Source finale : [rubrique Document cadre — Préfecture du Pas-de-Calais](https://www.pas-de-calais.gouv.fr/index.php/Actions-de-l-Etat/Environnement-developpement-durable/Energie/Photovoltaique/Document-cadre).

Publication : [RAA n°62-2025-352 du 24 décembre 2025](https://www.pas-de-calais.gouv.fr/index.php/contenu/telechargement/83896/526887/file/Recueil%20des%20actes%20administratifs%20n%C2%B0352%20en%20date%20du%2024%20d%C3%A9cembre%202025.pdf).

Le RAA de 47 pages contient à partir de la page 21 l’arrêté final n°62-2025-12-19-00006 du 19 décembre 2025 et ses annexes. Le fichier est un PDF réel, reconnu par signature, et le sommaire du RAA identifie sans ambiguïté l’arrêté.

La [page de consultation d’août-septembre 2025](https://www.pas-de-calais.gouv.fr/Publications/Consultation-du-public/Participation-du-public-par-voie-electronique/Projets-photovoltaiques-dans-le-Pas-de-Calais) publie cinq PDF `AP 1/5` à `AP 5/5`, annonce expressément un tableau des parcelles identifiées et donne accès à [une cartographie dynamique Geo-IDE](https://carto2.geo-ide.din.developpement-durable.gouv.fr/frontoffice/?map=43f90ee9-1138-4a0f-b852-7d4d04c9cc99), encore accessible en HTTP 200.

Réserve de statut : la page d’août qualifie cette carte de cartographie du **projet**. Le RAA final est la source de décision. Tant qu’une lecture de ses annexes ne confirme pas explicitement que la couche Geo-IDE n’a pas changé, le lien cartographique doit être présenté comme ressource de consultation à confronter au texte final. Le tableau parcellaire est bien annoncé et disponible depuis la page de consultation ; son URL de fichier n’a pas été exposée par l’index de recherche, donc il ne faut ni inventer un lien direct ni conclure à son absence.

## Somme (80)

Source : [Document-cadre relatif aux installations photovoltaïques au sol — Préfecture de la Somme](https://www.somme.gouv.fr/Actions-de-l-Etat/Environnement/Photovoltaique/Participations-du-public-par-voie-electronique-et-decisions/Document-cadre-relatif-aux-installations-photovoltaiques-au-sol).

La page conserve le dossier de consultation et publie la décision finale : [arrêté approuvé le 3 décembre 2025](https://www.somme.gouv.fr/contenu/telechargement/54397/357943/file/document_cadre_Somme_approuve_03122025.pdf), puis [notice et cartographie de 22 pages](https://www.somme.gouv.fr/contenu/telechargement/54398/357948/file/2025_0808_V2_Doc_Cadre_80_SOMME_Notice_2024.pdf). Elle expose aussi [la cartographie Geo-IDE](https://carto2.geo-ide.din.developpement-durable.gouv.fr/frontoffice/?map=47ea9192-d308-48e8-9ebd-407dea38ba57), qui répond en HTTP 200.

Les deux PDF finaux sont reconnus par signature. La notice explique que les zones ont été déterminées à la parcelle cadastrale et que les données cartographiques sont produites en formats SIG `shp` ou `gpkg`. Aucun fichier parcellaire autonome n’est listé dans la section finale de cette page ; la donnée reste toutefois consultable par la carte web et partiellement documentée dans le PDF. Cette limite ne doit pas être reformulée comme une absence générale de données.

## Contrôles techniques et limites

- Le rapport `research/link-checks/2026-09-28T17-21-52.234Z.json` reconnaît par signature PDF les cinq pièces cataloguées de l’Aisne, l’arrêté et la notice de l’Oise, le RAA du Pas-de-Calais, ainsi que l’arrêté et la notice de la Somme.
- Les trois cartes Geo-IDE 60, 62 et 80 répondaient en HTTP 200 le 28 septembre 2026.
- Le classeur parcellaire de l’Aisne a une signature XLSX valide et les PDF communaux échantillonnés ont une signature PDF valide.
- Un succès réseau ne prouve pas à lui seul la portée juridique. Pour le Pas-de-Calais, seule la publication du RAA est traitée comme décision finale ; la carte de consultation conserve une mention explicite de son statut provisoire.
- Aucun lien n’a été reconstruit par supposition. Lorsqu’un fichier est annoncé sans cible directe récupérable, la page source est conservée et la lacune est formulée comme une limite d’accès, pas comme une inexistence.
