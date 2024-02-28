import type { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import type { DocumentNode } from 'graphql/language';

import type { Variables } from '~/app/client/Wordpress/Variables';

export default interface IGraphQLClient {
    get<T>(query: DocumentNode, variables: Variables): Promise<ApolloQueryResult<T>>;

    post<T>(mutation: DocumentNode, variables: Variables): Promise<FetchResult<T>>;
}