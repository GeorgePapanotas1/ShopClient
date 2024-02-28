<template>
    <div>
        title = {{ productRef.name }}

        <div v-for="product in productVariations">
            {{ product.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';

import type Variation from '~/app/Products/Domain/Variation';
import { useProductService } from '~/composables/productService';

const productRef: Ref<object> = ref('');
const productVariations: Ref<object[]> = ref([]);
const productService = useProductService();
// ===============================

try {
    let product = await productService.getProductBySlug('random-product', false);

    productRef.value = product;

    onBeforeMount(async() => {
        let variations: Variation[] = await productService.getProductVariationsById(product.id, true);

        product.setVariationProducts(variations);

        productVariations.value = product.variationProducts;

    });
} catch (e) {

    throw createError({
        statusCode: e.statusCode,
        statusMessage: e.message,
    });
}

</script>

<style scoped>

</style>