# Assets locaux et provenance

Téléchargements initiaux : 28 septembre 2026.

- `departements.geojson` : contours administratifs français Etalab, millésime 2021, simplification 1000 m, 101 départements. Source : https://etalab-datasets.geo.data.gouv.fr/contours-administratifs/2021/geojson/departements-1000m.geojson ; catalogue : https://etalab-datasets.geo.data.gouv.fr/contours-administratifs/2021/geojson/ ; réutilisation sous Licence Ouverte Etalab. La carte est destinée à la navigation, pas au cadastre. Métropole en projection équirectangulaire ajustée ; outre-mer en encarts avec échelles propres.
- `dm-sans-latin.woff2` : DM Sans variable, auteurs du projet DM Fonts / Google Fonts, sous SIL Open Font License 1.1. Distribution Fontsource : https://cdn.jsdelivr.net/fontsource/fonts/dm-sans:vf@latest/latin-wght-normal.woff2 ; licence locale : `FONT-LICENSE.txt`, source https://raw.githubusercontent.com/googlefonts/dm-fonts/main/Sans/OFL.txt . Le binaire local est figé ; aucune requête CDN à l’exécution.
- `favicon.svg` : marque solaire dessinée en SVG pour ce projet.

La France cartographiée inclut les départements métropolitains et les cinq départements d’outre-mer. Les collectivités d’outre-mer qui ne sont pas des départements ne sont pas représentées. Le MVP active seulement les 15 départements des deux régions documentées.
