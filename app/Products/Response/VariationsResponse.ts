export interface VariationResponse {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    description: string;
    permalink: string;
    sku: string;
    price: string;
    regular_price: string;
    sale_price: string;
    date_on_sale_from: string | null;
    date_on_sale_from_gmt: string | null;
    date_on_sale_to: string | null;
    date_on_sale_to_gmt: string | null;
    on_sale: boolean;
    status: string;
    purchasable: boolean;
    virtual: boolean;
    downloadable: boolean;
    download_limit: number;
    download_expiry: number;
    tax_status: string;
    tax_class: string;
    manage_stock: string;
    stock_quantity: number;
    stock_status: string;
    backorders: string;
    backorders_allowed: boolean;
    backordered: boolean;
    low_stock_amount: number | null;
    weight: string;
    dimensions: Dimensions;
    shipping_class: string;
    shipping_class_id: number;
    image: VariationImage;
    attributes: VariationAttribute[];
    menu_order: number;
    name: string;
    parent_id: number;
    _links: VariationLinks;
}

interface Dimensions {
    length: string;
    width: string;
    height: string;
}

interface VariationImage {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
}

interface VariationAttribute {
    id: number;
    name: string;
    slug: string;
    option: string;
}

interface VariationLinks {
    self: Link[];
    collection: Link[];
    up: Link[];
}

interface Link {
    href: string;
}
