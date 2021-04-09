import React from 'react';

import renderer, { act } from 'react-test-renderer';
import MovieDetail from '../../pages/movieDetail/index';

jest.mock('@react-navigation/native');

test('renders correctly', async (done) => {
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
  done();
});
