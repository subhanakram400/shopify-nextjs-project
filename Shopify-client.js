import Client from "shopify-buy";
export const client = Client.buildClient({
  SHOPIFY_STOREFRONT_ACCESSTOKEN:process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  domain: process.env.SHOPIFY_STORE_DOMAIN ??
});



// SHOPIFY_STOREFRONT_ACCESSTOKEN='ac72edfe377c514f07cb96c6b23fce05'
// SHOPIFY_STORE_DOMAIN='ecomemrce-wholesaler-web.myshopify.com'


