import React from 'react';

import renderer from 'react-test-renderer';
import HomePage from '../../pages/home/index';

jest.mock('@react-navigation/native');

test('renders correctly', () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
