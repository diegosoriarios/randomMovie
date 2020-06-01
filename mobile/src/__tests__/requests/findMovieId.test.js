import mockAxios from 'axios';
import {findMovieId} from '../../services/api';

jest.mock('axios');

it('fetch data from tmdb', async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: [{id: 68734}],
      },
    }),
  );
  const id = await findMovieId('Argo');

  expect(id).toEqual(68734);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
