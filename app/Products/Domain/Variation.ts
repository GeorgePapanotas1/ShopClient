import Dimensions from '~/app/Products/Domain/Dimentions';
import ProductImage from '~/app/Products/Domain/ProductImage';
import VariationAttribute from '~/app/Products/Domain/VariationAttribute';
import { VariationLinks } from '~/app/Products/Domain/VariationLink';
import type { VariationResponse } from '~/app/Products/Response/VariationsResponse';

export default class Variation {
    id: number;
    dateCreated: string;
    dateCreatedGmt: string;
    dateModified: string;
    dateModifiedGmt: string;
    description: string;
    permalink: string;
    sku: string;
    price: string;
    regularPrice: string;
    salePrice: string;
    dateOnSaleFrom: string | null;
    dateOnSaleFromGmt: string | null;
    dateOnSaleTo: string | null;
    dateOnSaleToGmt: string | null;
    onSale: boolean;
    status: string;
    purchasable: boolean;
    virtual: boolean;
    downloadable: boolean;
    downloadLimit: number;
    downloadExpiry: number;
    taxStatus: string;
    taxClass: string;
    manageStock: string;
    stockQuantity: number;
    stockStatus: string;
    backorders: string;
    backordersAllowed: boolean;
    backordered: boolean;
    lowStockAmount: number | null;
    weight: string;
    dimensions: Dimensions;
    shippingClass: string;
    shippingClassId: number;
    image: ProductImage;
    attributes: VariationAttribute[];
    menuOrder: number;
    name: string;
    parentId: number;
    links: VariationLinks;

    constructor(variationResponse: VariationResponse) {
        this.id = variationResponse.id;
        this.dateCreated = variationResponse.date_created;
        this.dateCreatedGmt = variationResponse.date_created_gmt;
        this.dateModified = variationResponse.date_modified;
        this.dateModifiedGmt = variationResponse.date_modified_gmt;
        this.description = variationResponse.description;
        this.permalink = variationResponse.permalink;
        this.sku = variationResponse.sku;
        this.price = variationResponse.price;
        this.regularPrice = variationResponse.regular_price;
        this.salePrice = variationResponse.sale_price;
        this.dateOnSaleFrom = variationResponse.date_on_sale_from;
        this.dateOnSaleFromGmt = variationResponse.date_on_sale_from_gmt;
        this.dateOnSaleTo = variationResponse.date_on_sale_to;
        this.dateOnSaleToGmt = variationResponse.date_on_sale_to_gmt;
        this.onSale = variationResponse.on_sale;
        this.status = variationResponse.status;
        this.purchasable = variationResponse.purchasable;
        this.virtual = variationResponse.virtual;
        this.downloadable = variationResponse.downloadable;
        this.downloadLimit = variationResponse.download_limit;
        this.downloadExpiry = variationResponse.download_expiry;
        this.taxStatus = variationResponse.tax_status;
        this.taxClass = variationResponse.tax_class;
        this.manageStock = variationResponse.manage_stock;
        this.stockQuantity = variationResponse.stock_quantity;
        this.stockStatus = variationResponse.stock_status;
        this.backorders = variationResponse.backorders;
        this.backordersAllowed = variationResponse.backorders_allowed;
        this.backordered = variationResponse.backordered;
        this.lowStockAmount = variationResponse.low_stock_amount;
        this.weight = variationResponse.weight;
        this.dimensions = new Dimensions(
            variationResponse.dimensions.length,
            variationResponse.dimensions.width,
            variationResponse.dimensions.height,
        );
        this.shippingClass = variationResponse.shipping_class;
        this.shippingClassId = variationResponse.shipping_class_id;
        this.image = new ProductImage(
            variationResponse.image.id,
            variationResponse.image.date_created,
            variationResponse.image.date_created_gmt,
            variationResponse.image.date_modified,
            variationResponse.image.date_modified_gmt,
            variationResponse.image.src,
            variationResponse.image.name,
            variationResponse.image.alt);
        this.attributes = variationResponse.attributes.map((attr: any) => new VariationAttribute(attr));
        this.menuOrder = variationResponse.menu_order;
        this.name = variationResponse.name;
        this.parentId = variationResponse.parent_id;
        this.links = new VariationLinks(variationResponse._links);
    }
}