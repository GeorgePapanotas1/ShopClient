import type { _AsyncData } from '#app/composables/asyncData';
import type { Variables } from '~/app/client/Wordpress/Variables';
import { ClientInternalError } from '~/app/Exceptions/ClientInternalError';
import { ErrorHandler } from '~/app/Exceptions/ErrorHandler';
import { NotFoundException } from '~/app/Exceptions/NotFoundException';
import SingleProduct from '~/app/Products/Domain/SingleProduct';
import Product from '~/app/Products/Domain/SingleProduct';
import Variation from '~/app/Products/Domain/Variation';
import SingleProductBySlugQuery from '~/app/Products/Dto/Queries/SingleProductBySkuQuery';
import type ProductRepository from '~/app/Products/Repositories/ProductRepository';
import type { ProductResponse } from '~/app/Products/Response/SingleProduct';
import type { VariationResponse } from '~/app/Products/Response/VariationsResponse';

export default class ProductRepositoryService {
    constructor(
        protected repository: ProductRepository,
    ) {
    }

    async getProductBySlug(sku: string, lazy: boolean): Promise<SingleProduct> {
        try {
            const query: Variables = new SingleProductBySlugQuery().setSlug(sku);
            const result: _AsyncData<ProductResponse[], Error> = await this.repository.findOneBySlug(query, lazy);

            this.handleResponse(lazy, result);

            const productResponse: ProductResponse = lazy ? result[0] : result.data.value[0];

            return new Product(productResponse);
        } catch (e) {
            ErrorHandler.handleError(e);
        }

    }

    async getProductVariationsById(productId: number, lazy: boolean): Promise<Variation[]> {
        try {
            const response: VariationResponse[] = await this.repository.getProductVariations(productId, lazy);

            this.handleResponse(lazy, response);

            return response.map((variation: VariationResponse) => new Variation(variation));
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }

    private handleResponse(lazy: boolean, result: any) {
        if (!lazy) {

            if (!result.data.value.length) {
                throw new NotFoundException('The requested resource was not found!', 404);
            }

            return;
        }

        if (!result.length) {
            throw new NotFoundException('The requested resource was not found!', 404);
        }
    }
}