import React from 'react';
import { WarningOutlineIcon as UnlinkIcon } from '@sanity/icons';
import {
  Code,
  Card,
  Stack,
  Text,
  Inline,
  Badge,
  Label,
  Button,
} from '@sanity/ui';

import { PatchEvent, unset } from 'part:@sanity/form-builder/patch-event';

export default ({
  onChange,
  statusType,
  status,
  title,
  id,
  adminUrl,
  ...props
}) => {
  return (
    <Card padding={3} radius={2} shadow={1} {...props}>
      <Stack space={4}>
        <Inline>
          <Badge mode="outline" tone={statusType}>
            {status}
          </Badge>
        </Inline>

        <Stack space={2}>
          <Label size={1}>Product Name</Label>
          <Text size={1}>{title}</Text>
        </Stack>

        <Stack space={2}>
          <Label size={1}>Storefront Id</Label>
          <Code size={1}>{id}</Code>
        </Stack>

        <Stack space={2}>
          <Label size={1}>Shopify Admin URL</Label>
          <Text size={1}>
            <a href={adminUrl} target="_blank" rel="noreferrer">
              {adminUrl}
            </a>
          </Text>
        </Stack>

        <Inline marginTop={4}>
          <Button
            fontSize={1}
            icon={UnlinkIcon}
            mode="ghost"
            tone="critical"
            padding={2}
            text="Remove Link"
            onClick={() => {
              onChange(PatchEvent.from(unset()));
            }}
          />
        </Inline>
      </Stack>
    </Card>
  );
};
