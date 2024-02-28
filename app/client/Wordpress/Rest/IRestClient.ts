import type { AsyncData } from '#app';
import type { KeysOf, PickFrom } from '#app/composables/asyncData';
import type { Variables } from '~/app/client/Wordpress/Variables';

export default interface IRestClient {
    get<T>(endpoint: string, lazy: boolean): AsyncData<T | PickFrom<T, KeysOf<T>>, T | null>;

    post<T>(endpoint: string, variables: Variables): Promise<T>;

    patch<T>(endpoint: string, variables: Variables): Promise<T>;

    put<T>(endpoint: string, variables: Variables): Promise<T>;
}