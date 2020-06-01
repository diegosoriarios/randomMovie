import mockAxios from 'axios';
import {getGenreName} from '../../services/api';

jest.mock('axios');

it('fetch data from tmdb', async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        genres: [18, 53],
      },
    }),
  );
  const genreIds = [18, 53];
  const genreNames = await getGenreName(genreIds);

  console.log(genreNames);
});
