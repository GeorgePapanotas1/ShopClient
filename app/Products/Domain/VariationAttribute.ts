export default class VariationAttribute {
    id: number;
    name: string;
    slug: string;
    option: string;

    constructor(attribute: any) {
        this.id = attribute.id;
        this.name = attribute.name;
        this.slug = attribute.slug;
        this.option = attribute.option;
    }
}