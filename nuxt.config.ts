// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        WP_CLID: process.env.SQUAIM_WORDPRESS_CLIENT_ID,
        WP_CLSECRET: process.env.SQUAIM_WORDPRESS_CLIENT_SECRET,
        WP_WPCLURL: process.env.SQUAIM_WORDPRESS_BASE_URL,
        public: {
            WP_CLID: process.env.SQUAIM_WORDPRESS_CLIENT_ID,
            WP_CLSECRET: process.env.SQUAIM_WORDPRESS_CLIENT_SECRET,
            WP_WPCLURL: process.env.SQUAIM_WORDPRESS_BASE_URL,
        },
    },
});
