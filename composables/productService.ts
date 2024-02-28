import type IRestClient from '~/app/client/Wordpress/Rest/IRestClient';
import ProductRepository from '~/app/Products/Repositories/ProductRepository';
import ProductRepositoryService from '~/app/Products/Services/ProductRepositoryService';
import { useSetupClient } from '~/composables/clientSetup';

export const useProductService = (): ProductRepositoryService => {
    const restClient: IRestClient = useSetupClient();
    const productRepository: ProductRepository = new ProductRepository(restClient);

    return new ProductRepositoryService(productRepository);
};