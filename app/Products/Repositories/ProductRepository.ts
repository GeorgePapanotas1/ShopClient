import type { AsyncData } from '#app';
import type IRestClient from '~/app/client/Wordpress/Rest/IRestClient';
import { Variables } from '~/app/client/Wordpress/Variables';
import type { ProductResponse } from '~/app/Products/Response/SingleProduct';
import type { VariationResponse } from '~/app/Products/Response/VariationsResponse';

export default class ProductRepository {

    constructor(private client: IRestClient) {}
    findOneBySlug(singleProductBySlugQuery: Variables, lazy: boolean): Promise<AsyncData<ProductResponse, Error>> {
        return this.client.get(this.setupEndpoint(singleProductBySlugQuery), lazy);
    }

    getProductVariations(productId: number, lazy: boolean): Promise<VariationResponse[]> {

        return this.client.get(`/products/${productId}/variations?per_page=100`, lazy);
    }

    private setupEndpoint(singleProductBySlugQuery: Variables): string {

        return `/products?slug=${singleProductBySlugQuery.getSlug()}`;

    }
}