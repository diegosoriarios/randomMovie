import React from 'react';

import renderer from 'react-test-renderer';
import Profile from '../../pages/profile/index';

test('Profile renders correctly', () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});
