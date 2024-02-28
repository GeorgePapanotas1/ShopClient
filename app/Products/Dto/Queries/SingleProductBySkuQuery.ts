
import { Variables } from '~/app/client/Wordpress/Variables';

export default class SingleProductBySkuQuery extends Variables {
    private _slug: string;

    constructor() {
        super();
        this._slug = '';
    }
    getSlug(): string
    {
        return this._slug;
    }

    setSlug(sku: string): this
    {
        this._slug = sku;

        return this;
    }
}