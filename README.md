# Atlas solaire

Bibliothèque photovoltaïque et agrivoltaïque indépendante, en français, pour le Grand Est et les Hauts-de-France. HTML, CSS et JavaScript natifs ; **aucune dépendance d’exécution, aucun compte, aucun service tiers pour afficher le site**.

## Démarrer localement

Prérequis : Node.js 22 ou plus récent. Aucun `npm install` nécessaire.

```sh
npm start
```

Ouvrir **http://127.0.0.1:4173**. Le serveur écoute uniquement sur la machine locale. Changer le port : `PORT=4200 npm start`. Utiliser un serveur HTTP, pas un double-clic `file://`, car les données JSON sont chargées par `fetch`.

## Ce que contient le site

- Carte de la France métropolitaine et des cinq départements d’outre-mer en encarts ; sélection de région puis zoom animé sur ses seuls départements, navigation équivalente au clavier et en liste.
- Recherche sans distinction d’accents, filtres cumulables, tri et une région affiche uniquement ses publications régionales ; un département affiche ses propres documents, avec deux ajouts indépendants (région et France), désactivés par défaut.
- Liens directs vers les PDF des éditeurs, provenance, statut et vérification technique séparés.
- Sélection enregistrée dans le navigateur, export CSV des résultats et recherches partageables par URL.
- Interface responsive, polices et contours géographiques locaux, sans CDN ni suivi analytique.

**Local ne signifie pas copie hors ligne des PDF** : les documents restent sur les serveurs institutionnels et nécessitent Internet. La sélection est propre à ce navigateur ; le code et le catalogue peuvent être copiés entre utilisateurs et agents. Les liens de recherche contenant `127.0.0.1` fonctionnent chez un autre utilisateur s’il lance la même copie locale. Après déploiement, ils utiliseront le domaine du site.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html`, `styles.css`, `app.js` | Structure, design et interactions |
| `lib.js` | Recherche, filtrage, tri et export testables |
| `data/documents.json` | Catalogue éditorial de référence |
| `data/regions.json` | Régions actives et départements |
| `data/link-checks.json` | Dernier contrôle technique des PDF |
| `SOURCES.md` | Registre daté, liens, preuves et méthode de rafraîchissement |
| `research/` | Catalogue d’origine, recherches détaillées et historique des contrôles |
| `assets/` | Carte, police et identité visuelle locales |
| `scripts/` | Serveur, build, contrôle des liens et registre |
| `tests/` | Intégrité du catalogue et logique de recherche |
| `.nojekyll` | Publication directe des fichiers statiques sur GitHub Pages |
| `dist/` | Copie générée pour publication, ignorée par Git et recréée à chaque build |

## Modifier ou ajouter un document

Modifier `data/documents.json`. Chaque notice comprend `id` stable, `title`, `region`, `dept` (code, `regional` ou `national`), `org`, `year`, `type`, `status`, `tags`, `url` (provenance), **`pdf` (fichier direct)**, `summary`, `utility`, `importance`, `verified` (date de revue documentaire) et `evidence` (preuve et réserves). Les filtres se construisent automatiquement. `relatedLinks` conserve les annexes, cartes interactives et classeurs associés, avec `label`, `url`, `kind` et `verified` ; seuls les fichiers PDF portent cette étiquette.

Ne pas déduire une date de publication ou un statut juridique du seul nom de fichier. Ne pas assimiler une consultation à un arrêté définitif. Le lien JORF peut être un PDF sans extension `.pdf`. Les anciens documents peuvent rester référencés avec leur statut explicite.

Ne pas confondre « non localisé dans notre recherche » avec « inexistant » : un arrêté peut se trouver uniquement dans un recueil des actes administratifs, une copie communale ou une annexe peu indexée. L’audit complémentaire des 15 départements est consigné dans `research/document-cadre-audit.md`. Les anciennes URLs remplacées sont conservées dans `previousPdfUrls` lorsqu’une équivalence a été vérifiée. La recherche accepte « document cadre », « documents-cadres » et les tirets typographiques.

## Vérifier et rafraîchir

```sh
npm run check:links
npm run sources
npm test
npm run build
```

`check:links` nécessite Internet et `curl`. Il suit les redirections avec contrôle TLS, demande les premiers octets, contrôle la signature `%PDF-`, limite les requêtes à 35 secondes et conserve les rapports datés dans `research/link-checks/`. Certains serveurs ignorent la plage et renvoient le fichier complet (limite 40 Mo). Un code de sortie 1 signale des anomalies à examiner ; **le rapport est tout de même écrit**. Un refus automatisé ne signifie pas forcément que le lien est cassé. Une réponse PDF correcte ne garantit pas la bonne version : la revue documentaire reste humaine ou agentique.

Contrôle ciblé après une correction : `npm run check:links -- --ids=88-charte,62-cadre`. Les résultats précédents des autres URLs inchangées gardent leur date propre. Le champ facultatif `pdfPage` ouvre une page précise d’un recueil grâce au fragment standard `#page=N` (selon le lecteur PDF).

Prochaine revue suggérée : **28 mars 2027**. Les instructions précises et les lacunes sont dans `SOURCES.md` et les notes de recherche. Aucun rappel automatique n’a été créé.

`node scripts/merge-research.mjs` réimporte intentionnellement les trois dossiers de recherche et le catalogue initial : ce n’est pas une commande de mise à jour courante, car elle peut écraser des modifications éditoriales ultérieures. Relire le diff avant de la lancer sur un catalogue modifié.

## Partager et héberger gratuitement sur GitHub Pages

La méthode la plus simple est un **dépôt public**, puis un **fork sur le compte de votre ami**. GitHub Pages est inclus dans GitHub Free pour les dépôts publics. Aucun serveur, domaine payant ou installation Node.js n’est nécessaire pour consulter le site hébergé.

### Partager le projet

Pour publier une nouvelle copie qui ne contient pas encore de dépôt Git, créer sur GitHub un dépôt public nommé `atlas-documents-solaire`, vide (sans README, licence ou `.gitignore` générés), puis exécuter depuis ce dossier, en remplaçant `VOTRE-COMPTE` par votre identifiant :

```sh
git init -b main
git add .
git commit -m "Ajouter Atlas solaire"
git remote add origin https://github.com/VOTRE-COMPTE/atlas-documents-solaire.git
git push -u origin main
```

Le `.gitignore` exclut `dist/` et les fichiers temporaires. Conserver `research/`, `tests/`, `scripts/` et les licences : ils permettent à votre ami de maintenir et vérifier le catalogue.

### Activer le site chez votre ami

1. Votre ami ouvre votre dépôt sur GitHub et clique sur **Fork**. Il choisit son propre compte et le nom **`atlas-documents-solaire`**.
2. Dans son dépôt : **Settings → Pages → Build and deployment → Source → Deploy from a branch**.
3. Sélectionner **`main`**, dossier **`/ (root)`**, puis **Save**.
4. Attendre la publication ; GitHub affiche l’adresse du site dans cette même page.

Pour un compte dont l’identifiant GitHub est exactement `firstname-lastname`, l’adresse sera **https://firstname-lastname.github.io/atlas-documents-solaire/**. Il s’agit de l’identifiant du compte, pas du nom affiché sur son profil. Aucun dépôt séparé `firstname-lastname.github.io` n’est requis pour ce site de projet.

Le fichier `.nojekyll` permet de servir directement le site statique à la racine. Les chemins relatifs fonctionnent sous le nom du dépôt sans modification du code. Les futurs commits sur `main` republient le site ; pour récupérer vos améliorations, votre ami peut utiliser **Sync fork** dans son dépôt, puis vérifier les éventuels conflits s’il a aussi fait des modifications.

Pour une copie indépendante qui ne suit pas vos mises à jour, votre ami peut à la place créer lui-même le dépôt public et y pousser ce dossier avec les commandes ci-dessus en utilisant son identifiant.

Documentation officielle : [disponibilité de Pages et configuration](https://docs.github.com/en/pages/quickstart), [source de publication](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Construire une copie autonome (facultatif)

`npm run build` copie les fichiers publics dans `dist/`, avec des chemins relatifs compatibles avec un sous-répertoire GitHub Pages. Test local du résultat :

```sh
SERVE_DIR=dist PORT=4174 npm start
```

Le build recrée `dist/` pour éviter les fichiers périmés et exclut les métadonnées macOS. Ce livrable peut être publié sur un autre hébergement statique ; la méthode GitHub Pages ci-dessus utilise directement les fichiers à la racine et ne nécessite pas de build. Aucun déploiement, dépôt distant ou configuration de compte GitHub n’est effectué ici.

## Étendre le périmètre

Ajouter les régions et codes dans `data/regions.json`, puis leurs documents. Les boutons et les zones actives de la carte sont dérivés des données. Adapter aussi les textes de périmètre (titre, chiffres, introduction, méthode et README), actuellement volontairement limités aux deux régions. Le fond de carte contient déjà les 101 départements.

Les actifs tiers et leurs licences sont documentés dans `assets/README.md`. Les publications institutionnelles restent la propriété de leurs éditeurs.
