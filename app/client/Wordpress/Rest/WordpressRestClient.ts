import type { AsyncData } from '#app';
import type { KeysOf, PickFrom } from '#app/composables/asyncData';
import type IRestClient from '~/app/client/Wordpress/Rest/IRestClient';
import type { Variables } from '~/app/client/Wordpress/Variables';

export default class WordpressRestClient implements IRestClient {

    private readonly url: string;
    private readonly token: string;
    constructor(
        url: string,
        token: string,
    ) {
        this.url = url;
        this.token = token;
    }

    get<T>(endpoint: string, lazy = false): AsyncData<T | PickFrom<T, KeysOf<T>>, T | null> {

        const authHeader = this.setupAuth();

        if (lazy) {
            return $fetch(this.url + endpoint, { headers: authHeader });
        }

        return useFetch(this.url + endpoint, { headers: authHeader });
    }

    patch<T>(endpoint: string, variables: Variables): Promise<T> {
        return Promise.resolve(undefined);
    }

    post<T>(endpoint: string, variables: Variables): Promise<T> {
        return Promise.resolve(undefined);
    }

    put<T>(endpoint: string, variables: Variables): Promise<T> {
        return Promise.resolve(undefined);
    }

    private setupAuth(): object {
        return { Authorization:  `Basic ${this.token}` };
    }

}