import React from 'react';

export default {
  name: 'place_details',
  title: 'Place Details',
  type: 'object',
  fields: [
    {
      title: 'Place ID',
      name: 'google_place_id',
      type: 'string'
    },
    {
      name: 'formatted_address',
      title: 'Address',
      type: 'string',
      description: 'The Place’s full address',
    },
    {
      name: 'formatted_phone_number',
      title: 'Phone Number',
      type: 'string',
      description: 'he Place’s phone number'

    },
    {
      name: 'opening_hours',
      title: 'Opening Hours',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Defines when the Place opens or closes.',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string',
      description: 'The authoritative website for this Place, such as a business homepage',
    },
  ],
};
