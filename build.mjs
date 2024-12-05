/* eslint-disable import/no-extraneous-dependencies */
import { overrideGQLOperations } from '@dropins/build-tools/gql-extend.js';

overrideGQLOperations([
  {
    npm: '@dropins/storefront-auth',
    operations: [
      `
    fragment CustomerInformation on Customer {
      __typename
      firstname
      lastname
      prefix
      email
      is_subscribed
    }
`,
    ],
  },
  // {
  //   npm: '@dropins/storefront-cart',
  //   operations: [],
  // },
  // {
  //   npm: '@dropins/storefront-checkout',
  //   operations: [],
  // },
]);
