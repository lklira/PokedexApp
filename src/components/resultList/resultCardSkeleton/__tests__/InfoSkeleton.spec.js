import React from 'react';
import {render} from '@testing-library/react-native';
import InfoSkeleton from '../InfoSkeleton.js';

describe('#InfoSkeleton', () => {
  let tree;
  beforeEach(() => {
    tree = render(<InfoSkeleton />);
  });

  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
