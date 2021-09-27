import { GraphQLClient } from 'graphql-request';

const endpoint = `https://${process.env.SANITY_STUDIO_SHOPIFY_SHOP_NAME}.myshopify.com/api/graphql`;

const headers = {
  'X-Shopify-Storefront-Access-Token':
    process.env.SANITY_STUDIO_SHOPIFY_ACCESS_TOKEN,
};

export default new GraphQLClient(endpoint, { headers });
