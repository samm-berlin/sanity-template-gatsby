import React from 'react';
import { Code, Card, Stack, Text } from '@sanity/ui';

export default props => {
  return (
    <Card padding={3} radius={2} shadow={1} tone="critical" {...props}>
      <Stack space={3}>
        <Text>Error while connecting to the Shopify Storefront API.</Text>

        <Text size={1}>
          Make sure the following environment variables are set in
          .env.development and .env.production:
        </Text>

        <Code size={1}>
          SANITY_STUDIO_SHOPIFY_SHOP_NAME
          <br />
          SANITY_STUDIO_SHOPIFY_ACCESS_TOKEN
        </Code>
      </Stack>
    </Card>
  );
};
