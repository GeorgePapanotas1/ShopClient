export class VariationLinks {
    self: Link[];
    collection: Link[];
    up: Link[];

    constructor(links: any) {
        this.self = links.self.map((link: any) => new Link(link));
        this.collection = links.collection.map((link: any) => new Link(link));
        this.up = links.up.map((link: any) => new Link(link));
    }
}

export class Link {
    href: string;

    constructor(link: any) {
        this.href = link.href;
    }
}