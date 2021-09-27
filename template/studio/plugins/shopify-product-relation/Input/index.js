import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@sanity/icons';
import { Stack, Card, Text, Autocomplete } from '@sanity/ui';

import { PatchEvent, set } from 'part:@sanity/form-builder/patch-event';
import FormField from 'part:@sanity/components/formfields/default';

import ErrorMessage from './ErrorMessage';
import Preview from './Preview';

import shopifyApi from '../utils/shopifyApi';

const normalizeProductsData = (products = []) =>
  products.reduce(
    (acc, { node }) => ({
      ...acc,
      [node.id]: {
        title: node.title,
        value: node.id,
      },
    }),
    {}
  );

const fetchProducts = async (query = '') => {
  const { products } = await shopifyApi.request(`{
    products(first: 250, sortKey: TITLE, query: "${query}") {
      edges {
        node {
          title
          id
        }
      }
    }
  }`);

  return normalizeProductsData(products.edges);
};

const getFullProductData = async id => {
  const { product } = await shopifyApi.request(`{
    product: node(id: "${id}") {
      ... on Product {
        id
        title
      }
    }
  }`);

  // generate admin URL for product
  const gidParts = atob(id).split('/');
  const productAdminId = gidParts[gidParts.length - 1];
  const productAdminUrl = `https://${process.env.SANITY_STUDIO_SHOPIFY_SHOP_NAME}.myshopify.com/admin/products/${productAdminId}`;

  if (product) {
    return {
      ...product,
      status: 'linked',
      statusType: 'positive',
      adminUrl: productAdminUrl,
    };
  }

  return {
    id,
    title: '',
    status: 'deleted',
    statusType: 'critical',
    adminUrl: productAdminUrl,
  };
};

export default React.forwardRef(({ type, onChange, ...props }, ref) => {
  const [shopifyProducts, setShopifyProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const setProducts = async query => {
    setLoading(true);

    try {
      const products = await fetchProducts(query);
      setShopifyProducts(products);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setApiError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    setProducts();
  }, []);

  useEffect(() => {
    const setCurrentProduct = async () => {
      if (props.value && props.value !== '') {
        const product = await getFullProductData(props.value);
        setSelectedProduct(product);
      } else {
        setSelectedProduct(null);
      }
    };

    setCurrentProduct();
  }, [props.value]);

  return (
    <FormField label={type.title} description={type.description}>
      {apiError ? (
        <ErrorMessage />
      ) : (
        <Stack space={3}>
          <Autocomplete
            ref={ref}
            icon={SearchIcon}
            openButton
            loading={isLoading}
            options={
              shopifyProducts
                ? Object.keys(shopifyProducts).map(v => ({
                    value: v,
                  }))
                : []
            }
            filterOption={() => true} // we query directly through Shopify api
            renderOption={({ value }) => (
              <Card as="button" padding={3} tone="inherit">
                <Text>{shopifyProducts[value].title}</Text>
              </Card>
            )}
            onQueryChange={query => setProducts(query)}
            renderValue={() => (selectedProduct ? selectedProduct.title : '')}
            value={props.value}
            onSelect={val => {
              onChange(PatchEvent.from(set(val)));
            }}
            placeholder="Search Shopify products"
          />

          {selectedProduct && (
            <Preview onChange={onChange} {...selectedProduct} />
          )}
        </Stack>
      )}
    </FormField>
  );
});
