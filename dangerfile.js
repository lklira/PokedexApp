import {danger} from 'danger';

const checkComponentsCoverage = async () => {
  const promiseDiffs = danger.git.created_files
    .filter(createdFile => /^src\/components\/.+\.js$/.test(createdFile))
    .map(async createdFile => {
      const diff = await danger.git.structuredDiffForFile(createdFile);
      return {
        createdFile,
        diff,
      };
    });
  const structuredDiffs = await Promise.all(promiseDiffs); //^import React(,.+)? from 'react';$
  structuredDiffs.filter(({diff}) => {
    let isReactComponent = false;
    diff.chunks.forEach(chunk => {
      chunk.changes.forEach(change => {
        if (/^\+import React(,.+)? from 'react';$/.test(change.content)) {
          isReactComponent = true;
        }
      });
    });
    return isReactComponent;
  });
};

checkComponentsCoverage();
