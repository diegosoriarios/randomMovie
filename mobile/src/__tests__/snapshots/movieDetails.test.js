// __tests__/Intro-test.js
import React from 'react';

import renderer from 'react-test-renderer';
import MovieDetail from '../../pages/movieDetail/index';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native');

test('renders correctly', () => {
  const route = {
    params: {
      movie: {
        vote_average: '',
        image: '',
        title: '',
        overview: '',
        genre_ids: '',
      },
    },
  };
  const tree = renderer.create(<MovieDetail route={route} />).toJSON();
  expect(tree).toMatchSnapshot();
});
