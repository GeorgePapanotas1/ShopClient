import type IRestClient from '~/app/client/Wordpress/Rest/IRestClient';
import WordpressRestClient from '~/app/client/Wordpress/Rest/WordpressRestClient';

export const useSetupClient = (): IRestClient => {
    const runtime = useRuntimeConfig();
    const token = btoa(`${runtime.public.WP_CLID}:${runtime.public.WP_CLSECRET}`);

    return new WordpressRestClient(`${runtime.public.WP_WPCLURL}`, token);
};