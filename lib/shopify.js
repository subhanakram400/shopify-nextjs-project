const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-07/graphql.json`;
  console.log(URL)
  console.log(query)

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
     
      return response.json();
    });
    console.log("data",data)
    return data;
  } catch (error) {
    // throw new Error("Products not fetched")
    console.log("error", error);
  }
}

export async function getAllProducts() {
  const query = `
  {
  products(first: 25) {
    edges {
      node {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}
`;

  const response = await ShopifyData(query);
  console.log("response>>", response); 

  const allProducts = response?.data?.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}
