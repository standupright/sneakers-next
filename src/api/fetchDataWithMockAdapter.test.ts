// this test case for axios-mock-adapter
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { fetchData } from './fetchData';

describe('fetch data correctly', () => {
    let mock: MockAdapter;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe('when API call is successful', () => {
        it('should return price list', async () => {
            const MOCKED_DATA = [
                {
                    id: 1,
                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                },
                {
                    id: 2,
                    title: 'qui est esse',
                },
                {
                    id: 3,
                    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
                },
            ];
            //mocked value
            mock.onGet(`https://jsonplaceholder.typicode.com/posts`).reply(200, MOCKED_DATA);

            // when fetch data
            const data = await fetchData();

            // expect correct url
            expect(mock.history.get[0].url).toEqual(`https://jsonplaceholder.typicode.com/posts`);

            //expect correct data
            expect(data).toEqual(MOCKED_DATA);
        });
    });
});

export {};
