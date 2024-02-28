import {
    ApolloClient,
    ApolloLink,
    type ApolloQueryResult,
    createHttpLink,
    type FetchResult,
    InMemoryCache,
} from '@apollo/client/core';
import type { DocumentNode } from 'graphql/language';

import type { Variables } from '../Variables';
import type IGraphQLClient from './IGraphQLClient';

export default class WordpressGQLClient implements IGraphQLClient {

    private readonly url: string;
    private readonly token: string;

    constructor(
        url: string,
        token: string,
    ) {
        this.url = url;
        this.token = token;
    }

    async get<T>(query: DocumentNode, variables: Variables): Promise<ApolloQueryResult<T>> {
        return await this.buildClient().query<T>({
            fetchPolicy: 'cache-first',
            query: query,
            variables: variables,
        });
    }

    async post<T>(mutation: DocumentNode, variables: Variables): Promise<FetchResult<T>> {
        return await this.buildClient().mutate<T>({
            mutation: mutation,
            variables: variables,
        });
    }

    private buildLink(): ApolloLink {
        return createHttpLink({
            headers: {
                authorization: this.token,
            },
            uri: this.url,
        });
    }

    private buildClient() {
        return new ApolloClient({
            cache: new InMemoryCache(),
            link: this.buildLink(),
        });
    }
}