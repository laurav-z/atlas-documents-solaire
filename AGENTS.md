# Atlas solaire — instructions de maintenance

- Site statique en HTML/CSS/JavaScript natifs, sans dépendances d’exécution. Préserver la possibilité de servir le dossier avec un simple serveur HTTP et les chemins relatifs pour GitHub Pages.
- Catalogue éditorial : `data/documents.json`. Lire `SOURCES.md` et les notes `research/*.md` avant toute nouvelle recherche.
- Un bouton « PDF » doit cibler un fichier PDF réel, jamais une page HTML qui annonce le document. Garder la page de publication séparée dans `url`.
- Ne pas marquer un texte « en vigueur » sur la seule base d’un téléchargement réussi. Distinguer version initiale, projet, charte, recommandation et texte définitif ; consigner les preuves et dates.
- Ne pas inventer une URL, une date, un statut ou une couverture exhaustive. Les liens non confirmés restent signalés explicitement.
- Une recherche infructueuse ne prouve pas l’absence d’un document. Avant de signaler une lacune de document-cadre, vérifier les pièces de la page préfectorale, les recueils des actes administratifs, les publications de la chambre d’agriculture et les copies des collectivités. Distinguer arrêté, document-cadre, annexes, carte web, PDF non localisé et accès techniquement bloqué. Écrire « non localisé dans les sources consultées au [date] », jamais « inexistant » ou « non disponible » sans preuve positive.
- Préserver la traçabilité des PDF du catalogue initial ; lorsqu’une URL est remplacée, documenter l’équivalence et conserver l’ancienne dans `previousPdfUrls`. Le test de migration protège cette règle.
- Après une modification documentaire : contrôler les liens concernés, exécuter `npm run sources`, `npm test` et `npm run build`. Conserver les rapports datés dans `research/link-checks/`.
- Les polices, les cartes et autres assets du site doivent rester locaux. Documenter leurs sources et licences.
- Pour Python, utiliser `uv` par défaut (versions, environnements, dépendances, outils), avec bibliothèques propres au projet.
- Périmètre actif : Grand Est et Hauts-de-France. D'autres régions et documents sont prévus pour des versions futures.
- Ne pas déployer sans demande explicite. Ne pas exécuter le réimport `merge-research.mjs` sur des éditions manuelles sans examiner les changements.
