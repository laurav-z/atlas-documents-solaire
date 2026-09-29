import { mkdir, cp, rm } from 'node:fs/promises';
import { basename } from 'node:path';

// dist is generated: remove old files so renamed assets cannot survive a build.
await rm('dist', {recursive:true, force:true});
await mkdir('dist', {recursive:true});
for (const name of ['index.html','styles.css','app.js','lib.js','assets','data','SOURCES.md','.nojekyll']) {
  await cp(name, `dist/${name}`, {
    recursive:true,
    filter: source => basename(source) !== '.DS_Store' && !basename(source).startsWith('._'),
  });
}
console.log('Site statique généré dans dist/ — chemins relatifs compatibles GitHub Pages.');
