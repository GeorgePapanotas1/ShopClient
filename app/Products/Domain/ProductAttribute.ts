export default class ProductAttribute {
    id: number;
    name: string;
    slug: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];

    constructor(
        id: number, name: string, slug: string, position: number, visible: boolean, variation: boolean, options: string[]) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.position = position;
        this.visible = visible;
        this.variation = variation;
        this.options = options;
    }
}