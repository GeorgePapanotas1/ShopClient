import Category from '~/app/Products/Domain/Category';
import Dimensions from '~/app/Products/Domain/Dimentions';
import ProductAttribute from '~/app/Products/Domain/ProductAttribute';
import ProductImage from '~/app/Products/Domain/ProductImage';
import Tag from '~/app/Products/Domain/Tag';
import type Variation from '~/app/Products/Domain/Variation';
import type { ProductResponse } from '~/app/Products/Response/SingleProduct';
export default class Product {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    dateCreated: string;
    dateCreatedGmt: string;
    dateModified: string;
    dateModifiedGmt: string;
    type: string;
    status: string;
    featured: boolean;
    catalogVisibility: string;
    description: string;
    shortDescription: string;
    sku: string;
    price: string;
    regularPrice: string;
    salePrice: string;
    dateOnSaleFrom: string | null;
    dateOnSaleFromGmt: string | null;
    dateOnSaleTo: string | null;
    dateOnSaleToGmt: string | null;
    onSale: boolean;
    purchasable: boolean;
    totalSales: number;
    virtual: boolean;
    downloadable: boolean;
    downloadLimit: number;
    downloadExpiry: number;
    externalUrl: string;
    buttonText: string;
    taxStatus: string;
    taxClass: string;
    manageStock: boolean;
    stockQuantity: number;
    backorders: string;
    backordersAllowed: boolean;
    backordered: boolean;
    lowStockAmount: number;
    soldIndividually: boolean;
    weight: string;
    dimensions: Dimensions;
    shippingRequired: boolean;
    shippingTaxable: boolean;
    shippingClass: string;
    shippingClassId: number;
    reviewsAllowed: boolean;
    averageRating: string;
    ratingCount: number;
    upsellIds: number[];
    crossSellIds: number[];
    parentId: number;
    purchaseNote: string;
    categories: Category[];
    tags: Tag[];
    images: ProductImage[];
    attributes: ProductAttribute[];
    variations: number[];
    priceHtml: string;
    stockStatus: string;
    hasOptions: boolean;
    variationProducts: Variation[];

    constructor(product: ProductResponse) {
        this.id = product.id;
        this.name = product.name;
        this.slug = product.slug;
        this.permalink = product.permalink;
        this.dateCreated = product.date_created;
        this.dateCreatedGmt = product.date_created_gmt;
        this.dateModified = product.date_modified;
        this.dateModifiedGmt = product.date_modified_gmt;
        this.type = product.type;
        this.status = product.status;
        this.featured = product.featured;
        this.catalogVisibility = product.catalog_visibility;
        this.description = product.description;
        this.shortDescription = product.short_description;
        this.sku = product.sku;
        this.price = product.price;
        this.regularPrice = product.regular_price;
        this.salePrice = product.sale_price;
        this.dateOnSaleFrom = product.date_on_sale_from;
        this.dateOnSaleFromGmt = product.date_on_sale_from_gmt;
        this.dateOnSaleTo = product.date_on_sale_to;
        this.dateOnSaleToGmt = product.date_on_sale_to_gmt;
        this.onSale = product.on_sale;
        this.purchasable = product.purchasable;
        this.totalSales = product.total_sales;
        this.virtual = product.virtual;
        this.downloadable = product.downloadable;
        this.downloadLimit = product.download_limit;
        this.downloadExpiry = product.download_expiry;
        this.externalUrl = product.external_url;
        this.buttonText = product.button_text;
        this.taxStatus = product.tax_status;
        this.taxClass = product.tax_class;
        this.manageStock = product.manage_stock;
        this.stockQuantity = product.stock_quantity;
        this.backorders = product.backorders;
        this.backordersAllowed = product.backorders_allowed;
        this.backordered = product.backordered;
        this.lowStockAmount = product.low_stock_amount;
        this.soldIndividually = product.sold_individually;
        this.weight = product.weight;
        this.dimensions = new Dimensions(
            product.dimensions.length,
            product.dimensions.width,
            product.dimensions.height,
        );
        this.shippingRequired = product.shipping_required;
        this.shippingTaxable = product.shipping_taxable;
        this.shippingClass = product.shipping_class;
        this.shippingClassId = product.shipping_class_id;
        this.reviewsAllowed = product.reviews_allowed;
        this.averageRating = product.average_rating;
        this.ratingCount = product.rating_count;
        this.upsellIds = product.upsell_ids;
        this.crossSellIds = product.cross_sell_ids;
        this.parentId = product.parent_id;
        this.purchaseNote = product.purchase_note;
        this.categories = product.categories.map(cat => new Category(cat.id, cat.name, cat.slug));
        this.tags = product.tags.map(tag => new Tag(tag.id, tag.name, tag.slug));
        this.images = product.images.map(img => new ProductImage(
            img.id,
            img.date_created,
            img.date_created_gmt,
            img.date_modified,
            img.date_modified_gmt,
            img.src,
            img.name,
            img.alt),
        );

        this.attributes = product.attributes.map(attr => new ProductAttribute(
            attr.id,
            attr.name,
            attr.slug,
            attr.position,
            attr.visible,
            attr.variation,
            attr.options),
        );
        this.variations = product.variations;
        this.priceHtml = product.price_html;
        this.stockStatus = product.stock_status;
        this.hasOptions = product.has_options;

        this.variationProducts = [];
    }

    isVariableProduct(): boolean
    {
        return this.type === 'variable';
    }

    setVariationProducts(variations: Variation[]): void
    {
        this.variationProducts = variations;
    }
}
