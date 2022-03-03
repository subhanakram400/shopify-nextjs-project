/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
};

module.exports = nextConfig;
// SHOPIFY_STOREFRONT_ACCESSTOKEN='ac72edfe377c514f07cb96c6b23fce05'
// SHOPIFY_STORE_DOMAIN
