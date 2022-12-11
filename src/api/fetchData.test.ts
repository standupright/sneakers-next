import axios, { AxiosResponse } from 'axios';
import { Price } from '../types/prices';
import { fetchData } from './fetchData';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetch data prices', () => {
    let response: Promise<AxiosResponse<Price[]>>;
    // mocks data
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
    beforeAll(() => {
        response = new Promise(() => {
            return {
                data: MOCKED_DATA,
                status: 200,
                statusText: 'Ok',
                headers: {},
                config: {},
            };
        });
    });

    it('Fetching data correctly', async () => {
        mockedAxios.get.mockReturnValue(response);
    });
});

export {};
