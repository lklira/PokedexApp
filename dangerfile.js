import {danger} from 'danger';

const checkComponentsCoverage = () => {
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
};
