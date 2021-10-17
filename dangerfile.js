import {danger, fail} from 'danger';

const checkComponentsCoverage = async () => {
  const promiseDiffs = danger.git.created_files
    .filter(createdFile => /^src\/components\/[^.]+\.js$/.test(createdFile))
    .map(async createdFile => {
      const diff = await danger.git.structuredDiffForFile(createdFile);
      return {
        createdFile,
        diff,
      };
    });
  const structuredDiffs = await Promise.all(promiseDiffs); //^import React(,.+)? from 'react';$
  structuredDiffs
    .filter(({diff}) => {
      let isReactComponent = false;
      diff.chunks.forEach(chunk => {
        chunk.changes.forEach(change => {
          if (/^\+import React(,.+)? from 'react';$/.test(change.content)) {
            isReactComponent = true;
          }
        });
      });
      return isReactComponent;
    })
    .forEach(({createdFile}) => {
      const splitArray = createdFile.split('/');
      const fileName = splitArray[splitArray.length - 1].split('.')[0];
      const folderName =
        splitArray.slice(0, splitArray.length - 1).join('/') + '/';
      const testFile = folderName + fileName + '.spec.js';
      if (!danger.git.created_files.includes(testFile)) {
        fail("There's a missing unit test for component " + createdFile);
      }
    });
};

checkComponentsCoverage();
