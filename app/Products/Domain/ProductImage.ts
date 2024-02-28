export default class ProductImage {
    id: number;
    dateCreated: string;
    dateCreatedGmt: string;
    dateModified: string;
    dateModifiedGmt: string;
    src: string;
    name: string;
    alt: string;

    constructor(
        id: number,
        dateCreated: string,
        dateCreatedGmt: string,
        dateModified: string,
        dateModifiedGmt: string,
        src: string,
        name: string,
        alt: string,
    ) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.dateCreatedGmt = dateCreatedGmt;
        this.dateModified = dateModified;
        this.dateModifiedGmt = dateModifiedGmt;
        this.src = src;
        this.name = name;
        this.alt = alt;
    }
}