import React from 'react';
import {render} from '@testing-library/react-native';
import ResultCardSkeleton from '../index.js';

describe('#ResultCardSkeleton', () => {
  let tree;

  beforeEach(() => {
    tree = render(<ResultCardSkeleton />);
  });

  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
