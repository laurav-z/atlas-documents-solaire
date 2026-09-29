# Validation de l’interface — 28 septembre 2026

Contrôles effectués dans le navigateur Codex sur le serveur local `http://127.0.0.1:4173`.

## Parcours vérifiés

- Nouvelle vue bureau 1440 × 1000 : carte sur toute la largeur du contenu (1320 px), hauteur cartographique de 470 px. France en aperçu, puis seule région sélectionnée avec zoom animé.
- Vue mobile 390 × 844 : aucune largeur de document supérieure au viewport (390 px mesurés), filtres et liste des départements utilisables.
- Nouveau parcours Grand Est : sept publications régionales ; dix départements accessibles dans la carte agrandie. Sélection de Haute-Marne : six documents locaux, puis treize avec Grand Est, puis vingt-trois avec les dix références nationales. Boutons distincts et états reflétés dans l’URL.
- Nouveau parcours Hauts-de-France : quatre publications régionales, cinq départements accessibles. Sélection du Nord sur mobile : trois documents locaux et deux ajouts désactivés par défaut. Aucun débordement horizontal (390 px mesurés).
- Sélection des Hauts-de-France au clavier avec Entrée ; bouton « Toutes les régions » rétablit la France et réinitialise les ajouts.
- Recherche « zones humides », recherche sans résultats, retour au catalogue.
- Ajout d’une charte à la sélection, affichage de la sélection filtrée, conservation après rechargement, retrait ; sélection finale remise à zéro.
- Ouverture des filtres avancés, année 2026, tri alphabétique et déclenchement de l’export CSV. Le format CSV et sa protection contre les formules sont vérifiés par tests unitaires.
- Ouverture et fermeture du dialogue expliquant la méthode.
- Aucun message d’erreur JavaScript capturé après ces parcours.

## Contrôles automatisés

`npm test` couvre l’intégrité et la provenance du catalogue, les 15 départements et leurs géométries, les interactions des filtres territoriaux et des ajouts indépendants de références régionales et nationales, la recherche insensible aux accents, les sélections, l’export CSV, les fragments de page PDF et la présence des résultats techniques datés.

Les résultats des contrôles réseau se trouvent séparément dans `data/link-checks.json` et `research/link-checks/`. Les refus automatisés et erreurs ne sont pas assimilés à une vérification réussie.

## Limites

La revue visuelle ne constitue pas une certification exhaustive d’accessibilité ni un test sur tous les navigateurs. Les PDF utilisent le lecteur du navigateur de l’utilisateur ; le comportement de `#page=N` peut varier. Les liens institutionnels et les textes peuvent évoluer après la date de contrôle.
